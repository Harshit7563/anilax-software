import { PAYMENT_SOLUTIONS, BUSINESS_SOLUTIONS } from "./softwareServices.js";
import { PRODUCT_EXTRA_MODULES } from "./softwareBlogModules.js";

const DELIVERY_BULLETS = [
  "Discovery workshop to map your current process and must-have screens",
  "Figma UI/UX prototypes for admin and mobile before development starts",
  "Agile sprints with demo every 1–2 weeks and shared backlog",
  "QA on real devices, UAT with your team, and production deployment",
  "AMC, monitoring, and enhancement sprints after go-live",
];

const TIMELINE_BULLETS = [
  "Weeks 1–2: requirements, wireframes, and technical architecture sign-off",
  "Weeks 3–8: core modules, admin panel, and primary workflows (varies by scope)",
  "Weeks 9–10: integrations, reports, mobile apps, and performance hardening",
  "Weeks 11–12: UAT, training, data migration, and phased go-live",
];

function addDays(base, offset) {
  const d = new Date(base);
  d.setDate(d.getDate() - offset);
  return d.toISOString().slice(0, 10);
}

function inferProblem(product, group) {
  const t = product.title.toLowerCase();
  if (group === "payment") {
    return `${product.title} replaces fragmented payment plugins and manual reconciliation. Teams often juggle multiple vendor dashboards; a unified stack gives you one ledger, one webhook stream, and one support channel when transactions fail at scale.`;
  }
  if (t.includes("school") || t.includes("college") || t.includes("lms") || t.includes("coaching") || t.includes("exam")) {
    return `Institutions still lose hours on fees, attendance, and parent communication across WhatsApp and Excel. ${product.title} centralizes academic and admin workflows so principals and trustees see accurate numbers daily.`;
  }
  if (t.includes("hospital") || t.includes("clinic") || t.includes("pharmacy") || t.includes("lab") || t.includes("dental")) {
    return `Healthcare units need traceability from appointment to bill to pharmacy. Paper registers create revenue leakage and compliance risk; digital workflows improve patient experience and audit readiness.`;
  }
  if (t.includes("restaurant") || t.includes("hotel") || t.includes("food") || t.includes("kitchen")) {
    return `Hospitality operations break when kitchen, billing, and delivery apps are disconnected. ${product.title} aligns front-of-house, production, and settlements so managers see margin per outlet in real time.`;
  }
  if (t.includes("logistics") || t.includes("courier") || t.includes("fleet") || t.includes("taxi") || t.includes("bus")) {
    return `Mobility and logistics businesses lose money on invisible delays, COD mismatch, and idle vehicles. Software connects dispatch, riders, and finance so every trip has a digital trail.`;
  }
  return `Growing businesses outgrow generic tools — ${product.title} is shaped around your terminology, approval chains, and reports instead of forcing your team into rigid templates.`;
}

function adminBullets(product) {
  return [
    `Super-admin, manager, and staff roles scoped to ${product.tags[0] || "your"} operations`,
    "Dashboards with filters by date, branch, agent, and status",
    "Bulk import/export for masters (customers, products, employees, inventory)",
    "Notification center for pending approvals and SLA breaches",
    "Configurable masters so you can add fields without redeploying code",
  ];
}

function mobileText(product) {
  const t = product.title.toLowerCase();
  if (t.includes("app") || t.includes("booking") || t.includes("taxi") || t.includes("delivery") || t.includes("marketplace")) {
    return `We typically deliver React Native or native Android/iOS apps for end users plus a lightweight staff app for field teams — all synced to the same API as your admin panel. Push notifications, offline-tolerant forms, and OTP login are included where your use case requires them.`;
  }
  return `Where your users are on the move, we add responsive mobile web or dedicated Android apps for attendance, orders, collections, and approvals — connected to the same backend as your desktop admin.`;
}

function integrationBullets(product, group) {
  const base = [
    "REST APIs and webhooks for your existing ERP or accounting system",
    "SMS and WhatsApp hooks for OTP, alerts, and campaigns (DLT-compliant templates)",
    "Payment gateway / UPI / AePS connectors when collections are part of the flow",
  ];
  if (group === "payment") {
    return [
      ...base,
      "Bank and NPCI partner APIs, settlement files, and dispute references",
      "PCI-aware checkout flows and tokenized card storage patterns",
      "Reconciliation jobs matching acquirer reports to internal ledger",
    ];
  }
  if (product.tags.includes("GST") || product.id === "accounting") {
    return [...base, "GST e-invoice and e-way bill integration paths", "Tally / Busy export formats on request"];
  }
  if (product.tags.includes("HealthTech") || product.tags.includes("HMS")) {
    return [...base, "Lab analyzer and PACS integration hooks", "ABDM-ready architecture discussions during discovery"];
  }
  return base;
}

