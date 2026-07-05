import { PAYMENT_SOLUTIONS, BUSINESS_SOLUTIONS } from "./softwareServices";

export const ALL_SOFTWARE_PRODUCTS = [
  ...PAYMENT_SOLUTIONS.map((p) => ({ ...p, category: "payment" })),
  ...BUSINESS_SOLUTIONS.map((p) => ({ ...p, category: "business" })),
];

const PRODUCT_MAP = Object.fromEntries(
  ALL_SOFTWARE_PRODUCTS.map((p) => [p.id, p])
);

const PROFILES = {
  payment: {
    audience: "merchants, fintech teams, and payment operators",
    focus: "secure transactions, reconciliation, and regulatory-ready integrations",
    step1: "Payment flow mapping & compliance checklist",
    step2: "Sandbox integrations with banks / gateways / NPCI rails",
    step3: "Hardened build with webhooks, retries, and monitoring",
    step4: "UAT on real devices and settlement scenarios",
    step5: "Go-live with runbooks and 24/7 escalation paths",
    modules: [
      "Merchant / admin dashboards",
      "Transaction lifecycle & status APIs",
      "Settlement and reconciliation views",
      "Refund, dispute, and reporting modules",
      "Role-based access and audit logs",
    ],
  },
  healthcare: {
    audience: "hospitals, clinics, labs, and pharmacy chains",
    focus: "patient data care, billing accuracy, and staff-friendly workflows",
    step1: "Clinical & admin workflow workshops",
    step2: "Data model for patients, visits, billing, and inventory",
    step3: "HIPAA-minded access controls and backup strategy",
    step4: "Pilot with one department before hospital-wide rollout",
    step5: "Training, manuals, and on-call support during go-live",
    modules: [
      "Patient registration & appointments",
      "OPD/IPD or dispensing workflows",
      "Billing, insurance, and receipts",
      "Inventory / lab / pharmacy linkage",
      "Reports for management and compliance",
    ],
  },
  education: {
    audience: "schools, colleges, coaching centers, and ed-tech brands",
    focus: "simple UX for staff, parents, and students with reliable fee & exam flows",
    step1: "Academic process mapping (admission to alumni)",
    step2: "Role design for admin, teachers, students, parents",
    step3: "Build portals + optional mobile apps",
    step4: "Data migration from Excel / legacy ERP",
    step5: "Training sessions and term-wise support",
    modules: [
      "Admissions and student profiles",
      "Attendance, timetable, and exams",
      "Fees, reminders, and online payments",
      "Parent / student communication",
      "Analytics for management",
    ],
  },
  retail: {
    audience: "retailers, franchises, and distribution businesses",
    focus: "fast billing, inventory accuracy, and multi-outlet control",
    step1: "Store operations and SKU catalog study",
    step2: "POS, inventory, and pricing rule design",
    step3: "Integrations with printers, scales, and payment devices",
    step4: "Outlet pilot and staff training",
    step5: "Central reporting and ongoing enhancements",
    modules: [
      "POS billing and GST invoices",
      "Inventory inward/outward",
      "Offers, loyalty, and memberships",
      "Multi-store sync and dashboards",
      "Purchase and vendor management",
    ],
  },
  hospitality: {
    audience: "hotels, restaurants, travel agencies, and food brands",
    focus: "guest experience, kitchen speed, and booking accuracy",
    step1: "Guest / guestless journey mapping",
    step2: "Inventory, menu, and channel integrations",
    step3: "Staff apps and customer-facing ordering",
    step4: "Peak-hour load testing",
    step5: "Launch support for opening week",
    modules: [
      "Reservations and table/room management",
      "Billing and split payments",
      "Kitchen / housekeeping coordination",
      "Partner aggregator hooks where needed",
      "Owner analytics and exports",
    ],
  },
  mobility: {
    audience: "fleet owners, aggregators, and on-demand startups",
    focus: "real-time tracking, fair dispatch, and reliable payouts",
    step1: "Rider, driver, and ops workflow design",
    step2: "Maps, GPS, and fare engine prototyping",
    step3: "Apps for all sides + admin command center",
    step4: "Simulation of peak demand and edge cases",
    step5: "City-wise rollout and partner onboarding tools",
    modules: [
      "Customer booking application",
      "Driver / provider application",
      "Dispatch, routing, and fare rules",
      "Wallets, incentives, and settlements",
      "Safety, SOS, and trip analytics",
    ],
  },
  fintech: {
    audience: "NBFCs, wallets, agents, and financial product teams",
    focus: "compliance, auditability, and partner bank alignment",
    step1: "Regulatory and sponsor-bank requirement capture",
    step2: "KYC, ledger, and transaction architecture",
    step3: "Secure APIs and admin oversight panels",
    step4: "Penetration testing and reconciliation drills",
    step5: "Phased production with monitoring dashboards",
    modules: [
      "Onboarding and KYC journeys",
      "Core transaction and ledger engine",
      "Partner and operations consoles",
      "Risk, limits, and fraud hooks",
      "Regulatory reporting exports",
    ],
  },
  portal: {
    audience: "publishers, marketplaces, and community platforms",
    focus: "scalable content, search, and monetization without downtime",
    step1: "User roles and content governance model",
    step2: "Information architecture and SEO-ready structure",
    step3: "Moderation, payments, and notification layers",
    step4: "Load testing for traffic spikes",
    step5: "Editor training and growth experiments",
    modules: [
      "Public website or app experience",
      "Admin CMS and moderation",
      "User accounts and monetization",
      "Search, categories, and analytics",
      "APIs for partners where required",
    ],
  },
  enterprise: {
    audience: "SMEs and enterprises digitizing internal operations",
    focus: "process clarity, approvals, and management visibility",
    step1: "Department-wise SOP documentation",
    step2: "ERP / CRM module prioritization (MVP first)",
    step3: "Integrations with email, SMS, and accounting",
    step4: "UAT with real department users",
    step5: "Handover, SOP videos, and AMC support",
    modules: [
      "Role-based dashboards",
      "Master data and approvals",
      "Operational transactions",
      "Reports and exports",
      "Mobile access for field teams",
    ],
  },
  gov: {
    audience: "government departments, NGOs, and scheme operators",
    focus: "accountability, audit trails, and data accuracy",
    step1: "Scheme rules and beneficiary data model",
    step2: "Role hierarchy and approval chains",
    step3: "Offline-first or low-bandwidth considerations",
    step4: "District-level pilot and feedback",
    step5: "MIS dashboards for leadership reviews",
    modules: [
      "Beneficiary / applicant registration",
      "Verification and approval workflows",
      "Fund or benefit disbursement tracking",
      "Geo and demographic dashboards",
      "Audit logs and export to Excel/PDF",
    ],
  },
  general: {
    audience: "founders and operations leaders",
    focus: "clarity, maintainability, and measurable outcomes",
    step1: "Discovery workshops and scope document",
    step2: "UX prototypes you approve before code",
    step3: "Agile sprints with demo every 1–2 weeks",
    step4: "QA, security review, and performance checks",
    step5: "Deployment, training, and maintenance plan",
    modules: [
      "Web admin panel",
      "Optional iOS / Android apps",
      "Reports and notifications",
      "Integrations you rely on",
      "Documentation and handover kit",
    ],
  },
};

