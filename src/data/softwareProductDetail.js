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
  return [...new Set([...fromDesc, ...profile.modules])].slice(0, 6);
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
    heroBadge: "Fixed scope · Weekly demos · Post-launch support",
    safeIntro: {
      title: "You're partnering with a team that ships responsibly",
      paragraphs: [
        `${productName} is not a generic template sold blindly — we study how your ${profile.audience} actually work, then design software around your rules, brand, and growth plan.`,
        `Our focus for this product is ${profile.focus}. You get clear documentation, milestone-based delivery, and direct access to engineers — so you always know what's being built and why.`,
        `ANILAX SOFTWARE PRIVATE LIMITED has delivered 120+ products since 2021. Your code, data policies, and go-live checklist are agreed in writing before development starts.`,
      ],
    },
    howWeBuild: {
      title: `How we build your ${productName}`,
      subtitle: "A transparent process — no surprises, no black box.",
      steps: [
        { title: "Discover", text: profile.step1 },
        { title: "Design", text: `Wireframes and UI for ${productName} — you sign off before we write production code.` },
        { title: "Develop", text: profile.step3 },
        { title: "Test", text: profile.step4 },
        { title: "Launch", text: profile.step5 },
      ],
    },
    deliverables: {
      title: "What you receive",
      items: buildModules(item, profile),
    },
    trust: {
      title: "Why clients feel safe with Anilax",
      items: [
        {
          title: "Written scope & timelines",
          text: "Milestones, payment schedules, and change-request process are documented before build starts.",
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
          text: "Admin manuals, video walkthroughs, and handover sessions so your staff is confident on day one.",
        },
      ],
    },
    stack: {
      title: "Technology & quality",
      items: [
        "React / Next.js frontends · Node.js APIs · PostgreSQL or MongoDB",
        "React Native or Flutter for mobile when required",
        "Cloud hosting (AWS / GCP / Azure) with staging + production",
        "Automated backups, error monitoring, and release checklists",
      ],
    },
    timeline: {
      title: "Typical timeline",
      phases: [
        { phase: "Week 1–2", label: "Discovery + UX approval" },
        { phase: "Week 3–8", label: "Core build in agile sprints" },
        { phase: "Week 9–10", label: "QA, UAT, and fixes" },
        { phase: "Week 11+", label: "Go-live + hypercare support" },
      ],
      note: "Exact duration depends on modules, integrations, and compliance needs — we quote after discovery.",
    },
    faq: [
      {
        q: `Can you customize ${productName} for our exact process?`,
        a: "Yes. We start from your workflows, not a one-size-fits-all demo. Custom fields, approvals, and integrations are part of scope.",
      },
      {
        q: "Do you provide source code?",
        a: "Yes, as per agreement. You receive repositories, deployment docs, and environment setup guidance.",
      },
      {
        q: "What if we already have partial software?",
        a: "We can migrate data, integrate APIs, or replace modules in phases to reduce risk.",
      },
      {
        q: "How do we start?",
        a: "Share your requirement via Connect With Us — we respond within 1–2 business days with next steps and a ballpark plan.",
      },
    ],
  };
}

export function getAllSoftwareProductIds() {
  return ALL_SOFTWARE_PRODUCTS.map((p) => p.id);
}
