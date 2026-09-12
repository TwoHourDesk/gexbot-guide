---
name: Gexbot Daily Playbook
overview: Design a new companion course, Gexbot Daily Playbook, under `playbook/`, governed by its own rules (playbook-charter.mdc, playbook-play.mdc). It cites the Gexbot Study Guide and writes the decision for one situation — daily-level approach on six GX-vs-PD geometries during a 09:00–11:00 ET sitting — as plays with trigger, invalidation, and four-slot management. First deliverable is a course memo at `playbook/00-course-memo.md`. This is not a pivot or rewrite of the Study Guide.
todos:
  - id: rules
    content: Write `.cursor/rules/playbook-charter.mdc` and `playbook-play.mdc` (globs `playbook/**`); add the scope clause to `audience.mdc` so textbook rules do not apply directly inside `playbook/**`
    status: completed
  - id: preconditions
    content: Confirm `20260910_gexbot_study.md` is on disk (it is cited by the repo but absent); create `playbook/` with the layout in playbook-charter.mdc
    status: pending
  - id: inventory
    content: Inventory Study Guide objects the Playbook may cite (Ch. 6–13); produce the four lists — cite / assemble / Playbook-native / out of sample — with `SG Ch. N (Title), <object>` for every cite
    status: pending
  - id: collisions
    content: Write the term-collision table (morning card, early session vs early window, gap vs GX gap, overnight structure vs GX, VWAP vs PD/GX/RTH-VWAP) and the Playbook's chosen word for each
    status: pending
  - id: course-shape
    content: Write §0 course shape — two-course sentence, reader gate, futures RTH 09:30–16:15, GX 16:15–09:30, cash-hours offset, six geometries, what Ch. 13 still forbids, what this course writes that Ch. 13 would not
    status: pending
  - id: lens
    content: Distill the Daily-Level Lens §1–§8 — prep sheet, screen×clock matrix, preconditions, safeguards, approach protocol, watch vs ignore, dual falsifier, four-slot geometry
    status: pending
  - id: context-layers
    content: Lock VXX as vol context on its own clock (never H12) and Mag7-vs-SPY as breadth (leading / mirroring / lagging); pick and write the one VXX metric
    status: pending
  - id: worked-cases
    content: Six toy walks (§9), one per geometry, canonical toy (index ~6000) plus a 09:10 character clock; geometry 6 must not read as 1 or as 2+4
    status: pending
  - id: outline
    content: Propose the play list for `playbook/plays/` (§10), one play card per geometry; flag anything that would force a Study Guide edit; default is leave the Guide untouched
    status: pending
  - id: conformance
    content: Run the acceptance checks — every mechanism sentence carries one label, every pressure word is one of four, no retired session names, triggers are tape events, size only in R, every SG cite resolves to a real chapter object
    status: pending
isProject: false
---

# Gexbot Daily Playbook

A new course. Not a pivot, rewrite, or extra chapter of the Gexbot Study Guide.

The Playbook lives at `playbook/` and is a **decision document**: it writes plays the reader executes. It is governed by `.cursor/rules/playbook-charter.mdc` and `.cursor/rules/playbook-play.mdc`. The textbook rules (`audience.mdc`, `textbook-prose.mdc`, `textbook-operations.mdc`) do not apply inside `playbook/**` except for what the charter names: claim labels, pressure words, the Gexbot source of truth, and Gexbot as lens not market.

The Playbook **references** the Study Guide. It may cite, point, and attach. It may not restate a Study Guide lesson as if it were original, and it may not add a Gexbot mechanism, screen, or update the Study Guide does not already carry.

First deliverable: a **course memo** at `playbook/00-course-memo.md`. Do not edit Study Guide pages in that pass.

## Decisions

### Locked