function detectProfile(item) {
  const t = `${item.tags?.join(" ") || ""} ${item.id}`.toLowerCase();
  if (item.category === "payment") return "payment";
  if (/health|pharmacy|hospital|lab|dental|clinic|diagnostic/.test(t)) return "healthcare";
  if (/edtech|education|school|lms|coaching|exam|library|tutorial/.test(t)) return "education";
  if (/retail|pos|grocery|jewellery|garment|textile|supermarket|e-commerce|marketplace/.test(t))
    return "retail";
  if (/hotel|restaurant|food|travel|cinema|event|cloud-kitchen|catering/.test(t))
    return "hospitality";
  if (/taxi|fleet|logistics|courier|mobility|ondemand|bus-ticket|parking/.test(t))
    return "mobility";
  if (/fintech|lending|nbfc|insurance|payment|banking|wallet/.test(t)) return "fintech";
  if (/gov|ngo|mis|society/.test(t)) return "gov";
  if (/news|ott|social|chat|matrimonial|classified|job|affiliate|auction|portal/.test(t))
    return "portal";
  if (/erp|crm|hrms|inventory|accounting|manufacturing|project|franchise|dms|bi/.test(t))
    return "enterprise";
  return "general";
}

function buildModules(item, profile) {
  const fromDesc = item.desc
    .split(/[,—–]/)
    .map((s) => s.trim())
    .filter((s) => s.length > 8)
    .slice(0, 4);
  const tagModules = (item.tags ?? []).map(
    (tag) => `${tag} dashboards, alerts, and role-based access for ${item.title}`,
  );
  return [...new Set([...fromDesc, ...tagModules, ...profile.modules])].slice(0, 6);
}

