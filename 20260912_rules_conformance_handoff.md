# Handoff — bring the book into conformance with the rule files

Date: 2026-09-12. Repo: this one. Build: Docusaurus 3, `NODE_OPTIONS=--max-old-space-size=8192 npm run build`.

## 1. Purpose

On 2026-09-12 the two rule files were rewritten and a third added:

- `.cursor/rules/audience.mdc` — the reader, the two tracks, **precedence**, **claim labels**, **pressure words**, source of truth. Always applied.
- `.cursor/rules/textbook-prose.mdc` — page order, teach-before-naming, quantities and the **canonical toy**, glossary change control, adjacent concepts, closers, voice, citations, durability, editing scope, **Checks**. Applies to `docs/**/*.mdx`, `src/data/glossary.ts`, `src/components/textbook/**`.
- `.cursor/rules/textbook-operations.mdc` — on-ramp shape, sidebars, Gate line, adding chapters, moving terms.

Read all three before starting. This document tells you what in the current book does not yet satisfy them, in what order to fix it, and how to prove each fix. It does not restate the rules; where it quotes one, the rule file wins if they differ.

The book's Gexbot content is locked to `20260910_gexbot_study.md`. Do not edit that file. Do not add a Gexbot mechanism it does not carry.

## 2. Ground rules for this work

1. **Precedence** (`audience.mdc`): claim integrity > reader's vocabulary at that point > object over color > density > length and voice. When a fix for a lower rule would weaken a higher one, do not make it; log it in the report (§6).
2. **Editing scope** (`textbook-prose.mdc`): change the slot the work package names. Anything else you notice goes in the report, not in the diff. The existing writing is the owner's.
3. **Glossary ids are immutable.** Rename by alias. Never change `id`.
4. **Labels are never softened.** A fix that turns *folklore* into an unlabeled sentence, or *not stated* into a plausible fill, is a regression even if the prose reads better.
5. One work package per commit. Run §5 checks after each. Remove `build/` after each build.
6. Where a package asks for a judgment (a Summary that "connects", a Check Yourself that is a "combination"), make the call, apply it, and list every call in the report with a one-line reason. Do not stop to ask; the report is where the owner reviews.
7. Do not create new chapters, new on-ramp pages, or new taught terms in this work. If a fix seems to need one, log it.

## 3. State of the book against the rules (audited 2026-09-12)

Already passing, keep passing: production build; every `TermFirst` / `GexbotConcept` / `AdjacentConcepts` / `NeededForThisScreen` id resolves; no rendered "Missing term" or "No lexicon headwords"; glossary has no duplicate ids and every `seeAlso` resolves; all 30 adjacent blocks have exactly five items, each ≤ 110 words with `bearsOn` / `evidence` / `reading`; forward-vocabulary scan of adjacent items is clean apart from plain-word false positives; page slot order is correct on every page that has the slots.

Not yet conforming:

| # | Rule | Finding |
|---|---|---|
| A | `evidence` is an enum with qualifiers in `evidenceNote` | `types.ts` has no `evidenceNote`; 14 rows carry compound strings (list in WP2) |
| B | An alias appears on one entry only | 9 collisions (list in WP2) |
| C | Newcomer questions slot present on every page | `docs/practice/10-misreads-and-mastery.mdx` has none |
| D | Check Yourself: two items unless the page declares itself a drill sheet in its opening | 08: 8 · 09: 3 · 09a: 6 · 09b: 14 · 11: 6 · 12: 7 items; no page's opening contains the phrase "drill sheet" (08 says "numbered drills", which is the intent but not the phrase the check looks for) |
| E | Every mechanism claim carries exactly one inline label; modals follow the label | Never audited mechanically; 7 uses of "always" outside quotation need reading (list in WP3) |
| F | Times: first on a page carries `ET`, later bare | Book uses "Eastern" (11 places, list in WP6) and `ET` once; glossary adjacent rows use `ET` throughout; several pages' first time has neither |
| G | Current figures carry their year | Adjacent rows with dated figures have none (list in WP6) |
| H | Citation format; no URLs | `oic-education` reading is a URL |
| I | Cross-reference: first use of a taught term per page links to its teaching chapter; no second link | Never audited |
| J | Coined term's glossary row carries a one-clause plain paraphrase | 19 coinages identified (list in WP5); not verified |
| K | Canonical toy figures used unless the paragraph says why not | Not verified page by page; one `5000` in `docs/on-ramp/02-classic.mdx:20` to inspect |
| L | Closers: Summary connects, Newcomer questions are not paraphrase, Check Yourself is a combination | Judgment audit never done under the written test |
| M | Checks are runnable | No script; every check so far was an ad-hoc `/tmp` script |
| — | Term budget (≤ 12 per new chapter) | Forward-binding only. 12 chapters exceed it (13–32). **No action.** |

