/**
 * Expands each catalog item into a full client-ready product brief (10+ pages of content).
 * Content is tailored by route/title using category knowledge + the page's own detail fields.
 */

const CATEGORY_LIBRARY = {
  fintech: {
    market: [
      "India's digital payments market continues to compound through UPI, AePS, prepaid instruments, and merchant acquiring — but product teams still struggle with settlement truth, partner-bank timelines, and field reliability.",
      "Distributors and BC networks need agent apps that work on low-end devices, clear commission trees, and same-day MIS — not slideware demos.",
      "Wallet and neo-bank products must balance KYC tiers, ledger integrity, and support tooling while staying within licensed-partner boundaries.",
    ],
    capabilities: [
      "AePS cash-out / cash-in journeys with biometric-ready flows",
      "UPI collect, intent, and merchant acceptance modules",
      "Multi-tenant ledgers with settlement and dispute hooks",
      "KYC tier engines and limit policies",
      "Agent onboarding, geo tagging, and device binding",
      "Commission trees, clawbacks, and distributor hierarchy",
      "Webhook-first developer APIs with sandbox keys",
      "Risk flags, velocity checks, and ops queues",
      "Reconciliation files, NTSL/MIS style exports, and exception aging",
      "White-label receipts, SMS/push templates, and brand packs",
    ],
    architecture: [
      "API gateway with key scopes (sandbox vs production)",
      "Async workers for webhooks, SMS, and settlement jobs",
      "PostgreSQL for transactional truth; Redis for session/rate limits",
      "Queue/Kafka style pipelines for peak-day volume",
      "Partner SDK / HSM integration adapters behind a rail interface",
      "Immutable audit log for sensitive admin actions",
      "Environment separation: sandbox, UAT, production",
    ],
    useCases: [
      "Regional BC distributor onboarding 500–5,000 agents",
      "Consumer wallet MVP with UPI collect + P2P",
      "Merchant QR acceptance with settlement dashboards",
      "Enterprise payouts API for marketplaces and logistics COD",
      "White-label fintech portal for a partner bank program",
    ],
    compliance: [
      "Anilax builds technology for licensed partners — we are not a bank or PPI issuer.",
      "Architecture supports partner-bank KYC, audit trails, and data isolation expectations.",
      "Production go-live depends on partner certifications and scheme rules (NPCI / bank).",
    ],
  },
  healthcare: {
    market: [
      "Clinics and hospitals lose time in OPD-to-pharmacy handoffs, fragmented billing, and paper follow-ups.",
      "Multi-specialty centers need role-based access across doctors, nurses, lab, pharmacy, and front desk — with auditability.",
      "Patient experience now expects digital queueing, e-prescriptions, and clear billing — without breaking clinical workflow.",
    ],
    capabilities: [
      "OPD registration, token / queue, and appointment calendars",
      "Doctor consoles with e-prescription and visit notes",
      "Lab order entry, sample tracking, and result posting",
      "Pharmacy inventory, batch/expiry, and bill linkage",
      "IPD beds, nursing notes, and discharge summaries",
      "Insurance / package billing hooks",
      "Patient app or WhatsApp-ready notification hooks",
      "Role-based access (doctor, nurse, cashier, admin)",
      "Audit trails for clinical and billing edits",
      "Multi-branch reporting for clinic groups",
    ],
    architecture: [
      "Modular HMS domains (OPD, IPD, Lab, Pharmacy, Billing)",
      "PostgreSQL with strong referential integrity for clinical records",
      "Document storage for reports and attachments",
      "Printable receipts and discharge PDFs",
      "Optional HL7/FHIR-style integration points for labs",
      "Offline-tolerant clinic desk modes where needed",
    ],
    useCases: [
      "Single multi-specialty clinic replacing Excel + WhatsApp",
      "Hospital group standardizing OPD→pharmacy flow",
      "Diagnostic lab with order + result portals",
      "Pharmacy chain stock + billing linked to prescriptions",
    ],
    compliance: [
      "Access controls and audit logs designed for clinical accountability.",
      "Data retention and export policies aligned to your agreement.",
      "We implement security practices suitable for health data handling; legal ownership stays with the provider.",
    ],
  },
  edtech: {
    market: [
      "School groups outgrow campus-by-campus spreadsheets for fees, attendance, and parent communication.",
      "Coaching institutes need batch management, tests, and fee reminders that parents actually see.",
      "Leaders want one control plane across campuses with bilingual parent touchpoints.",
    ],
    capabilities: [
      "Admissions and student master data",
      "Fee plans, invoices, receipts, and dues aging",
      "Attendance and timetable",
      "Exams, marks, and report cards",
      "Parent / teacher apps (Hindi + English ready)",
      "Transport and hostel modules (optional)",
      "Multi-campus admin with role separation",
      "SMS / push fee reminders",
      "Certificate and ID card generation hooks",
      "Analytics for fee collection and attendance",
    ],
    architecture: [
      "Multi-tenant campus model with shared catalog of fee types",
      "Mobile apps (React Native) + web admin",
      "Payment gateway hooks for online fees",
      "Document generation for receipts and report cards",
      "Audit logs for fee concessions and edits",
    ],
    useCases: [
      "12-campus school group on one ERP",
      "Coaching institute with batch + test workflows",
      "College admin for admissions and fee cycles",
    ],
    compliance: [
      "Student data access limited by role (teacher vs accounts vs principal).",
      "Fee edits and concessions leave an audit trail.",
    ],
  },
  logistics: {
    market: [
      "Courier and last-mile teams drown in WhatsApp dispatch and midnight COD reconciliation.",
      "Fleet managers need live rider location, exception handling, and clean cash close-out.",
      "B2B shippers expect SLA visibility without calling operations every hour.",
    ],
    capabilities: [
      "Order intake and pin-code serviceability",
      "Dispatch boards and rider assignment",
      "Live GPS tracking and ETA signals",
      "Proof of delivery (OTP / photo / signature)",
      "COD collection and deposit reconciliation",
      "Exception queues (attempt failed, RTO, address issue)",
      "Client portals for consignors",
      "Route density and capacity planning hooks",
      "SMS / WhatsApp shipment updates",
      "Settlement reports for franchise / hub models",
    ],
    architecture: [
      "Event-driven shipment status machine",
      "Maps / location providers behind an adapter",
      "Mobile rider app + web ops console",
      "Ledger for COD and payouts",
      "Webhook notifications to enterprise shippers",
    ],
    useCases: [
      "Regional courier digitizing COD close-out",
      "Hyperlocal delivery with live tracking",
      "3PL client portal for B2B shippers",
    ],
    compliance: [
      "Cash handling workflows with dual control where required.",
      "Location data retention configurable per contract.",
    ],
  },
  ecommerce: {
    market: [
      "D2C and marketplace brands need catalog, offers, and fulfillment that match Indian payment and COD realities.",
      "Multi-vendor platforms require settlements, commissions, and dispute tooling — not just a storefront theme.",
    ],
    capabilities: [
      "Catalog, variants, and inventory",
      "Cart, checkout, and offer engines",
      "UPI / card / COD payment flows",
      "Order lifecycle and returns",
      "Vendor onboarding and commission rules",
      "Warehouse / multi-location stock",
      "Customer accounts and order history",
      "Admin analytics and marketing hooks",
      "Invoice / e-way friendly exports",
      "Notification templates (SMS/email/push)",
    ],
    architecture: [
      "Headless or integrated storefront options",
      "Payment gateway adapters",
      "Inventory service with reservation logic",
      "Async jobs for invoices and notifications",
    ],
    useCases: [
      "D2C brand launch with UPI + COD",
      "Multi-vendor marketplace MVP",
      "B2B reordering portal for distributors",
    ],
    compliance: [
      "Tax/invoice fields designed for Indian GST workflows (as scoped).",
      "PCI scope minimized via hosted payment pages / partners.",
    ],
  },
  saas: {
    market: [
      "SaaS founders need multi-tenant foundations, billing hooks, and admin tooling before growth breaks the prototype.",
      "B2B products fail when tenancy, roles, and audit were bolted on late.",
    ],
    capabilities: [
      "Multi-tenant data isolation models",
      "RBAC and organization hierarchies",
      "Subscription / usage metering hooks",
      "Admin consoles and impersonation (controlled)",
      "API keys and webhook deliveries",
      "Audit logs and export jobs",
      "Onboarding checklists and empty states",
      "Feature flags for gradual rollout",
      "Observability (errors, latency, queues)",
      "Docs site and changelog patterns",
    ],
    architecture: [
      "Tenant-aware API layer",
      "Postgres row-level or schema strategies as fit",
      "Background workers for billing and webhooks",
      "CI/CD with preview environments",
    ],
    useCases: [
      "B2B SaaS MVP to first 40 paying clients",
      "Internal platform productized for external customers",
      "API-first developer product with SDKs",
    ],
    compliance: [
      "Security baselines: least privilege, encrypted transit, secret management.",
      "Data export / deletion hooks for customer requests.",
    ],
  },
  mobile: {
    market: [
      "Consumer and field apps must stay fast on mid-range Android devices common across India.",
      "Product teams need shared design systems between iOS, Android, and admin web.",
    ],
    capabilities: [
      "React Native / Flutter / native delivery options",
      "Offline-tolerant forms and sync",
      "Push notifications and deep links",
      "Biometric login hooks",
      "In-app updates and crash analytics",
      "Design system parity with web admin",
      "Store release pipelines",
      "Accessibility and bilingual UI support",
    ],
    architecture: [
      "Typed API clients and secure token storage",
      "Feature modules with clear ownership",
      "CI for Android/iOS builds",
      "Staging builds via TestFlight / internal tracks",
    ],
    useCases: [
      "Agent / rider field apps",
      "Consumer fintech wallets",
      "Patient or parent companion apps",
    ],
    compliance: [
      "Store privacy nutrition labels and permission minimization.",
      "Secure storage for tokens and PII on device.",
    ],
  },
  custom: {
    market: [
      "When spreadsheets and chat threads become the ERP, growth creates risk: no audit trail, slow onboarding, and tribal knowledge.",
      "Off-the-shelf SaaS forces workarounds that cost more than a focused custom system.",
    ],
    capabilities: [
      "Workflow mapping and process digitization",
      "Role-based internal tools and dashboards",
      "Approvals, SLAs, and escalation timers",
      "Integrations with accounting, CRM, or banks",
      "Document generation and e-sign hooks",
      "Reporting that matches how leaders decide",
      "Migration from Excel / legacy DBs",
      "Training and handover kits",
    ],
    architecture: [
      "Domain-driven modules instead of a monolith blob",
      "API-first so mobile/admin can share logic",
      "PostgreSQL + Redis common baseline",
      "Observability from day one",
    ],
    useCases: [
      "Ops OS replacing Excel + WhatsApp",
      "Industry-specific ERP for one vertical",
      "Partner portal for a B2B network",
    ],
    compliance: [
      "Full code & IP ownership transferred to you.",
      "Access logs for sensitive administrative actions.",
    ],
  },
  default: {
    market: [
      "Anilax Software designs and ships production systems for Indian startups and enterprises — with clear ownership, staging discipline, and measurable outcomes.",
      "Every engagement starts from how your teams actually work, then hardens into software they will use daily.",
    ],
    capabilities: [
      "Discovery workshops and written scope",
      "UX + architecture before heavy build",
      "Agile sprints with weekly demos",
      "Staging environments and QA",
      "Production deploy and runbooks",
      "Optional retainer or dedicated team",
      "Documentation and training",
      "Integrations and automation",
    ],
    architecture: [
      "Modern web/mobile clients",
      "Node.js / Python / .NET backends as fit",
      "PostgreSQL and cloud hosting",
      "CI/CD and monitoring",
    ],
    useCases: [
      "MVP launch in 4–10 weeks",
      "Modernization of a legacy system",
      "Dedicated engineering pod",
    ],
    compliance: [
      "Security-minded defaults and least-privilege access.",
      "Commercial terms and NDAs available before deep discovery.",
    ],
  },
};

