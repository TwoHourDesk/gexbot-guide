#!/usr/bin/env python3
"""Runnable Checks from textbook-prose.mdc. No third-party imports.

Prints one line per failure as: CHECK  path-or-id  detail
Prints forward-vocabulary hits as: WARN   path-or-id  detail
Exits non-zero on any CHECK.
"""

from __future__ import annotations

import os
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
GLOSSARY = ROOT / "src" / "data" / "glossary.ts"
BUILD = ROOT / "build" / "docs"

READING_ORDER = [
    "intro",
    "on-ramp/00-intro",
    "plans/01-what-gexbot-is",
    "on-ramp/01-what-gexbot-is",
    "plans/02-classic",
    "on-ramp/02-classic",
    "plans/03-classification",
    "on-ramp/03-classification",
    "plans/04-state",
    "on-ramp/04-state",
    "plans/05-orderflow",
    "on-ramp/05-orderflow",
    "layer/06-nq-es-layer",
    "on-ramp/06-nq-es-layer",
    "layer/07-clocks-and-late-greeks",
    "on-ramp/07-clocks-and-late-greeks",
    "practice/08-heuristics-as-reading",
    "on-ramp/08-heuristics-as-reading",
    "practice/09-grammar-and-journal",
    "on-ramp/09-grammar-and-journal",
    "practice/10-early-session",
    "on-ramp/10-early-session",
    "practice/11-structure-and-leftover",
    "on-ramp/11-structure-and-leftover",
    "practice/12-misreads",
    "on-ramp/12-misreads",
    "practice/13-next-course",
    "on-ramp/13-next-course",
    "practice/14-futures-to-options",
    "on-ramp/14-futures-to-options",
]

READING_INDEX = {doc_id: i for i, doc_id in enumerate(READING_ORDER)}

EVIDENCE_OK = {"market-general", "docs", "folklore", "not stated"}

STOP_WORDS = {
    "call",
    "put",
    "strike",
    "expiry",
    "premium",
    "bid",
    "ask",
    "volume",
    "gamma",
    "delta",
    "theta",
    "vega",
    "mark",
    "roll",
    "print",
    "hedge",
    "dealer",
    "customer",
    "node",
    "wall",
    "fuel",
    "pin",
    "chase",
    "fade",
    "absorb",
    "spot",
    "basis",
    "sweep",
    "gap",
    "flush",
    "touch",
    "alert",
    "full",
    "next",
    "latest",
    "seat",
    "state",
    "classic",
    "spread",
    "fill",
    "exercise",
    "option",
    "options",
    "margin",
    "structure",
    "conversion",
    "calendar",
    "zero",
}

BANNED_RE = re.compile(
    r"\b(we|just|simply|easy|let's|let’s|don't worry|don’t worry)\b",
    re.IGNORECASE,
)

TIME_RE = re.compile(r"\b(\d{2}:\d{2})\b")
URL_RE = re.compile(r"https?://|www\.\w", re.IGNORECASE)

# Quoted teaching examples the voice rule itself licenses, plus temporal /
# locative "just" that names an object (max-change, increment) rather than
# hedging. Filler "just" / "simply" / "easy" still fail.
BANNED_ALLOW = (
    "we can see the pile",
    "you must",
    "dealers must",
    "just introduced",
    "just redrew",
    "just changed",
    "just got",
    "just printed",
    "just bought",
    "just put",
    "just under",
    "just over",
    "just beyond",
    "just placed",
    "just fired",
    "just taken",
    "just held",
    "just did",
    "just on",
)

OPEN_DQ = {"'", '"', "“", "‘"}
CLOSE_FOR = {"'": "'", '"': '"', "“": "”", "‘": "’"}


def fail(path: str, detail: str) -> None:
    print(f"CHECK  {path}  {detail}")
    FAILURES.append(f"{path}\t{detail}")


def warn(path: str, detail: str) -> None:
    print(f"WARN   {path}  {detail}")
    WARNINGS.append(f"{path}\t{detail}")


