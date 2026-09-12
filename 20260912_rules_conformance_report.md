# Rules conformance report

Date: 2026-09-12. Follows `20260912_rules_conformance_handoff.md`. Rule files win if this report and a rule file differ.

---

## WP1 — Make the Checks runnable

**Commit:** *(filled after commit)*

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