- Location `playbook/`; layout per `playbook-charter.mdc` (`README.md`, `00-course-memo.md`, `plays/`, `reference/`, `cases/`).
- Governance: `playbook-charter.mdc` and `playbook-play.mdc`. Every play uses the ten-section play card.
- The Playbook writes the decision: preconditions, trigger, invalidation, management, exit, review. Imperatives to the reader are its voice.
- Risk is written in **R** (entry-to-SL distance). No contracts, dollars, or percent of account.
- Sitting clock **09:00–11:00 ET**, two rooms, not pooled.
- Futures **RTH 09:30–16:15**; **GX 16:15–09:30**; halt 17:00–18:00 sits inside GX.
- PD extremes on the futures-RTH clock. `SG Ch. 10` cash-hours (09:30–16:00) offset is written whenever the two disagree.
- PDM = `(PDH + PDL) / 2`. PDC = the 16:15 futures print.
- VWAP family: PD-VWAP, GX-VWAP, RTH-VWAP, each with k·σ bands, **k ∈ {1, 2}**.
- Six geometries, exhaustive and mutually exclusive (inequalities below). Geometry 6 is its own family.
- Context layers: VXX (vol character) and Mag7-vs-SPY (breadth). Neither attaches a pressure word.
- Trade-management geometry is **four slots**: SL · break-even · scale-in · targets (partial, then trail). *Inferred*, and only after leftover exists.
- Retired names: ON, ONH, ONL, ON-VWAP, ETH, ETHH, ETHL, ETH-VWAP, PMH, PML.
- The Playbook's preparation page is the **prep sheet**. It is not `SG Ch. 13`'s **morning card** (Drill 1, a straddle card); the prep sheet may cite the morning card's expected move as a near/far yardstick.

### Open (need the user; default in parentheses)

- **Publishing.** Plain Markdown in `playbook/`, or a second Docusaurus docs plugin instance with `path: 'playbook'` and `routeBasePath: 'playbook'` and its own sidebar. The second option edits `docusaurus.config.ts` only; nothing under `docs/`, `sidebars.ts`, or the glossary. (Default: plain Markdown until the first play is written; wire the plugin after.)
- **VXX metric.** One of: VXX vs its own 16:00 regular-session close; VXX vs its own extended-hours range; VXX slope over 09:00–09:30. (Default: VXX vs its own 16:00 close, plus 09:00–09:30 slope as the character sentence. VXX has no 16:15 print of its own and does not trade 20:00–04:00, so "VXX GXH/GXL" would be a 16:15–20:00 plus 04:00–09:30 object and must be written as such.)
- **Mag7 weighting.** (Default: equal-weight for the lead/lag call; cap-weight only if the prep sheet says so and says why.)

### Blockers

- `20260910_gexbot_study.md` is named as the source of truth by `audience.mdc`, `README.md`, and `docs/reference/source-of-truth.mdx`, but it is not on disk and has never been committed. Until it is present, no memo sentence may carry the **docs** label; write **not stated** and flag it. Resolve before the inventory pass.

## Two courses

**Gexbot Study Guide** (this repo). A reading course. Competence is reconstruct and refuse. It writes no entry. Gexbot is a lens beside the ES/NQ tape. Source of truth for every Gexbot computation, display, and update: `20260910_gexbot_study.md` and the public sources it cites.

Current Study Guide map (use these numbers and titles only; do not use the old 9a / 9b / 10-misreads / 11-further / 12-futures numbering):

- Start here — How to use this book
- The screens
  - 1. The map of the screens
  - 2. Classic — the unsigned map
  - 3. Classification and the hedge chain
  - 4. State — leftover by strike
  - 5. Orderflow — leftover over time
- The complex
  - 6. The Nasdaq family
  - 7. Clocks and late greeks
- Reconstruct and refuse
  - 8. Named reads (H1–H15)
  - 9. The journal line
  - 10. Early session (E1–E6)
  - 11. Structure and leftover (S1–S10)
  - 12. Misreads
- After this book
  - 13. The next course — syllabus handshake, not the Playbook
  - 14. From futures to options — out of scope unless a footnote requires it

**Gexbot Daily Playbook** (`playbook/`). A futures playbook for one recurring situation: price approaching a *daily level* (`SG Ch. 10`) on a morning whose Globex range vs prior futures-RTH extremes matches one of six named geometries. Sitting clock: **09:00–11:00 ET**. One play card per geometry.