FAILURES: list[str] = []
WARNINGS: list[str] = []


def unquote_ts_string(raw: str) -> str:
    """Decode a TS single- or double-quoted string, including \\' escapes."""
    raw = raw.strip()
    if len(raw) < 2 or raw[0] not in ("'", '"'):
        return raw
    q = raw[0]
    out: list[str] = []
    i = 1
    while i < len(raw) - 1:
        ch = raw[i]
        if ch == "\\" and i + 1 < len(raw) - 1:
            out.append(raw[i + 1])
            i += 2
            continue
        out.append(ch)
        i += 1
    if raw[-1] != q:
        # unclosed; keep what we have
        pass
    return "".join(out)


def extract_quoted(text: str, start: int) -> tuple[str, int] | None:
    """Read a quoted TS string starting at start. Returns (value, index_after)."""
    while start < len(text) and text[start] in " \t\n":
        start += 1
    if start >= len(text) or text[start] not in ("'", '"'):
        return None
    q = text[start]
    i = start + 1
    out: list[str] = []
    while i < len(text):
        ch = text[i]
        if ch == "\\" and i + 1 < len(text):
            out.append(text[i + 1])
            i += 2
            continue
        if ch == q:
            return "".join(out), i + 1
        out.append(ch)
        i += 1
    return None


def extract_string_list(text: str, start: int) -> tuple[list[str], int] | None:
    while start < len(text) and text[start] in " \t\n":
        start += 1
    if start >= len(text) or text[start] != "[":
        return None
    i = start + 1
    items: list[str] = []
    while i < len(text):
        while i < len(text) and text[i] in " \t\n,":
            i += 1
        if i < len(text) and text[i] == "]":
            return items, i + 1
        got = extract_quoted(text, i)
        if not got:
            return None
        val, i = got
        items.append(val)
    return None


def field_value(block: str, key: str) -> str | None:
    m = re.search(rf"(?:^|\n)\s*{re.escape(key)}\s*:", block)
    if not m:
        return None
    after = m.end()
    got = extract_quoted(block, after)
    if got:
        return got[0]
    return None


def field_list(block: str, key: str) -> list[str] | None:
    m = re.search(rf"(?:^|\n)\s*{re.escape(key)}\s*:", block)
    if not m:
        return None
    got = extract_string_list(block, m.end())
    if got:
        return got[0]
    return None


def parse_glossary(src: str) -> list[dict]:
    # Isolate the array so helper functions after `];` are not parsed.
    start = src.find("export const glossary")
    if start < 0:
        fail("src/data/glossary.ts", "export const glossary not found")
        return []
    lb = src.find("[", start)
    rb = src.find("\n];", lb)
    if lb < 0 or rb < 0:
        fail("src/data/glossary.ts", "glossary array bounds not found")
        return []
    body = src[lb : rb + 3]
    blocks = re.findall(r"\n  \{\n.*?\n  \},", body, flags=re.S)
    last = re.search(r"\n  \{\n.*?\n  \}\n\];", body, flags=re.S)
    if last:
        last_id = field_value(last.group(0), "id")
        have = {field_value(b, "id") for b in blocks}
        if last_id and last_id not in have:
            blocks.append(last.group(0))

    entries: list[dict] = []
    for block in blocks:
        eid = field_value(block, "id")
        if not eid:
            continue
        entries.append(
            {
                "id": eid,
                "headword": field_value(block, "headword") or "",
                "aliases": field_list(block, "aliases") or [],
                "firstDefinedIn": field_value(block, "firstDefinedIn") or "",
                "kind": field_value(block, "kind") or "",
                "seeAlso": field_list(block, "seeAlso") or [],
                "shortDef": field_value(block, "shortDef") or "",
                "bearsOn": field_value(block, "bearsOn") or "",
                "evidence": field_value(block, "evidence") or "",
                "evidenceNote": field_value(block, "evidenceNote") or "",
                "reading": field_value(block, "reading") or "",
                "_block": block,
            }
        )
    return entries


def doc_path(doc_id: str) -> Path:
    return DOCS / f"{doc_id}.mdx"


