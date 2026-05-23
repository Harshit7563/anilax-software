/** B2B AePS content — NPCI Aadhaar Enabled Payment System for partners */

import { COMPANY_PHONE, COMPANY_PHONE_TEL } from "./company";

export const B2B_HERO = {
  eyebrow: "B2B · AePS Solutions",
  title: "Grow your network with NPCI AePS — software & API",
  subtitle:
    "Offer cash withdrawal, deposit, balance enquiry, mini statement, Aadhaar Pay, and micro ATM under your brand. Biometric Aadhaar authentication, real-time settlement, and a commission model built for distributors and BC networks.",
  ctaPrimary: { label: "Get a quote", href: "/#contact" },
  ctaSecondary: { label: "Request a call", href: `tel:${COMPANY_PHONE_TEL}` },
  notice:
    "AePS does not register retailers via unofficial Play Store apps. Partner only through authorized banks and licensed technology providers like Anilax.",
};

export const B2B_AEPS_EXPLAINER = {
  title: "What is AePS?",
  lead:
    "Aadhaar Enabled Payment System (AePS) is an NPCI rail that lets customers use Aadhaar number + biometric fingerprint (or iris) authentication to access basic banking — without a debit card or smartphone banking app.",
  points: [
    {
      title: "NPCI infrastructure",
      text: "Transactions route through NPCI with bank-grade switching, settlement, and dispute frameworks your partners can trust.",
    },
    {
      title: "UIDAI authentication",
      text: "Customer identity is verified via UIDAI biometric match — the same fingerprint trust layer AePS is known for across rural India.",
    },
    {
      title: "Business Correspondent model",
      text: "You onboard retailers as BC/BF outlets; we provide portal, API, settlement, and reporting so you focus on network growth.",
    },
  ],
  flow: ["Customer", "Retailer / BC", "Your portal or API", "NPCI", "Issuer bank"],
};

export const B2B_CLIENT_BENEFITS = [
  {
    title: "New revenue stream",
    text: "Earn commission on every AePS transaction — withdrawal, deposit, Aadhaar Pay, and value-added services. Transparent slabs in your admin dashboard.",
    metric: "Per-txn commission",
  },
  {
    title: "Same-day retailer onboarding",
    text: "Onboard outlets with Aadhaar KYC and fingerprint device mapping — no lengthy branch visits. Go live in your network within hours, not weeks.",
    metric: "Hours, not weeks",
  },
  {
    title: "Real-time settlement",
    text: "Settlement credited to partner bank accounts in real time (T+0) where bank policy allows — improve cash flow for your distributors and retailers.",
    metric: "T+0 settlement",
  },
  {
    title: "White-label under your brand",
    text: "Portal, retailer app, and receipts carry your logo. Customers see your company; Anilax powers the rails behind the scenes.",
    metric: "Your brand",
  },
  {
    title: "Lower infra cost vs cards",
    text: "No POS rental for basic AePS — fingerprint devices and Android terminals supported. Extend banking to villages profitably.",
    metric: "Low capex",
  },
  {
    title: "Compliance-ready stack",
    text: "Audit logs, transaction IDs, reversal flows, and role-based access aligned with BC operating guidelines and bank partner checklists.",
    metric: "Audit-ready",
  },
];

export const B2B_SERVICES = [
  {
    id: "withdraw",
    title: "Cash Withdrawal",
    desc: "Customer withdraws cash from Aadhaar-linked bank account using fingerprint auth at your retail point.",
    limit: "As per bank & NPCI limits",
  },
  {
    id: "deposit",
    title: "Cash Deposit",
    desc: "Accept cash deposits into beneficiary accounts through AePS-enabled BC outlets in your chain.",
    limit: "Partner bank dependent",
  },
  {
    id: "balance",
    title: "Balance Enquiry",
    desc: "Instant available balance check — high-frequency, low-ticket service that drives footfall to outlets.",
    limit: "No charge to customer*",
  },
  {
    id: "statement",
    title: "Mini Statement",
    desc: "Last 5–10 transactions printed or displayed — essential for customers without smartphone banking.",
    limit: "Instant response",
  },
  {
    id: "aadhaar-pay",
    title: "Aadhaar Pay",
    desc: "Merchant receives payment from customer’s Aadhaar-linked account — ideal for small shops and rural merchants.",
    limit: "Merchant onboarding via you",
  },
  {
    id: "matm",
    title: "Micro ATM (m-ATM)",
    desc: "Cardless and card-based transactions on certified m-ATM devices integrated with your AePS stack.",
    limit: "Device + AePS bundle",
  },
];

