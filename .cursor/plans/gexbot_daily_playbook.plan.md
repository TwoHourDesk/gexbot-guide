---
name: Gexbot Daily Playbook
overview: Design a companion trading playbook under `playbook/`, governed by its own rules (playbook-charter.mdc, playbook-play.mdc). It cites the Gexbot Study Guide and writes the decision for one situation — approach to a tradeable level (PDH/PDL first, then significant daily levels) on a morning whose Globex range is inside or overlaps the prior futures-RTH range — as two plays. Every other marked line (PDM, PDC, the VWAP families, GXH/GXL, range edges) is a reading line that feeds an intent sentence — what the market is attempting to do — and is never a stop or a reason. The trigger is Arm / Route / Fire / Manage: an exceptional signed Gexbot residual within reach arms a destination; the tradeable levels between price and it are launch or checkpoint; a tape event fires; the node is the target. Folklore is a legal basis, labeled and measured. Trades go with the direction field of the forced-flow sentence, never against it. The plays carry (Inside; Overlap up/down mirror) with a stated hypothesis, hard/soft gates, tape trigger, dual-falsifier invalidation, four-slot management in R, an occurrence log, and a promotion ladder. Entries in the 09:30–11:00 early window; management continues on the renamed S-read; no flat-at-11:00. Gaps and extends are classified and logged, not traded. First deliverable is a course memo at `playbook/00-course-memo.md`.
todos:
  - id: rules
    content: Write `.cursor/rules/playbook-charter.mdc` and `playbook-play.mdc` (globs `playbook/**`); add the scope clause to `audience.mdc`; extend both rules with hypothesis, hard/soft gates, feasibility gate, occurrence log, risk envelope, promotion and change control
    status: completed
  - id: preconditions
    content: Confirm `20260910_gexbot_study.md` is on disk (cited by the repo but absent); create `playbook/` with the charter layout including `reference/risk.md` and `reference/system.md`
    status: pending
  - id: inventory
    content: Inventory Study Guide objects the Playbook may cite (Ch. 6–13); four lists — cite / assemble / Playbook-native / out of sample — with `SG Ch. N (Title), <object>` for every cite
    status: pending
  - id: collisions
    content: Write the term-collision table (morning card, early session vs early window, gap vs GX gap, overnight structure vs GX, VWAP vs PD/GX/RTH-VWAP) and the Playbook's chosen word for each
    status: pending
  - id: course-shape
    content: Write §0 course shape — two-course sentence, reader gate, clocks, cash-hours offset, six-way classification with two in-sample families, what Ch. 13 still forbids, what this course writes that Ch. 13 would not
    status: pending
  - id: levels
    content: Lock the tradeable class (PDH/PDL; significant daily levels by the §11 definition; options-complex levels; compound zones) and the reading-line class; write the intent-sentence format and its soft-gate contradiction rule
    status: pending
  - id: trigger
    content: Write the Arm / Route / Fire / Manage trigger — destination hypothesis (folklore, with control and reach base rate), launch vs checkpoint levels, fire events with grain and entry-location class, "with the direction field" as a hard gate
    status: pending
  - id: system-layer
    content: Write §11 — hypothesis line per play, occurrence-log schema with level class, intent sentence, and control column, base rates to measure, hard/soft gate split, operational definitions (significant daily level, standout, acceptance grain, contradiction), feasibility gate, risk envelope
    status: pending
  - id: lens
    content: Distill the Daily-Level Lens §1–§8 — prep sheet, screen×clock matrix, preconditions, safeguards, approach protocol, watch vs ignore, dual falsifier, four-slot geometry without a clock cap
    status: pending
  - id: context-layers
    content: Lock VXX as vol context on its own clock (never H12) and Mag7-vs-SPY as breadth; both soft gates in Stage L/P; pick and write the one VXX metric and the contradiction definitions
    status: pending
  - id: worked-cases
    content: Three traded walks (inside; overlap up; overlap down) and two stand-down walks (a gap; an extends) with the occurrence-log row each would produce
    status: pending
  - id: promotion
    content: Write §12 — promotion ladder (log-only → paper → live 1R → scaled) with N thresholds, kill criteria per play, change control, system-level falsifier
    status: pending
  - id: outline
    content: Propose the file list for `playbook/` — two play cards plus shared cards (prep sheet, stand-down list, risk, system); flag anything that would force a Study Guide edit
    status: pending
  - id: conformance
    content: Run the acceptance checks — labels, pressure words, retired names, tape triggers, size in R, every gate marked hard or soft, feasibility gate present, every SG cite resolves, no `docs/**` change
    status: pending
isProject: false
---

# Gexbot Daily Playbook

A companion trading playbook. Not a pivot, rewrite, or extra chapter of the Gexbot Study Guide.

The Playbook lives at `playbook/` and is a **decision document**: it writes plays the reader executes, and a **system layer** that measures whether the plays deserve to exist. It is governed by `.cursor/rules/playbook-charter.mdc` and `.cursor/rules/playbook-play.mdc`. The textbook rules (`audience.mdc`, `textbook-prose.mdc`, `textbook-operations.mdc`) do not apply inside `playbook/**` except for what the charter names: claim labels, pressure words, the Gexbot source of truth, and Gexbot as lens not market.

The Playbook **references** the Study Guide. It may cite, point, and attach. It may not restate a Study Guide lesson as if it were original, and it may not add a Gexbot mechanism, screen, or update the Study Guide does not already carry.

First deliverable: a **course memo** at `playbook/00-course-memo.md`. Do not edit Study Guide pages in that pass.

## Decisions

### Locked

