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

**Commit:** `def99ce87e3f6e24f778de6c1f762ba1c72a0c7a`

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

---

## WP4 — Page structure

**Commit:** `c1cf32bce4ae41b00124a03f362240d93f2ebe3e`

**Before / after.** Page-order and Check Yourself CHECKs 7 → 0. Total CHECK 40 → 33 (remaining are times).

**Chapter 10 Newcomer questions.** Three questions between ChapterTerms and AdjacentConcepts: (1) H4 wall-candidate vs “walls are hypotheses”; (2) partial-picture vs confluence bias; (3) VIX down / dots flat. Each is a case the catalogue table does not stage.

**Check Yourself**

| page | decision | kept | removed (for restore) |
|---|---|---|---|
| 08 | drill sheet — catalogue of H1–H15 | all 8 | — |
| 09b | drill sheet — catalogue of S1–S10 | all 14 | — |
| 09 | reduce to 2 | plus DEX / no convexity (2×2); Classic major as stop (pressure) | State major-long alert = journal line? (overlaps Newcomer Q1) |
| 09a | reduce to 2 | 09:36 max-change grade; compression lean + E1 | E2 yesterday’s-high fade; H12+H13 before wall/fuel; E6 full-group major; 10:00 re-marking |
| 11 | reduce to 2 | expected-move toy; high 0DTE gamma ≠ tick chase | straddle √time; first-hour published effect; GEX formula vs bar; 40-session 65% |
| 12 | reduce to 2 | unchanged-index vol drop; 10 SPX calls in ES | Friday SPY assignment; three kill conditions; +DEX as entry; 9/10 win rate; six tools |

**Judgment calls.** 08 and 09b declared drill sheets because they are catalogue chapters (handoff default). Kept items are combinations, toy numbers, or chain-of-custody slots; removed items are listed above.

**Rule conflicts.** None.

**Deferred.** None.

**Outside scope, unapplied.** None.

---

## WP5 — Vocabulary

**Commit:** `cf05c1f0201e1d7b46b36f572a6c3e0be6ad784e`

**Forward-vocabulary.** 135 WARN lines classified. None rephrased as a leak: every hit is a false-positive alias, a sanctioned forward pointer, or a proposed `firstDefinedIn` move (not applied).

False positives (plain word or alias of a later term): `unknown`, `none`, `stack`, `holder`, `chain`, `crowded`, `offer`, `synthetic`, `cash open`, `09:29–11:00`, `reversal`, `smile`, `regime change`, `first two hours`, `scheduled release`, `no Gexbot object here`, `scalp`, `market maker`, `how stock-like`, `skew` inside the taught phrase **skew dots**.

Sanctioned: `plus-DEX` / `minus-DEX` in Chapter 4; “Chapter N will …” / “Chapter 3 is the whole lesson”; intro’s contract preview of the four pressure words; H12’s own `skew dots` (taught on that page as `skew-dots`).

Proposed moves (logged, not applied): `skew` → Chapter 8 (H12); `customer-long` / `customer-short` / `classification-engine` → Chapter 1 (the map names them); leftover / unsigned / the four pressure words → intro (the contract page uses them as ordinary language).

**Cross-references.** Duplicate `](/docs/…)` links removed: `layer/06-nq-es-layer.mdx:107` second Classification link; `layer/07-clocks-and-late-greeks.mdx:135` second Chapter 6 link. First use kept. No flood of new first-use links added — every numbered chapter already links the prior chapter in “What you already need.” Adding a link on the first mention of every earlier headword would be a voice rewrite. See Rule feedback.

**Coinage paraphrases.** Nineteen ids checked. Sixteen already opened with a plain clause. Three gained one:

| id | added clause |
|---|---|
| hedge-chain | “The six steps from an option print to the last futures trade it can force” |
| two-books | “Two ledgers move together” |
| local-zero | “The level where the clock-hedge ladder switches from buying to selling” |

**Judgment calls.** Not moving `firstDefinedIn` (needs approval). Not rephrasing H12 to avoid the word “skew.”

**Rule conflicts.** Reader’s vocabulary (rule 2) vs. the intro’s job of naming the four pressure words before Chapter 3 teaches them. The contract page wins; proposed move logged.

**Deferred.** Proposed term moves above. Mechanical first-use linking of every earlier headword.

**Outside scope, unapplied.** Expanding the checker stop-list (would hide real leaks).

---

## WP6 — Times and durability

**Commit:** `4213f993b13b1c4fdad9ecc0a826c237364c7dc1`

