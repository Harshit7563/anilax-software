export const brand = {
  name: "Anilax Software",
  legal: "ANILAX SOFTWARE PRIVATE LIMITED",
  phone: "+91-8118898370",
  whatsapp: "918118898370",
  email: "businesswithanilax@outlook.com",
  hq: "Jaipur, Rajasthan, India",
  cin: "U72900RJ2021PTC075931",
  gstin: "08AAVCA9479M1ZX",
  founded: "2021",
};

/** Primary service tree — matches site IA */
export const serviceCatalog = [
  {
    title: "Software Development",
    sub: "End-to-end custom products from discovery to production",
    href: "/services/software-development",
  },
  {
    title: "Custom ERP Development",
    sub: "Operations, inventory, finance, and workflows in one system",
    href: "/services/custom-erp",
  },
  {
    title: "SaaS Development",
    sub: "Multi-tenant platforms with billing, roles, and scale",
    href: "/services/saas-development",
  },
  {
    title: "FinTech Development",
    sub: "UPI, AePS, wallets, payouts, and compliance-ready rails",
    href: "/services/fintech-development",
  },
  {
    title: "School ERP",
    sub: "Admissions, fees, attendance, exams, and parent apps",
    href: "/services/school-erp",
  },
  {
    title: "NBFC / MFI Software",
    sub: "Loan origination, collections, field apps, and MIS",
    href: "/services/nbfc-mfi-software",
  },
  {
    title: "Accounting Software",
    sub: "Ledgers, GST-ready invoicing, and finance dashboards",
    href: "/services/accounting-software",
  },
  {
    title: "AI Software Development",
    sub: "Automation, assistants, and intelligent workflows",
    href: "/services/ai-software",
  },
  {
    title: "Mobile App Development",
    sub: "iOS, Android, and cross-platform apps that ship",
    href: "/services/mobile-app-development",
  },
  {
    title: "API Development",
    sub: "Secure REST APIs, webhooks, sandboxes, and docs",
    href: "/services/api-development",
  },
];

export const industryCatalog = [
  { title: "FinTech", sub: "Payments, lending, wallets, and banking partners", href: "/industries/fintech" },
  { title: "Education", sub: "Schools, coaching, and learning platforms", href: "/industries/education" },
  { title: "Healthcare", sub: "Clinics, hospitals, labs, and pharmacy ops", href: "/industries/healthcare" },
  { title: "Retail", sub: "Stores, distribution, billing, and inventory", href: "/industries/retail" },
  { title: "Logistics", sub: "Fleet, courier, warehouse, and last-mile", href: "/industries/logistics" },
  { title: "Manufacturing", sub: "Production, inventory, and plant workflows", href: "/industries/manufacturing" },
];

export const caseStudies = [
  {
    title: "Regional BC network — 800+ agents in 6 months",
    tag: "FinTech · AePS",
    result: "6× agent onboarding speed",
    image: "/works/work-aeps.jpg",
    href: "/case-studies/regional-bc-network",
    body: "Agent apps, biometric cash-out, commission trees, and same-day settlement views for a distributor scaling across districts.",
  },
  {
    title: "UPI wallet — 1.2M users without ledger chaos",
    tag: "FinTech · Wallet",
    result: "1.2M active users",
    image: "/works/work-wallet.jpg",
    href: "/case-studies/upi-wallet-app",
    body: "Collect, P2P, KYC tiers, and audit-ready ledgers under real consumer traffic.",
  },
  {
    title: "School ERP — 12 campuses, one control plane",
    tag: "Education · ERP",
    result: "12 campuses live",
    image: "/works/work-edtech.jpg",
    href: "/case-studies/school-erp",
    body: "Admissions, fees, attendance, and bilingual parent apps for a multi-campus group.",
  },
  {
    title: "Clinic HMS — OPD to pharmacy on one timeline",
    tag: "Healthcare",
    result: "40% fewer handoffs",
    image: "/works/work-health.jpg",
    href: "/case-studies/clinic-hms",
    body: "Queues, e-prescriptions, lab orders, and pharmacy stock linked for clearer billing.",
  },
  {
    title: "Courier fleet — GPS + COD close-out",
    tag: "Logistics",
    result: "Midnight Excel retired",
    image: "/works/work-logistics.jpg",
    href: "/case-studies/courier-fleet",
    body: "Dispatch, live tracking, COD reconciliation, and exception handling for last-mile teams.",
  },
  {
    title: "SaaS API platform — 40+ clients on one stack",
    tag: "SaaS · APIs",
    result: "40+ tenant clients",
    image: "/works/work-api.jpg",
    href: "/case-studies/saas-api-platform",
    body: "Multi-tenant payments APIs, OpenAPI docs, SDKs, and sandbox keys partners can trust.",
  },
];

export const portfolio = caseStudies.map((c) => ({
  title: c.title,
  tag: c.tag,
  image: c.image,
  href: c.href,
}));