- Location `playbook/`; layout per `playbook-charter.mdc` (`README.md`, `00-course-memo.md`, `plays/`, `reference/{terms,clocks,risk,system}.md`, `cases/`).
- Governance: `playbook-charter.mdc` and `playbook-play.mdc`. Every play uses the eleven-section play card.
- **Encodable by construction.** The Playbook is written to be executed by a trader by hand and by a program without translation. Every gate, trigger, invalidation, management slot, definition, and log column is a **predicate over named inputs** with a type, a unit, a threshold, and a clock at which it is evaluated. Every categorical value comes from a closed enumeration in `reference/system.md`. Every play carries a machine-readable **spec block** (YAML, in the play file, under the header) that states the play in those predicates; the prose explains the spec and never adds a condition the spec lacks. Definitions in `reference/*.md` are tables — name · inputs · parameters (default, unit) · procedure · output type — not paragraphs. Parameters are named so they can be swept, and the tested-parameter list is exactly the set of named parameters. Free text is confined to two fields (the intent sentence, the exit note) and each sits beside coded fields that carry the same content. Reason: a condition a program cannot evaluate is one two traders will evaluate differently, and one the bench cannot test.
- The Playbook writes the decision: hypothesis, preconditions, trigger, invalidation, management, exit, review. Imperatives to the reader are its voice.
- **In-sample geometries: 1 (inside), 2 and 4 (overlap up / down).** Two plays: **P1 Inside** and **P2 Overlap** (up/down as a mirror pair, direction logged). Geometries 3, 5, 6 are classified every morning, logged as occurrences, and stood down. They are not traded in this version.
- **Trigger shape: Arm / Route / Fire / Manage.** *Arm*: an exceptional signed residual within the remaining-window expected move is written as the destination the market is attempting to reach. *Route*: tradeable levels between price and it are launch (held, turned toward) or checkpoint (accepted through). *Fire*: one tape event, in the direction of the destination. *Manage*: the node is the target (`SG Ch. 9`), partial earlier if an H7 zone sits in front (S5).
- **Folklore is a legal basis for a play.** The label stays on the sentence, the hypothesis line names it, and the occurrence log is how it earns or loses its place. Labels classify evidence; they do not rank what may be traded. `not stated` Gexbot *mechanism* slots stay empty — folklore may say what price does at a node, never what Gexbot computes.
- **With, never against.** The play's direction equals the **direction** field of the Guide's forced-flow sentence (actor · pressure · trigger · direction · venue) at the node that armed it. That is the operational meaning of "trade with the large positions, not against them." Gexbot does not tag participants; size relative to today's ladder, signed by State, is the observable that stands in for "institutional."
- **Tradeable class widened.** A strike carrying an exceptional Grade-C node is a tradeable level in its own right (an *options-complex level*), logged as its own class so "chart level + node" versus "node alone" is measured, not assumed.
- **Entry location.** At a tradeable level (launch or checkpoint), *or* at a structural confirmation on the path (an opening-range break or acceptance through a reading line toward the destination), provided the destination is a tradeable level carrying a Grade-C node. `entry-location class` is a log column.
- **Clocks.** Prep room 09:00–09:30 ET. **Entry window 09:30–11:00** — `SG Ch. 10`'s early window; no entry after it, because that is where the Guide's knowability clock ends and the plays' preconditions are defined on it. **No flat-at-11:00.** At 11:00 the E-read is renamed to its S-form (`SG Ch. 10`: rename or drop) and management continues under the day-type family. A play never crosses into the last-hour family (`SG Ch. 11` S9); see Open for the boundary.
- Futures **RTH 09:30–16:15**; **GX 16:15–09:30**; halt 17:00–18:00 sits inside GX.
- PD extremes on the futures-RTH clock. `SG Ch. 10` cash-hours (09:30–16:00) offset is written whenever the two disagree.
- PDM = `(PDH + PDL) / 2`. PDC = the 16:15 futures print.
- VWAP family: PD-VWAP, GX-VWAP, RTH-VWAP, each with k·σ bands, **k ∈ {1, 2}**, frozen before the sample starts.
- Context layers: VXX (vol character) and Mag7-vs-SPY (breadth). Neither attaches a pressure word. Both are **soft gates** until the log says otherwise.
- Trade-management geometry is **four slots**: SL · break-even · scale-in · targets (partial, then trail). *Inferred*, and only after leftover exists and the invalidation is written.
- **Risk in R** (entry-to-SL distance). No contracts, dollars, or percent of account. The risk envelope in `reference/risk.md` sits above every play.
- **Every occurrence is logged**, traded or not. The sample unit is the occurrence (all hard gates true), not the trade.
- Every play carries a **hypothesis line**, a **version**, a **kill criterion**, and a **promotion stage**. The Playbook carries a **system-level falsifier**.
- Retired names: ON, ONH, ONL, ON-VWAP, ETH, ETHH, ETHL, ETH-VWAP, PMH, PML.
- The Playbook's preparation page is the **prep sheet**. It is not `SG Ch. 13`'s **morning card** (Drill 1, a straddle card); the prep sheet cites the morning card's expected move as the yardstick for the feasibility gate.

### Open (need the user; default in parentheses)

- **Management boundary.** The Guide says nothing from S1–S8 carries into the last hour; the Playbook does not own S9. (Default: position flat, or the play formally handed to a future last-hour play, **before 15:00**. This is a family boundary inherited from `SG Ch. 11`, not a Playbook clock cap. If you want to hold through the close, a third play that owns S9 has to exist first.)
- **Publishing.** Plain Markdown in `playbook/`, or a second Docusaurus docs plugin instance at route `/playbook`. (Default: plain Markdown until the first play is written.)
- **VXX metric.** (Default: VXX vs its own 16:00 regular-session close, plus 09:00–09:30 slope as the character sentence. VXX has no 16:15 print and does not trade 20:00–04:00.)
- **Mag7 weighting.** (Default: equal-weight for the lead/lag call.)
- **Operational definitions**, Playbook-native, frozen before the sample starts (defaults in §11): significant daily level (lookback, touch count, cap per side); exceptional residual (size class for arming); standout bar; acceptance grain; entry location; VXX, Mag7, and intent contradiction.
- **Spec block format.** YAML inside each play file, or one YAML file per play beside it. (Default: inside the play file, under the header, so prose and spec cannot drift apart unnoticed; the schema lives in `reference/system.md`.)
- **Risk envelope numbers** (defaults in §11): daily R budget; re-entries; scale-in cap.
- **Promotion thresholds** (defaults in §12): occurrences per stage; kill N.
- **Software and research bench.** Separate workstreams, outlined in `gexbot_playbook_software_outline.plan.md`. This plan only requires that the Playbook's definitions, log schema, and change control are the ones they consume, and that the live tool stores every Gexbot observation with receipt time from day one.

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

**Gexbot Daily Playbook** (`playbook/`). A futures playbook for one recurring situation: price approaching a **tradeable level** — PDH/PDL first, then a significant *daily level* (`SG Ch. 10`) — on a morning whose Globex range is inside or overlaps the prior futures-RTH range. Two plays. Entries in the early window; management on the renamed S-read. Every other line on the chart is there to answer one question before the level is reached: what is the market attempting to do?

Chapter 13 is the Study Guide's syllabus for *after* the book. It still writes no entry. The Playbook is the course that chapter points toward, with a narrower object and the licenses Chapter 13 withheld: a trigger, a stop, and management, written as a procedure the reader executes — and Chapter 13's own Drills 2 and 4 turned into the Playbook's measurement layer. Inherit Chapter 13's horizon mismatch: Gexbot decides *which* plays are live today; the tape decides *when*. A click because a bar printed inverts the layers.

**The structural bet, owned.** `SG Ch. 13` Part 3: dealer-hedging effects are measured at daily and last-half-hour horizons; the morning is where the literature finds the least. This Playbook builds in that window. That is its primary risk, it is written on the README, and the system-level falsifier in §12 is how the Playbook can be wrong as a whole.

## Reader and gate

Same reader as the Study Guide: an index-futures trader (ES or NQ) who thinks in points and ticks and treats a level as a hypothesis until price accepts through it. They have finished the Study Guide through Chapter 12. Chapter 13's Stage 1–2 gates are recommended, not assumed.

Every reader starts at **Stage L (log-only)**. The plays are not live for anyone on day one, because the sample does not exist yet.

**Stance.** The reader is not afraid to trade on folklore. What they want from Gexbot is two things: where the options complex has placed its levels of significance, and where exceptionally large positions sit, signed. They trade *with* those positions. In the Guide's grammar that means: the destination is a signed node whose size stands out on today's ladder; the play's direction is the direction field of the forced-flow sentence at that node; and the reader never sells into a node whose sign and regime say fuel, never buys into one whose sign and regime say wall from the wrong side. The label on the mechanism sentence is kept because it tells the reader *what kind of bet* they are making, not whether they may make it.

Not the reader: someone who has not learned the 2×2, pressure words, or level grades; a signal-chaser who wants a color to buy or sell; a reader who wants a hit rate before their own sample exists.