When a read is nameable, the play writes the trigger, the invalidation, and the four-slot management.

Chapter 13 is the Study Guide's syllabus for *after* the book. It still writes no entry. The Playbook is the course that chapter points toward, with a narrower object and the licenses Chapter 13 withheld: a trigger, a stop, and management, written as a procedure the reader executes. Inherit Chapter 13's horizon mismatch: Gexbot decides *which* plays are live today; the tape decides *when*. A click because a bar printed inverts the layers.

## Reader and gate

Same reader as the Study Guide: an index-futures trader (ES or NQ) who thinks in points and ticks and treats a level as a hypothesis until price accepts through it. They have finished the Study Guide through Chapter 12. Chapter 13's Stage 1–2 gates are recommended, not assumed.

Not the reader: someone who has not learned the 2×2, pressure words, or level grades; a signal-chaser who wants a color to buy or sell; a reader of Gexbot product docs only.

The Playbook stays useful to a reader who never trades an option. Do not pull Chapter 14 into the prerequisite.

## Clock the Playbook owns (locked)

**09:00–11:00 ET**, two rooms in one sitting, not pooled:

| Room | Clock | Tape job | What may speak | What may not |
|---|---|---|---|---|
| Pre-open character | 09:00–09:30 | Read GX *character* (16:15–09:30); name the day's GX-vs-PD geometry or stand down | Futures tape (ES/NQ); Classic OI re-marked to overnight spot (location; pressure **unknown**); VXX path on its own clock; GX-VWAP and its bands; Mag7 vs SPY only if extended-hours prints exist | State leftover, Orderflow sequences, H12, RTH-VWAP, cash Mag7/SPY as if RTH were open, any pressure word other than **unknown**, any geometric slot |
| RTH early window | 09:30–11:00 | Daily-level approach under the named geometry | Everything `SG Ch. 10` Phases 1–3 already allow, plus VXX, Mag7-vs-SPY breadth, and RTH-VWAP as it builds | Last-hour family (H5 / S9); full-session leftover claims; carrying a 09:00 thesis unchanged through the auction |

Sitting ends at 11:00, with `SG Ch. 10`'s **early window**. Do not use `SG Ch. 13`'s **early session** (09:30–11:30); the two are different taught terms and the Playbook uses only the first.

09:00–09:30 is Phase 0 made into a working room. It does not make leftover nameable earlier. `SG Ch. 10`: a level can be observed at any minute; it carries a pressure word only once State has leftover at that strike.

Scheduled releases: an 08:30 print sits inside GX and is part of GX character; the prep sheet notes it. A 10:00 print sits inside the RTH room; the 09:45–10:00 read is provisional (`SG Ch. 10`) and every ladder re-marks at the print.

## Session clocks for levels (locked)

Write these before 09:00. Do not mix them.

| Name | Clock (ET) | What it is |
|---|---|---|
| **Prior RTH / PD** | **09:30–16:15** yesterday | **Futures** regular trading hours, not cash 09:30–16:00. PDH, PDL, PDC, PDM, and PD-VWAP are taken on this clock. |
| **GX** | **16:15–09:30** | Globex: from the futures RTH close into the next futures RTH open. Playbook-native name. This is `SG Ch. 10` overnight structure with the start locked at **16:15**, not at the 16:00 cash close and not at the 18:00 reopen only. |
| **Halt inside GX** | 17:00–18:00 | CME maintenance. No prints. Still GX, not a second session and not a hole that splits GXH/GXL. |
| **Character box** | 09:00–09:30 | Last thirty minutes of GX. Used for *how* GXH/GXL were printed. Does not redefine GXH/GXL. |
| **This sitting's RTH** | 09:30–11:00 (Playbook closes at 11:00) | Today's futures RTH so far. RTH-VWAP and Mag7/SPY RTH breadth live here only. Full futures RTH continues to 16:15; this course does not sit it. |