export const B2B_SOLUTIONS = [
  {
    id: "software",
    title: "AePS Software Portal",
    tagline: "Web & Android for distributors and retailers",
    desc: "End-to-end portal for master distributors, super distributors, and retailers — limit management, ledger, commission, and dispute handling.",
    benefits: [
      "Hierarchy: MD → SD → retailer with wallet & credit limits",
      "Live transaction monitor and EOD settlement reports",
      "Biometric device pairing and session management",
      "Commission engine with custom slabs per network",
      "Multi-language UI for field teams",
    ],
  },
  {
    id: "api",
    title: "AePS API Integration",
    tagline: "REST APIs for fintechs and enterprises",
    desc: "Integrate AePS into your existing ERP, banking correspondent app, or super-app — same NPCI rails, your UX.",
    benefits: [
      "REST + signed webhooks for success, failure, reversal",
      "Sandbox with test Aadhaar and simulated biometrics",
      "Idempotent transaction APIs for safe retries",
      "Settlement and commission webhooks to your core",
      "Dedicated integration engineer during go-live",
    ],
  },
];

export const B2B_ONBOARDING = [
  {
    step: "01",
    title: "Discovery & commercial",
    text: "We map your target states, bank tie-up, expected volume, and commission expectations — then share a scoped proposal.",
  },
  {
    step: "02",
    title: "Bank / NPCI alignment",
    text: "You complete BC/BF registration with sponsor bank. We provide tech compliance documents and integration checklist.",
  },
  {
    step: "03",
    title: "Portal or API setup",
    text: "Sandbox credentials, UAT with test transactions, retailer hierarchy import, and fingerprint device configuration.",
  },
  {
    step: "04",
    title: "Pilot & scale",
    text: "Phased rollout to 50–100 outlets, monitoring, then full network launch with 24/7 escalation support from Jaipur.",
  },
];

export const B2B_COMPLIANCE = [
  "UIDAI-compliant biometric capture — no storage of full Aadhaar in logs",
  "Encrypted transport (TLS 1.2+) for all API and portal traffic",
  "Role-based access: admin, distributor, retailer, support — with action audit trail",
  "Transaction reversal and dispute workflows with reference IDs",
  "Daily settlement reconciliation reports exportable to CSV / PDF",
];

export const B2B_HOW_IT_WORKS = {
  portal: {
    benefits: [
      {
        title: "Financial inclusion at scale",
        text: "Reach unbanked and underbanked customers where branches are far — AePS is the last-mile bridge.",
      },
      {
        title: "Operational visibility",
        text: "Every retailer transaction visible in one dashboard — limits, failures, and commissions in real time.",
      },
      {
        title: "Secure biometric flow",
        text: "Fingerprint captured on certified devices; authentication via UIDAI — no PIN sharing or card skimming.",
      },
    ],
    process: [
      {
        title: "Partner onboarding",
        text: "Sign commercial terms, complete bank BC documentation, receive portal URL and admin credentials.",
      },
      {
        title: "Network setup",
        text: "Create distributor tree, assign limits, map biometric devices to retailer IDs.",
      },
      {
        title: "Go-live & support",
        text: "Production keys activated, training for field staff, AMC and enhancement sprints available.",
      },
    ],
  },
  api: {
    benefits: [
      {
        title: "Embed in your product",
        text: "Keep your app UX — call Anilax AePS APIs for withdraw, enquiry, and pay flows.",
      },
      {
        title: "Faster GTM",
        text: "Skip building NPCI switch integrations from scratch; typical sandbox to pilot in 2–4 weeks.",
      },
      {
        title: "Enterprise SLAs",
        text: "Uptime commitments, dedicated support channel, and incident communication for high-volume partners.",
      },
    ],
    process: [
      {
        title: "API credentials",
        text: "Receive sandbox keys, OpenAPI spec, and Postman collection for your engineering team.",
      },
      {
        title: "Integration & UAT",
        text: "Implement auth, transaction, and webhook handlers; complete UAT cases with our team.",
      },
      {
        title: "Production cutover",
        text: "IP whitelisting, live keys, monitoring dashboards, and hypercare during first 30 days.",
      },
    ],
  },
};