The Playbook stays useful to a reader who never trades an option. Do not pull Chapter 14 into the prerequisite.

## Clock the Playbook owns (locked)

Three rooms, not pooled:

| Room | Clock | Job | What may speak | What may not |
|---|---|---|---|---|
| Prep | 09:00–09:30 | Read GX *character* (16:15–09:30); classify the geometry; stand down if 3, 5, or 6 | Futures tape (ES/NQ); Classic OI re-marked to overnight spot (location; pressure **unknown**); VXX on its own clock; GX-VWAP and bands; Mag7 vs SPY only if extended-hours prints exist | State leftover, Orderflow sequences, H12, RTH-VWAP, cash Mag7/SPY as if RTH were open, any pressure word other than **unknown**, any geometric slot |
| Entry window | 09:30–11:00 | Daily-level approach under P1 or P2; the only room in which a trigger may be acted on | Everything `SG Ch. 10` Phases 1–3 allow, plus VXX, Mag7-vs-SPY breadth, RTH-VWAP as it builds | Entries before Grade C; the last-hour family; a 09:00 thesis carried unchanged through the auction |
| Management | 11:00 → boundary | Manage an open position under the renamed S-read (E1→S8/S1; overlap → S1/S2/S3) | S1–S8 objects; trail on the next named leftover object or event | New entries; S9 objects; carrying the E-name past 11:00 |

The **early window** is `SG Ch. 10`'s term (09:29–11:00). Do not use `SG Ch. 13`'s **early session** (09:30–11:30).

09:00–09:30 is Phase 0 made into a working room. It does not make leftover nameable earlier. `SG Ch. 10`: a level can be observed at any minute; it carries a pressure word only once State has leftover at that strike.

Scheduled releases: an 08:30 print sits inside GX and is part of GX character; the prep sheet notes it. A 10:00 print sits inside the entry window; the 09:45–10:00 read is provisional (`SG Ch. 10`) and every ladder re-marks at the print. A 14:00 statement sits inside the management room and re-tags H12 (`SG Ch. 11`, event day).

## Session clocks for levels (locked)

Write these before 09:00. Do not mix them.

| Name | Clock (ET) | What it is |
|---|---|---|
| **Prior RTH / PD** | **09:30–16:15** yesterday | **Futures** regular trading hours, not cash 09:30–16:00. PDH, PDL, PDC, PDM, and PD-VWAP are taken on this clock. |
| **GX** | **16:15–09:30** | Globex: from the futures RTH close into the next futures RTH open. Playbook-native name. This is `SG Ch. 10` overnight structure with the start locked at **16:15**. |
| **Halt inside GX** | 17:00–18:00 | CME maintenance. No prints. Still GX, not a second session and not a hole that splits GXH/GXL. |
| **Character box** | 09:00–09:30 | Last thirty minutes of GX. Used for *how* GXH/GXL were printed. Does not redefine GXH/GXL. |
| **Today's RTH** | 09:30–16:15 | Today's futures RTH. RTH-VWAP and Mag7/SPY RTH breadth live here. Entry window is its first ninety minutes; management continues to the boundary. |

**Offset from the Study Guide.** `SG Ch. 10` takes prior-day extremes on **cash** hours (09:30–16:00). The Playbook takes them on **futures RTH** (09:30–16:15): a 15-minute **longer** PD and a 15-minute **later** GX start. Write both clocks when a cash 16:00 close and a futures 16:15 print disagree. Gexbot leftover remains a cash-hours object; 16:00–16:15 futures prints are not leftover.

Map futures prices to index strikes through *today's* basis (`SG Ch. 6`).

## Tracked tape objects (locked): two classes

All of these are **tape locations**, observed. None is a Gexbot node (`SG Ch. 10`; `SG Ch. 11`: structure ≠ leftover). A node near one of them is confluence only if the leftover bar *stands out on today's ladder* (`SG Ch. 11`, confluence bias; operational definition in §11). Tape constructions carry no claim label. The label attaches to any sentence about what sits at them.

### Tradeable levels (a play may be entered here, and only here)

- **PDH / PDL** — prior futures-RTH (09:30–16:15) high and low. **Primary.** Marked every day; every test is an occurrence row whether or not Grade C forms.
- **Significant daily level** — a price the daily chart has turned at more than once across days or weeks (`SG Ch. 10`), made operational in §11 so two readers mark the same ones. Usually near a round number; often under a Classic open-interest mountain, which is full-group context and not a pressure word (`SG Ch. 10`).
- **Options-complex level** — a strike carrying an **exceptional** Grade-C node (§11 size class): a signed State major that stands out on today's ladder, mapped through today's basis to a futures price. This is what "a level of significance from the options complex" means here. It is a tradeable level whether or not a chart level sits at it. Before State signs it, the same strike on Classic is a Grade-A location, owner unknown; it may be *assumed* as a destination in the prep room and becomes a tradeable level only when State signs it.
- **Compound zone** — a chart level (PDH/PDL or daily) within strike spacing of an options-complex level or of another chart level (`SG Ch. 10`). Highest class. The fifteen-minute-range edge may join the stack as the Guide describes; it does not make a tradeable level on its own.

Level class is a column in the occurrence log: `PDH/PDL` · `daily` · `node` · `compound`. The hypothesis is that class matters and that chart-plus-node beats either alone; the log decides.

### Reading lines (never a stop, never a reason; a `path` fire location at most)

- **PDM** = `(PDH + PDL) / 2`; **PDC** (the 16:15 print).
- **PD-VWAP** ±1σ, ±2σ (bands are Playbook-native; the Guide names session VWAP at `SG Ch. 11` S5 and no bands).
- **GXH / GXL**; **GX-VWAP** ±kσ, frozen at 09:30 for the day. The halt contributes no volume.
- **RTH-VWAP** ±kσ. Not knowable at 09:00–09:30; prefer 09:45+.
- The fifteen-minute and thirty-to-sixty-minute opening-range edges (`SG Ch. 10`, `SG Ch. 11`), except where one joins a compound zone.

Reading lines exist to answer one question, rewritten every fifteen minutes: **what is the market attempting to do?** Which side of PD-VWAP and GX-VWAP price is holding; whether it is accepting above PDM or rotating around it; whether GXH/GXL were taken or defended at the open; whether the range edges are expanding or being rejected. That is the **intent sentence** (§11), in tape words, no pressure word. Once a destination is armed, the sentence names it: which tradeable level price is attempting to reach, and whether the approach reads as a test or a drive. A reading line may be the *place* a fire event prints (an opening-range break, acceptance through GX-VWAP toward the destination) and may name the *price* of a target only where a Gexbot pressure-end (node, stack, H7 zone) sits at it (`SG Ch. 11` S5); it is never itself the reason, and the target is the node.

Do not import a methodology's named VWAP system as if it were a Gexbot object. Write "PD-VWAP +1σ."

## Day classification (locked): six GX-vs-PD geometries, two in sample

Classify every morning. A GX print *at* a PD extreme is a test of it (≥ / ≤), not inside; a print at PDH or PDL is an overlap, never a gap. The six are exhaustive and mutually exclusive:

1. **GX is inside** — GXH < PDH **and** GXL > PDL. **In sample → P1.** GX half of `SG Ch. 10` compression lean. Do not finish E1 until the fifteen-minute RTH range exists.
2. **GX overlaps up** — GXH ≥ PDH **and** PDL < GXL ≤ PDH. **In sample → P2 (up).**
3. **GX gaps up** — GXL > PDH. **Out of sample.** Log; stand down.
4. **GX overlaps down** — GXL ≤ PDL **and** PDL ≤ GXH < PDH. **In sample → P2 (down).**
5. **GX gaps down** — GXH < PDL. **Out of sample.** Log; stand down.
6. **GX extends both sides** — GXH ≥ PDH **and** GXL ≤ PDL. **Out of sample.** Log; stand down. Ch. 10's two leans do not name it.

Every (GXH, GXL) pair lands in exactly one row. If a morning seems to fit two, the inequalities were misread, not the morning.

Why two families and not six: writing six plays asserts that behavior differs across six cells, which is untested, and divides a thin sample by six. Geometry is a **logged feature** on every occurrence. Splitting P2 into up and down, or adding gaps, happens only when the log separates them.

Name the tentative geometry at 09:00; confirm or rename at 09:30 if the last minutes reprint an extreme.

09:00–09:30 is character, not a new geometry: where GX extremes printed (16:15–17:00 tail, an 08:30 release, the character box); expanding vs rotating; price vs the reading lines (PDM, PDC, PD-VWAP, GX-VWAP, nearest k·σ); which tradeable level sits on the inherited path and whether a Classic mountain sits under it; VXX path; Mag7 vs SPY only if extended-hours prints exist. Its output is the first draft of the intent sentence.

A geometry is a day-gate and a lean. It is not a day-type (`SG Ch. 11` S7 / S8) and not an entry.

## Context layers

Not leftover. Not a 2×2. May support or contradict a lean. May not attach a pressure word, fill a geometric slot, or replace H12. **Soft gates** in Stage L and P: a contradiction is logged, not acted on, because blocking on an unmeasured layer means never measuring it. Promotion to hard gate requires the log (§12).

### VXX

Traded note on short-term VIX futures — not VIX, not 0DTE IV, not a Gexbot object (*market-general*). `SG Ch. 11` / `SG Ch. 12`: VIX must not tag the falling-vol / rising-vol map; that map is H12. VXX inherits the same refusal (plus roll / curve).

**Its own clock.** VXX trades regular hours 09:30–16:00 and extended hours around them; it does not trade overnight and has no 16:15 print. Every VXX comparison names VXX's own reference.

May evidence pre-open vol *character*; after 09:30 may agree or disagree with H12. Must not replace H12, be a node/target/stop, or transfer onto NQ unrenamed (`SG Ch. 6`). One metric, picked in Decisions, written on the prep sheet.

### Breadth = Mag7 vs SPY

Not TICK, not ADD. One sentence: are the Magnificent Seven **leading**, **mirroring**, or **lagging** SPY?

**Basket:** AAPL, MSFT, NVDA, AMZN, META, GOOGL (not both share classes), TSLA. Equal-weight unless the prep sheet says cap-weight and why. One name is not the basket.

- **Leading** — Mag7 made the equivalent extreme *before* SPY, or is through the mapped level while SPY is not.
- **Mirroring** — same geometry or same test within a stated lag. Four of seven against SPY breaks the mirror.
- **Lagging** — SPY is at or through; the basket has not confirmed.

Clock: 09:00–09:30 is often **not knowable**. Do not proxy with NQ vs ES (`SG Ch. 11` S10 is a different object). 09:30 onward is the live RTH sentence; rewrite when the state changes.

May withdraw a lean (soft). Must not name a 2×2, a pressure word, leftover, a stop, or "the dealer."

## Term collisions with the Study Guide

| Study Guide term (where taught) | What it means there | Playbook object | Playbook word |
|---|---|---|---|
| **morning card** (`SG Ch. 13`, Drill 1) | Straddle-derived expected move for the day, hour, five minutes | Pre-09:00 level and clock sheet | **prep sheet**; cites the morning card's expected move for the feasibility gate |
| **early session** (`SG Ch. 13`) | 09:30–11:30 study window | — | not used |
| **early window** (`SG Ch. 10`) | 09:29–11:00 claim clock | The entry window | **entry window** (= early window) |
| **gap** / **fill** (`SG Ch. 10`) | Cash open away from yesterday's close; path back is the fill | GXL > PDH or GXH < PDL | **GX gaps up / down** (out of sample); a GX gap implies a Ch. 10 gap, not the reverse |
| **overnight structure** (`SG Ch. 10`) | High/low while cash was closed, plus the pre-market range | 16:15–09:30 range with a locked start | **GX**, **GXH / GXL**; the character box replaces "pre-market range" |
| **prior-day extreme** (`SG Ch. 10`) | Cash-hours 09:30–16:00 high/low/close | Futures-RTH 09:30–16:15 | **PDH / PDL / PDC**, with the offset written |
| **VWAP** (`SG Ch. 11`, S5) | Session VWAP as a tape location | Three clocks plus σ bands | **PD- / GX- / RTH-VWAP ±kσ** |
| **opening range** (`SG Ch. 10`, fifteen minutes; `SG Ch. 11`, thirty to sixty) | As taught | As taught; a reading line unless it joins a compound zone | unchanged |
| **daily level** (`SG Ch. 10`) | A price the daily chart has turned at more than once | Same object with an operational definition (§11) so it is marked the same way twice | **significant daily level**; the Guide's term with the Playbook's test |
| **structure** (`SG Ch. 11`, `Structure:` field) | What price just did at the node, in tape words | What price is attempting across the reading lines, before the node | **intent sentence**; feeds `Structure:`, does not replace it |
| **knowability log / node-touch log** (`SG Ch. 13`, Drills 2, 4) | Reading studies, no outcome | The occurrence log with outcome in R and a control column | **occurrence log**; cites both drills as its ancestors |

## What the Playbook may claim

**May:** cite SG chapter + object; write a play — hypothesis, hard/soft preconditions, tape trigger with time grain and entry location, dual-falsifier invalidation, four-slot management, stand-downs, review row, worked case, not-tested-against; instruct the reader in the imperative; express risk in R; hold and manage past 11:00 under the renamed S-read; name Playbook-native handles and define each once in `reference/terms.md`; report measured figures from the occurrence log with N, dates, instrument, and definition.

**May:** rest a play on a *folklore* mechanism, labeled as such, with the hypothesis line naming it and the log measuring it.

**May not:** invent a Gexbot mechanism or H16; fill a `not stated` mechanism slot with folklore; soften a label, pressure word, stand-down, or guardrail; resolve a Guide stand-down into a trade; trade against the direction field of the forced-flow sentence at the node that armed the play; restate a SG lesson in full; give a hit rate, expectancy, or win rate without a measured sample; write dollars, contracts, or percent of account; put a stop on a reading line, or enter at one except as a structural confirmation on the path to an armed destination that is itself a tradeable level with a Grade-C node; mark more daily levels than the §11 cap allows; enter after 11:00; carry a play into the last-hour family; trigger on a color, ping, ladder redraw, VXX tick, breadth print, or VWAP touch; treat Gexbot as the market; write geometry on Grade A/B or before 09:30; use VXX/VIX as H12; use Mag7-vs-SPY as leftover; aim at a VWAP/σ band when H7 sits in front (`SG Ch. 11` S5); call a populated strike under PDM or +1σ a confluence node; trade geometries 3, 5, 6; edit a live play without restarting its sample; use any retired session name.