## 4. Work packages, in order

Order is by precedence first (labels before cosmetics), then by dependency (tooling before audits it serves).

### WP1 — Make the Checks runnable

Create `scripts/check-docs.py` (Python 3, no third-party imports) and add `"check:docs": "python3 scripts/check-docs.py"` to `package.json`. It implements every bullet of `textbook-prose.mdc` → Checks except the build itself, exits non-zero on any failure, and prints one line per failure as `CHECK  path-or-id  detail`.

Reading order (the forward-vocabulary check depends on it):

```
intro, on-ramp/00-intro,
plans/01-what-gexbot-is, on-ramp/01-what-gexbot-is,
plans/02-classic, on-ramp/02-classic,
plans/03-classification, on-ramp/03-classification,
plans/04-state, on-ramp/04-state,
plans/05-orderflow, on-ramp/05-orderflow,
layer/06-nq-es-layer, on-ramp/06-nq-es-layer,
layer/07-clocks-and-late-greeks, on-ramp/07-clocks-and-late-greeks,
practice/08-heuristics-as-reading, on-ramp/08-heuristics-as-reading,
practice/09-grammar-and-journal, on-ramp/09-grammar-and-journal,
practice/09a-early-session, on-ramp/09a-early-session,
practice/09b-structure-and-gexbot, on-ramp/09b-structure-and-gexbot,
practice/10-misreads-and-mastery, on-ramp/10-misreads-and-mastery,
practice/11-further-learning, on-ramp/11-further-learning,
practice/12-futures-to-options, on-ramp/12-futures-to-options
```

Checks to implement, with the parsing approach that worked:

- **Glossary parse.** Split `src/data/glossary.ts` on `\n  {\n … \n  },` blocks; read `id`, `headword`, `aliases`, `firstDefinedIn`, `kind`, `seeAlso`, `shortDef`, `bearsOn`, `evidence`, `evidenceNote`, `reading` with regexes tolerant of `\'` escapes. Fail on duplicate `id`; on any `seeAlso` target not an id; on any headword or alias (case-insensitive) present on two entries; on `kind: 'adjacent'` rows missing `bearsOn` / `evidence` / `reading`, with `evidence` outside `{market-general, docs, folklore, not stated}`, or with `shortDef + bearsOn` > 110 words.
- **Component ids.** For each `docs/**/*.mdx`, every id in `<TermFirst id="…">`, `<GexbotConcept id=…>`, `NeededForThisScreen … ids={[…]}`, and `docId="…"` in `<ChapterTerms>` / `<AdjacentConcepts>` must resolve (ids to glossary; docIds to a page in reading order).
- **Adjacent block size.** Per page: count of adjacent rows with `firstDefinedIn == page` is 0 or 3–5, and the page has `<AdjacentConcepts docId=…>` iff count > 0.
- **Forward vocabulary.** For each page, for each glossary entry with `firstDefinedIn` later in reading order (and, for main chapters, any `on-ramp/**` entry), search the page's prose and the page's adjacent rows' `shortDef`/`bearsOn` for the headword and aliases as whole words, case-insensitive. Skip terms shorter than four characters and a stop-list of plain words (`call, put, strike, expiry, premium, bid, ask, volume, gamma, delta, theta, vega, mark, roll, print, hedge, dealer, customer, node, wall, fuel, pin, chase, fade, absorb, spot, basis, sweep, gap, flush, touch, alert, full, next, latest, seat, state, classic, spread, fill, exercise, option, options, margin, structure, conversion, calendar, zero`). Report as warnings, not failures — the stop-list is imperfect and a human decides. Exclude text inside the page's own `<CheckYourself` block? No: include it; Check Yourself may not use later terms either.
- **Banned words.** `\b(we|just|simply|easy|let's|let’s|don't worry|don’t worry)\b` and `!` outside quotation marks and outside code fences, in `docs/**/*.mdx` prose and in adjacent rows. Report with line. Known accepted hits: the quoted "we can see the pile…" sentence and sentences that reject "you must" — implement a small allow-list by exact string.
- **Page order.** Each non-reference page contains, in this order: `## Summary`, `<ChapterTerms`, `## Newcomer questions`, `<AdjacentConcepts` (if present), `<CheckYourself`, then `## Gate` or `## After`. Main chapters additionally contain the three opening bold lines (`**Which Gexbot`, `**What you will be able to do.**`, `**What you already need.**`); on-ramp pages contain `**What this page assumes.**` and `**What you will be able to do.**`.
- **Check Yourself count.** Count `q:` entries in the `<CheckYourself` block; fail if > 2 unless the page's opening block contains the phrase `drill sheet`.
- **Gate line.** Every main chapter with an on-ramp page has exactly one line matching `^On-ramp: \[[^\]]+\]\(/docs/on-ramp/[0-9a-z-]+\) — .+\.$`.
- **Times.** For each page, the first `\b\d{2}:\d{2}\b` must be followed by ` ET`; no later time on the page may be followed by ` ET`, ` Eastern`, `a.m.`, `p.m.`, or `CT`. (Glossary rows are exempt from the first-time rule; each row is read alone, so a row may carry `ET` on every time.)
- **Rendered pages** (only when `build/` exists): no `Missing term` or `No lexicon headwords` in `build/docs/**/*.html`. Note Docusaurus emits `build/docs/<id>.html`, not `<id>/index.html`.

