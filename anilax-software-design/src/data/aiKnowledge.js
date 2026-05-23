import { COMPANY_PHONE } from "./company";
import { B2B_FAQ, B2B_CONTACT_STRIP } from "./b2bAeps";

/** Curated knowledge for the on-site AI assistant (no external LLM required). */
export const AI_DISCLAIMER =
  "AI-assisted answers from Anilax product documentation. Not legal or banking advice. We do not train models on your transaction data.";

export const AI_SUGGESTIONS = [
  "What is AePS?",
  "API vs portal integration",
  "How fast is settlement?",
  "Contact sales",
];

export const AI_ROUTE_HINTS = {
  "/b2b": "Ask about AePS, biometrics, retailer onboarding, or API integration.",
  "/api": "Ask about REST APIs, webhooks, sandbox keys, or B2B endpoints.",
  "/b2c": "Ask about consumer apps, wallets, UPI, or white-label launch.",
  "/software": "Ask about custom software, POS, ERP, or payment modules.",
  "/docs": "Ask how to authenticate, sign requests, or use the sandbox.",
  "/sdks": "Ask about Node, Python, PHP, or mobile SDK packages.",
  "/blog": "Ask about AePS guides, API integration, or find articles on our blog.",
};

export const AI_KNOWLEDGE = [
  {
    id: "aeps-overview",
    keywords: ["aeps", "aadhaar", "npci", "biometric", "fingerprint", "uidai", "enabled", "payment system"],
    answer:
      "AePS (Aadhaar Enabled Payment System) is an NPCI rail. Customers use Aadhaar number plus UIDAI biometric authentication for cash withdrawal, balance enquiry, mini statement, deposits, and more — without a debit card at a BC/retailer outlet.",
    links: [{ label: "B2B AePS", href: "/b2b" }],
  },
  {
    id: "aeps-api",
    keywords: ["api", "integrate", "integration", "rest", "webhook", "sandbox", "developer", "sdk"],
    answer:
      "AePS API Integration lets you embed NPCI rails in your own app or ERP: REST APIs, signed webhooks for success/failure/reversal, sandbox with test Aadhaar, idempotent retries, and a dedicated integration engineer at go-live.",
    links: [
      { label: "B2B solutions", href: "/b2b" },
      { label: "API catalog", href: "/api#b2b" },
      { label: "Documentation", href: "/docs" },
    ],
  },
  {
    id: "aeps-portal",
    keywords: ["portal", "software", "retailer", "distributor", "android", "hierarchy", "md", "wallet"],
    answer:
      "AePS Software Portal covers master distributors, super distributors, and retailers — limits, ledger, commission, biometric device pairing, live monitoring, and multi-language UI for field teams.",
    links: [{ label: "B2B page", href: "/b2b" }],
  },
  {
    id: "biometric",
    keywords: ["device", "scanner", "matm", "micro atm", "iris", "read", "capture"],
    answer:
      "We support commonly deployed UIDAI-certified fingerprint scanners and integrated m-ATM devices. Device mapping and session handling are part of onboarding; the full list is shared during technical setup.",
    links: [{ label: "B2B FAQ section", href: "/b2b" }],
  },
  {
    id: "settlement",
    keywords: ["settlement", "t+0", "real-time", "credit", "payout", "reconcile"],
    answer:
      "Settlement timing depends on your sponsor bank and NPCI cycle. Many partners operate real-time or same-day credit to distributor accounts — exact terms are confirmed in your commercial agreement.",
    links: [{ label: "Talk to sales", href: "/b2b" }],
  },
  {
    id: "onboarding",
    keywords: ["onboard", "onboarding", "partner", "bank", "bc", "bf", "kyc", "uat", "go-live", "pilot"],
    answer:
      "Typical journey: discovery & commercial → bank/NPCI alignment with our compliance pack → portal or API sandbox + UAT → pilot outlets → full network launch with escalation support from Jaipur.",
    links: [{ label: "B2B onboarding", href: "/b2b" }],
  },
  {
    id: "api-only",
    keywords: ["api only", "without portal", "portal only", "combined"],
    answer:
      "Yes — API-only, portal-only, or combined engagements are available on the same AePS rails and compliance layer.",
    links: [{ label: "Integration models", href: "/b2b" }],
  },
  {
    id: "who-partner",
    keywords: ["who", "partner", "eligib", "distributor", "fintech", "enterprise", "bc network"],
    answer: B2B_FAQ[0].a,
    links: [{ label: "Become a partner", href: "/b2b" }],
  },
  {
    id: "b2c",
    keywords: ["b2c", "consumer", "wallet", "upi", "app", "white-label", "super-app"],
    answer:
      "B2C covers consumer-facing apps — UPI, wallets, bill pay, rewards, KYC onboarding, and white-label launches on Anilax rails with your branding.",
    links: [{ label: "B2C solutions", href: "/b2c" }],
  },
  {
    id: "software",
    keywords: ["custom", "erp", "pos", "crm", "build", "develop", "product"],
    answer:
      "We ship 120+ software products — payment gateways, POS, ERP, healthcare, logistics, and bespoke web/mobile apps from MVP to enterprise, with AMC and DevOps support.",
    links: [{ label: "Software catalog", href: "/software" }],
  },
  {
    id: "docs-auth",
    keywords: ["auth", "authenticate", "api key", "secret", "signature", "hmac", "header", "bearer"],
    answer:
      "Use your sandbox API key and secret from the partner dashboard. Requests are signed per our docs — start at Documentation for language-specific examples and the sandbox base URL.",
    links: [{ label: "API docs", href: "/docs" }],
  },
  {
    id: "pricing",
    keywords: ["price", "pricing", "cost", "fee", "commission", "quote", "commercial"],
    answer:
      "Pricing is volume-based for APIs plus platform fees for B2B/B2C modules. Enterprise plans include SLAs and white-label options. Per-service AePS commission is shared before go-live.",
    links: [{ label: "Connect for quote", action: "contact" }],
  },
  {
    id: "privacy",
    keywords: ["privacy", "data", "train", "model", "ai", "secure", "encrypt", "gdpr"],
    answer:
      "Transaction and customer data is encrypted and access-controlled. We do not sell your data and do not train AI models on your financial data. This assistant only uses public product documentation on this website.",
    links: [{ label: "Privacy policy", href: "/privacy" }],
  },
  {
    id: "integrate-speed",
    keywords: ["how long", "fast", "days", "weeks", "timeline", "integrate"],
    answer:
      "Most teams complete a sandbox API integration in 1–2 days. Production go-live is typically 2–4 weeks including KYC and bank partner setup, depending on your sponsor bank.",
    links: [
      { label: "API page", href: "/api" },
      { label: "SDKs", href: "/sdks" },
    ],
  },
  {
    id: "contact",
    keywords: ["contact", "sales", "call", "phone", "email", "reach", "talk", "human", "support"],
    answer: `Reach our team at ${B2B_CONTACT_STRIP.email} or ${COMPANY_PHONE}. Office: Mall of Jaipur, Vaishali Nagar, Jaipur 302021. We usually respond within one business day.`,
    links: [
      { label: "Call now", href: `tel:${B2B_CONTACT_STRIP.phoneTel}` },
      { label: "Email sales", href: `mailto:${B2B_CONTACT_STRIP.email}` },
      { label: "Connect form", action: "contact" },
    ],
  },
  {
    id: "blog",
    keywords: ["blog", "article", "read", "guide", "post", "insight", "software guide"],
    answer:
      "Our blog has 66+ detailed guides — one for each software product (ERP, POS, hospital, UPI, etc.) plus AePS and API articles. Filter by Software on the blog page.",
    links: [
      { label: "Visit blog", href: "/blog" },
      { label: "Software catalog", href: "/software" },
    ],
  },
  {
    id: "company",
    keywords: ["anilax", "company", "jaipur", "founded", "cin", "about", "who are"],
    answer:
      "ANILAX SOFTWARE PRIVATE LIMITED (CIN U72900RJ2021PTC075931) is a Jaipur-based fintech and software company since 2021 — payments, AePS, APIs, and custom products for partners across India.",
    links: [{ label: "About company", href: "/company" }],
  },
];
