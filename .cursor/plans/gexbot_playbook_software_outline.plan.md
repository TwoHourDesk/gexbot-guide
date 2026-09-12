---
name: Playbook software and research bench — outline
overview: Outline only. Two separate workstreams that support the Gexbot Daily Playbook (`gexbot_daily_playbook.plan.md`) — a decision-support tool that narrows the trader's decision surface, and a research bench for backtesting and calibration. This document salvages the scope, ownership split, design rules, build order, data dependencies, and open decisions so each workstream can be planned on its own. It does not restate the Playbook; it cites it.
todos:
  - id: software-plan
    content: Plan the decision-support software as its own workstream from §1 — confirm data access, choose placement, write engineering rules, then v0 (Stage L tool)
    status: pending
  - id: bench-plan
    content: Plan the research bench as its own workstream from §2 — confirm point-in-time Gexbot history, stand up the shared definitions library, then tier 1 (tape-only)
    status: pending
isProject: false
---

# Playbook software and research bench — outline

Both workstreams serve the Playbook and are bound by it: the plays, gates, operational definitions, occurrence-log schema, risk envelope, promotion ladder, and change control live in `gexbot_daily_playbook.plan.md` (§11–§12) and, once written, in `playbook/reference/*.md`. Neither workstream redefines any of them. Where this outline names a Playbook object, the Playbook's definition wins.

The Playbook is written to be encodable by construction: each play carries a YAML spec block; definitions are table rows with named inputs, parameters, and evaluated-at clocks; categorical values are closed enumerations. The software's contract is the **spec and the reference tables, not the prose**: the live tool loads play specs and evaluates them; the definitions library implements the reference rows one-to-one; the bench sweeps only the named parameters. If the tool needs something the spec cannot express, the fix is a versioned change to the Playbook's spec schema, not a rule in code.

## 0. Open decisions shared by both (defaults in parentheses)

- **Gexbot data access.** Programmatic State / Orderflow / Classic / skew (the Guide names the Quant plan and the OpenAPI notes), or screen only. Decides whether Grade C, the direction field, and H12 are computed or human-entered. (Default: assume screen-only until confirmed; the software presents entry fields for those three and the bench runs tape-only tiers.)
- **Point-in-time Gexbot history.** Whether intraday snapshots of the ladders exist at the clock they were live (the history slider, `SG Ch. 13` Drill 7), or only end-of-day. Decides whether the arm can be backtested at all. (Default: assume not; the bench backtests the tape side and the arm is measured forward at Stage L.)
- **Futures data and platform.** Source of ES/NQ prints; who computes the custom sessions and VWAP bands; source of SPX/NDX cash for the basis. (Default: the software computes sessions and bands itself from a tick or 1-minute feed, because no retail platform ships a 16:15–09:30 session with a 17:00–18:00 hole.)
- **Placement.** Beside `playbook/` in the Study Guide repo, or a separate repo. (Default: separate repo with its own engineering rules; it cites the Playbook plan and `playbook/reference/*.md` and does not restate them. The Study Guide's textbook rules and the Playbook's rules do not apply to it.)
- **Source of truth.** `20260910_gexbot_study.md` is cited across the Study Guide and absent from disk. Anything either workstream assumes about Gexbot's API, cadence, or fields is `not stated` until that file or the public docs confirm it.

## 1. Decision-support software

**Role.** Narrow the decision surface and remove computable work from the trader. Target: at any minute of the sitting the screen presents **at most one question the software cannot answer itself**. The Guide's verbs give the split: *observed* is computed; *inferred* is computed once the observed inputs and the frozen definitions exist; *assumed* is labeled by the software and never upgraded by it.

**Owned by the software.**

- Prep sheet, generated before 09:00 ET: PD (09:30–16:15) and GX (16:15–09:30, halt excluded) sessions, PDH/PDL/PDC/PDM, the three VWAPs ±1σ/±2σ, GXH/GXL, today's basis, strike spacing, morning-card expected move for the remaining window, scheduled releases, significant daily levels by the Playbook's test and cap.
- Geometry classifier: six rows, tentative at 09:00, locked at 09:30; out of sample → STAND DOWN, nothing to decide.
- Arming engine: scans the ladder within the expected move for exceptional residuals (size class computed), tags *assumed* on Classic, watches State for the sign, upgrades to *inferred* at Grade C, names pin/wall, computes the direction field, dissolves the arm if unsigned; same-print dedupe.
- Router: launch/checkpoint tags on tradeable levels between price and destination; path leftover as fuel or early stall.
- Gate evaluator: every hard gate green or red with its reason; every soft gate a logged flag; feasibility computed from the pre-filled SL and target.
- Fire detector: watches for the tape event per the frozen grain; presents a pre-filled card (entry, SL as object mapped to price, R, first target, entry-location class) only after the falsifier fields are populated and acknowledged.
- Intent sentence, drafted from the reading lines; trader edits or accepts.
- Occurrence logger: every row, every column of the Playbook's schema, control row and MFE/MAE from the would-be fire on untraded occurrences.
- Bookkeeping: base rates, H0 reach vs control, promotion gates, kill criteria, `version:` and `sample-start:` enforcement. A threshold change in code *is* the version bump.
- Storage: every Gexbot observation received, with its receipt time, from day one — this is the bench's future point-in-time dataset.