Acceptance: `npm run check:docs` runs clean on the finished book (after all WPs), and fails loudly when you deliberately break one glossary id.

### WP2 — Glossary data hygiene

**A. `evidenceNote`.** In `src/data/types.ts` change `evidence?: string` to `evidence?: 'market-general' | 'docs' | 'folklore' | 'not stated'` and add `evidenceNote?: string`. Render the note after the evidence label in `src/components/textbook/AdjacentConcepts.tsx` and `src/components/textbook/GlossaryView.tsx` (same style as the label, separated by a semicolon). Split these 14 rows:

| id | evidence | evidenceNote |
|---|---|---|
| trade-classification-algorithms | market-general | Gexbot method not stated |
| vomma | market-general | Gexbot method not stated |
| bulk-volume-classification | market-general | Gexbot method not stated |
| nbbo | market-general | Gexbot method not stated |
| cancelled-and-corrected-prints | market-general | Gexbot handling not stated |
| approval-levels | market-general | U.S. brokerage practice |
| wholesalers-routing | market-general | U.S. market structure |
| delta-as-probability | market-general | approximation |
| section-1256 | market-general | U.S. only |
| wash-sale-rule | market-general | U.S. only |
| pattern-day-trader-rule | market-general | U.S. only |
| account-segregation | market-general | U.S. only |
| managing-winners | folklore | practitioner convention; not measured here |
| intraday-iv-pattern | market-general | empirical regularity; not measured here |

**B. Alias collisions.** Remove the alias from the entry where it is the weaker reading; never change an id. Suggested resolutions:

| alias | on | keep on | reason |
|---|---|---|---|
| `latest` | zero-dte, latest | latest | it is the expiry-group's own headword |
| `customer long` | long-option, customer-long | customer-long | Chapter 3's signed cell owns the phrase |
| `customer short` | short-option, customer-short | customer-short | same |
| `dex` | dex-ladder, dex | dex | the quantity, not the screen |
| `convexity` | convexity-ladder, convexity | convexity | same |
| `spread` | bid-ask-spread, multi-leg | bid-ask-spread | the multi-leg sense gets alias `spread (multi-leg)` |
| `conversion` | conversion, put-call-parity | conversion | Chapter 6's ruler; parity row gets `conversion (parity)` |
| `risk reversal` | multi-leg, option-structures | option-structures | Chapter 12 teaches the structure |
| `exercise` | assignment, closing-by-trade-or-exercise | closing-by-trade-or-exercise | it is that row's headword; the assignment row keeps `assigned` if it has it |

**C. `oic-education`** reading → `Options Industry Council, the Options Education program and the current Characteristics and Risks of Standardized Options.` (no URL).

