# Anilax Software — Design (UI)

React + Vite marketing site: pages, components, styles, admin UI.

**GitHub:** https://github.com/Harshit7563/anilax-software-design

## Run

```bash
npm install
npm run dev
```

Open http://localhost:5173

Backend must run separately — see `../anilax-software-backend`.

## Build

```bash
npm run build
```

Output: `dist/` (static files for Nginx / Hostinger).

## Production API

Set in `.env`:

```env
Production: set `VITE_API_URL=https://anilaxsoftware.com` on Hostinger. See `HOSTINGER.md` for Gemini + deploy steps.
```

Leave empty if the API is on the same domain under `/api` (Nginx proxy).