**Offset from the Study Guide.** `SG Ch. 10` takes prior-day extremes on **cash** hours (09:30–16:00) so they sit on Gexbot's residual clock. The Playbook takes them on **futures RTH** (09:30–16:15). That is a 15-minute **longer** PD and a 15-minute **later** GX start (16:15, not 16:00). Write both clocks when a cash 16:00 close and a futures 16:15 print disagree. Gexbot leftover remains a cash-hours object; do not treat 16:00–16:15 futures prints as leftover.

Map futures prices to index strikes through *today's* basis (`SG Ch. 6`).

## Tracked tape objects (locked)

All of these are **tape locations**, observed. None is a Gexbot node (`SG Ch. 10`; `SG Ch. 11`: structure ≠ leftover). A node near one of them is confluence only if the leftover bar *stands out on today's ladder* (`SG Ch. 11`, confluence bias). Tape constructions carry no claim label; they are observed. The label attaches to any sentence about what sits at them.

**Prior-day futures RTH (09:30–16:15)**

- **PDH / PDL** — prior futures-RTH high / low.
- **PDC** — prior futures-RTH close (the **16:15** print, not the 16:00 cash close, unless the prep sheet writes the cash close as a *second* object).
- **PDM** — prior-day middle: `(PDH + PDL) / 2`. Not PDC.
- **PD-VWAP** — VWAP of prior futures RTH, and **k·σ bands**, **k ∈ {1, 2}**. Bands are Playbook-native; the Study Guide names session VWAP (`SG Ch. 11`, S5) and does not name σ bands.

**GX (16:15–09:30)**

- **GXH / GXL** — Globex high / low.
- **GX-VWAP** — VWAP of 16:15–09:30, and its k·σ bands. The 17:00–18:00 halt contributes no volume. Freeze a working GX-VWAP at 09:30 for the sitting.

**Today's futures RTH**

- **RTH-VWAP** — VWAP of today's futures RTH (09:30–16:15 clock, observed only through 11:00 in this sitting), and its k·σ bands. **Not knowable at 09:00–09:30.** Prefer 09:45+ before aiming at it. `SG Ch. 11` S5: VWAP is not an automatic target; a DEX/convexity transition zone (H7) in front of it is the nearer pressure-end.

**Daily level** — the through-line: a price the daily chart has turned at more than once (`SG Ch. 10`).

Do not import a methodology's named VWAP system as if it were a Gexbot object. Write "PD-VWAP +1σ."

## Day filter (locked): six GX-vs-PD geometries

Sit **only** mornings that match exactly one of the six. A GX print *at* a PD extreme is a test of it, so it counts as reaching the extreme (≥ / ≤), not as inside; a print at PDH or PDL is therefore an overlap, never a gap. The six are exhaustive and mutually exclusive under these inequalities:

1. **GX is inside** — GXH < PDH **and** GXL > PDL. GX half of `SG Ch. 10` compression lean. Do not finish E1 until the fifteen-minute RTH range exists.
2. **GX overlaps up** — GXH ≥ PDH **and** PDL < GXL ≤ PDH.
3. **GX gaps up** — GXL > PDH.
4. **GX overlaps down** — GXL ≤ PDL **and** PDL ≤ GXH < PDH.
5. **GX gaps down** — GXH < PDL.
6. **GX extends both sides** — GXH ≥ PDH **and** GXL ≤ PDL. In sample. Not inside, not two overlaps glued together, not a gap. Ch. 10's two leans do not name it. Live question at 09:30: which *side* RTH inherits, and whether leftover later sits at PDH, PDL, PDM, or neither.

Check before locking: every (GXH, GXL) pair lands in exactly one row. If a morning seems to fit two, the inequalities were misread, not the morning.

Ch. 10's continuation lean covers 2–5 as "displaced." The Playbook does **not** treat those four as one read. Geometry 6 is a third family: range *expansion in GX*.

Name the tentative geometry at 09:00; confirm or rename at 09:30 if the last minutes reprint an extreme.

09:00–09:30 is character, not a new geometry: where GX extremes printed (including whether they printed in the 16:15–17:00 tail or at an 08:30 release); expanding vs rotating; price vs PDM, PDC, PD-VWAP, GX-VWAP, nearest k·σ; daily level or Classic mountain on the inherited path; VXX path; Mag7 vs SPY only if extended-hours prints exist.