def is_reference(doc_id: str) -> bool:
    return doc_id.startswith("reference/")


def is_main_chapter(doc_id: str) -> bool:
    return not doc_id.startswith("on-ramp/") and not is_reference(doc_id)


def is_numbered_main(doc_id: str) -> bool:
    return doc_id.startswith(("plans/", "layer/", "practice/"))


def word_count(*parts: str) -> int:
    text = " ".join(p for p in parts if p)
    return len(re.findall(r"[A-Za-z0-9’']+", text))


def strip_frontmatter_and_imports(text: str) -> str:
    if text.startswith("---"):
        end = text.find("\n---", 3)
        if end >= 0:
            text = text[end + 4 :]
    lines = []
    for line in text.splitlines(keepends=True):
        if re.match(r"^import\s+", line):
            continue
        lines.append(line)
    return "".join(lines)


def mask_code_and_quotes(text: str) -> str:
    """Replace fenced code, inline code, and quoted spans with spaces (keep newlines)."""

    def keep_newlines(m: re.Match) -> str:
        s = m.group(0)
        return "".join("\n" if ch == "\n" else " " for ch in s)

    text = re.sub(r"```.*?```", keep_newlines, text, flags=re.S)
    text = re.sub(r"`[^`]*`", keep_newlines, text)
    # curly and straight quoted spans (no newlines inside, mostly)
    text = re.sub(r"“[^”]*”", keep_newlines, text)
    text = re.sub(r"‘[^’]*’", keep_newlines, text)
    text = re.sub(r'"[^"\n]*"', keep_newlines, text)
    return text


def iter_mdx_files() -> list[tuple[str, Path]]:
    out: list[tuple[str, Path]] = []
    for path in sorted(DOCS.rglob("*.mdx")):
        rel = path.relative_to(DOCS).as_posix()
        doc_id = rel[: -len(".mdx")]
        out.append((doc_id, path))
    return out


def check_glossary(entries: list[dict]) -> dict[str, dict]:
    by_id: dict[str, dict] = {}
    for e in entries:
        if e["id"] in by_id:
            fail(e["id"], "duplicate glossary id")
        by_id[e["id"]] = e

    names: dict[str, list[str]] = {}
    for e in entries:
        for name in [e["headword"], *e["aliases"]]:
            key = name.casefold()
            names.setdefault(key, []).append(f"{e['id']}:{name}")
    for key, owners in names.items():
        ids = {o.split(":", 1)[0] for o in owners}
        if len(ids) > 1:
            fail(key, f"headword/alias on multiple entries: {', '.join(owners)}")

    for e in entries:
        for target in e["seeAlso"]:
            if target not in by_id:
                fail(e["id"], f"seeAlso target not an id: {target}")
        if e["kind"] == "adjacent":
            if not e["bearsOn"]:
                fail(e["id"], "adjacent row missing bearsOn")
            if not e["evidence"]:
                fail(e["id"], "adjacent row missing evidence")
            elif e["evidence"] not in EVIDENCE_OK:
                fail(e["id"], f"evidence not an enum value: {e['evidence']!r}")
            if not e["reading"]:
                fail(e["id"], "adjacent row missing reading")
            wc = word_count(e["shortDef"], e["bearsOn"])
            if wc > 110:
                fail(e["id"], f"shortDef+bearsOn is {wc} words (max 110)")
            if URL_RE.search(e["reading"]) or re.search(
                r"\b[\w-]+\.(org|com|edu|io|net)\b", e["reading"], re.I
            ):
                fail(e["id"], f"reading contains a URL: {e['reading']}")
    return by_id