Claim labels remain mandatory on mechanism sentences. Pressure words remain the four. The reader is instructed, never "forced"; the dealer's mandate is the only forced pressure.

Citation form: `SG Ch. N (Title), <object>`.

## Job of the memo

From `docs/practice/` (and chapters those pages already require), distill the Daily-Level Lens for P1 and P2, and design the system layer that decides whether P1 and P2 survive.

Decision output: given a marked tradeable level and its class, a geometry in sample, the intent sentence read off the reading lines, a Mag7-vs-SPY state (or "not knowable"), and a clock — the play says which screen may speak, which pressure word is legal, what the trigger is and where entry goes, where the invalidation maps to a price, whether the trade is feasible in R, the four slots, or stand down and why — and in every case, the occurrence-log row.

## Inventory (cite, do not reinvent)

- Ch. 4 — the owner map (customer-long in falling vol → wall candidate; customer-short → fuel) that every hypothesis line rests on; its label
- Ch. 6 — basis; converted ruler; transfer rules
- Ch. 7 — knowability; clock families
- Ch. 8 — H4, H6, H7, H10, H11, H12, H13; H5 only to name what is outside the Playbook
- Ch. 9 — journal line; stops attach to Gexbot objects; acceptance through / failure to take (grain not stated → §11 supplies the Playbook grain); unmapped ATR width → do not trade it; target is the node for pin cells, next opposing stack for expansion
- Ch. 10 — daily level; prior-day extreme (cash vs futures offset); overnight structure → GX; PDC as the 16:15 print; opening auction; re-marking; compound zone; grades A/B/C; phase table; E1 (→ P1), E5, E6; two leans; "rename or drop at 11:00"
- Ch. 11 — S1, S2, S3 (the post-early forms P2 renames into); S8 and S7 (what P1 renames into); six-field rule; combination order; dual falsifier; confluence bias; strike-spacing; same-print stacking; S5; S9 as the boundary; S10 (hard stand-down: unknown pressure cannot be traded); partial picture; event day
- Ch. 12 — guardrail pairs
- Ch. 13 — horizon mismatch; morning card (expected move for the feasibility gate); Drills 2 and 4 (ancestors of the occurrence log); Stage gates; Part 3 evidence table (the structural bet); backtest overfitting (why edits restart the sample)

Then four lists: cite and point / assemble / Playbook-native / out of sample.

## Memo shape

### 0. Course shape

Working title, object, prerequisite gate and Stage L start, two-course sentence, three rooms, futures RTH and GX clocks, cash-hours offset, six-way classification with two in-sample families, term-collision table, the structural bet, what Ch. 13 still forbids, what this course writes that Ch. 13 would not.

### 1. Preparation — the prep sheet (before 09:00, then 09:00–09:30)

**Tradeable levels first:** PDH, PDL; significant daily levels by the §11 definition, within the cap; compound zones where they coincide. Each with its class and its index strike through today's basis. **Then reading lines:** PDM, PDC; PD-VWAP ±1σ, ±2σ; GXH, GXL; working GX-VWAP ±kσ (freeze at 09:30). Scheduled releases (08:30 inside GX; 10:00 in the entry window; 14:00 in management). Geometry, tentative → locked at 09:30; if 3, 5, or 6, write the occurrence row and close the sheet. First intent sentence at 09:30, from the reading lines, naming which tradeable level is being approached. Classic location only (Grade A). Strike-spacing width. Morning-card expected move for the remaining window (feasibility yardstick). VXX on its own clock. Mag7-vs-SPY or not knowable. Missing-input rule: a missing hard-gate input at 09:20 is a stand-down; a missing soft-gate input is logged `not knowable`. No pressure word other than unknown, no SL/BE/scale/target, no RTH-VWAP before 09:30.

### 2. Screen × clock matrix

Gexbot screens plus VXX, Mag7 vs SPY, PD/GX/RTH-VWAP families. Columns: layer, room, what it can evidence, what it cannot, legal pressure word, knowability gate, hard or soft, claim label of any mechanism sentence about it, SG cite or Playbook-native.

### 3. Preconditions

Exactly one in-sample geometry locked at 09:30. A destination armed: an exceptional residual within the remaining-window expected move, *assumed* on Classic in the prep room, *inferred* once State signs it at Grade C (hard: no signed destination, no play). Destination or entry level is a tradeable level (hard; a reading line does not satisfy it except as the fire location on the path). Then Ch. 11 six fields in Ch. 11's order. H12 (not VXX) before wall/fuel. H13, H11, Grade C vs confluence bias. Direction field of the forced-flow sentence at the destination agrees with the play's direction (hard). Intent sentence current (rewritten within the last fifteen minutes), naming the destination, and not contradicting the play (soft). Feasibility gate (§11). Every gate marked **hard** or **soft**.

### 4. Safeguards

Grade A ≠ wall; Grade B ≠ reversal; full-group mountain does not decide this morning; confluence bias under PDM/PDC/σ bands; same-print stacking; re-marking vs flow; alert = touch; no node ≠ no pressure; NQ transfer; S9 outside the Playbook; unmapped width is not a stop; no add into rising gamma; horizon mismatch; VXX/VIX ≠ H12; Mag7 ≠ leftover; one name ≠ basket; 09:00–09:30 cannot name wall/fuel; do not finish E1 from "GX is inside" alone; PDM / PD-VWAP inside an overlap are not automatic fades; a reading line is not a reason, a node at a reading line with no destination is not a play, and a chart level marked because a node sits there is confluence bias run backwards (an options-complex level is declared as a node, not disguised as a chart level); the daily-level cap is a cap; the tallest bar on the screen is not the destination unless it is within the expected move and on today's path (`SG Ch. 11`); a large bar is not buying still to come — its hedge is done, its node's re-hedge is pending (`SG Ch. 12`); a spike in Phase 1 is an event and arms nothing alone (`SG Ch. 10`); a spike and the node it built are one piece of evidence (same-print stacking); S5 zone before VWAP; futures-RTH clock for PD extremes; 16:00–16:15 prints are not leftover; 17:00–18:00 is a halt inside GX; VXX has no futures clock; no entry after 11:00; a play edited mid-sample restarts its sample.

### 5. Approach protocol — Arm / Route / Fire / Manage

Tradeable levels and reading lines → geometry → 09:00–09:30 character → lock or log-and-close → RTH open → first intent sentence → **Arm** → **Route** → Grade A/B/C on the route → H12/H13 at the destination and on the path → direction-field check → Mag7-vs-SPY RTH (soft) → intent rewritten, naming the destination (soft) → E-read → dual falsifier written → feasibility check → **Fire** with time grain and entry-location class → **Manage**: four slots → 11:00 rename to S-form → manage to the boundary → occurrence row, including the reach outcome.

