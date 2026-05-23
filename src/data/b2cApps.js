export const B2C_HERO = {
  eyebrow: "B2C · Consumer Apps & APIs",
  title: "Consumer UPI apps — built and powered by you",
  subtitle:
    "We design and develop consumer UPI wallets, super-apps, and recharge platforms — then plug in our B2C APIs for UPI, wallets, bills, cards, and rewards so you go live faster.",
  ctaPrimary: { label: "Build your app", href: "/#contact" },
  ctaSecondary: { label: "Explore B2C APIs", href: "/api#b2c" },
  notice:
    "White-label apps, your brand on the store — Anilax provides the technology stack, integrations, and ongoing support.",
};

export const B2C_ROADMAP = [
  {
    phase: "01",
    title: "Discovery & design",
    duration: "Week 1–2",
    items: ["Product workshops", "Figma UX for onboarding & home", "API & compliance checklist"],
    status: "done",
  },
  {
    phase: "02",
    title: "MVP — UPI & wallet",
    duration: "Week 3–6",
    items: ["Scan & pay, send money", "Wallet load & passbook", "Sandbox UPI integration"],
    status: "active",
  },
  {
    phase: "03",
    title: "Recharge & bill pay",
    duration: "Week 7–9",
    items: ["Mobile/DTH recharge", "BBPS electricity & gas", "Receipts & notifications"],
    status: "upcoming",
  },
  {
    phase: "04",
    title: "Rewards & soft launch",
    duration: "Week 10–11",
    items: ["Cashback rules engine", "Play Store beta", "Pilot with limited users"],
    status: "upcoming",
  },
  {
    phase: "05",
    title: "Go-live & scale",
    duration: "Week 12+",
    items: ["Production keys & monitoring", "Marketing rollout", "AMC & 24/7 support"],
    status: "upcoming",
  },
];

export const B2C_APP_FEATURES = [
  {
    icon: "scan",
    title: "Scan & Pay (UPI QR)",
    desc: "Camera scan, intent, and collect flows — same experience users expect from top UPI apps.",
  },
  {
    icon: "wallet",
    title: "Wallet & balance",
    desc: "Add money via UPI/bank, P2P transfers, passbook, and low-balance alerts.",
  },
  {
    icon: "recharge",
    title: "Recharge & bills",
    desc: "Mobile, DTH, electricity, gas, broadband — BBPS-ready bill pay inside your app.",
  },
  {
    icon: "merchant",
    title: "Merchant & offers",
    desc: "Cashback, coupons, referral rewards, and campaign banners tied to payments.",
  },
  {
    icon: "secure",
    title: "Secure onboarding",
    desc: "OTP, device binding, MPIN/biometric, KYC tiers, and fraud checks on every session.",
  },
  {
    icon: "rewards",
    title: "Rewards & loyalty",
    desc: "Scratch cards, points, and partner offers — configurable rules per transaction type.",
  },
];

export const B2C_APP_TYPES = [
  {
    id: "super-app",
    title: "Super-app (all-in-one)",
    tagline: "Payments + commerce + services in one",
    points: [
      "UPI, wallet, recharge, bills, tickets",
      "Mini-apps and partner storefronts",
      "Admin console for campaigns & support",
    ],
  },
  {
    id: "upi-only",
    title: "UPI-first app (scan & pay focused)",
    tagline: "Fast, minimal payment experience",
    points: [
      "Scan pay, send money, self transfer",
      "Mandates and autopay for subscriptions",
      "Deep links and shareable QR",
    ],
  },
  {
    id: "wallet-brand",
    title: "Branded wallet & card app",
    tagline: "Your logo, our rails",
    points: [
      "Closed or semi-closed prepaid wallet",
      "Card tokenization ready architecture",
      "Corporate disbursement modules",
    ],
  },
];

export const B2C_CATEGORIES = [
  "Payouts",
  "UPI Rails",
  "Bank Transfers",
  "Wallets",
  "Refunds",
  "Settlement",
  "Validation",
  "Payment Collect & QR",
  "Subscriptions",
  "Cards & Tokens",
  "Disputes & Status",
  "Bulk Operations",
  "Webhooks",
];

/** B2C payment & payout APIs — type and use case */
export const B2C_API_CATALOG = [
  { type: "Payout API", useCase: "Customer/vendor ko paisa bhejna" },
  { type: "UPI Payout API", useCase: "UPI ID pe transfer" },
  { type: "IMPS Payout API", useCase: "Instant bank transfer" },
  { type: "NEFT/RTGS API", useCase: "Large bank settlements" },
  { type: "Wallet Transfer API", useCase: "Paytm wallet transfer" },
  { type: "Refund API", useCase: "Customer refund" },
  { type: "Refund Status API", useCase: "Refund track" },
  { type: "Settlement API", useCase: "Settlement/reconciliation" },
  { type: "Bank Account Validation API", useCase: "Account verify" },
  { type: "VPA/UPI Validation API", useCase: "UPI ID verify" },
  { type: "Payment Link API", useCase: "Customer payment collect" },
  { type: "Dynamic QR API", useCase: "QR generate" },
  { type: "Subscription/Auto Debit API", useCase: "Recurring payments" },
  { type: "Token Gateway API", useCase: "Saved card/token payments" },
  { type: "Chargeback/Dispute API", useCase: "Dispute handling" },
  { type: "Transaction Status API", useCase: "Payment status check" },
  { type: "Bulk Payout API", useCase: "Mass payouts" },
  { type: "Beneficiary Management API", useCase: "Beneficiary add/manage" },
  { type: "Webhook APIs", useCase: "Real-time transaction updates" },
];

export const B2C_HOW_IT_WORKS = {
  app: {
    title: "How we build your consumer app",
    steps: [
      {
        title: "Product design",
        text: "UX flows for onboarding, home, scan pay, and bills — Figma prototypes you approve.",
      },
      {
        title: "Mobile development",
        text: "React Native or native Android/iOS with secure storage and certificate pinning.",
      },
      {
        title: "Backend & APIs",
        text: "Node.js services wired to Anilax B2C APIs, webhooks, and admin dashboards.",
      },
      {
        title: "Store launch",
        text: "Play Store / App Store assets, compliance review, and phased rollout.",
      },
    ],
  },
  api: {
    title: "How we power your existing app",
    steps: [
      {
        title: "Sandbox access",
        text: "Test keys, sample Postman collection, and staging environment in 48 hours.",
      },
      {
        title: "Integration sprint",
        text: "Embed UPI, wallet, or bill pay — our engineers join your standups if needed.",
      },
      {
        title: "Go-live checklist",
        text: "Load test, security review, sponsor bank / PPI partner sign-off.",
      },
      {
        title: "Production support",
        text: "24/7 escalation for payment failures and settlement mismatches.",
      },
    ],
  },
};

export const B2C_WHY = [
  {
    title: "One team for app + API",
    text: "No gap between mobile dev and payment integration — single partner from design to settlement.",
  },
  {
    title: "NPCI-ready patterns",
    text: "UPI intent, collect, and mandate flows implemented per industry best practices.",
  },
  {
    title: "Your brand, not ours",
    text: "White-label UI, custom themes, and your app listing — Anilax stays behind the scenes.",
  },
  {
    title: "Scale on demand",
    text: "Architecture for lakhs of users — autoscaling APIs and CDN for static assets.",
  },
];

export const B2C_STATS = [
  { value: "1.2M+", label: "Wallet users launched" },
  { value: "99.4%", label: "UPI success rate" },
  { value: "<50ms", label: "API median latency" },
  { value: "24/7", label: "Payment ops support" },
];