Acceptance: WP1 glossary checks pass; keyword index renders each alias once; build clean.

### WP3 — Claim labels and modals (precedence rule 1)

This is a reading audit of every main chapter and on-ramp page, in reading order. For each paragraph that asserts a *mechanism* — who hedges, what a bar counts, when a count updates, what pressure exists — confirm:

1. Exactly one label is present inline (`(*docs*)`, `(*market-general*)`, `(*folklore*)`, `(*inferred*)`, `(*not stated*)`) or the sentence's verb is one of *observed / inferred / assumed* used as the label.
2. The modal matches: docs and market-general may say *is*; inferred says *reads as* or *likely*; folklore says *is said to* or equivalent; *always* and *will* appear only on docs and market-general claims.
3. `not stated` slots are not filled with a plausible sentence.

Start with these seven "always" uses; each is either a legal market-general/docs use, or a reader-behaviour sentence (legal; not a mechanism), or a fix:

```
docs/plans/01-what-gexbot-is.mdx:58
docs/plans/02-classic.mdx:81
docs/plans/02-classic.mdx:170
docs/plans/03-classification.mdx:142
docs/layer/06-nq-es-layer.mdx:167
docs/practice/09b-structure-and-gexbot.mdx:247
docs/practice/12-futures-to-options.mdx:303
```

Then read every page. Fix a missing label by adding the label the surrounding chain of custody supports; if none does, the sentence becomes `not stated` or is deleted — never upgraded. Fix a double label by keeping the weaker one. Log every change with page:line, before, after.

Acceptance: report lists every changed sentence; no label was strengthened; build clean.

### WP4 — Page structure

1. **Chapter 10 Newcomer questions.** Add a `## Newcomer questions` section to `docs/practice/10-misreads-and-mastery.mdx` between `<ChapterTerms>` and `<AdjacentConcepts>`. Two or three questions phrased as a person would ask them, each a case, clock, cancel, or refusal the body did not write. The body is a catalogue of paired misreads; a good question asks what to do when two guardrails point different ways, or names a cousin the table does not pair.
2. **Check Yourself counts.** For each of `08`, `09`, `09a`, `09b`, `11`, `12`, decide: (a) the page is a drill sheet — add the words "drill sheet" to its opening block in a sentence that says why the reader is being drilled here; or (b) reduce to two items that are combinations, toy numbers, or chain-of-custody slots. Default: 08 and 09b are drill sheets (catalogue chapters); 09, 09a, 11, 12 reduce to two. Keep the strongest two by the test in `textbook-prose.mdc` → Closers; the removed items are listed in the report so the owner can restore any.

Acceptance: WP1 page-order and count checks pass.

### WP5 — Vocabulary

1. **Forward-vocabulary scan of prose.** Run WP1's check over page prose (not only adjacent rows). Classify every warning: false positive (plain word), sanctioned forward link ("Chapter 12 calls this …", chapter titles in links, `plus-DEX` in Chapter 4), or a real leak. Fix real leaks by rephrasing in plain words at that point in the book; do not move the term's `firstDefinedIn` (that is a proposed move under `textbook-operations.mdc` and needs approval — log it instead).
2. **Cross-reference discipline.** Per page, the first use of each taught term links to its teaching chapter; no second link for the same term on that page. Audit by listing `](/docs/…)` links per page and the taught terms present. Add missing first-use links for terms taught in an *earlier* chapter only; remove duplicate links. Do not add links for terms the page itself teaches.
3. **Coinage paraphrases.** For each of these ids confirm the `shortDef` opens with, or contains, one plain clause a futures trader would accept without the coinage; add the clause if missing: `wall, fuel, flush, squeeze, transition-zone, compound-zone, level-grade, footprint, seat, leftover, thinner-book, local-zero, local-top, hedge-chain, two-books, pin, chase, fade, absorb`. Do not rename any of them.

Acceptance: warnings from (1) are all classified in the report; (2) and (3) listed as changed rows/lines.

### WP6 — Times and durability

1. Replace `Eastern` with `ET` at:

```
docs/plans/01-what-gexbot-is.mdx:100
docs/plans/02-classic.mdx:68, :193
docs/plans/03-classification.mdx:188
docs/plans/04-state.mdx:28
docs/layer/07-clocks-and-late-greeks.mdx:32, :42
docs/practice/08-heuristics-as-reading.mdx:23
docs/practice/09a-early-session.mdx:13, :25
docs/practice/11-further-learning.mdx:39
```

   Then, per page, make sure the first `HH:MM` carries `ET` and no later one does. Many pages' first time is currently bare.