export const B2B_WHY = [
  {
    title: "AePS-first product team",
    text: "We specialise in correspondent banking and AePS — not a generic payment gateway bolt-on.",
  },
  {
    title: "Fingerprint-ready onboarding",
    text: "Device mapping, session handling, and retailer KYC flows built for biometric-first operations.",
  },
  {
    title: "Real-time settlement",
    text: "Partners see money movement aligned to bank cutoffs with transparent settlement reports.",
  },
  {
    title: "Commission transparency",
    text: "Per-service commission visible before go-live — no hidden deductions on retailer payouts.",
  },
  {
    title: "Rajasthan HQ, India-wide delivery",
    text: "ANILAX SOFTWARE PRIVATE LIMITED — implementation, support, and escalation from Jaipur since 2021.",
  },
  {
    title: "Software + API in one contract",
    text: "Start with portal, add API later — or vice versa. Single partner for your entire AePS stack.",
  },
];

export const B2B_STATS = [
  { value: "950+", label: "B2B partners" },
  { value: "28", label: "States & UTs" },
  { value: "50 Lakh+", label: "Retail touchpoints" },
  { value: "6", label: "Core AePS services" },
];

export const B2B_FAQ = [
  {
    q: "Who can become an AePS partner with Anilax?",
    a: "Distributors, technology companies, BC network operators, and enterprises with a sponsor bank BC/BF agreement — or those ready to complete bank onboarding with our documentation support.",
  },
  {
    q: "Which biometric devices are supported?",
    a: "We support commonly deployed UIDAI-certified fingerprint scanners and integrated m-ATM devices. Device list is shared during technical onboarding.",
  },
  {
    q: "How fast is settlement?",
    a: "Settlement timing depends on your sponsor bank and NPCI cycle. Many partners operate on real-time or same-day credit to distributor accounts — confirmed in your commercial agreement.",
  },
  {
    q: "Can I use only API without your portal?",
    a: "Yes. API-only, portal-only, or combined engagements are available. Same AePS rails and compliance layer underneath.",
  },
];

export const B2B_DEMO_ROWS = [
  ["AEPS-8841", "Cash withdrawal", "₹10,000", "ok"],
  ["AEPS-8840", "Balance enquiry", "—", "ok"],
  ["AEPS-8839", "Mini statement", "—", "ok"],
  ["AEPS-8838", "Aadhaar Pay", "₹2,500", "ok"],
  ["AEPS-8837", "Cash deposit", "₹5,000", "ok"],
];

export const B2B_DEMO_STATS = [
  { label: "Today's AePS volume", value: "₹1.2 Cr", change: "+18%" },
  { label: "Active retailers", value: "4,820", change: "+6%" },
  { label: "Settlement", value: "Real-time", change: "T+0" },
];

export const B2B_CATEGORIES = [
  "AePS Banking",
  "Micro ATM",
  "Domestic Transfer",
  "Bill Payments",
  "Payouts",
  "UPI Collect",
  "PAN & KYC",
  "Virtual Accounts",
  "Collections",
  "Webhooks",
];

/** B2B AePS & banking APIs — type and use case */
export const B2B_API_CATALOG = [
  { type: "AEPS Cash Withdrawal", useCase: "Aadhaar se cash withdraw" },
  { type: "AEPS Balance Enquiry", useCase: "Balance check" },
  { type: "Mini Statement API", useCase: "Last transactions" },
  { type: "Aadhaar Pay API", useCase: "Aadhaar payment acceptance" },
  { type: "MATM API", useCase: "Micro ATM transactions" },
  { type: "DMT API", useCase: "Domestic money transfer" },
  { type: "BBPS API", useCase: "Bill payments" },
  { type: "PAN API", useCase: "PAN card services" },
  { type: "Payout API", useCase: "Bank transfer" },
  { type: "UPI Collect API", useCase: "UPI payment collect" },
  { type: "Virtual Account API", useCase: "Auto settlement/reconciliation" },
  { type: "CMS API", useCase: "Collection management" },
  { type: "KYC API", useCase: "Aadhaar/PAN verification" },
  { type: "Webhook API", useCase: "Live updates" },
];

export const B2B_CONTACT_STRIP = {
  phone: COMPANY_PHONE,
  phoneTel: COMPANY_PHONE_TEL,
  email: "sales@anilaxsoftware.com",
};