def extract_component_ids(text: str) -> tuple[list[str], list[str], list[str]]:
    """Return (glossary_ids, doc_ids, needed_ids)."""
    glossary_ids = re.findall(
        r"<(?:TermFirst|GexbotConcept)\s+id=[\"']([^\"']+)[\"']", text
    )
    doc_ids = re.findall(
        r"<(?:ChapterTerms|AdjacentConcepts)\s+docId=[\"']([^\"']+)[\"']", text
    )
    needed: list[str] = []
    for m in re.finditer(r"<NeededForThisScreen\b([^>]*?)\s*/>", text, flags=re.S):
        inner = m.group(1)
        arr = re.search(r"ids=\{\[(.*?)\]\}", inner, flags=re.S)
        if arr:
            needed.extend(re.findall(r"[\"']([^\"']+)[\"']", arr.group(1)))
    return glossary_ids, doc_ids, needed


def check_component_ids(by_id: dict[str, dict]) -> None:
    for doc_id, path in iter_mdx_files():
        text = path.read_text(encoding="utf-8")
        g_ids, d_ids, n_ids = extract_component_ids(text)
        for gid in g_ids + n_ids:
            if gid not in by_id:
                fail(f"{doc_id}:{gid}", "component id not in glossary")
        for did in d_ids:
            if did not in READING_INDEX and not is_reference(did):
                # reference pages are valid docIds for lookup pages, but
                # ChapterTerms / AdjacentConcepts belong to reading-order pages.
                fail(f"{doc_id}:{did}", "docId is not a page in reading order")


def check_adjacent_block_size(entries: list[dict]) -> None:
    by_page: dict[str, int] = {}
    for e in entries:
        if e["kind"] == "adjacent":
            by_page[e["firstDefinedIn"]] = by_page.get(e["firstDefinedIn"], 0) + 1
    pages_with_component: set[str] = set()
    for doc_id, path in iter_mdx_files():
        if is_reference(doc_id):
            continue
        text = path.read_text(encoding="utf-8")
        if re.search(r"<AdjacentConcepts\s+docId=", text):
            pages_with_component.add(doc_id)
        n = by_page.get(doc_id, 0)
        if n not in (0,) and not (3 <= n <= 5):
            fail(doc_id, f"adjacent row count is {n} (need 0 or 3–5)")
        has = doc_id in pages_with_component
        if (n > 0) != has:
            fail(
                doc_id,
                f"AdjacentConcepts present={has} but adjacent row count={n}",
            )


def whole_word_pattern(term: str) -> re.Pattern | None:
    if len(term) < 4:
        return None
    if term.casefold() in STOP_WORDS:
        return None
    escaped = re.escape(term)
    # word-ish bounds: not letter/digit/hyphen on either side
    return re.compile(rf"(?<![\w-]){escaped}(?![\w-])", re.IGNORECASE)


def check_forward_vocabulary(entries: list[dict]) -> None:
    # later terms: firstDefinedIn index > this page, plus all on-ramp for mains
    by_defined: dict[str, list[dict]] = {}
    for e in entries:
        by_defined.setdefault(e["firstDefinedIn"], []).append(e)

    for doc_id in READING_ORDER:
        path = doc_path(doc_id)
        if not path.exists():
            fail(doc_id, "page in reading order is missing")
            continue
        text = strip_frontmatter_and_imports(path.read_text(encoding="utf-8"))
        # include this page's adjacent rows
        adj_text = []
        for e in entries:
            if e["kind"] == "adjacent" and e["firstDefinedIn"] == doc_id:
                adj_text.append(e["shortDef"])
                adj_text.append(e["bearsOn"])
        hay = text + "\n" + "\n".join(adj_text)
        later: list[dict] = []
        here = READING_INDEX[doc_id]
        for other_id, others in by_defined.items():
            oi = READING_INDEX.get(other_id)
            if oi is None:
                continue
            if oi > here:
                later.extend(others)
            elif is_main_chapter(doc_id) and other_id.startswith("on-ramp/"):
                later.extend(others)
        seen: set[str] = set()
        for e in later:
            for name in [e["headword"], *e["aliases"]]:
                pat = whole_word_pattern(name)
                if not pat:
                    continue
                key = (e["id"], name.casefold())
                if key in seen:
                    continue
                if pat.search(hay):
                    seen.add(key)
                    warn(
                        doc_id,
                        f"forward term {e['id']!r} as {name!r} (firstDefinedIn {e['firstDefinedIn']})",
                    )


