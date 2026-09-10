# Gexbot Study Wiki

A Docusaurus textbook for reading **Gexbot** as an information layer beside NQ and ES. Not a trading system. Not locked edge.

The concept source of truth for Gexbot terms remains [`20260910_gexbot_study.md`](20260910_gexbot_study.md). This wiki teaches those terms in the order of Gexbot's plans.

## Run locally

```bash
npm install
npm start
```

Open the URL printed in the terminal (usually `http://localhost:3000`).

## Build

```bash
npm run build
npm run serve
```

## What lives where

- `docs/` — textbook chapters and reference pages
- `src/data/` — shared glossary and forced-flow ledger
- `src/components/textbook/` — definition boxes, orientation cards
- `src/components/charts/` — pedagogical embeds (labeled not Gexbot)
- `static/img/gexbot/` — official public figures with `SOURCES.md`

## Deploy

GitHub Pages is built by `.github/workflows/deploy-pages.yml` on every push to `main`.

Site: https://twohourdesk.github.io/gexbot-guide/