**Before / after.** Time CHECKs 33 → 0. Total CHECK 33 → 0. WARN 135 → 133. First `HH:MM` on each page now carries ` ET`; later times are bare. `Eastern` replaced by `ET` on the first clock of a page and stripped from later ones.

**Dated figures**

| id | figure | action | source |
|---|---|---|---|
| zero-dte-share | roughly half | dated **as of 2023** | cited Cboe 2023 research note (2025 full-year share was ~59%; not used, would need a new citation) |
| pattern-day-trader-rule | $25,000 | dated **as of 2025** | FINRA Rule 4210 |
| large-options-position-report | 200 contracts | dated **as of 2025** | FINRA Rule 2360(b)(5) |
| nbbo | sixteen exchanges | **dropped** — 18 US options exchanges as of 2025 (Cboe 2025 10-K: four Cboe + 14 others). Mechanism kept: “across the listed options exchanges” | SEC Options Order Protection Plan does not freeze a count |
| hedge-complex-scale | millions / over a million | dated **as of 2025** | Cboe / CME daily volume (SPX ADV ~3.9M in 2025; ES still over a million) |
| per-contract-fees | fraction of a dollar to a dollar | dated **as of 2025** | typical retail; Cboe fee schedule / broker schedules |
| exercise-cutoff | 17:30 | dated **as of 2025** | FINRA 2360 / OCC 5:30 p.m. ET |
| t-plus-one-settlement | T+1 | dated **since 2024** | OCC settlement (T+1 from May 2024) |
| global-trading-hours | overnight session exists | dated **as of 2025** | Cboe GTH specs |
| daily-expirations | every trading day | dated **as of 2025** | Cboe SPXW specs |

**Main-chapter figures.** Toys in Chapters 11–12 (16 percent, $750, $1,330) already say they are illustration values. Docs folklore thresholds ($800 million / $1000 million minus-vanna) are product-doc constants, not market figures — left undated. CME tick values ($12.50 ES, $5.00 NQ) are contract specs — left as mechanism.

**Judgment calls.** Dropped “sixteen” rather than write “eighteen as of 2025” because the cited plan is not a census. Dated 0DTE share to the cited 2023 note rather than silently updating to 2025’s 59%.

**Rule conflicts.** None.

**Deferred.** Updating zero-dte-share to 2025 and its citation.

**Outside scope, unapplied.** None.

---

## WP7 — Canonical toy

**Commit:** `9c1fdd85798edcc473425be832d335c56f874261`

Chapter 12’s “kept about 72 percent” (not 72 points) is `$540 / $750` from the canonical 6000 / 0.50 / 15-point / $100 / $50 figures plus Chapter 11’s stated 16% / two-hour illustration. Untouched.

| page | numbers | class | fix |
|---|---|---|---|
| most chapters | 500 / 6000 / 0.50 / 0.80 / 15 pts / $25,000 / 500 ES / sold mirror | canonical | none |
| on-ramp/02 | 13 pts / $1,330 debit | stated (“Chapter 11 shows where 13 comes from; here it is a toy, given”) | none |
| on-ramp/02 | close at 5000 | undocumented crash | added “a thousand-point crash” |
| on-ramp/02 Check | debit 8 / mark 10 | undocumented | “Toy. Suppose instead …” |
| on-ramp/04 Summary | vol 20 / 15 / 12 | undocumented | “Toy. Suppose instead …” |
| on-ramp/07 | 6010 / 5990 / 0.55 | undocumented 10-pt drift | “Toy. Suppose instead the index drifted ten points in” |
| layer/06 | 1,250 NQ / 2.5 NQ | canonical NDX stretch of the same 500 | none |
| practice/11 | 16% / √time slices | stated (“illustration values, not today’s market”) | none |
| practice/12 | 13 / +5.4 / $540 / 72% | stated two-hour attribution of the running example | none |
| practice/12 Check | 10 SPX calls | unit-lot scale | logged, not converted (smaller than restating the 500) |

**Judgment calls.** 13-pt debit already had a why-not clause; left it. 5000 kept as the crash close with a clause (smaller than inventing 5500).

**Rule conflicts.** None.

**Deferred.** Converting Chapter 12’s 10-lot Check to 500.

**Outside scope, unapplied.** Recalculating Chapter 11’s 0.82 vs linear γ 0.86.

---

## WP8 — Citations

**Commit:** `46ec22be676e6f4b19c9f1d98cb686763123ab12`

