/** Technology page content */

export const technologyPageData = {
  eyebrow: "ANILAX SOFTWARE · TECHNOLOGY",
  title: "Modern stack for development & design",
  sub: "We architect production-grade systems — from UPI backends and AePS portals to ERP dashboards and mobile apps — using battle-tested languages, frameworks, and cloud infrastructure.",
  stats: [
    { n: "25+", l: "Languages & frameworks" },
    { n: "8", l: "Stack categories" },
    { n: "Full-stack", l: "Dev + design + DevOps" },
    { n: "Fintech-ready", l: "UPI · AePS · KYC rails" },
  ],
  principles: [
    {
      title: "Business first",
      body: "Every project starts with your workflows, compliance needs, and team — then we architect a stack that ships reliably.",
    },
    {
      title: "Proven defaults",
      body: "PostgreSQL, React, Node.js, and battle-tested cloud patterns power most fintech and enterprise builds.",
    },
    {
      title: "Security by design",
      body: "Encryption, RBAC, audit trails, and PCI-aware patterns are built in from day one for payments and sensitive data.",
    },
    {
      title: "Handover-ready",
      body: "Clean code, docs, CI/CD, and repos your team can maintain — not a black box only we understand.",
    },
  ],
  categories: [
    {
      title: "Programming languages",
      body: "Polyglot engineering so each layer gets the right tool — typed frontends, data-heavy backends, native mobile, and transactional SQL.",
      items: ["JavaScript", "TypeScript", "Python", "Java", "PHP", "Go", "Kotlin", "Swift", "C#", "SQL"],
    },
    {
      title: "Frontend development",
      body: "Fast, accessible UIs for dashboards, portals, and consumer apps — with design systems that scale across products.",
      items: ["HTML5", "CSS3", "React", "Next.js", "Vue.js", "Angular", "Tailwind CSS", "Bootstrap", "Material UI", "Vite"],
    },
    {
      title: "Backend development",
      body: "APIs, microservices, and server logic for fintech and enterprise workloads — with clear contracts and observability.",
      items: ["Node.js", "Express.js", "NestJS", "Django", "Flask", "Spring Boot", "Laravel", ".NET Core", "GraphQL", "REST APIs"],
    },
    {
      title: "Mobile development",
      body: "Cross-platform when it fits, native when hardware or UX demands it — store-ready releases included.",
      items: ["React Native", "Flutter", "Android (Kotlin)", "iOS (Swift)", "Java (Android)", "Expo", "Push notifications", "App Store deploy"],
    },
    {
      title: "Database & storage",
      body: "Transactional integrity, caching, search, and document stores chosen for the access patterns you actually have.",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase", "Elasticsearch", "Prisma", "Sequelize"],
    },
    {
      title: "DevOps & cloud",
      body: "Ship fast, recover faster — pipelines, containers, and cloud accounts you own.",
      items: ["AWS", "Google Cloud", "Microsoft Azure", "Docker", "Kubernetes", "GitHub Actions", "Jenkins", "Terraform", "Nginx", "Cloudflare"],
    },
    {
      title: "UI / UX design",
      body: "Flows and systems developers can ship — Figma sources, tokens, and prototypes that survive engineering.",
      items: ["Figma", "Design systems", "Wireframes", "Prototypes", "Design tokens", "Accessibility", "Motion specs", "Handoff"],
    },
    {
      title: "Fintech & integration",
      body: "Payment rails, KYC, webhooks, and partner APIs — integrated with audit-minded architecture.",
      items: ["UPI", "AePS", "Wallets", "Payment gateways", "KYC", "Webhooks", "OpenAPI", "SDKs", "Ledgers", "Settlement"],
    },
  ],
  presets: [
    {
      title: "Fintech / payments",
      sub: "AePS, UPI, wallets, ledgers",
      stack: ["TypeScript", "Node.js", "PostgreSQL", "Redis", "React / RN", "AWS", "OpenAPI"],
      href: "/services/fintech",
    },
    {
      title: "SaaS product",
      sub: "Multi-tenant web platforms",
      stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe/Razorpay", "Docker", "CI/CD"],
      href: "/services/saas",
    },
    {
      title: "Mobile + API",
      sub: "Consumer or field apps",
      stack: ["React Native", "Node.js", "PostgreSQL", "Push", "Maps", "Analytics"],
      href: "/services/mobile-apps",
    },
    {
      title: "ERP / enterprise",
      sub: "Ops, CRM, inventory, GST",
      stack: ["React", "Node/.NET/Python", "PostgreSQL", "Reports", "RBAC", "Integrations"],
      href: "/services/erp-crm",
    },
  ],
  note: "For regulated workloads we design with partner-bank requirements, audit trails, and environment separation in mind. Anilax is a technology partner — licensing stays with the regulated entity.",
};