2. Add the year to current figures in these adjacent rows (in `shortDef`, as "as of 2025" or "in 2025", whichever reads): `zero-dte-share` ("roughly half"), `pattern-day-trader-rule` ($25,000), `large-options-position-report` (200 contracts), `nbbo` (sixteen exchanges), `hedge-complex-scale` (millions / over a million per day), `per-contract-fees` (fraction of a dollar to a dollar), `exercise-cutoff` (17:30), `t-plus-one-settlement`, `global-trading-hours`, `daily-expirations`. Verify each figure before dating it; if a figure cannot be verified from the cited source, replace it with the mechanism sentence and drop the number.

3. Grep main-chapter prose for other current figures (`\$[0-9]`, `percent`, `%`, `million`) and treat the same way.

Acceptance: WP1 time check passes; report lists dated figures with the source used.

### WP7 — Canonical toy

For each main chapter and on-ramp page, list every worked number and confirm it is either a canonical-toy figure (10:05 ET · 500 SPX 0DTE ATM calls · index about 6000 · delta 0.50 → 0.80 after 15 points · $100/pt SPX · $50/pt ES · $25,000/pt ≈ 500 ES · the sold mirror) or a stated deviation ("Toy. Suppose instead …"). Inspect `docs/on-ramp/02-classic.mdx:20` (`5000`). Where a page uses a different toy without saying so, add the one-clause reason or convert to the canonical figures — whichever is the smaller diff. Do not change Chapter 12's attribution toy (15-point move, "kept about 72 points") except to confirm it derives from the canonical figures.

Acceptance: report table — page · numbers found · canonical / stated deviation / fixed.

### WP8 — Citations

Audit all 150 adjacent `reading` fields against the format in `textbook-prose.mdc` → Citations: papers *Author(s), "Title" (Year, Journal)*; books *Author, Title (Year), the chapter on X*; specs and rules *issuer and document name*; no URLs; one citation per item (two are present in a handful of rows — keep the primary). Also audit the reading lists inside `docs/practice/11-further-learning.mdx` and `docs/practice/12-futures-to-options.mdx` for the same format; do not add or remove works there.

Acceptance: WP1 has no URL hits; report lists reformatted rows.

### WP9 — Closer density (judgment audit)

Last, because it is the most subjective and depends on everything above being stable. Per page, apply the test from `textbook-prose.mdc` → Closers to the Summary, each Newcomer question, and each Check Yourself item: *if the reader skipped this block, what do they lose that the teaching did not already give?* Where the answer is nothing, rewrite the block to connect, case, refuse, misread, or produce — same length or shorter, new information. Where a rewrite would need a fact the page does not have, leave it and log it.

Do not touch teaching prose, cards, or figure captions in this package. Do not introduce a headword.

Acceptance: report lists every rewritten block with the one-line "what the reader now gains".

## 5. Verification after every package

```
npm run check:docs
NODE_OPTIONS=--max-old-space-size=8192 npm run build
npm run check:docs      # again, so the rendered-page check runs against build/
rm -rf build
```

Pre-existing and out of scope: `tsc` reports `Cannot find namespace 'JSX'` in every component under React 19 types. Do not fix it here.

## 6. Report

One file, `20260912_rules_conformance_report.md`, appended per package:

- Package, commit hash, before/after counts for each check the package touched.
- Every judgment call: page:line (or glossary id), before, after, one-line reason.
- Every rule conflict met and how precedence resolved it.
- Every item deferred: proposed term moves, sentences that needed a fact the book lacks, figures that could not be verified.
- Anything you noticed outside scope, as a list, unapplied.

The last section of the report is **Rule feedback**: any rule that was ambiguous, unenforceable, or cost more than it bought, with the wording you would propose. The rule files are meant to be amended from this list; do not amend them yourself in this work.

## 7. Out of scope

- Reducing existing chapters to the term budget.
- New chapters, on-ramp pages, or taught terms.
- Editing `20260910_gexbot_study.md`.
- Amending the rule files (propose in the report instead).
- The React 19 `JSX` namespace type errors.