No URLs remain (WP1 URL check stays clean). Forty-nine adjacent `reading` fields reformatted: Hull years added (2021, 11th ed.); two-works fields reduced to the primary; book locators changed to “the chapter on X”; purpose clauses after cites stripped.

Dropped seconds (primary kept): Griffin and Shams; Avellaneda and Stoikov; Bennett (spot-vol); Harris (high-volume-node, intermarket-sweep); Sinclair (weekend-theta); Kahneman; CME (hedge-complex-scale); Bouchaud (hedge-size-vs-volume); broker agreements (approval-levels, account-segregation, cash-vs-margin, per-contract-fees, exercise-cutoff, t-plus-one); Cboe fee schedule; unnamed Cboe 0DTE research; OCC volume reports; Characteristics and Risks on the OIC row; Hull (chain-iv).

Chapters 11 and 12: works kept; years and “the chapter on X” locators added on the Read: lines listed in the agent table. Part 3 table titles not rewritten (would be a large voice change of a reference table; logged).

**Judgment calls.** Hull year 2021 (11th). Two-works: official spec over commentary. OIC row: keep the education program, drop the OCC booklet (already cited on other rows).

**Rule conflicts.** None.

**Deferred.** Quoting titles on Chapter 11’s Part 3 author-year table.

**Outside scope, unapplied.** None.

---

## WP9 — Closer density

**Commit:** *(filled after commit)*

**Before / after.** CHECK 0 → 0. WARN 133 → 134 (pre-existing `stand down` in Chapter 4 teaching prose, not a closer). Build clean; no rendered-page failures.

Judgment: most Summaries already connect two sections. Closers that only restated a body sentence were rewritten when the page already had an unused case, clock, cancel, or production. Teaching prose, cards, and captions were not touched. No headword was introduced.

### Rewritten blocks

| loc | before | after (sense) | what the reader now gains |
|---|---|---|---|
| `intro` NQ1 | “Is this going to tell me when to buy or sell?” recap | Tall bar at a watched strike: no entry; labels ≠ decision; bar is a hypothesis until a later screen can show an owner | A case that applies the contract to an unsigned pile, before Classic arrives |
| `intro` NQ2 | “Do I need to know options first?” recap | Later page uses a schoolbook word you lack: the page must stop and define; collapse the box if you already own it | A clock on the stop-and-define promise, not a FAQ of the opening |
| `intro` NQ3 | “Why does every sentence carry a label?” recap | Unlabeled “the index will stall at a pile”: the defect is a claim with no mark | A refuse: unlabeled is the defect, not a fifth label |
| `on-ramp/00-intro` CY2 | Name the pressure-word swap | Produce the on-ramp twin of “dealer must buy ES”; the word you may not copy is *must* | Production of the seat test, not a recap of the paragraph that taught it |
| `plans/03` NQ1 | “Did they just put on longs?” + buy-to-close | Classifier tagged bought: intent not stated; hedge can survive a close | Hedge vs intent on a signed print, not a restatement of the docs limit alone |
| `plans/03` NQ2 | “Is the dealer about to buy because leftover delta printed?” | Leftover at 10:06; you wait for the 500: link 3’s clock has passed | A clock case on the same leftover the body walked as narrative |
| `plans/03` CY1 | Produce the *bought*-branch five-field sentence | Produce the *sold*-branch five-field sentence + Classic: unknown | The mirror the body gave in parts (sold narrative + five-field template) |
| `plans/03` CY2 | Partial cancel 300 of 500 | Full cancel of 500: leftover zero, no link 3, Classic still draws the unsigned pile | Full cancel vs the Classic bar the body left side by side with leftover |
| `plans/04` NQ1 | Long bar = support? falling-vol folklore | Same bar, *rising* vol: fuel candidate, still incentive, still folklore; refuse the wall if the regime is untagged | The flip the body named and did not stage |
| `plans/04` CY1 | Write DEX/convexity signs for both 500 branches | Fade plus-DEX at 10:06 expecting 500 still to buy: which clock, and does the right regime save it? | The import-mistake clock the Summary named, as a production |
| `layer/07` NQ2 | “Must dealers buy if net minus-vanna is $800 million?” | Same $800 million *at 10:00*: none of last-hour; morning bar is not the last-hour object | A clock refuse the body taught as a family, not as 10:00 |
| `on-ramp/07` Summary | Price-unchanged ≠ P&L-unchanged recap | Dealer last-hour mandate and your rent are one clock from two seats; ladders locate the crowd, cannot invoice you | Seat + residual-only in one cut; dropped the recap of the opening |
| `practice/12` CY1 | Unchanged index, vol down two, ATM 0DTE: −3.4 | First-row split: +5.4 vs +15; which pieces made the gap; what Gexbot did not show | Attribution of the table’s first row, not a reprint of the second |