**Arm.** An exceptional residual (§11 size class) sits within the remaining-window expected move of price. In the prep room and Phase 1 it is Classic: location, owner unknown, destination *assumed* (the Guide's verb for ownership on an unsigned screen). Once State signs it at Grade C, the destination is *inferred* and the play knows what kind it is: **customer-short leftover** there is a pin-type destination — price travels to it, the node is the target (`SG Ch. 9`); **customer-long leftover** in falling vol is a wall-type destination — price travels to it and stalls, the target sits in front of it at the nearest H7 zone, never at or beyond it. If State never signs it, or signs it thin, the arm dissolves and the row is logged `armed, unsigned`. A large Orderflow bar in Phase 1 is an event and arms nothing by itself; it may confirm a destination the Classic ladder already showed.

**Route.** Every tradeable level between price and the destination is written as **launch** (price holds it and turns toward the destination) or **checkpoint** (price must accept through it on the way; E2's "checkpoint, not a fade"). Path leftover decides the texture: customer-short on the path is fuel toward the destination (E3, S4); customer-long on the path is an earlier stall candidate and shortens the trade. The intent sentence ties the route together: which reading lines have been held or taken, and whether the approach is a **test** or a **drive**.

**Fire.** One tape event in the direction of the destination, with its grain and entry-location class: failure to take at a launch level (`launch`); acceptance through a checkpoint level (`checkpoint`); an opening-range break or acceptance through a reading line toward the destination (`path`). Never the bar itself, because hedging is in bands and a node gives direction and location, not timing (`SG Ch. 11`).

**Manage.** SL at the falsifier: reclaim back through the launch or checkpoint, or the path leftover flipping sign. Target at the node for a pin-type destination; at the nearest H7 zone in front for a wall-type. Partial and trail per §8.

**P1 Inside** (E1 → S8 / S1). GX inside the PD range puts PDH and PDL ahead of price on both sides; a significant daily level or an options-complex level may sit inside as well. The destination is whichever tradeable level carries the exceptional signed node within reach; on many inside mornings that is PDH or PDL itself. Launch is the opposite extreme or a daily level that holds; checkpoints are the opening-range edges and any chart level between. After 11:00 it is S8 (range day), or renamed toward S7 on the S8 falsifier.

**P2 Overlap** (up/down mirror; E5 if RTH opens beyond the GX extreme → S1 / S2 / S3). The pierced PD extreme is the first tradeable level on the route, two branches, logged with a branch flag: **continuation** — the destination lies beyond the extreme (an exceptional customer-short node past PDH, say), the extreme is a checkpoint, fire is acceptance through it, target is the destination node or the next opposing stack, whichever is first; **reclaim** — the destination lies back inside the PD range (a node near PDM or the far extreme), the pierced extreme is the launch, fire is failure to take back inside, target is the destination. The intent sentence decides which branch is a candidate: price holding above GX-VWAP and PD-VWAP +1σ into PDH reads as a drive; price rotating back through GX-VWAP toward PDM reads as a failed attempt. After 11:00 the continuation branch is S3/S7; the reclaim branch is S1/S8.

### 6. Watch vs ignore

Name the object, not the color. VXX + VIX + H12 are not three vol confirmations. PD-VWAP + PDM + PDC on one strike are not three targets, and none of the three is an entry. Watch the reading lines for what the market is attempting; trade only where a tradeable level and a Grade-C node meet. A beautiful reaction at GX-VWAP with no tradeable level within strike spacing is a line in the intent sentence, not an occurrence.

### 7. Dual falsifier

Per play, stall vs break: acceptance through / failure to take (`SG Ch. 9`; grain in §11); leftover sign flip, vanish, or day-type rename. Plus the destination's own falsifier: the node at the destination flips sign, vanishes, or is taken through with leftover unchanged beyond it (the destination was not the pressure-end). VXX or Mag7 contradiction is a logged flag in Stage L/P, never a second stop. Write the falsifier before the fire event is acted on.

### 8. Trade-management geometry (Playbook-native; *inferred*; four slots)

Only after leftover exists and the invalidation is written. Risk in R under the envelope. `Hit rate: not measured` until the log says otherwise.

- **SL** — the Ch. 9 falsifier mapped to a price. A k·σ band may be the tape level of the read; it may not be an ATR cushion.
- **Break-even** — only when the original falsifier is no longer the nearest live object (first opposing node / H7 zone / completed failed break / next named tape object with leftover unchanged). Not a ping, VXX tick, Mag7 spike, or "touched VWAP."
- **Scale-in** — same read still nameable; Grade C / S1 + H12; later clip only if leftover thickens (Orderflow, not re-marking). Never through the falsifier, never at Grade A/B, never into rising gamma at the strike; capped by the envelope.
- **Targets** — partial at the nearest pressure-end (node, next stack, or H7 zone, whichever is first). Remainder trails the next named leftover object or leftover event, not a tick trail or a VWAP band, through 11:00 and under the renamed S-read, to the management boundary. Continuation and stall branches keep separate trail logs so the truncation question is measurable, not assumed.

### 9. Worked cases

Three traded walks — P1 inside; P2 overlap up; P2 overlap down — and two stand-down walks — a gap and an extends — each ending in the occurrence-log row it produces. Canonical toy (index ~6000) plus a 09:10 character clock. Each traded walk shows the PD/GX/VWAP map, VXX, Mag7-vs-SPY or "not knowable," grades with times, H12 vs VXX, dual falsifier, feasibility check, four slots in R, the 11:00 rename, and the boundary exit. Every number round, with units, reconstructable in three arithmetic steps. Illustrations, not evidence, and each says so.

### 10. Proposed Playbook outline

`README.md` (index; the structural bet; Stage L start); `reference/terms.md` (tradeable level, reading line, intent sentence, level class among the handles); `reference/levels.md` (the two classes, the daily-level definition and cap, the intent-sentence format); `reference/clocks.md`; `reference/risk.md` (envelope); `reference/system.md` (hypothesis format, **play-spec schema**, **enumerations**, log schema with column types, base rates, promotion ladder, kill criteria, change control, system falsifier); `plays/01-inside.md`; `plays/02-overlap.md`; shared cards `plays/00-prep-sheet.md` and `plays/00-stand-downs.md`; `cases/`. Flag anything that would force a Study Guide edit. Default: leave the Guide untouched.

### 11. System layer (Playbook-native)

**Hypothesis line, one per play, plus one shared.** Format: *mechanism (labeled) → direction → expected behavior → horizon → the control it must beat.* Drafts:

- **H0 Destination** (shared; *folklore* — the public GEX reading that price is drawn to large gamma strikes; the Guide's nearest objects are `SG Ch. 9` node-as-target for short-convexity cells and E3/S4 fuel toward a fill, and the Guide names no morning magnet): "An exceptional signed residual within the remaining-window expected move is a destination the morning tape attempts to reach. Expected: price prints within one strike spacing of the node inside the entry-plus-management window. Control: chart levels at the same distance on the same mornings with no exceptional node." This is the arm. It is measurable at Stage L with no trade, which is why it is written first.
- P1: "Grade-C customer-long leftover in falling vol at a tradeable level (PDH/PDL or a significant daily level) on a GX-inside morning is a stall candidate, because the dealer on the mirror is long gamma and fades into it (mandate; *inferred*, assuming `SG Ch. 4`'s owner map). Expected: failure to take, then rotation toward the nearest H7 zone or PDM, inside the RTH morning. Control: the same levels on GX-inside mornings without Grade-C leftover."
- P2: "A pierced PD extreme on an overlap morning resolves by what sits beyond it: Grade-C customer-short leftover is fuel (continuation, dealer long gamma on the mirror grinds; flips to chase if crowded short convexity is taken, H6); Grade-C customer-long leftover is a stall (reclaim) — both *inferred* on the same assumption. Expected: acceptance through and travel to the next opposing stack, or failure to take and travel back inside the PD range. Control: pierced PD extremes on overlap mornings with no Grade-C leftover either side."

**Occurrence log — schema.** One row per occurrence (all hard gates true), traded or not; plus one row per out-of-sample morning (geometry only). Every column has a type and a unit; every categorical column draws from a closed enumeration in `reference/system.md`; prices carry the instrument and the basis used; times are `HH:MM` ET. Columns: date · instrument · geometry · play and branch · **destination** (strike, futures price, size class, sign, time assumed, time signed, distance in points and in expected-move units) · **destination type** (pin · wall · unsigned) · **reach outcome** (reached within one spacing / not, and time) · route levels with launch/checkpoint tag · entry level (price, strike, basis) · **level class** (PDH/PDL · daily · node · compound) · **entry-location class** (launch · checkpoint · path) · **direction field** at the destination and play direction · **intent sentence at trigger** (tape words) · Grade A/B/C times · standout ratio · H12 tag and time · H13 result · soft-gate flags (VXX, Mag7, intent contradiction, reading-line confluence) · event-day flag · trigger time or `no trigger` · entry, SL, first target in points and R · feasibility pass/fail · 11:00 rename · exit time and reason · outcome in R · MFE/MAE in R (for untraded occurrences, from the would-be trigger) · **control row**: nearest daily level tested that morning *without* Grade-C leftover, and what price did there in the same words.

**Base rates to measure before any play goes live.** Geometry frequency (all six); how often an exceptional residual exists within the expected move at 09:30 and how often State signs it by 10:00; **reach rate** by size class, distance, and destination type, against the H0 control; how often PDH/PDL is tested in the entry window on in-sample mornings; Grade-C-at-a-tradeable-level-by-10:30 frequency, by level class; fire frequency given an armed and signed destination; control behavior; how often the 09:30 intent sentence still holds at the fire. Expected firing rate per play: `not measured` until twenty sessions are logged; the memo writes the placeholder, not a guess.

**Hard gates** (stand down): geometry in sample; a destination armed and **signed** (exceptional Grade-C node within the remaining-window expected move); destination or entry level is a **tradeable level** (a reading line qualifies only as the `path` fire location); **direction field agreement** — play direction equals the forced-flow sentence's direction at the destination; Grade C standout at the destination; H12 tagged; H13 confirmed; dual falsifier written including the destination's own; feasibility pass; S10 disagreement with unknown pressure; event day / monthly or quarterly expiry (`SG Ch. 11`); missing hard-gate input.
**Soft gates** (log, take the play): intent sentence contradicting the play; VXX contradiction; Mag7 contradiction; reading-line confluence at the level; character-box notes. Promotion to hard requires the log (§12). Intent is the first candidate for promotion, because it is the early-window stand-in for the day-type the Guide writes first (`SG Ch. 11`, combination order) and H3 is rarely nameable before 10:30.

**Operational definitions** (Playbook-native; defaults; frozen before the sample starts). Each lands in `reference/levels.md` or `reference/system.md` as a table row — name · inputs · parameters (default, unit) · procedure · output type · evaluated-at clock — and the prose below is the reading of that row, not its source. Drafts:

- *Significant daily level*: a price at which the daily chart has printed a swing high or swing low at least twice within the last 60 sessions, the two turns at least 5 sessions apart, both within one strike spacing of the marked price. Marked before 09:00. **Cap: at most two per side of the open** within the morning card's day expected move, nearest first; PDH/PDL do not count against the cap. Anything not marked before 09:00 is not a tradeable level today. Reason: a level found after the node appeared is confluence bias run backwards.
- *Intent sentence*: one sentence, tape words only, rewritten at least every fifteen minutes and at every reading-line event: which side of GX-VWAP and PD-VWAP price is holding; whether PDM has been accepted or rejected; whether GXH/GXL were taken or defended; which tradeable level is being approached and whether the approach is a **test** (reading lines held, rotation) or a **drive** (reading lines taken in sequence). No pressure word, no Gexbot object, no verb about the dealer. The sentence is the human rendering of five coded fields logged beside it — `gx_vwap_side` (above · below · at), `pd_vwap_side` (above · below · at), `pdm_state` (accepted · rejected · untested), `gx_extremes` (GXH taken · GXH defended · GXL taken · GXL defended · neither), `approach` (test · drive · none) — and it is the coded fields, not the sentence, that a gate reads. *Intent contradiction*: `approach = drive` toward the level while the play is a stall at it, or `approach = test` with the level defended while the play is continuation through it.
- *Standout bar*: the State bar at the strike ≥ 2× the median absolute bar of the five strikes on each side, on today's ladder. Below that, Grade C is not met.
- *Exceptional residual* (arming size class): a State bar that is a **major** in the Guide's sense and is ≥ 3× the median absolute bar of the whole ladder within the expected move, or the largest bar within that span. Below exceptional but above standout is a Grade-C node that may sit on a route; it does not arm a destination. Size class (`standout` · `major` · `exceptional`) is a log column, so the threshold is a tested parameter, not a belief. On Classic before State signs, the same test uses the open-interest ladder and yields an *assumed* destination only.
- *Acceptance through*: a 5-minute bar closes beyond the node by at least one strike spacing. *Failure to take*: price reaches within one strike spacing of the node and a 5-minute bar closes back on the near side.
- *Entry location*: on the close of the trigger bar, not on the touch. No anticipatory limit at the level.
- *VXX contradiction*: VXX 09:00–09:30 slope, or its move from its own 16:00 close, opposite in sign to the H12 tag. *Mag7 contradiction*: basket lagging while the play is continuation; basket leading through the level while the play is a stall at it.

**Feasibility gate** (hard): the destination lies within the morning card's expected move for the remaining window (`SG Ch. 13`, Drill 1) — beyond it, the node is context and the arm fails; first partial ≥ 1R; SL distance ≤ half that expected move. Fails any → stand down and log.

**Risk envelope** (`reference/risk.md`; defaults): 1R initial risk per trade; scale-in adds ≤ 0.5R at a planned object; daily budget −2R ends the day's trading (logging continues); one position per bet; **ES and NQ on the same geometry are one bet** — take the book with nameable leftover, weight ES (`SG Ch. 11` S10); one re-entry per play per day, only after a fresh trigger and a rewritten falsifier.

**Tooling and data dependencies.** Two custom sessions with VWAP and σ bands (16:15–09:30 with the 17:00–18:00 hole; 09:30–16:15); a basis mapping done before 09:00; a Mag7 equal-weight basket chart; VXX; three Gexbot screens (Classic, State, Orderflow); a 5-minute ES/NQ chart for the grain. Gexbot display cadence is `not stated`. Name the platform that computes each object; where none does, the object is `not knowable` and any gate on it is soft or the play stands down.

### 12. Promotion, kill, change control (Playbook-native)

**Promotion ladder** (defaults; `reference/system.md`):

| Stage | What you do | Gate to the next |
|---|---|---|
| **L** — log-only | Prep sheet, classification, occurrence rows, MFE/MAE from would-be triggers. No orders. | ≥ 30 occurrences per play; base rates written; hypothesis not falsified on the control column |
| **P** — paper | Full play at paper prices, logged as if live | ≥ 30 triggered occurrences per play; median outcome in R > 0 on paper; no envelope breach |
| **1R** — live at one unit | Live, 1R, envelope enforced | ≥ 100 triggered occurrences (`SG Ch. 13`: forty sessions is small; two hundred is the start) |
| **S** — scaled | The reader's sizing, outside this document | — |

**H0 first.** The destination hypothesis is measured before either play is promoted out of Stage L: if reach rate for exceptional signed residuals does not beat the H0 control after ≥ 50 armed occurrences, the arm is not a signal, and both plays return to the drawing board before any paper trade. This is the cheapest test in the Playbook and the one the whole design rests on.

**Kill criteria, per play.** After ≥ 50 triggered occurrences: retire the play if the expected behavior in its hypothesis line does not occur more often than in the control column, or if median outcome in R ≤ 0 at Stage P or 1R. A retired play stays in `plays/` with its log and a `retired` header; it is not deleted, because the record is the point.

**Change control.** Each play carries `version:` and `sample-start:`. Changing a hard gate, the trigger, the grain, the SL rule, or the target rule bumps the version and restarts the sample. Changing a soft gate's status (soft → hard) requires the log to show the flag separates outcomes. Cosmetic edits do not restart. This is `SG Ch. 13`'s backtest-overfitting warning as a procedure.

**System-level falsifier.** If, across ≥ 100 logged daily-level occurrences on in-sample mornings, behavior at levels with Grade-C leftover does not differ from behavior at the control levels, the Playbook's premise — that Gexbot leftover adds to the morning tape read — is falsified, and the Playbook retires as a whole, whatever any single play shows. Written on the README.

### 13. Tooling (hint only)

A decision-support tool and a research bench support this Playbook and are planned as separate workstreams (`gexbot_playbook_software_outline.plan.md`). What this plan asks of them: they consume the Playbook's operational definitions, occurrence-log schema, risk envelope, and change control without redefining any of them; a configuration leaves the bench only through a version bump; and the live tool stores every Gexbot observation with its receipt time from day one, because that store is the only point-in-time dataset the arm can ever be backtested on. Nothing in the plays depends on the tooling existing; Stage L can be run by hand.

## Output shape of the memo

1. Preconditions and blockers resolved or restated
2. Inventory (cite / assemble / Playbook-native / out of sample)
3. Term-collision table
4. Course shape (§0)
5. Daily-Level Lens (§1–9), including the five walks
6. Proposed outline (§10)
7. System layer (§11) and promotion / kill / change control (§12)
8. Tooling hint (§13): what the Playbook requires of the software and bench workstreams, one paragraph
9. Open slots marked `not stated` or `not measured`
10. What this memo will not put in either course

Voice: second person, imperative where the play instructs. Stand-down first; hypothesis second; trigger third; geometry fourth. A trigger is a tape event; a color, ping, unsigned mountain, VXX tick, Mag7 print, or VWAP band is never a reason to click.

## Acceptance checks (memo is not done until these pass)

- Every mechanism sentence carries exactly one label; every pressure word is one of the four; *forced* appears only beside mandate.
- No **docs** label while `20260910_gexbot_study.md` is absent.
- No retired session name; no "morning card" for the prep sheet; no "early session" for the entry window.
- Every `SG Ch. N` cite names a chapter object that exists on that page.
- Every (GXH, GXL) toy pair in §9 lands in exactly one geometry row; geometries 3, 5, 6 produce stand-down rows only.
- Every traded walk arms a destination (assumed, then signed), names its type (pin or wall), routes the tradeable levels as launch or checkpoint, fires on a tape event with an entry-location class, and shows the direction-field check; no stop sits on a reading line; a `path` entry exists only when the destination is a tradeable level with a Grade-C node; every row carries destination, level class, entry-location class, intent sentence, and reach outcome.
- Every folklore-based sentence keeps its label; no `not stated` mechanism slot is filled.
- Each play has a hypothesis line in the §11 format, with a control.
- Every gate is marked hard or soft; the feasibility gate is present and hard.
- Every instruction to act follows its written invalidation; every trigger is a tape event with a grain and an entry location; every SL is an object; every size word is in R and under the envelope.
- No entry after 11:00; no play crosses the management boundary; the 11:00 rename is written in every traded walk.
- No hit rate, expectancy, or win rate without N, dates, instrument, and definition; otherwise `not measured`.
- Every play has `version:`, `sample-start:`, a kill criterion, and a stage. The README carries the structural bet and the system-level falsifier.
- §13 is a hint, not a design: it names what the Playbook requires of the tooling and nothing about how the tooling is built. Any measured figure quoted from the bench carries its trial count and N.
- **Encodability.** Every gate, trigger, invalidation, management slot, and operational definition in the memo can be read as a predicate over named inputs with type, unit, threshold, and evaluation clock; every categorical value names its enumeration; every tested parameter has a name and a default; the proposed play-spec schema is written and both plays are expressed in it. A condition that cannot be so expressed is rewritten or removed, not left as prose.
- No file under `docs/**`, `src/**`, or `sidebars.ts` changed.

## Constitution (do not soften)

- `playbook/**` is governed by `playbook-charter.mdc` and `playbook-play.mdc`. The textbook rules bind there only through what the charter names.
- Claim labels bind every mechanism sentence the Playbook cites or extends; pressure words stay the four; the reader is instructed, never forced.
- Source of truth for Gexbot: `20260910_gexbot_study.md`.
- Empty slots stay `not stated`; unmeasured figures stay `not measured`.
- The sample unit is the occurrence. Every occurrence is logged. Edits to a live play restart its sample.
- Encodable by construction: predicates over named inputs, closed enumerations, named parameters, a spec block per play. The spec is the play; the prose reads it. A condition a program cannot evaluate is not a condition.
- Tooling consumes the Playbook's definitions and change control; it does not redefine them. The bench informs defaults; the forward log decides.
- In sample: geometries 1, 2, 4. Out of sample: 3, 5, 6, logged not traded.
- Tradeable levels are a closed class: PDH/PDL, significant daily levels marked before 09:00 under the cap, options-complex levels (exceptional signed nodes), compound zones. Everything else is a reading line: it feeds the intent sentence, may host a `path` fire toward an armed destination, and is never a stop or a reason.
- The trigger is Arm / Route / Fire / Manage. Gexbot arms and routes; the tape fires. A bar is never the click.
- Folklore is a legal basis, labeled and measured. `not stated` mechanism slots stay empty.
- With, never against: play direction equals the direction field of the forced-flow sentence at the destination.
- Entry window 09:30–11:00. No flat-at-11:00; rename and manage. The last-hour family is outside the Playbook.
- PDM stays `(PDH + PDL) / 2` unless a later edit changes it.
- Futures **RTH** is **09:30–16:15**. **GX** (Globex) is **16:15–09:30**. Do not write ON, ONH, ONL, ON-VWAP, ETH, ETHH, ETHL, ETH-VWAP, PMH, or PML.
- `SG Ch. 10` cash-hours PD (09:30–16:00) is a different clock; write the 15-minute offset when the two disagree.