A geometry is a day-gate and a lean. It is not a day-type (`SG Ch. 11` S7 / S8) and not an entry.

## Context layers

Not leftover. Not a 2×2. May support or contradict a lean. May not attach a pressure word, fill a geometric slot, or replace H12.

### VXX

Traded note on short-term VIX futures — not VIX, not 0DTE IV, not a Gexbot object (*market-general*). `SG Ch. 11` / `SG Ch. 12`: VIX must not tag the falling-vol / rising-vol map; that map is H12. VXX inherits the same refusal (plus roll / curve).

**Its own clock.** VXX trades regular hours 09:30–16:00 and extended hours around them; it does not trade overnight. It has no 16:15 print and no true GX range. Every VXX comparison names VXX's own reference (its 16:00 close, its extended-hours range) and never borrows the futures clock.

May evidence GX / pre-open vol *character*, and after 09:30 may agree or disagree with H12. Disagreement is a stand-down on wall vs fuel, not a vote for VXX.

Must not replace H12, be a node/target/stop, or transfer onto NQ unrenamed (`SG Ch. 6`).

Metric: one, picked in Decisions and written on the prep sheet. Do not carry two VXX sentences.

### Breadth = Mag7 vs SPY

Not TICK, not ADD. One sentence: are the Magnificent Seven **leading**, **mirroring**, or **lagging** SPY?

**Basket:** AAPL, MSFT, NVDA, AMZN, META, GOOGL (not both share classes), TSLA. Equal-weight the seven for the lead/lag call unless the prep sheet says cap-weight. One name is not the basket.

- **Leading** — Mag7 made the equivalent extreme *before* SPY, or Mag7 is through the mapped level while SPY is not. Basket, not one name.
- **Mirroring** — same geometry or same test within a stated lag. Four of seven against SPY breaks the mirror.
- **Lagging** — SPY is at or through; the basket has not confirmed.

Clock: 09:00–09:30 is often **not knowable** (extended-hours only). Do not proxy with NQ vs ES (`SG Ch. 11` S10 is a different object). 09:30–11:00 is the live RTH sentence; rewrite when the state changes.

May withdraw a lean. Must not name a 2×2, a pressure word, leftover, a stop, or "the dealer."

## Term collisions with the Study Guide

The Playbook reuses the reader's vocabulary. Where its object differs from a taught term, it uses a different word and says so once. The memo carries this table; the inventory pass completes it.

| Study Guide term (where taught) | What it means there | Playbook object | Playbook word |
|---|---|---|---|
| **morning card** (`SG Ch. 13`, Drill 1) | Straddle-derived expected move for the day, hour, five minutes | Pre-09:00 level and clock sheet | **prep sheet**; may cite the morning card's expected move as near/far |
| **early session** (`SG Ch. 13`) | 09:30–11:30 study window | — | not used |
| **early window** (`SG Ch. 10`) | 09:29–11:00 claim clock | The RTH room | **early window**, unchanged |
| **gap** / **fill** (`SG Ch. 10`) | Cash open away from yesterday's close; path back is the fill | GXL > PDH or GXH < PDL | **GX gaps up / down**; a GX gap implies a Ch. 10 gap, not the reverse. E3's fill path is still the Ch. 10 object |
| **overnight structure** (`SG Ch. 10`) | High/low while cash was closed, plus the pre-market range | 16:15–09:30 range with a locked start | **GX**, **GXH / GXL**; the character box replaces "pre-market range" |
| **prior-day extreme** (`SG Ch. 10`) | Cash-hours 09:30–16:00 high/low/close | Futures-RTH 09:30–16:15 | **PDH / PDL / PDC**, with the offset written |
| **VWAP** (`SG Ch. 11`, S5) | Session VWAP as a tape location | Three clocks plus σ bands | **PD- / GX- / RTH-VWAP ±kσ** |
| **opening range** (`SG Ch. 10`, fifteen minutes; `SG Ch. 11`, thirty to sixty) | As taught | As taught | unchanged; the Playbook adds no third box |

