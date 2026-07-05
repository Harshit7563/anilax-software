# Anilax Software

Live site: **https://anilaxsoftware.com**

All website code lives in **`anilax-software-design/`** (React + Vite + admin + Shree AI + Android shell).

The old root `src/`, `server/`, and `database/` folders have been removed from this repo.

## Local run

**Terminal 1 — API (queries, admin, blog):**
```bash
cd anilax-software-design
npm install
npm run server
```

**Terminal 2 — website:**
```bash
cd anilax-software-design
npm run dev
```

Admin: **http://localhost:5173/admin/login**

## Hostinger deploy

Deploy this repo **`anilax-software`** or the **`anilax-software-design`** folder directly.

| Setting | Value |
|---------|--------|
| Branch | `main` |
| Node | **22.x** |
| Build | `npm ci && npm run build` |
| Start | `npm start` |
| Output | `dist` |

Set env: `VITE_API_URL=https://anilaxsoftware.com`

See **`anilax-software-design/HOSTINGER.md`** for full steps.

## Backend API

Backend code is in a separate repo: **`anilax-software-backend`** (see `GITHUB-SETUP.md`).

## GitHub repos

| Repo | Purpose |
|------|---------|
| [anilax-software](https://github.com/Harshit7563/anilax-software) | Root deploy (builds design subfolder) |
| [anilax-software-design](https://github.com/Harshit7563/anilax-software-design) | UI only (optional) |
| [anilax-software-backend](https://github.com/Harshit7563/anilax-software-backend) | API + Postgres |
