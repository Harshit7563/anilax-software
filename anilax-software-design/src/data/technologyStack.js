export const TECH_HERO = {
  eyebrow: "Anilax Software · Technology",
  title: "Modern stack for development & design",
  subtitle:
    "We architect production-grade systems — from UPI backends and AePS portals to ERP dashboards and mobile apps — using battle-tested languages, frameworks, and cloud infrastructure.",
};

export const TECH_STATS = [
  { value: "25+", label: "Languages & frameworks" },
  { value: "8", label: "Stack categories" },
  { value: "Full-stack", label: "Dev + design + DevOps" },
  { value: "Cloud-ready", label: "AWS · GCP · Azure" },
  { value: "Fintech-ready", label: "UPI · AePS · KYC rails" },
];

export const TECH_PHILOSOPHY = [
  {
    title: "Business flow first",
    text: "We pick tools based on your operations, compliance needs, and team — not hype cycles or one-size-fits-all templates.",
  },
  {
    title: "Battle-tested core",
    text: "PostgreSQL, React, Node.js, and proven cloud patterns power most of our fintech and enterprise builds for reliability at scale.",
  },
  {
    title: "Secure by design",
    text: "Encryption, RBAC, audit trails, and PCI-aware architecture are built in from day one — especially for payments and sensitive data.",
  },
  {
    title: "Long-term ownership",
    text: "Clean code, documentation, CI/CD, and handover-ready repos so your team can maintain and extend what we ship.",
  },
];

