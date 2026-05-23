# Anilax Software

Fintech software company website — **Fintech · B2B · B2C · API**.

Inspired by [Google Antigravity](https://antigravity.google/) (product demo, minimal UI) and [NotebookLM](https://notebooklm.google/) (dark hero, workflow steps, testimonials, FAQ).

## Stack

- React 19 + Vite 8
- Plain CSS

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Fintech, B2C, API |
| `/b2b` | B2B — AePS services & solutions |
| `/software` | Software Development — payment & business apps |
| `/api` | APIs — B2B, B2C, payment, SMS, verification, BBPS |
| `/technology` | Technology — languages, dev & design stack |
| `/company` | Company — about, office, legal, careers |

## Run (local)

```bash
npm install
npm run db:setup    # PostgreSQL tables
npm run server      # API on :3001 (terminal 1)
npm run dev         # site on :5173 (terminal 2)
```

## Deploy — Hostinger VPS

Full guide: **[deploy/HOSTINGER-VPS.md](deploy/HOSTINGER-VPS.md)**  
Nginx + Node API + PostgreSQL on one VPS.

## Sections

| Section | Purpose |
|---------|---------|
| Hero | Dark gradient headline (NotebookLM-style) |
| Pillars | Fintech, B2B, B2C, API cards |
| Platform demo | Live dashboard tabs (Antigravity-style) |
| Workflow | 3-step integration flow |
| Segments | Deep-dive per product line |
| API | Code samples + endpoints |
| Testimonials | Marquee quotes |
| Trust | Compliance badges |
| FAQ | Accordion |
| Footer | CTA + links |