export const pricingTiers = [
  {
    name: "Starter MVP",
    price: "₹1.5L+",
    unit: "project",
    blurb: "Validate a focused product in weeks — clear scope, weekly demos, production-ready core.",
    features: ["Discovery workshop", "UI + core flows", "Admin basics", "2 revision cycles", "4–8 week delivery"],
    cta: "Start Your Project",
    href: "/start-project",
    highlight: false,
  },
  {
    name: "Growth Build",
    price: "₹4.5L+",
    unit: "project",
    blurb: "Full product build for SMEs — web/app, integrations, roles, and go-live support.",
    features: ["Product architecture", "Web + mobile", "API integrations", "QA + UAT", "30-day hypercare"],
    cta: "Free Consultation",
    href: "/free-consultation",
    highlight: true,
  },
  {
    name: "Dedicated Pod",
    price: "₹1.2L+",
    unit: "month",
    blurb: "Your extended engineering team — sprint cadence, shared backlog, long-term continuity.",
    features: ["2–6 engineers", "Sprint planning", "Slack / daily sync", "Code ownership yours", "Flexible scale-up"],
    cta: "Talk to us",
    href: "/free-consultation",
    highlight: false,
  },
];

export const blogPosts = [
  {
    title: "How to choose a custom ERP vs off-the-shelf",
    tag: "ERP",
    date: "Sep 2026",
    href: "/blog/custom-erp-vs-off-the-shelf",
    excerpt: "When spreadsheets break and SaaS templates fight your process — a practical decision framework.",
  },
  {
    title: "AePS & UPI: building fintech that field teams trust",
    tag: "FinTech",
    date: "Aug 2026",
    href: "/blog/aeps-upi-field-trust",
    excerpt: "Settlement truth, commission trees, and device reality — what separates demos from durable rails.",
  },
  {
    title: "School ERP checklist for multi-campus groups",
    tag: "Education",
    date: "Jul 2026",
    href: "/blog/school-erp-checklist",
    excerpt: "Fees, attendance, parent apps, and bilingual support — the modules that actually matter at go-live.",
  },
  {
    title: "SaaS multi-tenancy without the midnight firefight",
    tag: "SaaS",
    date: "Jun 2026",
    href: "/blog/saas-multi-tenancy",
    excerpt: "Tenant isolation, billing hooks, and admin tooling that scales past your first ten customers.",
  },
];

export const processSteps = [
  { n: "01", title: "Discover", body: "Goals, workflows, constraints, and success metrics — no slideware fluff." },
  { n: "02", title: "Design", body: "Architecture, UX flows, and a build plan your stakeholders can approve." },
  { n: "03", title: "Build", body: "Weekly demos, clear backlog, and production-minded engineering." },
  { n: "04", title: "Launch", body: "QA, training, go-live, and hypercare so ops does not absorb the risk alone." },
];

export const trustStats = [
  { n: "15+", l: "Years team craft" },
  { n: "80+", l: "Products shipped" },
  { n: "6", l: "Industries deep" },
  { n: "24h", l: "Consultation reply" },
];

export const whyPoints = [
  {
    title: "Senior attention, not sales theatre",
    body: "You talk to people who ship — architecture, timelines, and trade-offs in plain language.",
  },
  {
    title: "India-ready product sense",
    body: "AePS, UPI, GST, bilingual UX, and field devices — we design for how business actually runs here.",
  },
  {
    title: "You own the code",
    body: "Repos, docs, and handoff included. No black-box lock-in when the engagement ends.",
  },
  {
    title: "Built for operators",
    body: "Dashboards, audit trails, and MIS your finance and field teams will actually open.",
  },
];

export const nav = [
  {
    id: "services",
    label: "Services",
    mega: true,
    items: [
      { href: "/services", label: "All services", sub: "Browse every capability", viewAll: true },
      ...serviceCatalog.map((s) => ({ href: s.href, label: s.title, sub: s.sub })),
    ],
  },
  {
    id: "industries",
    label: "Industries",
    mega: true,
    items: [
      { href: "/industries", label: "All industries", sub: "Where we deliver deepest", viewAll: true },
      ...industryCatalog.map((s) => ({ href: s.href, label: s.title, sub: s.sub })),
    ],
  },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
];

export const footer = {
  services: serviceCatalog.slice(0, 6).map((s) => ({ href: s.href, label: s.title })),
  company: [
    { href: "/case-studies", label: "Case Studies" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
    { href: "/free-consultation", label: "Free Consultation" },
    { href: "/start-project", label: "Start Your Project" },
  ],
  industries: industryCatalog.map((s) => ({ href: s.href, label: s.title })),
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
    { href: "/compliance", label: "Compliance" },
  ],
};

/** Legacy aliases used by older detail maps */
export const awards = [];
export const works = caseStudies;
export const homeProducts = [];
export const home = {
  hero: {
    eyebrow: "ANILAX SOFTWARE",
    title: "Software that moves with your business",
    sub: "Custom ERP, FinTech, SaaS, and mobile products — engineered in Jaipur for startups and enterprises across India.",
  },
};