function detectCategory(route = "", title = "", modules = []) {
  const hay = `${route} ${title} ${(modules || []).join(" ")}`.toLowerCase();
  if (/fintech|aeps|upi|wallet|payment|b2b|b2c/.test(hay)) return "fintech";
  if (/health|clinic|hospital|hms|pharma/.test(hay)) return "healthcare";
  if (/edtech|school|education|lms|campus/.test(hay)) return "edtech";
  if (/logistic|courier|fleet|dispatch|supply/.test(hay)) return "logistics";
  if (/e-?commerce|marketplace|retail|d2c/.test(hay)) return "ecommerce";
  if (/saas|api platform|multi-tenant/.test(hay)) return "saas";
  if (/mobile|ios|android|react native/.test(hay)) return "mobile";
  if (/custom|erp|crm|software|web application|legacy|dedicated|ai|cloud|ui\/ux|api integration|on-demand|manufactur|real estate|hospitality/.test(hay)) {
    if (/mobile/.test(hay)) return "mobile";
    if (/saas/.test(hay)) return "saas";
    return "custom";
  }
  return "default";
}

function uniq(list) {
  return [...new Set((list || []).filter(Boolean).map(String))];
}

/**
 * Build a 10+ page chapter list for PDF rendering.
 */
export function buildFullBriefChapters({ route, detail, page }) {
  const title = detail?.title || page?.title || "Anilax Product";
  const sub = detail?.sub || page?.sub || "";
  const lead = detail?.lead || page?.sub || sub;
  const modules = detail?.modules || [];
  const category = detectCategory(route, title, modules);
  const lib = CATEGORY_LIBRARY[category] || CATEGORY_LIBRARY.default;

  const challenges = uniq([...(detail?.challenges || []), ...lib.market.slice(0, 1).map(() => null)].filter(Boolean));
  // merge market paragraphs separately
  const audience = uniq(detail?.audience || ["Founders & product leaders", "Operations teams", "Technology stakeholders"]);
  const solutions = uniq([...(detail?.solutions || []), ...lib.capabilities.slice(0, 4)]);
  const deliverables = uniq(detail?.deliverables || [
    "Discovery brief & milestone plan",
    "Architecture outline",
    "Staging builds every sprint",
    "Production deployment",
    "Source code, docs, and training",
  ]);
  const outcomes = uniq(detail?.outcomes || [
    "Faster operational cycle time",
    "Clear ownership of code and data",
    "Systems teams actually adopt",
  ]);
  const stack = uniq(detail?.stack || lib.architecture.slice(0, 5));
  const process = detail?.process?.length
    ? detail.process
    : [
        { t: "Discover", d: "Map goals, users, constraints, and success metrics." },
        { t: "Design", d: "Architecture, UX, and delivery plan with milestones." },
        { t: "Build", d: "Agile sprints, weekly demos, staging access." },
        { t: "Launch", d: "Production hardening, training, and handover." },
      ];
  const faqs = detail?.faqs?.length
    ? detail.faqs
    : [
        { q: "Who owns the IP?", a: "You do — full code ownership on contracted deliverables." },
        { q: "How fast can we start?", a: "Discovery can begin within days of alignment; MVP timelines are typically 4–10 weeks depending on scope." },
        { q: "Do you work with existing systems?", a: "Yes — integration-first is common; we replace only what blocks growth." },
        { q: "Can we sign an NDA first?", a: "Yes. NDA before detailed product or data discussions is standard." },
      ];

  const featureDeepDive = uniq([...modules, ...lib.capabilities]).slice(0, 18);
  const featurePage1 = featureDeepDive.slice(0, 9);
  const featurePage2 = featureDeepDive.slice(9, 18);

  const chapters = [
    {
      type: "cover",
      title,
      sub,
      eyebrow: detail?.eyebrow || page?.eyebrow || "PRODUCT BRIEF",
      meta: [
        "Confidential client brief",
        "Prepared by Anilax Software",
        "Jaipur · India",
      ],
    },
    {
      type: "toc",
      title: "Contents",
      items: [
        "1. Executive summary",
        "2. Market context & challenges",
        "3. Who this is for",
        "4. Solution overview",
        "5. Capability deep dive",
        "6. Modules & feature catalog",
        "7. Technical architecture",
        "8. Delivery roadmap",
        "9. Use cases & outcomes",
        "10. Engagement models",
        "11. FAQ",
        "12. Next steps & contact",
      ],
    },
    {
      type: "section",
      title: "1. Executive summary",
      paras: [
        `${title} is delivered by Anilax Software as a production-minded build — not a theme or throwaway prototype.`,
        lead,
        sub ? `Positioning: ${sub}.` : "",
        "This brief explains the problem space, capability set, technical approach, delivery model, and commercial ways of working so your team can evaluate fit quickly.",
        "Anilax is a Jaipur-based engineering company focused on custom software, fintech rails, mobile apps, and dedicated teams for startups and enterprises across India.",
      ].filter(Boolean),
      bullets: (detail?.stats || []).map((s) => `${s.n} — ${s.l}`),
    },
    {
      type: "section",
      title: "2. Market context & challenges",
      paras: lib.market,
      bullets: challenges.length ? challenges : [
        "Manual processes creating operational risk",
        "Tools that do not match real workflows",
        "Lack of a single source of truth",
        "Slow release cycles and unclear ownership",
      ],
    },
    {
      type: "section",
      title: "3. Who this is for",
      paras: [
        `${title} is designed for teams that need measurable operational leverage — not vanity features.`,
        "Typical stakeholders include business owners, product managers, operations leads, and engineering counterparts evaluating a build partner.",
      ],
      bullets: audience,
    },
    {
      type: "section",
      title: "4. Solution overview",
      paras: [
        `Anilax approaches ${title} as a composed product system: clear modules, integrations, and an adoption path for the people who will live in it daily.`,
        "We prioritize staging discipline, weekly demos, and handover-ready repositories so you are never locked into a black box.",
      ],
      bullets: solutions,
    },
    {
      type: "section",
      title: "5. Capability deep dive",
      paras: [
        `Below is an expanded capability set for ${title}. Exact scope is confirmed in discovery; this catalog shows the depth available.`,
        "Capabilities can be phased — launch with a sharp MVP, then expand modules without rewriting the foundation.",
      ],
      bullets: featurePage1.map((f, i) => `${String(i + 1).padStart(2, "0")}  ${f}`),
    },
    {
      type: "section",
      title: "6. Modules & feature catalog",
      paras: [
        "Continued module catalog and complementary capabilities commonly bundled with this offering.",
        modules.length
          ? `Named modules from the product page: ${modules.join(", ")}.`
          : "Modules are composed to match your operating model during discovery.",
      ],
      bullets: (featurePage2.length ? featurePage2 : lib.capabilities.slice(0, 9)).map(
        (f, i) => `${String(i + 10).padStart(2, "0")}  ${f}`
      ),
    },
    {
      type: "section",
      title: "7. Technical architecture & stack",
      paras: [
        "We choose stack and topology based on compliance needs, team skills, and scale targets — not hype.",
        ...lib.architecture.slice(0, 3),
      ],
      bullets: uniq([...stack, ...lib.architecture]).slice(0, 12),
    },
    {
      type: "section",
      title: "8. Delivery roadmap & timeline",
      paras: [
        detail?.timeline ||
          "Most focused MVPs ship in 4–10 weeks after discovery. Larger multi-module platforms are phased by department or rail.",
        "Each phase ends with a demoable increment in staging, written decisions, and a clear backlog for the next slice.",
      ],
      bullets: process.map((p, i) => `Phase ${i + 1} — ${p.t}: ${p.d}`),
    },
    {
      type: "section",
      title: "9. Use cases, outcomes & proof points",
      paras: [
        "Representative scenarios where this offering creates leverage. Your discovery will map the closest path.",
        ...lib.useCases.slice(0, 2).map((u) => `Scenario: ${u}.`),
      ],
      bullets: uniq([
        ...outcomes,
        ...lib.useCases.map((u) => `Use case: ${u}`),
        ...deliverables.map((d) => `Deliverable: ${d}`),
      ]).slice(0, 14),
    },
    {
      type: "section",
      title: "10. Engagement models & commercial options",
      paras: [
        "Anilax offers flexible commercial structures after a short discovery that locks scope and milestones.",
        "You retain 100% code and IP ownership on contracted software deliverables.",
      ],
      bullets: [
        "Project / MVP build — fixed scope milestones with staging demos",
        "Monthly retainer — continuous delivery for evolving roadmaps",
        "Dedicated team — embedded engineers with a tech lead",
        "Discovery sprint (paid) — architecture + estimate in 48–72 hours after kickoff call",
        "Optional AMC / support after launch",
        "NDA available before sensitive discussions",
      ],
    },
    {
      type: "section",
      title: "11. Frequently asked questions",
      paras: lib.compliance,
      qa: faqs,
    },
    {
      type: "closing",
      title: "12. Next steps & contact",
      paras: [
        `If ${title} matches your roadmap, the fastest next step is a 30-minute scoping call.`,
        "We will confirm goals, constraints, integrations, and a recommended first milestone — then share a written plan.",
        "ANILAX SOFTWARE PRIVATE LIMITED · Jaipur, Rajasthan, India",
      ],
      bullets: [
        "Email: businesswithanilax@outlook.com",
        "Phone / WhatsApp: +91-8118898370",
        "Web: anilaxsoftware.com",
        "Hours: Mon–Sat, 10:00 AM – 7:00 PM IST",
      ],
    },
  ];

  return {
    category,
    title,
    sub,
    eyebrow: detail?.eyebrow || page?.eyebrow || "PRODUCT BRIEF",
    chapters,
  };
}