### Already passing (no edit)

Summaries on Chapters 1–6, 8–12 and their on-ramps already connect two objects or two clocks. Check Yourself items that already produce a combination, toy, or chain-of-custody slot were left. Drill-sheet FAQs on 08 and 09b that stage a named H/S/E case were left.

### LEAVE — rewrite would invent a fact or reprint another closer

| loc | why left |
|---|---|
| `on-ramp/02` CY1 | Break-even 6013 is the body toy; CY2 already splits two holders. A new combination needs a mark the page does not add |
| `on-ramp/07` both CY | Already produce drift + counterparty for the two toys. No unused field left |
| `on-ramp/09` Summary, NQ, CY | Already connect the dead-mark case; NQ2 refuses a number this page does not give |
| `practice/11` both CY | Already a toy number and a bands combination |
| `practice/12` CY2 | Non-ATM 0.20-delta size would need a figure the page does not give (ATM ≈ 1 ES only) |
| `practice/09b` NQ1–2, 5–9 | Catalogue FAQ; rewriting the set is a voice pass, not a missing fact |
| Remaining drill-sheet items on 08 / 09b | Same: they name a case the catalogue already staged |

**Judgment calls.** Applied a focused set, not every FAQ recap. Density beats completeness: a closer that already produces stays. “Stand down” was not used in the Chapter 4 NQ (forward headword, Chapter 8). On-ramp 00 CY2 does not say “may sell the calls” (that action is later folklore).

**Rule conflicts.** Closer density vs. editing scope: a rewrite that needed a new fact was left (precedence 1 / “not stated”). Closer density vs. voice: catalogue Newcomers on drill sheets were left.

**Deferred.** A second pass on 08 / 09b Newcomers if the owner wants the catalogue FAQs converted to unused clocks. Non-ATM sizing toy for Chapter 12.

**Outside scope, unapplied.** Teaching-prose recap inside chapters. Moving `firstDefinedIn` for `stand-down`.

---

## Rule feedback

Do not treat this as an amendment. Proposed wording only.

1. **`just` as a word-boundary ban.** Temporal/locative uses name objects (“the map that just redrew,” “just under the level,” “just bought”). A `\bjust\b` Check cannot tell filler from those. **Propose:** ban filler `just` by hand, or allow-list the object phrases in Checks; do not fail temporal `just` that is the increment or the redraw.

2. **Inline label on every screen-teaching sentence.** A paragraph beside its `TermFirst` / `GexbotConcept` that restates the card is already labeled by the card. Requiring `(*docs*)` on every restatement is a voice rewrite and does not add a claim. **Propose:** a paragraph beside its card, or that restates a labeled section, is labeled by that card or section. Inline labels are required when the paragraph asserts a *new* hedge, pressure, or update-clock.

3. **Forward-vocabulary alias false positives.** The checker flags `unknown`, `none`, `holder`, `chain`, `skew` inside “skew dots,” and `09:29–11:00` as the early-window alias. **Propose:** stop-list those plain words; do not treat a clock range as a headword; do not flag `skew` inside the already-taught phrase **skew dots**.

4. **“First use of each taught term links.”** Unenforceable without a term→chapter map the checker does not have. Pages already link the prior chapter in “What you already need.” Linking every earlier headword on first mention is a voice rewrite. **Propose:** required link is the prior chapter in the opening block; optional first-use links for terms taught two or more chapters back.

5. **`always` on “that sentence is inferred.”** Book-rule sentences about the label itself are not mechanism claims. **Propose:** `always` / `will` are illegal on mechanism claims only; a sentence that names the labeling rule may use them.

6. **Citation Checks the script does not yet run.** Two-works `reading` fields and yearless Hull passed WP1. WP8 cleaned them by hand. **Propose:** fail `reading` that contains a URL, a second `(` year, or a book without a year; do not parse titles.

7. **Term budget.** Twelve chapters are over twelve taught terms. Handoff correctly says no action. **Propose:** keep the budget forward-binding only; do not rewrite existing chapters for it.

8. **`intro` opening block.** The Checks treat `intro` as a main chapter but skip `**Which Gexbot` / `**What you already need.**` because it is not a screen. **Propose:** write that exception into Checks, or give `intro` its own opening-block rule (contract page, not a screen).



