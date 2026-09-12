# Rules conformance report

Date: 2026-09-12. Follows `20260912_rules_conformance_handoff.md`. Rule files win if this report and a rule file differ.

---

## WP1 — Make the Checks runnable

**Commit:** `ae6c4d74306570c9c1322ea395fda0e8d46b711a`

**What shipped.** `scripts/check-docs.py` (Python 3, stdlib only) and `package.json` script `check:docs`. Implements every Checks bullet in `textbook-prose.mdc` except the build itself. Failures print `CHECK  path-or-id  detail`. Forward-vocabulary hits print `WARN` and do not fail the process. Rendered-page scan runs only when `build/` exists.

**Before / after (this package).** Tooling did not exist. After WP1, on the then-current book:

| Check | Count |
|---|---|
| CHECK | 64 |
| WARN (forward vocabulary) | 136 |
| Alias collisions | 9 |
| Compound `evidence` strings | 14 |
| URL in `reading` | 1 (`oic-education`) |
| Missing Newcomer questions | 1 (Chapter 10) |
| Check Yourself > 2 without “drill sheet” | 6 (08, 09, 09a, 09b, 11, 12) |
| Times | 32 |

Deliberate break: renaming one `<TermFirst id>` to a missing id produced `CHECK  <page>:<id>  component id not in glossary` and exit 1.

**Judgment calls**

- `intro` is a main chapter but is not a Gexbot screen. The opening-block check for `**Which Gexbot` / `**What you already need.**` is applied only to `plans/` · `layer/` · `practice/`. `intro` is still required to have Summary, ChapterTerms, Newcomer questions, Check Yourself, and Gate.
- Temporal/locative `just` (the map that just redrew, the increment that just changed, just under/beyond a level) is allow-listed by exact phrase. Those phrases name objects; rewriting them for the voice ban would weaken precedence rule 3 (object over color) and, for max-change, rule 1. Filler `just` / `simply` / `easy` still fail. Listed under Rule feedback.

**Rule conflicts.** Voice ban on `just` vs. object names that use `just` as a temporal adverb. Precedence 3 and 1 beat 5. Checker allow-lists the phrases; prose untouched.

**Deferred.** The 64 CHECKs and 136 WARNs are the work of WP2–WP9. No WP1 prose edit.

**Outside scope, unapplied.** None in this package.

---

## WP2 — Glossary data hygiene

**Commit:** `fe8abf937a253813eb4c892e4b38d16bd79e3994`

**Before / after.** Glossary CHECKs 24 → 0 (9 alias collisions, 14 compound `evidence`, 1 URL). Total CHECK 64 → 40. WARN 136 → 135 (one colliding alias had been a forward-vocab hit). Build clean; no rendered-page failures. Keyword index now lists each alias once because collisions are gone.

**A. `evidenceNote`.** `types.ts` now types `evidence` as the four-value enum and adds `evidenceNote`. AdjacentConcepts and GlossaryView render `{evidence}; {evidenceNote}` in the same label style. Fourteen rows split exactly as the handoff table.

**B. Alias collisions.** Removed the weaker alias; no id changed.

| alias | removed from | kept on | note |
|---|---|---|---|
| `latest` | zero-dte | latest | |
| `customer long` | long-option | customer-long (headword) | |
| `customer short` | short-option | customer-short (headword) | |
| `DEX` | dex-ladder | dex (headword) | ladder row now has no aliases |
| `convexity` | convexity-ladder | convexity (headword) | ladder row now has no aliases |
| `spread` | multi-leg | bid-ask-spread (headword) | multi-leg gained `spread (multi-leg)` |
| `conversion` | put-call-parity | conversion (headword) | parity gained `conversion (parity)` |
| `risk reversal` | multi-leg | option-structures | |
| `exercise` | assignment | closing-by-trade-or-exercise | assignment gained `assigned` (it did not have it; the phrase is already in the shortDef) |

**C. `oic-education`.** Reading is now `Options Industry Council, the Options Education program and the current Characteristics and Risks of Standardized Options.`

**Judgment calls.** Adding `assigned` on `assignment` — the handoff said keep it if present; it was not present. Added so the row still has a reader-facing form after `exercise` moved. Emptying dex-ladder / convexity-ladder aliases rather than inventing “ladder screen” names — no new coinage.