**Kept by the trader.** The fire (yes/no plus veto); the final intent sentence; marking a daily level the algorithm missed, only before 09:00, cap enforced, refused after the open; any override, logged as its own row.

**Two design rules.** *No color without its object*: the software renders "customer-short leftover, 3.4× ladder median, Grade C at 09:48, direction: toward," never a bar; nothing off the path or beyond the expected move is drawn. *Stand-down is louder than fire*: red gates and stand-down reasons take visual priority; the fire card is enabled last and names the label the bet rests on, because automation bias is the failure mode of a "fire?" button.

**Build order, matched to the Playbook's promotion ladder.** v0 — Stage L tool: prep sheet, classifier, arming engine, logger, base-rate view; no orders, no fire card; this alone measures H0. v1 — Stage P tool: router, gate evaluator, fire detector, paper fills, management-slot alerts. v2 — Stage 1R: live position tracking. Order placement, if ever, is a separate decision with its own rules.

**Data dependencies.** ES/NQ prints; SPX/NDX cash for the basis; Gexbot State, Orderflow, Classic, skew — programmatic or human-entered (§0); economic calendar; contract-roll rule; holiday and early-close calendar (a 13:00 close changes the PD clock for the next morning). Gexbot display cadence is `not stated`; the software timestamps every Gexbot observation with its own receipt time and treats that as the knowability clock.

## 2. Research bench

**Role.** Backtest what can be backtested, calibrate the Playbook's defaults before the freeze, and count every test so the forward log is judged honestly. The bench informs the defaults; the forward occurrence log decides. `SG Ch. 13` Part 6 and Stage 5 are its charter: write hypotheses before looking, count them, forty sessions is small, two hundred is the start.

**The constraint that decides the design: point-in-time Gexbot data.** Leftover is a running total; an end-of-day State ladder is not what was visible at 09:48. Backtesting the arm, Grade C timing, or the direction field requires intraday snapshots at the clock they were live — the labeling leak the Guide names at Drill 7 and in the Ch. 12 guardrail "15:50 net on a 09:35 fill." Without such snapshots the arm cannot be backtested, only forward-logged, and the Gexbot-inclusive tier does not exist until the live tool's storage has accumulated its own snapshots.

**One definitions library, two consumers.** Geometry inequalities, session clocks, VWAP and σ bands, significant-daily-level test and cap, standout and exceptional size classes, acceptance grain, direction-field mapping, feasibility arithmetic, R computation — implemented once, versioned, imported by both the live tool and the bench. Definition drift between backtest and live is the quietest way to invalidate both.

**Study tiers, in build order.**

1. *Tape-only* (needs only ES/NQ, cash index, calendar): geometry base rates; how often PDH/PDL and daily levels are tested in the entry window; reach rates to chart levels at a given distance — the **H0 control side**, measurable before any Gexbot data; expected-move calibration against realized first-hour range (Drill 1 with numbers); acceptance-grain behavior at chart levels; intent-sentence components (which side of VWAP price held and what followed).
2. *Gexbot-inclusive* (needs point-in-time ladders): H0 reach rate by size class, distance, and destination type against the tier-1 control; Grade C timing distribution (Drill 2, the knowability log); direction-field agreement with subsequent travel; re-marking vs flow (Drill 5); play outcomes in R by entry-location class and level class.
3. *Play-level*: P1 and P2 as the Playbook specifies, walk-forward, outcomes in R, occurrence counts, MFE/MAE, by geometry and instrument.

**Optimization rules.** Optimize only before the Playbook's freeze, and only parameters the Playbook already lists as parameters (k, size-class multiples, grain, daily-level lookback and cap, feasibility fractions). Pre-register each study: hypothesis, parameter grid, metric, sample, written before the run. Walk-forward, never in-sample. Prefer parameter **plateaus** to peaks: a threshold that works at 2.5× and 3.5× is a finding; one that works only at 3.0× is noise. Metric is lift over control and outcome in R with a confidence interval, never a hit rate alone. Apply a multiple-testing correction to anything reported (`SG Ch. 13` Stage 5 readings: Harvey–Liu–Zhu; Bailey et al.). Minimum N per cell before a number is written anywhere; below it, `not measured`.

**Trials ledger.** Every bench run appends a row — date, hypothesis, grid, metric, result, decision — whether or not it was interesting. The count of trials is reported beside every finding. A finding without its trial count is not reported.

**Promotion of a config.** A parameter set that leaves the bench enters the live tool only through the Playbook's change control: version bump, `sample-start:` reset, forward log restarted. The bench never writes to a live play's definitions directly.

**Data hygiene.** One clock (ET); futures front-month by a stated roll rule, roll days flagged; basis from minute-level cash index; holidays and early closes from a calendar; event days from a release calendar; Gexbot receipt time as the knowability clock. Every dataset carries its provenance and date range, which fills each play's *Not tested against* slot automatically.

## 3. What this outline does not decide

Stack, storage, UI, hosting, testing strategy, and engineering rules belong to each workstream's own plan. This outline fixes only what the Playbook needs from them: the ownership split, the two design rules, the definitions library, the trials ledger, and the change-control boundary.