def line_allowed_for_banned(line: str) -> bool:
    low = line.casefold()
    return any(s in low for s in BANNED_ALLOW)


def check_banned_words(entries: list[dict]) -> None:
    for doc_id, path in iter_mdx_files():
        if is_reference(doc_id):
            continue
        raw = path.read_text(encoding="utf-8")
        text = mask_code_and_quotes(strip_frontmatter_and_imports(raw))
        for i, line in enumerate(text.splitlines(), start=1):
            # line numbers here are off vs the file because of stripped frontmatter.
            # Re-scan the original file with the same mask applied per-line instead.
            pass
        # Use original lines so CHECK lines match the file.
        in_fm = raw.startswith("---")
        in_fence = False
        fm_done = not in_fm
        for lineno, line in enumerate(raw.splitlines(), start=1):
            if not fm_done:
                if lineno > 1 and line.strip() == "---":
                    fm_done = True
                continue
            if line.startswith("import "):
                continue
            if line.strip().startswith("```"):
                in_fence = not in_fence
                continue
            if in_fence:
                continue
            if line_allowed_for_banned(line):
                continue
            masked = mask_code_and_quotes(line)
            for m in BANNED_RE.finditer(masked):
                fail(f"{doc_id}:{lineno}", f"banned word {m.group(0)!r}")
            # bang outside quotes and code
            if "!" in masked:
                fail(f"{doc_id}:{lineno}", "exclamation mark outside quotation")

    for e in entries:
        if e["kind"] != "adjacent":
            continue
        blob = f"{e['shortDef']} {e['bearsOn']} {e['reading']}"
        if line_allowed_for_banned(blob):
            continue
        masked = mask_code_and_quotes(blob)
        for m in BANNED_RE.finditer(masked):
            fail(e["id"], f"banned word {m.group(0)!r} in adjacent row")
        if "!" in masked:
            fail(e["id"], "exclamation mark in adjacent row")


def first_index(text: str, pattern: str) -> int | None:
    m = re.search(pattern, text, flags=re.M)
    return m.start() if m else None


def check_page_order() -> None:
    for doc_id in READING_ORDER:
        path = doc_path(doc_id)
        if not path.exists():
            continue
        text = path.read_text(encoding="utf-8")
        slots: list[tuple[str, int | None]] = [
            ("## Summary", first_index(text, r"^## Summary\s*$")),
            ("<ChapterTerms", first_index(text, r"<ChapterTerms\b")),
            ("## Newcomer questions", first_index(text, r"^## Newcomer questions\s*$")),
        ]
        adj_at = first_index(text, r"<AdjacentConcepts\b")
        if adj_at is not None:
            slots.append(("<AdjacentConcepts", adj_at))
        slots.append(("<CheckYourself", first_index(text, r"<CheckYourself\b")))
        gate_at = first_index(text, r"^## (Gate|After)\b")
        slots.append(("## Gate/After", gate_at))

        missing = [name for name, pos in slots if pos is None]
        if missing:
            fail(doc_id, f"missing slot(s): {', '.join(missing)}")
            continue
        ordered = [pos for _, pos in slots if pos is not None]
        if ordered != sorted(ordered):
            fail(
                doc_id,
                "page slots out of order: "
                + ", ".join(f"{n}@{p}" for n, p in slots if p is not None),
            )

        if is_numbered_main(doc_id):
            for needle in (
                r"\*\*Which Gexbot",
                r"\*\*What you will be able to do\.\*\*",
                r"\*\*What you already need\.\*\*",
            ):
                if not re.search(needle, text):
                    fail(doc_id, f"opening block missing {needle}")
        elif doc_id.startswith("on-ramp/"):
            for needle in (
                r"\*\*What this page assumes\.\*\*",
                r"\*\*What you will be able to do\.\*\*",
            ):
                if not re.search(needle, text):
                    fail(doc_id, f"opening block missing {needle}")