**Rule conflicts.** None.

**Deferred.** None.

**Outside scope, unapplied.** None.

---

## WP3 — Claim labels and modals

**Commit:** *(filled after commit)*

**Before / after.** Seven `always` uses read; two modal mismatches fixed; folklore modal aligned on the wall/fuel block; five double-label headings reduced to the weaker label; two `will` mechanism sentences labeled or remodaled. CHECK count unchanged (labels are not a mechanical Check). Build clean expected.

**Seven `always` uses**

| loc | verdict | action |
|---|---|---|
| plans/01:58 | quoted folklore being rejected | none |
| plans/02:81 | reader-behaviour denial (“does not always mean”) | none |
| plans/02:170 | reader-behaviour (“the reader who always leans”) | none |
| plans/03:142 | `always` + labeled verb *inferred* | dropped `always` |
| layer/06:167 | same | dropped `always`; added `(*market-general*)` on delta-neutral |
| practice/09b:247 | strike-grid density is market-general | added `(*market-general*)` |
| practice/12:303 | reader-behaviour reminder (“partial picture, always”) | none |

**Changed sentences** (page:line · before → after · reason)

- `plans/03-classification.mdx:142` — “That sentence is always **inferred**.” → “That sentence is **inferred**.” — `always` is illegal on an inferred claim.
- `layer/06-nq-es-layer.mdx:167` — same drop of `always`; “usually run **delta-neutral**” → “usually run **delta-neutral** (*market-general*)” — mandate is market-general; the unprinted hedge stays inferred.
- `plans/04-state.mdx:76` — “often act like / holders may” → “are said to act like / holders are said to” — folklore modal.
- `practice/09b-structure-and-gexbot.mdx:247` — added `(*market-general*)` on “always a strike within a few points.”
- `practice/08-heuristics-as-reading.mdx:76` — heading `(*beta*)` removed; body now “Beta feature: residual-only, still being practiced.” — `beta` is product status, not a claim label.
- `practice/08-heuristics-as-reading.mdx:124` — “people short gamma … must chase” → “dealers short gamma … must chase it (*market-general*)” — `must` is legal only for dealer mandate.
- `practice/08-heuristics-as-reading.mdx:196` — H14 heading dropped the second label (“documented open-versus-close limit”); body already carries the docs limit. Weaker label kept: folklore.
- `practice/08-heuristics-as-reading.mdx:209` — H15 heading dropped `(*beta*)`; weaker label kept: folklore.
- `practice/09a-early-session.mdx:165` — E4 heading dropped `*inferred* combination`; weaker label kept: folklore.
- `practice/09b-structure-and-gexbot.mdx:141` — S6 same.
- `practice/09b-structure-and-gexbot.mdx:189` — S9 dropped `*beta*`; folklore kept.
- `on-ramp/08-heuristics-as-reading.mdx:30` — “will land” → “is said to land (*folklore*)”.
- `practice/12-futures-to-options.mdx:71` — hedge-chain sentence tagged `(*market-general*)` so `will re-hedge` is a legal modal.

**Judgment calls.** A line-by-line agent pass flagged ~80 “missing `(*docs*)`” on screen-teaching sentences (Classic draws OI and volume, State starts empty, etc.). Those sit next to `TermFirst` / `GexbotConcept` cards that already carry the object. Plastering `(*docs*)` on every restatement would be a voice rewrite (precedence 5) and would not add a new claim. Not applied. H3 grind side is tagged folklore in the book and docs in the source-of-truth file; changing folklore → docs would *strengthen* a label. Not applied.

**Rule conflicts.** Claim integrity vs. density/voice on restated screen facts: integrity wins for *new* hedge/pressure/`always`/`will` claims; density/voice wins against repeating `(*docs*)` on a card the paragraph already sits beside. Logged as Rule feedback.

**Deferred.** The agent defect lists (every unlabeled “Classic draws…”, every restated hedge-chain toy, ScreenOrientation props). Proposed rule: a paragraph beside its card, or that restates a labeled section, is labeled by that card/section. Inline labels are required when the paragraph asserts a *new* hedge, pressure, or update-clock.

**Outside scope, unapplied.** Strengthening H3 folklore to docs. Labeling every screen-teaching sentence.

