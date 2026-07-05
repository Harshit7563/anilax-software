# Do alag GitHub repositories

## Step 1 — GitHub par 2 **khali** repos banao

https://github.com/new par jao, **2 baar** (README / .gitignore mat add karna):

| Repository name | Visibility |
|-----------------|------------|
| `anilax-software-design` | Public ya Private |
| `anilax-software-backend` | Public ya Private |

Owner: **Harshit7563**

## Step 2 — GitHub login (ek baar)

Terminal mein:

```bash
gh auth login
```

GitHub.com → HTTPS → browser se login.

## Step 3 — Push

**Design (UI):**
```bash
cd "/Users/harshit/Anilax Software/anilax-software-design"
bash deploy-connect-github.sh
```

**Backend (API):**
```bash
cd "/Users/harshit/Anilax Software/anilax-software-backend"
bash deploy-connect-github.sh
```

## URLs (push ke baad)

- https://github.com/Harshit7563/anilax-software-design
- https://github.com/Harshit7563/anilax-software-backend

## Hostinger

- Frontend deploy → **`anilax-software-design`**
- API / database → **`anilax-software-backend`** (VPS ya alag Node app)

Purana combined repo `anilax-software` ab optional hai; naye deploys design/backend repos se karo.