export const TECH_CATEGORIES = [
  {
    id: "languages",
    title: "Programming Languages",
    desc: "Core languages we use across web, mobile, and backend systems.",
    summary:
      "Polyglot engineering lets us match the right language to each layer — TypeScript for type-safe APIs and frontends, Python for data-heavy backends, Kotlin/Swift for native mobile, and SQL for transactional integrity.",
    highlights: [
      "Type-safe TypeScript across frontend and Node.js APIs",
      "Python & Java for enterprise and data-intensive workloads",
      "Kotlin, Swift & Java for native Android and iOS apps",
    ],
    useCases: ["API services", "Mobile apps", "Data pipelines", "Legacy modernization"],
    items: [
      { name: "JavaScript", desc: "Universal language for web frontends, Node.js services, and scripting.", tags: ["Web", "Universal"] },
      { name: "TypeScript", desc: "Typed JavaScript for safer APIs, React apps, and large codebases.", tags: ["API", "Frontend"] },
      { name: "Python", desc: "Rapid backend development, automation, ML hooks, and data processing.", tags: ["Backend", "Data"] },
      { name: "Java", desc: "Enterprise-grade services, Android native, and Spring Boot microservices.", tags: ["Enterprise", "Android"] },
      { name: "PHP", desc: "Mature CMS, Laravel apps, and legacy system maintenance.", tags: ["Web", "Laravel"] },
      { name: "Go", desc: "High-performance microservices, workers, and concurrent systems.", tags: ["Microservices"] },
      { name: "Kotlin", desc: "Modern Android development with coroutines and Jetpack.", tags: ["Android"] },
      { name: "Swift", desc: "Native iOS apps with SwiftUI and performance-critical features.", tags: ["iOS"] },
      { name: "C#", desc: ".NET Core APIs and Windows-integrated enterprise software.", tags: [".NET"] },
      { name: "SQL", desc: "Complex queries, reporting, stored procedures, and data modelling.", tags: ["Database"] },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    desc: "Fast, responsive interfaces for dashboards, portals, and consumer apps.",
    summary:
      "We build pixel-perfect, accessible UIs for admin panels, merchant dashboards, customer portals, and consumer fintech apps — with design systems that scale across web and mobile.",
    highlights: [
      "React & Next.js for SPAs and SEO-friendly marketing sites",
      "Component libraries and design tokens for consistent UX",
      "Performance tuning — lazy loading, code splitting, Core Web Vitals",
    ],
    useCases: ["Admin dashboards", "Merchant portals", "Customer apps", "Marketing sites"],
    items: [
      { name: "HTML5", desc: "Semantic markup, accessibility, and progressive enhancement.", tags: ["Foundation"] },
      { name: "CSS3", desc: "Responsive layouts, animations, and modern CSS features.", tags: ["Layout"] },
      { name: "React", desc: "Component-driven SPAs for complex dashboards and fintech UIs.", tags: ["SPA", "Dashboard"] },
      { name: "Next.js", desc: "SSR/SSG for SEO, fast landing pages, and hybrid apps.", tags: ["SSR", "SEO"] },
      { name: "Vue.js", desc: "Lightweight progressive framework for admin and portal builds.", tags: ["SPA"] },
      { name: "Angular", desc: "Enterprise-grade structure for large internal tools.", tags: ["Enterprise"] },
      { name: "Tailwind CSS", desc: "Utility-first styling for rapid, consistent UI development.", tags: ["Design system"] },
      { name: "Bootstrap", desc: "Proven responsive grid and component library.", tags: ["Bootstrap"] },
      { name: "Material UI", desc: "Google Material Design components for React apps.", tags: ["React UI"] },
      { name: "Vite", desc: "Lightning-fast dev server and optimized production builds.", tags: ["Build tool"] },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    desc: "Scalable APIs, microservices, and server logic for fintech workloads.",
    summary:
      "REST and GraphQL APIs, webhook handlers, payment orchestration, and background jobs — architected for high throughput, idempotency, and clear separation of concerns.",
    highlights: [
      "Node.js & NestJS for fast API delivery and TypeScript end-to-end",
      "Django, Flask & Spring Boot for enterprise and regulated workloads",
      "GraphQL and REST with versioning, rate limits, and OpenAPI docs",
    ],
    useCases: ["Payment APIs", "ERP backends", "Webhooks", "Microservices"],
    items: [
      { name: "Node.js", desc: "Event-driven APIs, real-time features, and npm ecosystem speed.", tags: ["API", "Real-time"] },
      { name: "Express.js", desc: "Minimal, flexible HTTP layer for Node.js services.", tags: ["HTTP"] },
      { name: "NestJS", desc: "Structured TypeScript framework with DI, modules, and guards.", tags: ["Enterprise API"] },
      { name: "Django", desc: "Batteries-included Python framework with admin and ORM.", tags: ["Python", "Admin"] },
      { name: "Flask", desc: "Lightweight Python microservices and API endpoints.", tags: ["Micro API"] },
      { name: "Spring Boot", desc: "Java enterprise APIs with security, JPA, and microservices.", tags: ["Java", "Enterprise"] },
      { name: "Laravel", desc: "Elegant PHP framework for web apps and REST APIs.", tags: ["PHP"] },
      { name: ".NET Core", desc: "Cross-platform C# APIs for Windows-integrated systems.", tags: [".NET"] },
      { name: "GraphQL", desc: "Flexible query layer for mobile apps and complex data needs.", tags: ["Query API"] },
      { name: "REST APIs", desc: "Standard HTTP APIs with JWT auth, pagination, and webhooks.", tags: ["Standard"] },
    ],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    desc: "Native and cross-platform apps for Android, iOS, and fintech wallets.",
    summary:
      "Consumer wallets, agent apps, field-force tools, and on-demand platforms — with offline sync, push notifications, biometric auth, and Play Store / App Store deployment support.",
    highlights: [
      "React Native & Flutter for cross-platform speed without sacrificing UX",
      "Native Kotlin & Swift for performance-critical fintech features",
      "Capacitor hybrid shells for admin apps wrapping existing web UIs",
    ],
    useCases: ["UPI wallets", "AePS agent apps", "Field sales", "On-demand booking"],
    items: [
      { name: "React Native", desc: "Cross-platform apps with native modules and OTA updates.", tags: ["Cross-platform"] },
      { name: "Flutter", desc: "Single codebase for Android and iOS with rich UI.", tags: ["Cross-platform"] },
      { name: "Android (Kotlin)", desc: "Native Android with Material Design and device integrations.", tags: ["Native"] },
      { name: "iOS (Swift)", desc: "Native iOS with App Store compliance and biometrics.", tags: ["Native"] },
      { name: "Java (Android)", desc: "Legacy Android maintenance and enterprise device support.", tags: ["Legacy"] },
      { name: "Expo", desc: "Rapid React Native prototyping and managed builds.", tags: ["Prototype"] },
      { name: "Push notifications", desc: "FCM, APNs, and in-app notification centres.", tags: ["Engagement"] },
      { name: "App Store deploy", desc: "Play Console and App Store Connect release pipelines.", tags: ["Release"] },
    ],
  },
  {
    id: "database",
    title: "Database & Storage",
    desc: "Reliable data layers for transactions, ledgers, and high-traffic apps.",
    summary:
      "ACID-compliant relational databases for ledgers and orders, Redis for sessions and queues, and search/index layers for logs and analytics — with migrations, backups, and replication.",
    highlights: [
      "PostgreSQL as primary store for fintech transactions and ERP data",
      "Redis for caching, rate limiting, sessions, and job queues",
      "Prisma & Sequelize ORMs with migration workflows",
    ],
    useCases: ["Transaction ledgers", "Order management", "Session stores", "Search & logs"],
    items: [
      { name: "PostgreSQL", desc: "Primary RDBMS for ACID transactions, JSONB, and complex queries.", tags: ["Primary DB"] },
      { name: "MySQL", desc: "Widely deployed relational DB for web apps and hosting compatibility.", tags: ["RDBMS"] },
      { name: "MongoDB", desc: "Flexible document store for catalogs, logs, and rapid iteration.", tags: ["NoSQL"] },
      { name: "Redis", desc: "In-memory cache, pub/sub, rate limits, and session storage.", tags: ["Cache"] },
      { name: "Firebase", desc: "Realtime sync, auth, and push for mobile-first prototypes.", tags: ["Mobile DB"] },
      { name: "Elasticsearch", desc: "Full-text search, log aggregation, and analytics queries.", tags: ["Search"] },
      { name: "Prisma", desc: "Type-safe ORM with schema migrations for Node.js/TypeScript.", tags: ["ORM"] },
      { name: "Sequelize", desc: "Mature Node.js ORM for PostgreSQL and MySQL.", tags: ["ORM"] },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    desc: "CI/CD, containers, and cloud infra for secure production deployments.",
    summary:
      "Automated pipelines, containerized deployments, load-balanced APIs, SSL, monitoring, and disaster recovery — on AWS, GCP, Azure, or VPS hosting like Hostinger.",
    highlights: [
      "Docker & Kubernetes for reproducible, scalable deployments",
      "GitHub Actions & Jenkins for automated test-and-deploy pipelines",
      "Nginx reverse proxy, SSL, and zero-downtime rolling updates",
    ],
    useCases: ["Production hosting", "Staging environments", "Auto-scaling APIs", "Disaster recovery"],
    items: [
      { name: "AWS", desc: "EC2, RDS, S3, Lambda, and managed services for scale.", tags: ["Cloud"] },
      { name: "Google Cloud", desc: "GCP compute, Cloud SQL, and Firebase integration.", tags: ["Cloud"] },
      { name: "Microsoft Azure", desc: "Enterprise cloud for .NET and hybrid workloads.", tags: ["Cloud"] },
      { name: "Docker", desc: "Containerized apps for consistent dev-to-prod parity.", tags: ["Containers"] },
      { name: "Kubernetes", desc: "Orchestration for multi-service, auto-scaling deployments.", tags: ["Orchestration"] },
      { name: "GitHub Actions", desc: "CI/CD pipelines triggered on pull requests and merges.", tags: ["CI/CD"] },
      { name: "Jenkins", desc: "Self-hosted build automation for enterprise environments.", tags: ["CI/CD"] },
      { name: "Nginx", desc: "Reverse proxy, load balancing, SSL termination, and caching.", tags: ["Proxy"] },
      { name: "Linux", desc: "Ubuntu/CentOS server administration and hardening.", tags: ["OS"] },
      { name: "Git", desc: "Branching strategies, code review workflows, and release tags.", tags: ["VCS"] },
    ],
  },
  {
    id: "design",
    title: "UI / UX Design",
    desc: "Research, wireframes, and visual design for products users love.",
    summary:
      "User research, information architecture, wireframes, high-fidelity UI in Figma, design systems, and developer handoff — so what we build matches what users expect.",
    highlights: [
      "Figma-first design with component libraries and design tokens",
      "Mobile-first responsive layouts and accessibility (WCAG 2.1)",
      "Prototyping for stakeholder sign-off before development sprints",
    ],
    useCases: ["Dashboard UX", "Mobile app flows", "Design systems", "Rebranding"],
    items: [
      { name: "Figma", desc: "Primary design tool for UI, prototypes, and dev handoff.", tags: ["Primary"] },
      { name: "Adobe XD", desc: "Interactive prototypes and design specs.", tags: ["Prototype"] },
      { name: "Sketch", desc: "Mac-native UI design for marketing and product teams.", tags: ["UI"] },
      { name: "Photoshop", desc: "Image editing, banners, and marketing assets.", tags: ["Assets"] },
      { name: "Illustrator", desc: "Vector icons, logos, and brand illustrations.", tags: ["Brand"] },
      { name: "Wireframing", desc: "Low-fidelity flows before visual design investment.", tags: ["UX"] },
      { name: "Prototyping", desc: "Clickable demos for user testing and approvals.", tags: ["UX"] },
      { name: "Design systems", desc: "Reusable components, typography, and colour tokens.", tags: ["Scale"] },
      { name: "Responsive UI", desc: "Breakpoints and layouts for mobile, tablet, and desktop.", tags: ["Layout"] },
      { name: "Accessibility (WCAG)", desc: "Contrast, keyboard nav, and screen reader support.", tags: ["A11y"] },
    ],
  },
  {
    id: "fintech-tech",
    title: "Fintech & Integration",
    desc: "Specialized stacks for payments, banking APIs, and compliance-ready builds.",
    summary:
      "Deep experience integrating UPI/NPCI flows, payment gateways, AePS, BBPS, KYC providers, and sponsor-bank APIs — with webhook reconciliation, encryption, and audit-ready logging.",
    highlights: [
      "UPI collect, intent, QR, and merchant settlement flows",
      "AePS two-factor auth, BC portals, and commission reconciliation",
      "OAuth 2.0, JWT, webhook signatures, and idempotent APIs",
    ],
    useCases: ["UPI apps", "AePS BC networks", "Payment gateways", "Wallet & lending"],
    items: [
      { name: "UPI / NPCI flows", desc: "Collect, intent, QR, and merchant onboarding per NPCI specs.", tags: ["UPI"] },
      { name: "Payment gateways", desc: "Razorpay, PayU, Cashfree, and custom gateway integrations.", tags: ["Gateway"] },
      { name: "AePS integration", desc: "Biometric auth, bank routing, and BC commission logic.", tags: ["AePS"] },
      { name: "BBPS", desc: "Bill fetch, payment, and reconciliation for utility bills.", tags: ["BBPS"] },
      { name: "KYC / eKYC APIs", desc: "Aadhaar OTP, PAN verification, and document OCR hooks.", tags: ["KYC"] },
      { name: "Webhooks", desc: "Signed callbacks, retry logic, and event-driven reconciliation.", tags: ["Events"] },
      { name: "OAuth 2.0", desc: "Secure third-party auth and API access tokens.", tags: ["Auth"] },
      { name: "JWT / encryption", desc: "Token-based auth, AES/RSA encryption, and key rotation.", tags: ["Security"] },
      { name: "PCI-aware architecture", desc: "Card data isolation, tokenization, and scope reduction.", tags: ["Compliance"] },
    ],
  },
];

export const TECH_PRESETS = [
  {
    id: "fintech",
    title: "Fintech & Payments",
    desc: "High-throughput payment rails with reconciliation, KYC, and compliance-ready logging.",
    layers: [
      { label: "Apps", items: ["React Native", "React", "Capacitor Admin"] },
      { label: "API layer", items: ["Node.js", "NestJS", "REST + Webhooks"] },
      { label: "Data", items: ["PostgreSQL", "Redis", "Audit logs"] },
      { label: "Integrations", items: ["UPI/NPCI", "AePS", "Payment gateways", "KYC APIs"] },
      { label: "Infra", items: ["Docker", "AWS/GCP", "Nginx", "GitHub Actions"] },
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise ERP & CRM",
    desc: "Modular backends with role-based access, reporting, and long-lived data models.",
    layers: [
      { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
      { label: "Backend", items: ["Node.js", "Spring Boot", "Django"] },
      { label: "Database", items: ["PostgreSQL", "MySQL", "Redis cache"] },
      { label: "Reports", items: ["SQL analytics", "Export APIs", "Dashboard widgets"] },
      { label: "Deploy", items: ["Docker", "Linux VPS", "Automated backups"] },
    ],
  },
  {
    id: "mobile",
    title: "Mobile-first Products",
    desc: "Cross-platform or native apps with offline sync, push, and in-app payments.",
    layers: [
      { label: "Mobile", items: ["React Native", "Flutter", "Kotlin/Swift"] },
      { label: "Backend", items: ["Node.js API", "Firebase Auth", "Push (FCM/APNs)"] },
      { label: "Payments", items: ["UPI SDK", "Wallet ledger", "Webhook settlement"] },
      { label: "Storage", items: ["PostgreSQL", "S3 media", "Local offline cache"] },
      { label: "Release", items: ["Play Store", "App Store", "OTA updates"] },
    ],
  },
  {
    id: "saas",
    title: "SaaS & Subscriptions",
    desc: "Multi-tenant architecture with billing, onboarding, and scalable API tiers.",
    layers: [
      { label: "Web app", items: ["Next.js", "React", "Tailwind CSS"] },
      { label: "API", items: ["NestJS", "GraphQL/REST", "Rate limiting"] },
      { label: "Billing", items: ["Recurring mandates", "Invoicing", "Dunning"] },
      { label: "Tenancy", items: ["Schema isolation", "RBAC", "Usage metering"] },
      { label: "Ops", items: ["Kubernetes", "Monitoring", "CI/CD"] },
    ],
  },
];

export const TECH_SECURITY = [
  {
    title: "Encryption & secrets",
    text: "TLS in transit, AES/RSA at rest, environment-based secrets, and no credentials in source code.",
  },
  {
    title: "Access control",
    text: "Role-based permissions, JWT/session management, MFA hooks, and principle of least privilege.",
  },
  {
    title: "Audit & logging",
    text: "Structured logs, transaction trails, admin action history, and tamper-evident records for fintech.",
  },
  {
    title: "Compliance alignment",
    text: "PCI-aware card handling, RBI guideline awareness, data retention policies, and partner-bank requirements.",
  },
  {
    title: "Secure SDLC",
    text: "Dependency scanning, code review, staging environments, and penetration-test readiness.",
  },
  {
    title: "Infrastructure hardening",
    text: "Firewall rules, SSL/TLS, rate limiting, DDoS mitigation, and automated security patches.",
  },
];

export const TECH_ENGINEERING = [
  {
    step: "01",
    title: "Discovery & architecture",
    text: "Requirements workshops, data modelling, API contracts, and stack selection aligned to your roadmap and compliance needs.",
  },
  {
    step: "02",
    title: "Design & prototyping",
    text: "Figma wireframes and UI, user flow validation, and component specs before sprint one.",
  },
  {
    step: "03",
    title: "Agile development",
    text: "Two-week sprints, demo calls, Git branching, unit/integration tests, and continuous integration on every merge.",
  },
  {
    step: "04",
    title: "QA & staging",
    text: "Manual and automated testing, UAT on staging, performance checks, and security review before go-live.",
  },
  {
    step: "05",
    title: "Deploy & monitor",
    text: "Zero-downtime releases, health checks, error tracking, and on-call support during launch windows.",
  },
  {
    step: "06",
    title: "Maintain & evolve",
    text: "Bug fixes, dependency updates, feature sprints, and documentation for your internal team.",
  },
];

export const TECH_PROCESS = [
  { step: "01", title: "Discover", text: "Requirements, user flows, compliance constraints, and tech feasibility assessment." },
  { step: "02", title: "Design", text: "UI/UX in Figma with design tokens — then component-ready developer handoff." },
  { step: "03", title: "Develop", text: "Agile sprints with your chosen stack, code review, and CI on every pull request." },
  { step: "04", title: "Deploy", text: "Cloud or VPS hosting, monitoring, SSL, backups, and ongoing support retainers." },
];

export const TECH_FAQ = [
  {
    q: "Do you work with our existing stack?",
    a: "Yes. We integrate with legacy PHP, Java, or .NET systems, extend existing APIs, and gradually modernize without big-bang rewrites when phased migration makes sense.",
  },
  {
    q: "Can you recommend a stack for our project?",
    a: "After a short discovery call we propose a preset — fintech, enterprise, mobile, or SaaS — customized to your scale, budget, and in-house team skills.",
  },
  {
    q: "Who owns the code and infrastructure?",
    a: "You do. We deliver source code, documentation, and deployment guides. Hosting can be on your AWS/GCP account or a VPS we set up under your credentials.",
  },
  {
    q: "How do you handle fintech compliance?",
    a: "We build PCI-aware, audit-ready systems and integrate through licensed banks and authorized payment partners. We do not replace regulated entities — we provide the technology layer.",
  },
  {
    q: "Do you provide design as well as development?",
    a: "Yes — UI/UX in Figma, design systems, and full-stack implementation in one team, which reduces handoff gaps and speeds delivery.",
  },
];

export function getTechCategory(id) {
  return TECH_CATEGORIES.find((c) => c.id === id) ?? null;
}

export function getTechItemName(item) {
  return typeof item === "string" ? item : item.name;
}

export function getAllTechNames() {
  return TECH_CATEGORIES.flatMap((c) => c.items.map(getTechItemName));
}