const STACK_BY_PROFILE = {
  payment: [
    "PCI-aware checkout flows · webhook signing · idempotent APIs",
    "PostgreSQL ledger + Redis queues for high-volume settlement",
    "React admin · Node.js services · observability dashboards",
  ],
  healthcare: [
    "Role-based access with audit trails for clinical data",
    "Secure backups · encrypted fields · consent-aware workflows",
    "Web + optional React Native apps for staff and patients",
  ],
  education: [
    "Parent/student portals with fee reminders and online pay",
    "Bulk SMS/email · attendance sync · exam result publishing",
    "Cloud hosting with term-wise data retention policies",
  ],
  retail: [
    "Offline-capable POS · GST invoices · barcode/QR billing",
    "Inventory sync across outlets · purchase and vendor modules",
    "Integrations with payment devices, scales, and e-commerce",
  ],
  hospitality: [
    "Table/room management · KOT routing · split billing",
    "Aggregator hooks · kitchen display · housekeeping tasks",
    "Peak-hour load testing and owner analytics exports",
  ],
  mobility: [
    "Real-time GPS · fare engine · dispatch optimization",
    "Driver/rider apps · wallets · incentive and payout rules",
    "Safety SOS · trip analytics · city-wise rollout tools",
  ],
  fintech: [
    "KYC journeys · ledger core · partner bank integrations",
    "Risk limits · reconciliation · regulatory reporting exports",
    "Pen-tested APIs · admin oversight · sandbox environments",
  ],
  portal: [
    "SEO-ready CMS · moderation queues · monetization hooks",
    "Search, categories, notifications, and partner APIs",
    "CDN-backed media · spike-ready autoscaling architecture",
  ],
  enterprise: [
    "ERP/CRM modules with approvals and department dashboards",
    "Email/SMS/accounting integrations · export to Excel/PDF",
    "Mobile access for field teams · staged UAT rollouts",
  ],
  gov: [
    "Beneficiary registration · verification chains · MIS dashboards",
    "Offline/low-bandwidth modes · geo reports · audit logs",
    "District pilots before statewide rollout with training kits",
  ],
  general: [
    "React / Next.js frontends · Node.js APIs · PostgreSQL or MongoDB",
    "React Native or Flutter mobile when required",
    "Staging + production on AWS/GCP/Azure with monitoring",
  ],
};

function buildHighlights(item) {
  const sentences = item.desc
    .split(/[.!]/)
    .map((s) => s.trim())
    .filter((s) => s.length > 12);
  const tagLines = (item.tags ?? []).map(
    (tag) => `${tag}-ready workflows mapped to your ${item.title} rollout`,
  );
  return [...sentences, ...tagLines].slice(0, 5);
}

