# Anilax Software

Code ab **do alag Git repositories** mein hai:

| Repo | Folder | GitHub |
|------|--------|--------|
| **Design (UI)** | `anilax-software-design/` | https://github.com/Harshit7563/anilax-software-design |
| **Backend (API)** | `anilax-software-backend/` | https://github.com/Harshit7563/anilax-software-backend |

## GitHub par naye repo banana

1. https://github.com/new → name: `anilax-software-design` → **no README**
2. https://github.com/new → name: `anilax-software-backend` → **no README**

## Push (Mac)

**Design:**
```bash
cd anilax-software-design
bash deploy-connect-github.sh
```

**Backend:**
```bash
cd anilax-software-backend
bash deploy-connect-github.sh
```

## Local run

```bash
# Terminal 1
cd anilax-software-backend && npm install && npm run dev

# Terminal 2
cd anilax-software-design && npm install && npm run dev
```

## Hostinger (GitHub deploy)

Repo **`anilax-software`** ab bhi chal sakta hai (root `package.json` design folder build karta hai). Latest commit **`553edb0`** ke baad **Redeploy** karo.

| Setting | Value |
|---------|--------|
| Repository | `anilax-software` |
| Branch | `main` |
| Node | **22.x** |
| Root | `./` |
| Framework | **Vite** / Other (CRA mat chuno) |
| Build | `npm ci && npm run build` |
| Start | `npm start` |
| Output | `dist` |

Better long-term: deploy **`anilax-software-design`** directly (see `anilax-software-design/HOSTINGER.md`).