function securityText(product, group) {
  if (group === "payment" || product.tags.includes("Fintech")) {
    return "We implement TLS everywhere, secrets vaulting, least-privilege API keys, and audit logs on money movement. Production access is role-bound; penetration-test fixes are addressed per agreed SLA during AMC.";
  }
  return "Role-based access, encrypted backups, session timeouts, and action audit trails are standard. Sensitive PII fields can be masked per role; hosting on your preferred cloud region in India is supported.";
}

function expandModules(product) {
  return PRODUCT_EXTRA_MODULES[product.id] ?? [
    product.desc,
    `${product.title}: ${product.tagline}`,
    "Admin console with roles, reports, and exports",
  ];
}

function whoFor(product, group) {
  return [
    `Organizations investing in ${product.title.toLowerCase()} for the Indian market`,
    `Teams replacing spreadsheets, legacy desktop software, or stitched-together tools`,
    `Founders and IT heads who need white-label branding and owned source/deployment`,
    group === "payment"
      ? "Merchants, fintechs, and aggregators needing compliant payment infrastructure"
      : `Operations leaders in ${product.tags.slice(0, 2).join(" & ")} verticals`,
  ];
}

function buildSections(product, group) {
  return [
    {
      type: "p",
      text: `Anilax Software delivers ${product.title} — ${product.tagline}. ${product.desc} We engineer admin panels, APIs, and mobile experiences so your team runs daily work on one platform instead of scattered tools.`,
    },
    { type: "h2", text: "The business problem it solves" },
    { type: "p", text: inferProblem(product, group) },
    { type: "h2", text: "Who should use this solution" },
    { type: "ul", items: whoFor(product, group) },
    { type: "h2", text: "Detailed features & modules" },
    { type: "ul", items: expandModules(product) },
    { type: "h2", text: "Admin panel, roles & analytics" },
    { type: "ul", items: adminBullets(product) },
    { type: "h2", text: "Mobile & customer-facing experience" },
    { type: "p", text: mobileText(product) },
    { type: "h2", text: "Integrations we commonly wire" },
    { type: "ul", items: integrationBullets(product, group) },
    { type: "h2", text: "Implementation timeline (indicative)" },
    { type: "ul", items: TIMELINE_BULLETS },
    { type: "h2", text: "How Anilax delivers end-to-end" },
    { type: "ul", items: DELIVERY_BULLETS },
    { type: "h2", text: "Security, hosting & support" },
    { type: "p", text: securityText(product, group) },
    { type: "h2", text: "Build this with Anilax" },
    {
      type: "p",
      text: `Ready to scope ${product.title}? Open the solution page on our software catalog, then contact us for a tailored proposal, screen-by-screen walkthrough, and commercial estimate.`,
    },
  ];
}

function estimateReadMinutes(sections) {
  const text = sections.map((s) => (s.type === "ul" ? s.items.join(" ") : s.text || "")).join(" ");
  return Math.max(6, Math.min(14, Math.round(text.split(/\s+/).length / 180)));
}

function createSoftwareBlogPost(product, group, index) {
  const sections = buildSections(product, group);
  const slug = `software-${product.id}`;
  const relatedPool = [...PAYMENT_SOLUTIONS, ...BUSINESS_SOLUTIONS].filter((p) => p.id !== product.id);
  const related = relatedPool
    .filter((p) => p.tags.some((t) => product.tags.includes(t)))
    .slice(0, 3)
    .map((p) => `software-${p.id}`);
  if (related.length < 2) {
    related.push(...relatedPool.slice(0, 3 - related.length).map((p) => `software-${p.id}`));
  }

  return {
    slug,
    softwareId: product.id,
    title: `${product.title}: features, modules & how Anilax builds it`,
    excerpt: `${product.tagline} — ${product.desc}`,
    category: "Software",
    date: addDays("2026-05-10", index),
    readMinutes: estimateReadMinutes(sections),
    author: "Anilax Software Team",
    tags: ["Software", group === "payment" ? "Payments" : "Business", ...product.tags],
    sections,
    relatedSlugs: [...new Set(related)].slice(0, 3),
  };
}

export const SOFTWARE_BLOG_POSTS = [
  ...PAYMENT_SOLUTIONS.map((p, i) => createSoftwareBlogPost(p, "payment", i)),
  ...BUSINESS_SOLUTIONS.map((p, i) => createSoftwareBlogPost(p, "business", i + PAYMENT_SOLUTIONS.length)),
];
