# Hostinger Node.js — Design repo deploy

## Galat setup (fail hota hai)

| Setting | Galat | Sahi |
|---------|-------|------|
| Repository | `anilax-software` | **`anilax-software-design`** |
| Framework | Create React App | **Vite** (ya Auto) |
| Root | `./` on old repo | `./` on **design** repo |

Purane `anilax-software` repo par bina `package.json` / design files ke build fail hota tha. Ab root par bridge `package.json` hai — redeploy se chal sakta hai; phir bhi **design repo** prefer karo.

---

## Sahi steps

1. GitHub par repo: **Harshit7563/anilax-software-design**
2. Hostinger → delete failed deployment → **New deployment**
3. Import **`anilax-software-design`** (not `anilax-software`)
4. Settings:

| Field | Value |
|-------|--------|
| Branch | `main` |
| Node version | **22.x** |
| Root directory | **/** (empty / `.`) |
| Framework | **Vite** or Other |
| Build command | `npm ci && npm run build` |
| Start command | `npm start` |
| Output directory | `dist` |

5. Environment variables (optional):

```env
VITE_API_URL=https://anilaxsoftware.com
```

(Use your real API URL if backend is on another server.)

6. Redeploy

---

## Backend alag

API + database = repo **`anilax-software-backend`** (alag Hostinger Node app ya VPS).

Contact form tab tak kaam nahi karega jab tak backend live na ho.
