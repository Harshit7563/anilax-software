# Hostinger Node.js — Design repo deploy

Live site: **https://anilaxsoftware.com**

## Galat setup (fail hota hai)

| Setting | Galat | Sahi |
|---------|-------|------|
| Repository | `anilax-software` | **`anilax-software-design`** |
| Framework | Create React App | **Vite** (ya Auto) |
| Root | `./` on old repo | `./` on **design** repo |

---

## Sahi steps — Frontend (anilaxsoftware.com)

1. GitHub par repo: **Harshit7563/anilax-software-design**
2. Hostinger → **New deployment** → import **`anilax-software-design`**
3. Settings:

| Field | Value |
|-------|--------|
| Branch | `main` |
| Node version | **22.x** |
| Root directory | **/** |
| Framework | **Vite** |
| Build command | `npm ci && npm run build` |
| Start command | `npm start` |
| Output directory | `dist` |

4. **Environment variables** (Hostinger panel):

```env
VITE_API_URL=https://anilaxsoftware.com
```

**Do NOT** set `VITE_GEMINI_API_KEY` on production frontend — key sirf backend par rakho.

5. DNS: `@` and `www` → A record → your server IP. HTTPS (certbot / Hostinger SSL).

6. Redeploy → open **https://anilaxsoftware.com**

---

## Backend (same domain — API routes)

Contact form, admin, Shree AI sab **`https://anilaxsoftware.com/api/...`** se chalega.

Backend repo: **`anilax-software-backend`** (VPS ya alag Hostinger Node app).

Server `.env`:

```env
GEMINI_API_KEY=AIzaSy...your_key
GEMINI_MODEL=gemini-2.0-flash
ADMIN_PASSWORD=your_admin_password
# + database vars (Supabase / Postgres)
```

### Shree AI route mount karo

Copy `anilax-software-design/server/shree-chat.route.js` into backend:

```javascript
import shreeChatRouter from "./routes/shree-chat.route.js";
app.use("/api/shree", shreeChatRouter);
```

Test:

```bash
curl -X POST https://anilaxsoftware.com/api/shree/chat \
  -H "Content-Type: application/json" \
  -d '{"query":"main CA hu","lang":"hi","pathname":"/","history":[],"context":{}}'
```

---

## Gemini API key — kaise use karein (live)

1. **Key banao:** https://aistudio.google.com/apikey
2. **Backend `.env`** mein `GEMINI_API_KEY` paste karo (frontend mein nahi)
3. **`shree-chat.route.js`** backend par mount + redeploy
4. Frontend **`VITE_API_URL=https://anilaxsoftware.com`** — Shree automatically `/api/shree/chat` call karegi
5. **https://anilaxsoftware.com** → Ask Shree → Hindi test

### Key security (optional)

Google Cloud → API key → restrict HTTP referrers:

- `https://anilaxsoftware.com/*`
- `https://www.anilaxsoftware.com/*`

---

## Android admin APK

`.env.android` already set:

```env
VITE_API_URL=https://anilaxsoftware.com
```

Build: `npm run android:apk`

---

## Checklist before go-live

| Step | Done? |
|------|-------|
| DNS → anilaxsoftware.com | ☐ |
| Frontend deploy + `VITE_API_URL` | ☐ |
| Backend `/api/contact-leads` live | ☐ |
| Backend `/api/shree/chat` + `GEMINI_API_KEY` | ☐ |
| HTTPS working | ☐ |
| Shree Hindi test on live site | ☐ |
