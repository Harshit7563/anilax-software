import { COMPANY_EMAIL, COMPANY_PHONE } from "./company";
import { AI_KNOWLEDGE } from "./aiKnowledge";
import { PAYMENT_SOLUTIONS, BUSINESS_SOLUTIONS } from "./softwareServices";
import { SERVICE_LINES } from "./serviceLines";
import { SERVICE_DETAIL } from "./serviceDetailContent";
import { getSoftwareProduct } from "./softwareProductDetail";

export const SHREE_PERSONA = {
  name: "Shree",
  brand: "Anilax Software",
  title: "Shree AI — Anilax ki personal guide",
};

export const SHREE_DISCLAIMER =
  "Shree Anilax product knowledge se jawab deti hai. Zarurat par baat hamari team tak pahuncha di jaati hai — aapka data safe rehta hai.";

export const SHREE_SUGGESTIONS = {
  en: [
    "Tell me about hospital software",
    "AePS for BC network",
    "UPI app development cost?",
    "Connect me to your team",
  ],
  hi: [
    "Hospital software ke baare mein batao",
    "AePS BC network ke liye",
    "UPI app banwane ka process?",
    "Team se baat karwana hai",
  ],
  hinglish: [
    "Hospital software detail mein",
    "AePS integration kaise hoti hai?",
    "ERP software chahiye",
    "Team se connect karo",
  ],
};

const EXTRA_ALIASES = {
  upi: ["upi", "gpay", "phonepe", "paytm", "bhim", "intent", "collect"],
  gateway: ["gateway", "checkout", "payment gateway", "razorpay", "payu"],
  erp: ["erp", "manufacturing", "factory", "production", "bom"],
  hospital: ["hospital", "hms", "clinic", "opd", "ipd", "healthcare", "doctor", "patient"],
  school: ["school", "college", "university", "erp", "student", "admission"],
  ecommerce: ["ecommerce", "e-commerce", "marketplace", "shop", "cart", "checkout"],
  logistics: ["logistics", "courier", "delivery", "fleet", "warehouse", "wms"],
  aeps: ["aeps", "aadhaar", "biometric", "bc", "business correspondent", "matm"],
  api: ["api", "rest", "webhook", "sdk", "integration", "developer"],
  pos: ["pos", "softpos", "qr", "merchant", "retail"],
  crm: ["crm", "sales", "lead", "pipeline"],
  fintech: ["fintech", "payment", "wallet", "nbfc", "settlement"],
};

function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s\u0900-\u097F+]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1);
}

function catalogFromSoftware(items, type) {
  return items.map((item) => ({
    id: item.id,
    kind: type,
    title: item.title,
    tagline: item.tagline,
    desc: item.desc,
    tags: item.tags ?? [],
    href: `/software/${item.id}`,
    detail: getSoftwareProduct(item.id),
    aliases: [
      item.id,
      item.title,
      item.tagline,
      ...(EXTRA_ALIASES[item.id] ?? []),
      ...tokenize(`${item.title} ${item.tagline} ${item.desc}`),
    ],
  }));
}

function catalogFromServices() {
  return SERVICE_LINES.map((svc) => {
    const detail = SERVICE_DETAIL[svc.id];
    return {
      id: svc.id,
      kind: "service",
      title: svc.title,
      tagline: svc.tagline,
      desc: svc.summary,
      tags: svc.stack ?? [],
      href: `/services/${svc.id}`,
      detail,
      aliases: [
        svc.id,
        svc.title,
        ...tokenize(`${svc.title} ${svc.tagline} ${svc.summary}`),
        ...(EXTRA_ALIASES[svc.id.replace(/-software|-development|-apps/g, "")] ?? []),
      ],
    };
  });
}

export const SHREE_PRODUCT_CATALOG = [
  ...catalogFromSoftware(PAYMENT_SOLUTIONS, "payment"),
  ...catalogFromSoftware(BUSINESS_SOLUTIONS, "business"),
  ...catalogFromServices(),
];

export { AI_KNOWLEDGE };

export function isConversationalGreeting(text) {
  const raw = text.trim().replace(/[!?.…,🙏]+$/g, "").trim();
  const q = raw.toLowerCase().replace(/\s+/g, " ");

  if (/[\u0900-\u097F]/.test(raw)) {
    if (/^(नमस्ते|नमस्कार|प्रणाम|नमस्कार|राधे|जय)/.test(raw)) return true;
    if (/^नम/.test(raw) && raw.length <= 12) return true;
  }

  if (
    /^(hi|hello|hey|hola|yo|sup|namaste|namaskar|namskar|nmaskar|nmste|pranam|prnam|radhe radhe|jai shree|good morning|good evening|good afternoon)$/i.test(
      q,
    )
  ) {
    return true;
  }
  if (/^nam(skar|askar|aste|ste)$/i.test(q)) return true;
  if (/^n+a+m+[a-z]*$/i.test(q) && q.length >= 5 && q.length <= 12) return true;
  if (/^(kaise|kese|kya)\s+(ho|hai|hain|haal|hal|chal|chale)/i.test(q)) return true;
  if (/^how are you/i.test(q)) return true;
  if (/^kya haal/i.test(q)) return true;
  if (/^aap kaise/i.test(q)) return true;
  return false;
}

export function isHindiGreeting(text) {
  if (/[\u0900-\u097F]/.test(text)) return true;
  const q = text.toLowerCase().trim();
  return /^(nam|pranam|prnam|kaise|kese|kya|aap|dhanyawad|shukriya|radhe|jai)/i.test(q);
}

export function matchShreeProduct(query) {
  const q = query.toLowerCase().trim();
  if (isConversationalGreeting(q)) return null;

  const tokens = tokenize(query);

  let best = null;
  let bestScore = 0;

  for (const product of SHREE_PRODUCT_CATALOG) {
    let score = 0;
    for (const alias of product.aliases) {
      const a = alias.toLowerCase();
      if (a.length < 3) continue;
      if (q.includes(a)) score += a.length >= 5 ? 6 : 3;
      if (
        tokens.some((t) => {
          if (t.length < 3) return false;
          if (t === a) return true;
          if (t.length >= 4 && a.includes(t)) return true;
          if (a.length >= 4 && t.includes(a)) return true;
          return false;
        })
      ) {
        score += 2;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      best = product;
    }
  }

  return bestScore >= 3 ? best : null;
}

export function matchShreeKnowledge(query) {
  const tokens = tokenize(query);
  if (!tokens.length) return null;

  let best = null;
  let bestScore = 0;

  for (const chunk of AI_KNOWLEDGE) {
    let score = 0;
    for (const token of tokens) {
      for (const kw of chunk.keywords) {
        if (kw === token || kw.includes(token) || token.includes(kw)) {
          score += token.length >= 4 ? 3 : 2;
        }
      }
    }
    if (score > bestScore) {
      bestScore = score;
      best = chunk;
    }
  }

  return bestScore >= 2 ? best : null;
}