## What the Playbook may claim

**May:** cite SG chapter + object; assemble a day-walk under one of the six geometries; write a play — preconditions, tape trigger, dual-falsifier invalidation, four-slot management, stand-downs, review — once a read is nameable; instruct the reader in the imperative; express risk in R; name Playbook-native handles (six geometries; GX 16:15–09:30; futures RTH 09:30–16:15; PDM; PD/GX/RTH-VWAP and k·σ; VXX tag; Mag7-vs-SPY states; the four slots) and define each once in `playbook/reference/terms.md`.

**May not:** invent a Gexbot mechanism or H16; soften a label, pressure word, stand-down, or guardrail; resolve a Guide stand-down into a trade; restate a SG lesson in full; give a hit rate, expectancy, or win rate without a measured sample (N, dates, instrument, definition of hit); write dollars, contracts, or percent of account; trigger on a color, ping, ladder redraw, VXX tick, breadth print, or VWAP touch; treat Gexbot as the market; pool the two rooms with the last-hour family; write geometry on Grade A/B or before 09:30; use VXX/VIX as H12; use Mag7-vs-SPY as leftover; aim at a VWAP/σ band when H7 sits in front (`SG Ch. 11` S5); call a populated strike under PDM or +1σ a confluence node; use any retired session name.

Claim labels remain mandatory on mechanism sentences: docs / market-general / folklore / inferred / not stated. Pressure words remain: mandate · incentive · none · unknown. The reader is instructed, never "forced"; the dealer's mandate is the only forced pressure.

Citation form: `SG Ch. N (Title), <object>`.

## Job of the memo

From `docs/practice/` (and chapters those pages already require), distill the Daily-Level Lens, restricted to the six geometries and the 09:00–11:00 sitting.

Decision output: given a marked daily level, a named geometry, the VWAP-family map, a Mag7-vs-SPY state (or "not knowable"), and a clock — the play says which screen may speak, which pressure word is legal, what the trigger is, where the invalidation maps to a price, the four slots in R, or stand down and why. The memo distills the Lens; the plays in `playbook/plays/` carry it in the ten-section card.

## Inventory (cite, do not reinvent)

At minimum check:

- Ch. 6 — basis; converted ruler; transfer rules (SPX folklore does not copy onto NQ unrenamed)
- Ch. 7 — knowability; clock families
- Ch. 8 — H4, H7, H10, H11, H12, H13; H5 only to name what is *outside* the sitting
- Ch. 9 — journal line; stops attach to Gexbot objects; acceptance through / failure to take; unmapped ATR width → do not trade it; target is the node for pin cells, next opposing stack for expansion
- Ch. 10 — daily level; prior-day extreme (SG cash 09:30–16:00 vs Playbook futures RTH 09:30–16:15 — write the offset); overnight structure (Playbook name **GX**, start **16:15**); gap and fill; PDC as the 16:15 futures close; opening auction; re-marking; compound zone; grades A/B/C; phase table; E1–E6; two leans (map 1–5; geometry 6 has no E-number). E5 applies in any geometry whenever RTH opens beyond GXH/GXL; E6 whenever a fifteen-minute edge lands on a Classic major
- Ch. 11 — S1; six-field rule; combination order; dual falsifier; confluence bias; strike-spacing; same-print stacking; S3/S4 as the post-early forms of E2/E3; S5; S7/S8; S9 outside the sitting; S10 cousin of Mag7-vs-SPY; partial picture
- Ch. 12 — guardrail pairs: Grade A ≠ wall; charting level ≠ node; no node ≠ no pressure; VIX ≠ H12; daily level does not decide this morning
- Ch. 13 — horizon mismatch; morning card as near/far, not a stop; Stage 1–2 gates; the 09:30–11:30 early session as a term the Playbook does not use

Then four lists: cite and point / assemble / Playbook-native / out of sample.

## Memo shape

### 0. Course shape

