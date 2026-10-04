# Anilax Software

Live site: **https://www.anilaxsoftware.com**

Vite SPA with server-side WhatsApp contact delivery (`/api/contact`).

## Local run

```bash
npm install
npm run dev
```

Copy `.env.example` → `.env` and set Green-API (or Meta) credentials.

## Hostinger deploy

| Setting | Value |
|---------|--------|
| Branch | `main` |
| Node | **22.x** |
| Build | `npm ci && npm run build` |
| Start | `npm start` |
| Output | `dist` |

Set the same WhatsApp env vars on Hostinger that you use locally (never commit `.env`).