function buildUseCases(item, profile, profileKey) {
  const name = item.title;
  const templates = {
    payment: [
      {
        title: "Merchant & agent onboarding",
        text: `${name} covers KYC capture, limit setup, and settlement rules so new merchants go live without spreadsheet chaos.`,
      },
      {
        title: "Daily reconciliation",
        text: `Finance teams reconcile UPI, card, and wallet rails in one view — disputes, refunds, and MIS exports included.`,
      },
      {
        title: "Partner integrations",
        text: `Banks, gateways, and NPCI-ready APIs connect through signed webhooks and sandbox keys before production.`,
      },
    ],
    healthcare: [
      {
        title: "Front-desk to discharge",
        text: `${name} links registration, visits, billing, and pharmacy/lab so staff never re-type patient data.`,
      },
      {
        title: "Insurance & receipts",
        text: `Generate GST-aware bills, insurance claims support, and patient receipts from one workflow.`,
      },
      {
        title: "Management visibility",
        text: `Owners track occupancy, revenue, inventory, and compliance reports without calling IT every week.`,
      },
    ],
    education: [
      {
        title: "Admissions to alumni",
        text: `${name} handles admissions, attendance, fees, exams, and parent communication in one institution-wide system.`,
      },
      {
        title: "Online + offline learning",
        text: `Live classes, recorded content, quizzes, and certificates with fee reminders and payment links.`,
      },
      {
        title: "Multi-branch schools",
        text: `Central dashboards for management with branch-wise academic and financial reporting.`,
      },
    ],
    retail: [
      {
        title: "Store-floor billing",
        text: `${name} gives cashiers fast POS billing with GST invoices, offers, and loyalty without queue buildup.`,
      },
      {
        title: "Inventory accuracy",
        text: `Track inward/outward stock, batch/serial numbers, and multi-outlet sync in real time.`,
      },
      {
        title: "Owner command center",
        text: `Franchise and chain owners see sales, shrinkage, and purchase trends across locations.`,
      },
    ],
    hospitality: [
      {
        title: "Guest journey",
        text: `${name} connects reservations, table/room management, and billing for smoother guest experiences.`,
      },
      {
        title: "Kitchen & operations",
        text: `KOT routing, inventory, and staff coordination keep peak hours under control.`,
      },
      {
        title: "Revenue analytics",
        text: `Owners review covers, occupancy, aggregator orders, and payouts from one dashboard.`,
      },
    ],
    mobility: [
      {
        title: "On-demand bookings",
        text: `${name} powers customer apps, driver/provider apps, and dispatch with live GPS and fare rules.`,
      },
      {
        title: "Fleet payouts",
        text: `Wallets, incentives, settlements, and trip analytics help operators scale city by city.`,
      },
      {
        title: "Safety & compliance",
        text: `SOS flows, trip logs, and partner onboarding tools built for regulated mobility businesses.`,
      },
    ],
    fintech: [
      {
        title: "Regulated onboarding",
        text: `${name} implements KYC, limits, and sponsor-bank aligned journeys with full audit trails.`,
      },
      {
        title: "Core ledger & APIs",
        text: `Transaction engine, reconciliation, and partner consoles designed for NBFCs, wallets, and agents.`,
      },
      {
        title: "Risk & reporting",
        text: `Fraud hooks, regulatory exports, and ops dashboards keep compliance teams confident.`,
      },
    ],
    portal: [
      {
        title: "Content & community",
        text: `${name} scales publishing, moderation, search, and monetization for growing audiences.`,
      },
      {
        title: "User accounts",
        text: `Profiles, payments, notifications, and partner APIs without rebuilding from scratch each launch.`,
      },
      {
        title: "Traffic spikes",
        text: `Architecture tested for campaign traffic with CDN, caching, and observability baked in.`,
      },
    ],
    enterprise: [
      {
        title: "Department workflows",
        text: `${name} digitizes approvals, master data, and operational transactions for ${profile.audience}.`,
      },
      {
        title: "Integrations",
        text: `Email, SMS, accounting, and legacy Excel migrations handled in phased rollouts.`,
      },
      {
        title: "Executive reporting",
        text: `Management dashboards and exports replace manual MIS compiled every month.`,
      },
    ],
    gov: [
      {
        title: "Scheme delivery",
        text: `${name} registers beneficiaries, runs verification chains, and tracks disbursements with audit logs.`,
      },
      {
        title: "Field operations",
        text: `District pilots with offline-friendly flows before statewide rollout and training.`,
      },
      {
        title: "Leadership MIS",
        text: `Geo and demographic dashboards for reviews, exports, and accountability.`,
      },
    ],
    general: [
      {
        title: "Operations digitization",
        text: `${name} replaces manual spreadsheets with workflows your ${profile.audience} actually use daily.`,
      },
      {
        title: "Customer-facing touchpoints",
        text: `Web portals and optional mobile apps aligned with your brand and support team.`,
      },
      {
        title: "Measurable launch",
        text: `Weekly demos, written scope, and post-go-live AMC so you always know project status.`,
      },
    ],
  };
  return templates[profileKey] ?? templates.general;
}

function buildIntro(item, profile) {
  const tagPhrase =
    item.tags?.length > 0
      ? `Core capabilities include ${item.tags.slice(0, 3).join(", ")} — all tailored to how your team works.`
      : "";
  return {
    title: `${item.title} built around your workflow`,
    paragraphs: [
      `${item.tagline}. ${item.desc}`,
      `We design ${item.title} for ${profile.audience} who need ${profile.focus}. ${tagPhrase}`.trim(),
      `ANILAX SOFTWARE PRIVATE LIMITED delivers milestone-based builds with weekly demos, written scope, and post-launch support from Jaipur — so you are never guessing what ships next.`,
    ],
  };
}

function buildSteps(item, profile) {
  return [
    { title: "Discover", text: `${profile.step1} — specific to ${item.title} and your operating model.` },
    {
      title: "Design",
      text: `Wireframes and UI for ${item.title} covering ${(item.tags ?? []).slice(0, 2).join(" & ") || "core modules"} — you sign off before production code.`,
    },
    { title: "Develop", text: profile.step3 },
    { title: "Test", text: `${profile.step4} Scenarios include ${item.tagline.toLowerCase()}.` },
    { title: "Launch", text: profile.step5 },
  ];
}