Working title, object, prerequisite gate, two-course sentence, clocks (futures RTH 09:30–16:15; GX 16:15–09:30), day filter, SG cash-hours offset, term-collision table, what Ch. 13 still forbids, what this course will write that Ch. 13 would not.

### 1. Preparation — the prep sheet (before 09:00, then 09:00–09:30)

Mark daily levels; PDH, PDL, PDM, PDC; PD-VWAP ±1σ, ±2σ; GXH, GXL; working GX-VWAP ±kσ (freeze at 09:30). Scheduled releases (08:30 inside GX; 10:00 inside the RTH room). Tentative geometry or stand down. Classic location only (Grade A). Today's basis. Strike-spacing width. VXX path on its own clock. Mag7-vs-SPY or not knowable. No pressure word other than unknown, no SL/BE/scale/target, no RTH-VWAP before 09:30.

### 2. Screen × clock matrix

Gexbot screens plus VXX, Mag7 vs SPY, PD/GX/RTH-VWAP families. Columns: layer, clock, what it can evidence, what it cannot, legal pressure word, knowability gate, claim label of any mechanism sentence about it, SG cite or Playbook-native.

### 3. Preconditions

Exactly one geometry locked at 09:30. Then Ch. 11 six fields in Ch. 11's order. H12 (not VXX) before wall/fuel. H13, H11, Grade C vs confluence bias. VXX / Mag7 / VWAP are context; contradiction stands the lean down. No geometric slot before leftover, and never before 09:30.

### 4. Safeguards

Grade A ≠ wall; Grade B ≠ reversal; full-group mountain does not decide this morning; confluence bias under PDM/PDC/σ bands; same-print stacking; re-marking vs flow; alert = touch; no node ≠ no pressure; NQ transfer; last-hour outside sitting; unmapped width is not a stop; no add into rising gamma; horizon mismatch; VXX/VIX ≠ H12; Mag7 ≠ leftover; one name ≠ basket; 09:00–09:30 cannot name wall/fuel; do not finish E1 from "GX is inside" alone; do not fade PDH on gaps-up; do not treat geometry 6 as two overlaps; S5 zone before VWAP; do not take PD extremes on cash 09:30–16:00 when the Playbook clock is futures 09:30–16:15; 16:00–16:15 futures prints are RTH, not leftover; 17:00–18:00 is a halt inside GX, not a second session; VXX has no futures clock.

### 5. Approach protocol

Levels → tentative geometry → 09:00–09:30 character → lock or sit out → RTH open → RTH-VWAP starts → Grade A/B/C → H12/H13 → Mag7-vs-SPY RTH → E/S read → dual falsifier → geometry writable → tape trigger (`SG Ch. 13` supplies *when*).

Walk each geometry as its own family:

- **Inside** — E1 stall only at Grade-C customer-long leftover in falling vol (H12) at an edge / daily level / standout bar at PDM or a PD-VWAP band.
- **Overlaps** — pierced PD extreme is reclaim-or-checkpoint; PDM / PD-VWAP inside the overlap are not automatic fades. E5 if RTH opens beyond the GX extreme.
- **Gaps** — PD extreme behind price (E2 / E3). Live objects ahead. PDC / PD-VWAP may sit on a fill path. Classic or PD-VWAP alone is not a fade.
- **Extends both sides** — no E-number. Wait for inherited side, Mag7 lead/lag, Grade-C leftover at that edge, PDM, or GX-VWAP. Until then, location only.

### 6. Watch vs ignore

Name the object, not the color. VXX + VIX + H12 are not three vol confirmations. PD-VWAP + PDM + PDC on one strike are not three targets.

### 7. Dual falsifier

Per geometry, stall vs break: acceptance through / failure to take (`SG Ch. 9`; grain = pre-written strike spacing); leftover sign flip, vanish, or day-type rename. VXX or Mag7 contradiction is a stand-down, not a second stop. Write the falsifier before 09:30.

### 8. Trade-management geometry (Playbook-native; *inferred*; four slots)

Only after leftover exists, and only after the invalidation is written. Risk in R; no contracts, dollars, or percent of account. `Hit rate: not measured` until a sample exists.