def opening_block(text: str) -> str:
    """Text from after the H1 through the first ## heading (or 80 lines)."""
    m = re.search(r"^# .+$", text, flags=re.M)
    start = m.end() if m else 0
    rest = text[start:]
    m2 = re.search(r"^## ", rest, flags=re.M)
    return rest[: m2.start()] if m2 else rest[:4000]


def check_checkyourself_count() -> None:
    for doc_id in READING_ORDER:
        path = doc_path(doc_id)
        if not path.exists():
            continue
        text = path.read_text(encoding="utf-8")
        m = re.search(r"<CheckYourself\b[\s\S]*?/>", text)
        if not m:
            fail(doc_id, "missing <CheckYourself> block")
            continue
        n = len(re.findall(r"\bq:\s*", m.group(0)))
        if n > 2 and "drill sheet" not in opening_block(text).casefold():
            fail(doc_id, f"Check Yourself has {n} items (max 2 unless opening says drill sheet)")


GATE_LINE = re.compile(
    r"^On-ramp: \[[^\]]+\]\(/docs/on-ramp/[0-9a-z-]+\) — .+\.$",
    re.M,
)


def check_gate_line() -> None:
    for doc_id in READING_ORDER:
        if not is_main_chapter(doc_id):
            continue
        # every main chapter in reading order has an on-ramp page
        path = doc_path(doc_id)
        if not path.exists():
            continue
        text = path.read_text(encoding="utf-8")
        hits = GATE_LINE.findall(text)
        # findall with ^ and re.M returns the lines; use finditer for count
        n = len(list(GATE_LINE.finditer(text)))
        if n != 1:
            fail(doc_id, f"On-ramp Gate line count is {n} (need exactly 1)")


def check_times() -> None:
    suffix_re = re.compile(
        r"\b(\d{2}:\d{2})(?:\s+(ET|Eastern|a\.m\.|p\.m\.|CT))?",
    )
    for doc_id, path in iter_mdx_files():
        if is_reference(doc_id):
            continue
        text = path.read_text(encoding="utf-8")
        hits = list(suffix_re.finditer(text))
        if not hits:
            continue
        first = hits[0]
        # first HH:MM must be followed by " ET"
        after_first = text[first.end(1) : first.end(1) + 3]
        if after_first != " ET":
            # locate line
            lineno = text.count("\n", 0, first.start()) + 1
            fail(f"{doc_id}:{lineno}", f"first time {first.group(1)} is not followed by ' ET'")
        for h in hits[1:]:
            extra = h.group(2)
            if extra:
                lineno = text.count("\n", 0, h.start()) + 1
                fail(
                    f"{doc_id}:{lineno}",
                    f"later time {h.group(1)} carries {extra!r} (bare times only after the first)",
                )


def check_rendered() -> None:
    if not BUILD.exists():
        return
    for html in BUILD.rglob("*.html"):
        text = html.read_text(encoding="utf-8", errors="replace")
        rel = html.relative_to(BUILD).as_posix()
        if "Missing term" in text:
            fail(rel, "rendered page contains 'Missing term'")
        if "No lexicon headwords" in text:
            fail(rel, "rendered page contains 'No lexicon headwords'")


def main() -> int:
    if not GLOSSARY.exists():
        fail("src/data/glossary.ts", "file missing")
        _print_summary()
        return 1
    src = GLOSSARY.read_text(encoding="utf-8")
    entries = parse_glossary(src)
    if not entries:
        fail("src/data/glossary.ts", "parsed zero glossary entries")
    by_id = check_glossary(entries)
    check_component_ids(by_id)
    check_adjacent_block_size(entries)
    check_forward_vocabulary(entries)
    check_banned_words(entries)
    check_page_order()
    check_checkyourself_count()
    check_gate_line()
    check_times()
    check_rendered()
    _print_summary()
    return 1 if FAILURES else 0


def _print_summary() -> None:
    print(
        f"# {len(FAILURES)} CHECK, {len(WARNINGS)} WARN",
        file=sys.stderr,
    )


if __name__ == "__main__":
    sys.exit(main())