function buildFaq(item, profileKey) {
  const name = item.title;
  const base = [
    {
      q: `Can you customize ${name} for our exact process?`,
      a: `Yes. We map your SOPs, approvals, and integrations into ${name} — not a generic demo with your logo pasted on.`,
    },
    {
      q: `What is included in a typical ${name} project?`,
      a: `Admin panel, core modules from your scope, deployment docs, training, and optional mobile apps — all listed in a written milestone plan before build starts.`,
    },
    {
      q: "Do you provide source code and deployment access?",
      a: "Yes, as per contract. You receive repositories, environment setup, and handover sessions so your team can operate independently.",
    },
    {
      q: "How long does implementation take?",
      a: "Most projects run 8–12 weeks after UX approval; payment, fintech, and compliance-heavy scopes may need longer discovery.",
    },
  ];
  if (profileKey === "payment" || profileKey === "fintech") {
    base.push({
      q: "Can you integrate banks, gateways, or NPCI rails?",
      a: "Yes — sandbox first, then production with reconciliation, webhooks, and sponsor-bank checklists.",
    });
  }
  if (profileKey === "healthcare" || profileKey === "education") {
    base.push({
      q: "How do you handle sensitive data?",
      a: "Role-based access, encrypted secrets, backups, and audit logs — with consent-aware workflows for regulated domains.",
    });
  }
  base.push({
    q: "How do we start?",
    a: "Share your requirement via Connect With Us — we respond within 1–2 business days with next steps and a ballpark plan.",
  });
  return base;
}

function buildTimelineNote(item, profileKey) {
  const heavy = ["payment", "fintech", "healthcare", "gov"].includes(profileKey);
  return heavy
    ? `${item.title} timelines depend on compliance, integrations, and UAT with real users — we quote after discovery.`
    : `Exact duration for ${item.title} depends on modules and integrations — we quote after discovery.`;
}

export function getSoftwareProduct(id) {
  const item = PRODUCT_MAP[id];
  if (!item) return null;

  const profileKey = detectProfile(item);
  const profile = PROFILES[profileKey];
  const productName = item.title;

  return {
    ...item,
    profileKey,
    heroBadge: `${item.tags?.[0] ?? "Custom"} · Fixed scope · Weekly demos`,
    highlights: buildHighlights(item),
    useCases: buildUseCases(item, profile, profileKey),
    safeIntro: buildIntro(item, profile),
    howWeBuild: {
      title: `How we build your ${productName}`,
      subtitle: `${productName} — transparent delivery from discovery to go-live.`,
      steps: buildSteps(item, profile),
    },
    deliverables: {
      title: `What you receive with ${productName}`,
      items: buildModules(item, profile),
    },
    trust: {
      title: "Why clients feel safe with Anilax",
      items: [
        {
          title: "Written scope & timelines",
          text: `Milestones for ${productName}, payment schedules, and change-request process are documented before build starts.`,
        },
        {
          title: "Security-first engineering",
          text: "HTTPS, access control, encrypted secrets, backups, and audit logs — especially for sensitive domains.",
        },
        {
          title: "You own your product",
          text: "Source code and deployment credentials are handed over as per contract — no lock-in tricks.",
        },
        {
          title: "Support after go-live",
          text: "AMC, bug fixes, and enhancement sprints — Jaipur team with defined response times.",
        },
        {
          title: "NDA & confidentiality",
          text: "We sign NDAs for enterprise and government projects; your business logic stays private.",
        },
        {
          title: "Training & documentation",
          text: `Admin manuals and walkthroughs for ${productName} so your staff is confident on day one.`,
        },
      ],
    },
    stack: {
      title: `Technology for ${productName}`,
      items: STACK_BY_PROFILE[profileKey] ?? STACK_BY_PROFILE.general,
    },
    timeline: {
      title: "Typical timeline",
      phases: [
        { phase: "Week 1–2", label: "Discovery + UX approval" },
        { phase: "Week 3–8", label: "Core build in agile sprints" },
        { phase: "Week 9–10", label: "QA, UAT, and fixes" },
        { phase: "Week 11+", label: "Go-live + hypercare support" },
      ],
      note: buildTimelineNote(item, profileKey),
    },
    faq: buildFaq(item, profileKey),
  };
}

export function getAllSoftwareProductIds() {
  return ALL_SOFTWARE_PRODUCTS.map((p) => p.id);
}
