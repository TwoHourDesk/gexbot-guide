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

**Commit:** *(filled after commit)*

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