- **SL** — the Ch. 9 falsifier mapped to a price. A k·σ band may be the tape level of the read; it may not be an ATR cushion.
- **Break-even** — only when the original falsifier is no longer the nearest live object (first opposing node / H7 zone / completed failed break / next named tape object with leftover unchanged). Not a ping, VXX tick, Mag7 spike, or "touched VWAP."
- **Scale-in** — same read still nameable; Grade C / S1 + H12; later clip only if leftover thickens (Orderflow, not re-marking). Never through the falsifier, never at Grade A/B, never into rising gamma at the strike.
- **Targets** — partial at the nearest pressure-end (node, or next stack / H7, whichever is first; then next tape object on the path). Remainder trails the next named leftover object or leftover event, not a tick trail or "ride the VWAP band." Sitting ends at 11:00; no inheritance into S9.

### 9. Worked cases

Six short walks, one per geometry. Canonical toy (index ~6000) plus a 09:10 character clock. Each walk shows the PD/GX/VWAP map, VXX, Mag7-vs-SPY or "not knowable," grades, H12 vs VXX, dual falsifier, four slots or `not stated`. Geometry 6 must not look like 1 or like 2+4 glued together. Every number is round, carries its unit, and is reconstructable in three arithmetic steps.

### 10. Proposed Playbook outline

The file list for `playbook/`: `README.md`, `reference/terms.md`, `reference/clocks.md`, and `plays/NN-<slug>.md` — one play card per geometry, plus any shared card (prep sheet; stand-down list) that every play cites. Flag anything that would force a Study Guide edit. Default: leave the Guide untouched. Note the publishing decision as open.

## Output shape of the memo

1. Preconditions and blockers resolved or restated
2. Inventory (cite / assemble / Playbook-native / out of sample)
3. Term-collision table
4. Course shape (§0)
5. Daily-Level Lens (§1–9), including the six-geometry walks
6. Proposed Playbook outline (§10)
7. Open slots marked `not stated`
8. What this memo will not put in either course

Voice: second person, imperative where the play instructs. Stand-down first; trigger second; geometry third. A trigger is a tape event; a color, ping, unsigned mountain, VXX tick, Mag7 print, or VWAP band is never a reason to click.

## Acceptance checks (memo is not done until these pass)

- Every mechanism sentence carries exactly one label; every pressure word is one of the four; *forced* appears only beside mandate.
- No **docs** label while `20260910_gexbot_study.md` is absent.
- No retired session name (ON, ONH, ONL, ON-VWAP, ETH, ETHH, ETHL, ETH-VWAP, PMH, PML).
- No "morning card" for the prep sheet; no "early session" for the RTH room.
- Every `SG Ch. N` cite names a chapter object that exists on that page (E-, S-, H-numbers, grades, phases, guardrails).
- Every (GXH, GXL) toy pair in §9 lands in exactly one geometry row.
- Every instruction to act follows its written invalidation; every trigger is a tape event; every SL is an object; every size word is in R.
- No hit rate, expectancy, or win rate without a measured sample; otherwise `not measured`.
- No file under `docs/**`, `src/**`, or `sidebars.ts` changed.

## Constitution (do not soften)

- `playbook/**` is governed by `playbook-charter.mdc` and `playbook-play.mdc`. The textbook rules bind there only through what the charter names.
- Claim labels bind every mechanism sentence the Playbook cites or extends; pressure words stay the four; the reader is instructed, never forced.
- Source of truth for Gexbot: `20260910_gexbot_study.md`.
- Empty slots stay `not stated`.
- PDM stays `(PDH + PDL) / 2` unless a later edit changes it.
- Futures **RTH** is **09:30–16:15**. **GX** (Globex) is **16:15–09:30**. Do not write ON, ONH, ONL, ON-VWAP, ETH, ETHH, ETHL, ETH-VWAP, PMH, or PML.
- `SG Ch. 10` cash-hours PD (09:30–16:00) is a different clock; write the 15-minute offset when the two disagree.
