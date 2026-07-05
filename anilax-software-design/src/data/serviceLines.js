import { SERVICE_DETAIL, SERVICE_PROCESS_DETAILED } from "./serviceDetailContent";
import { getServicePageConfig } from "./servicePageConfig";

export const SERVICES_HERO = {
  eyebrow: "Anilax Software · Services",
  title: "Full-stack software development for every business",
  subtitle:
    "From MVPs to enterprise platforms — we design, build, and scale the same categories of software that top IT companies deliver worldwide: web, mobile, SaaS, ERP, fintech, healthcare, logistics, and more.",
  stats: [
    { value: "120+", label: "Products shipped" },
    { value: "50+", label: "Software categories" },
    { value: "68+", label: "Ready-to-customize solutions" },
  ],
};

export const SERVICE_LINES = [
  {
    id: "custom-software",
    icon: "⚙️",
    title: "Custom Software Development",
    tagline: "Built around your workflow, not a template",
    summary:
      "Tailor-made web and desktop applications for unique business processes — discovery, architecture, agile delivery, and full code ownership.",
    features: [
      "Business workflow mapping & requirements workshops",
      "Modular architecture for future scale",
      "Role-based access, audit logs, and admin panels",
      "Agile sprints with weekly demos",
      "Deployment, training, and AMC support",
    ],
    stack: ["Node.js", "Python", "React", "PostgreSQL", "AWS"],
    useCases: ["Internal ops tools", "Partner portals", "Industry-specific platforms"],
    relatedProducts: ["erp", "crm", "project"],
  },
  {
    id: "web-development",
    icon: "🌐",
    title: "Web Application Development",
    tagline: "Fast, secure, responsive web products",
    summary:
      "Customer portals, admin dashboards, B2B platforms, and public websites — optimized for performance, SEO, and real-world traffic.",
    features: [
      "SPA & SSR with React, Next.js, or Vue",
      "Responsive UI for desktop and tablet",
      "Authentication, payments, and third-party integrations",
      "Performance tuning and Core Web Vitals",
      "CMS and content workflows where needed",
    ],
    stack: ["React", "Next.js", "Node.js", "Tailwind", "Vite"],
    useCases: ["Admin dashboards", "Customer portals", "Marketing sites with app backends"],
    relatedProducts: ["bi", "dms", "mis"],
  },
  {
    id: "mobile-apps",
    icon: "📱",
    title: "Mobile App Development",
    tagline: "iOS, Android & cross-platform apps",
    summary:
      "Consumer and enterprise mobile apps with offline support, push notifications, in-app payments, and app-store-ready releases.",
    features: [
      "React Native, Flutter, Kotlin, or Swift builds",
      "UPI, wallets, and payment SDK integration",
      "Push notifications & deep linking",
      "App Store & Play Store submission support",
      "Analytics, crash reporting, and OTA updates",
    ],
    stack: ["React Native", "Flutter", "Kotlin", "Swift", "Firebase"],
    useCases: ["UPI wallets", "On-demand service apps", "Field force & sales apps"],
    relatedProducts: ["upi", "ondemand", "fintech-dev"],
  },
  {
    id: "saas-development",
    icon: "☁️",
    title: "SaaS Product Development",
    tagline: "Multi-tenant platforms built to scale",
    summary:
      "Subscription billing, tenant isolation, onboarding flows, and admin tooling — everything needed to launch and grow a SaaS business.",
    features: [
      "Multi-tenant architecture & billing (Stripe/Razorpay)",
      "Usage metering and plan management",
      "Self-serve signup and onboarding",
      "Super-admin and tenant admin consoles",
      "API-first design for integrations",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Docker"],
    useCases: ["B2B SaaS", "Vertical SaaS", "API platforms"],
    relatedProducts: ["recurring", "affiliate", "fintech-dev"],
  },
  {
    id: "enterprise-erp-crm",
    icon: "🏭",
    title: "ERP, CRM & Enterprise Software",
    tagline: "Operations, sales, and finance in one system",
    summary:
      "Manufacturing ERP, sales CRM, HRMS, inventory, accounting, and GST-ready billing — the backbone software enterprises run on.",
    features: [
      "Production, inventory, purchase & sales modules",
      "CRM pipelines, leads, and follow-ups",
      "HRMS, payroll, and attendance",
      "GST, e-invoice, and financial reports",
      "Multi-branch and multi-warehouse support",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Reports", "Mobile apps"],
    useCases: ["Factories", "Distributors", "Sales teams", "HR departments"],
    relatedProducts: ["erp", "crm", "inventory", "accounting", "hrms"],
  },
  {
    id: "ecommerce-marketplace",
    icon: "🛒",
    title: "E-Commerce & Marketplace Development",
    tagline: "Online stores and multi-vendor platforms",
    summary:
      "D2C storefronts, B2B ordering portals, multi-vendor marketplaces, and omnichannel retail with payments, logistics, and inventory sync.",
    features: [
      "Product catalog, cart, checkout & order tracking",
      "Multi-vendor commissions and seller dashboards",
      "Payment gateway & COD reconciliation",
      "Coupons, loyalty, and referral programs",
      "Warehouse, shipping, and returns management",
    ],
    stack: ["React", "Node.js", "Payment APIs", "Search", "CDN"],
    useCases: ["D2C brands", "B2B ordering", "Hyperlocal marketplaces"],
    relatedProducts: ["ecommerce", "b2b-marketplace", "retail-pos", "inventory"],
  },
  {
    id: "fintech-payments",
    icon: "💳",
    title: "Fintech & Payment Software",
    tagline: "UPI, AePS, wallets, gateways & APIs",
    summary:
      "Payment apps, AePS BC networks, UPI collect, payment gateways, switches, SoftPOS, and developer APIs — regulated-ready fintech infrastructure.",
    features: [
      "UPI apps, wallets, and merchant onboarding",
      "AePS cash withdrawal, deposit & mini statement",
      "Payment gateway & switch integration",
      "Settlement, reconciliation & reporting",
      "REST APIs, webhooks, and SDK samples",
    ],
    stack: ["Node.js", "REST APIs", "React Native", "PostgreSQL", "NPCI rails"],
    useCases: ["BC networks", "Fintech startups", "Payment aggregators"],
    relatedProducts: ["upi", "gateway", "switch", "pos", "recurring"],
  },
  {
    id: "healthcare-software",
    icon: "🏥",
    title: "Healthcare & Hospital Software",
    tagline: "HMS, clinic, pharmacy & patient apps",
    summary:
      "Hospital management, OPD appointments, billing, lab orders, pharmacy stock, and patient portals with role-based access and audit trails.",
    features: [
      "OPD, IPD, appointments & doctor schedules",
      "Billing, insurance, and pharmacy modules",
      "Lab orders and report delivery",
      "Patient mobile app & SMS reminders",
      "Multi-branch and compliance-ready logs",
    ],
    stack: ["React", "Node.js", "Mobile apps", "PostgreSQL"],
    useCases: ["Clinics", "Multi-specialty hospitals", "Pharmacy chains"],
    relatedProducts: ["hospital", "clinic", "pharmacy", "lab"],
  },
  {
    id: "edtech-lms",
    icon: "🎓",
    title: "EdTech, LMS & School Software",
    tagline: "School ERP, coaching & online learning",
    summary:
      "School management, LMS portals, live classes, test series, fee collection, and parent apps — digitizing education end to end.",
    features: [
      "Admissions, fees, attendance & exams",
      "Live classes and recorded courses",
      "Online tests, rank lists & certificates",
      "Parent and student mobile apps",
      "Multi-campus and franchise support",
    ],
    stack: ["React", "Node.js", "React Native", "Video APIs"],
    useCases: ["Schools", "Coaching institutes", "Online academies"],
    relatedProducts: ["school", "tutorial", "coaching", "exam"],
  },
  {
    id: "logistics-supply-chain",
    icon: "🚚",
    title: "Logistics & Supply Chain Software",
    tagline: "Fleet, dispatch, warehouse & COD",
    summary:
      "Courier management, fleet GPS, hub operations, rider apps, COD reconciliation, and warehouse systems for logistics at scale.",
    features: [
      "Order booking, dispatch & live tracking",
      "Rider/hub/driver mobile apps",
      "COD collection & reconciliation",
      "Warehouse GRN, pick-pack-ship",
      "Partner API integrations",
    ],
    stack: ["React Native", "Node.js", "Maps API", "PostgreSQL"],
    useCases: ["Courier companies", "3PL providers", "Last-mile delivery"],
    relatedProducts: ["logistics", "fleet", "ondemand"],
  },
  {
    id: "on-demand-apps",
    icon: "⚡",
    title: "On-Demand App Development",
    tagline: "Uber-style booking & service marketplaces",
    summary:
      "Real-time booking, provider matching, in-app payments, ratings, and admin panels for food, home services, rental, and hyperlocal apps.",
    features: [
      "Customer, provider & admin apps",
      "Real-time booking and dispatch",
      "In-app payments and wallet support",
      "Ratings, support tickets & promotions",
      "Geo-fencing and surge pricing hooks",
    ],
    stack: ["React Native", "Node.js", "Socket.io", "Maps"],
    useCases: ["Food delivery", "Home services", "Cab & rental apps"],
    relatedProducts: ["ondemand", "taxi", "restaurant", "cloud-kitchen"],
  },
  {
    id: "ai-automation",
    icon: "🤖",
    title: "AI & Business Automation",
    tagline: "Smart workflows and decision support",
    summary:
      "Automate repetitive ops, integrate AI assistants, build rule engines, and connect tools with APIs — reducing manual work across teams.",
    features: [
      "Workflow automation & approval chains",
      "Chatbots and internal AI assistants",
      "Document processing & data extraction",
      "Zapier-style integrations and webhooks",
      "Dashboards for ops visibility",
    ],
    stack: ["Python", "Node.js", "OpenAI APIs", "LangChain", "Zapier"],
    useCases: ["Ops automation", "Support bots", "Report generation"],
    relatedProducts: ["ai-chatbot", "helpdesk", "project"],
  },
  {
    id: "cloud-devops",
    icon: "🔧",
    title: "Cloud, DevOps & Deployment",
    tagline: "Ship fast, scale safely",
    summary:
      "AWS/GCP setup, CI/CD pipelines, Docker containers, monitoring, backups, and performance optimization for production workloads.",
    features: [
      "Cloud architecture & cost optimization",
      "CI/CD with GitHub Actions or Jenkins",
      "Docker, Kubernetes & auto-scaling",
      "Monitoring, alerts & log aggregation",
      "Security hardening & SSL/TLS",
    ],
    stack: ["AWS", "Docker", "GitHub Actions", "Nginx", "PostgreSQL"],
    useCases: ["SaaS hosting", "High-traffic apps", "Migration projects"],
    relatedProducts: [],
  },
  {
    id: "ui-ux-design",
    icon: "🎨",
    title: "UI/UX Design & Prototyping",
    tagline: "Design systems that developers can ship",
    summary:
      "Wireframes, high-fidelity UI in Figma, design systems, and developer-ready specs — so products look premium and convert better.",
    features: [
      "User research & journey mapping",
      "Wireframes and interactive prototypes",
      "Design systems & component libraries",
      "Mobile and web UI kits",
      "Handoff to development teams",
    ],
    stack: ["Figma", "Design tokens", "React", "Tailwind"],
    useCases: ["New product launches", "Redesigns", "Enterprise dashboards"],
    relatedProducts: [],
  },
  {
    id: "api-integration",
    icon: "🔗",
    title: "API Development & Integration",
    tagline: "Connect every tool in your stack",
    summary:
      "Custom REST/GraphQL APIs, third-party integrations, webhooks, SDKs, and middleware — so data flows seamlessly across systems.",
    features: [
      "REST & GraphQL API design",
      "Payment, SMS, KYC & ERP integrations",
      "Webhook delivery & retry logic",
      "OpenAPI docs and SDK samples",
      "Rate limiting & API keys",
    ],
    stack: ["Node.js", "GraphQL", "REST", "PostgreSQL", "Redis"],
    useCases: ["Aggregators", "ERP connectors", "Partner ecosystems"],
    relatedProducts: ["gateway", "upi"],
  },
  {
    id: "legacy-modernization",
    icon: "🔄",
    title: "Legacy System Modernization",
    tagline: "Upgrade without stopping the business",
    summary:
      "Migrate Excel and old desktop apps to modern web/mobile stacks, refactor technical debt, and integrate with current ERPs and banks.",
    features: [
      "Legacy audit & migration planning",
      "Phased rollout with parallel run",
      "Data migration & validation",
      "API layers on top of old systems",
      "Performance and security upgrades",
    ],
    stack: ["React", "Node.js", "Python", "PostgreSQL"],
    useCases: ["Excel-to-ERP", "Desktop-to-cloud", "Monolith-to-modular"],
    relatedProducts: ["erp", "accounting"],
  },
  {
    id: "dedicated-teams",
    icon: "👨‍💻",
    title: "Dedicated Development Teams",
    tagline: "Your extended engineering team",
    summary:
      "Hire managed developers, designers, and QA who work like in-house engineers — sprint planning, daily standups, and long-term continuity.",
    features: [
      "Start within days, not months",
      "Full-stack, mobile, or QA specialists",
      "Async or shared-sprint collaboration",
      "Code review and documentation standards",
      "Flexible scale up or down",
    ],
    stack: ["Your stack", "Agile", "Jira/Linear", "GitHub"],
    useCases: ["Product companies", "Agencies", "Enterprise IT teams"],
    relatedProducts: [],
  },
];

export function getServiceLine(id) {
  return SERVICE_LINES.find((s) => s.id === id) ?? null;
}

export function getAllServiceIds() {
  return SERVICE_LINES.map((s) => s.id);
}

export function getServiceDetail(id) {
  const base = getServiceLine(id);
  if (!base) return null;
  const detail = SERVICE_DETAIL[id] ?? {};
  const page = getServicePageConfig(id);
  return {
    ...base,
    ...detail,
    page,
    process: detail.process ?? SERVICE_PROCESS_DETAILED,
  };
}

export function getAdjacentServices(id) {
  const index = SERVICE_LINES.findIndex((s) => s.id === id);
  if (index < 0) return { prev: null, next: null };
  return {
    prev: index > 0 ? SERVICE_LINES[index - 1] : null,
    next: index < SERVICE_LINES.length - 1 ? SERVICE_LINES[index + 1] : null,
  };
}

export const SERVICE_PROCESS = [
  { step: "01", title: "Discovery", text: "30-min call to map goals, users, and constraints." },
  { step: "02", title: "Scope & estimate", text: "Clear roadmap, milestones, and fixed or T&M pricing." },
  { step: "03", title: "Design & build", text: "Weekly demos, agile sprints, transparent progress." },
  { step: "04", title: "Launch & support", text: "Deployment, training, AMC, and iteration." },
];
