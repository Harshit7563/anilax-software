/** Deep content merged into service lines for individual /services/:id pages */

const DEFAULT_ENGAGEMENT = [
  "Fixed-scope MVP with milestone payments",
  "Time & material with weekly sprints",
  "Dedicated team retainer (monthly)",
];

export const SERVICE_DETAIL = {
  "custom-software": {
    overview:
      "Off-the-shelf software rarely fits how your team actually works. We run discovery workshops, map workflows with stakeholders, and build custom web and desktop applications that match your approvals, reports, integrations, and user roles — with full source-code ownership and documentation for your team.",
    problems: [
      "Spreadsheets and WhatsApp groups running critical operations",
      "Generic SaaS tools that force awkward workarounds",
      "No single view across branches, partners, or departments",
      "Manual reporting that takes days every month",
      "Vendor lock-in with no access to source code",
    ],
    approach: [
      "Workflow mapping sessions with ops, finance, and IT stakeholders",
      "Modular architecture so you can add modules without rewriting",
      "Role-based admin panels with audit logs for accountability",
      "Weekly sprint demos so you see progress, not surprises",
      "Handover with docs, training, and optional AMC retainers",
    ],
    deliverables: [
      "Requirements document & clickable prototype",
      "Production-ready application with admin panel",
      "API documentation & deployment guide",
      "User training sessions & video walkthroughs",
      "Source code in your Git repository",
    ],
    industries: ["Manufacturing", "Distribution", "Professional services", "Healthcare ops", "Logistics"],
    metrics: [
      { value: "4–10 wks", label: "Typical MVP timeline" },
      { value: "100%", label: "Code ownership" },
      { value: "Agile", label: "Weekly demos" },
    ],
    engagement: DEFAULT_ENGAGEMENT,
    faq: [
      { q: "How is custom software different from your product catalog?", a: "Our 68+ products are starting templates we customize. Custom software is built from scratch when your workflow is unique or heavily regulated." },
      { q: "Can you integrate with our existing ERP or accounting?", a: "Yes — we build API layers, file imports, or real-time sync with Tally, SAP, Zoho, or custom systems." },
      { q: "Do we own the IP?", a: "Yes. Upon payment milestones, full source code and IP transfer to you as per contract." },
    ],
  },
  "web-development": {
    overview:
      "Your website is often the first product experience customers have. We build fast, secure web applications — customer portals, partner dashboards, B2B ordering platforms, and marketing sites with app backends — optimized for SEO, Core Web Vitals, and real traffic spikes during campaigns or product launches.",
    problems: [
      "Slow legacy sites that hurt conversions and Google rankings",
      "Admin panels bolted onto WordPress that break under load",
      "No mobile-responsive experience for field teams",
      "Security gaps in login, payments, or file uploads",
      "Disjointed front-end and API teams causing delays",
    ],
    approach: [
      "SPA or SSR choice based on SEO and performance needs",
      "Component libraries for consistent UI across modules",
      "Auth, RBAC, and session management from day one",
      "Lighthouse-driven performance budgets",
      "Staging environments for UAT before every release",
    ],
    deliverables: [
      "Responsive web app (desktop, tablet, mobile web)",
      "Admin dashboard with role-based access",
      "CMS or content workflows where required",
      "Analytics, error tracking, and uptime monitoring hooks",
      "Deployment on your cloud or VPS with SSL",
    ],
    industries: ["B2B SaaS", "Retail", "Fintech portals", "Education", "Healthcare portals"],
    metrics: [
      { value: "90+", label: "Lighthouse target" },
      { value: "React/Next", label: "Primary stack" },
      { value: "2–8 wks", label: "Portal MVP range" },
    ],
    engagement: DEFAULT_ENGAGEMENT,
    faq: [
      { q: "Do you build marketing websites or only apps?", a: "Both — landing pages with Next.js SSR for SEO, and full authenticated web applications." },
      { q: "Can you redesign our existing site without losing SEO?", a: "Yes — we plan URL redirects, meta migration, and phased rollout to protect rankings." },
    ],
  },
  "mobile-apps": {
    overview:
      "India runs on mobile — UPI wallets, field sales, delivery riders, and patient apps need reliable Android and iOS experiences. We ship React Native, Flutter, or native Kotlin/Swift apps with offline sync, push notifications, biometric login, in-app payments, and Play Store / App Store submission support.",
    problems: [
      "Web-only products that field teams cannot use without connectivity",
      "Rejected app store builds due to policy or SDK issues",
      "Poor performance on budget Android devices",
      "Payment SDK integration failures and settlement mismatches",
      "No crash analytics or OTA update strategy",
    ],
    approach: [
      "Platform choice based on timeline, budget, and native feature needs",
      "Offline-first patterns for sales, logistics, and rural connectivity",
      "UPI intent, collect, and wallet SDK integration with test harnesses",
      "Firebase or custom push with deep linking",
      "Store listing, screenshots, and compliance review before submit",
    ],
    deliverables: [
      "Android and/or iOS production apps",
      "Backend APIs for auth, sync, and payments",
      "Push notification and analytics setup",
      "App Store & Play Store release support",
      "Post-launch crash monitoring and patch cycles",
    ],
    industries: ["Fintech", "Logistics", "On-demand", "Healthcare", "Retail field force"],
    metrics: [
      { value: "Android + iOS", label: "Cross-platform option" },
      { value: "UPI ready", label: "Payment SDK integration" },
      { value: "6–14 wks", label: "Typical app MVP" },
    ],
    engagement: DEFAULT_ENGAGEMENT,
    faq: [
      { q: "React Native or Flutter — which do you recommend?", a: "Flutter for pixel-perfect UI and single codebase; React Native if you already have a React web team." },
      { q: "Do you handle Play Store and App Store accounts?", a: "We guide setup and publish under your developer accounts — you retain full store ownership." },
    ],
  },
  "saas-development": {
    overview:
      "Launching SaaS means more than a login page — you need multi-tenant isolation, subscription billing, usage metering, onboarding flows, and super-admin tooling. We architect SaaS platforms that scale from first 10 customers to thousands of tenants without rewriting core infrastructure.",
    problems: [
      "Single-tenant code that cannot scale to multiple customers",
      "Billing logic hacked onto Stripe without dunning or upgrades",
      "No self-serve signup or tenant provisioning",
      "Super-admin blind spots across customer accounts",
      "API limits and abuse with no rate limiting",
    ],
    approach: [
      "Tenant isolation strategy (schema, row-level, or hybrid)",
      "Razorpay/Stripe subscription flows with webhooks",
      "Self-serve signup, email verify, and plan selection",
      "Usage metering hooks for tiered pricing",
      "API-first design with OpenAPI docs for integrators",
    ],
    deliverables: [
      "Multi-tenant web application",
      "Billing portal & invoice history",
      "Super-admin and tenant-admin consoles",
      "Public API with keys and rate limits",
      "Onboarding emails and in-app guides",
    ],
    industries: ["B2B tools", "Vertical SaaS", "Fintech APIs", "HR tech", "PropTech"],
    metrics: [
      { value: "Multi-tenant", label: "Architecture" },
      { value: "Razorpay", label: "Billing integration" },
      { value: "8–16 wks", label: "SaaS MVP range" },
    ],
    engagement: DEFAULT_ENGAGEMENT,
    faq: [
      { q: "Can you add SaaS billing to our existing product?", a: "Yes — we retrofit tenant models, billing webhooks, and admin consoles onto existing codebases." },
      { q: "How do you handle data isolation between customers?", a: "We choose schema-per-tenant, shared schema with tenant_id, or hybrid based on compliance and scale." },
    ],
  },
  "enterprise-erp-crm": {
    overview:
      "Growing businesses outgrow Excel — production planning, inventory, purchase orders, sales pipelines, HRMS, payroll, and GST billing need one connected system. We implement and customize ERP, CRM, and HRMS modules with multi-branch, multi-warehouse, and mobile access for shop floors and sales teams.",
    problems: [
      "Inventory numbers that never match physical stock",
      "Sales follow-ups lost between WhatsApp and spreadsheets",
      "GST filing stress every month with manual invoice entry",
      "No visibility across factory, warehouse, and branches",
      "Payroll and attendance on separate disconnected tools",
    ],
    approach: [
      "Module-by-module rollout to avoid business disruption",
      "GST, e-invoice, and e-way bill integration where required",
      "Role-based dashboards for management vs shop floor",
      "Mobile apps for sales van, warehouse, and approvals",
      "Data migration from Tally, Excel, or legacy ERP",
    ],
    deliverables: [
      "ERP modules (production, inventory, purchase, sales)",
      "CRM with pipelines, leads, and activity tracking",
      "HRMS, attendance, and payroll hooks",
      "Financial reports and GST-ready invoicing",
      "Training and phased go-live support",
    ],
    industries: ["Manufacturing", "FMCG distribution", "Retail chains", "Services companies"],
    metrics: [
      { value: "GST ready", label: "Billing & compliance" },
      { value: "Multi-branch", label: "Supported" },
      { value: "Phased", label: "Module rollout" },
    ],
    engagement: DEFAULT_ENGAGEMENT,
    faq: [
      { q: "Can you customize your ERP product vs build from scratch?", a: "We start from our ERP/inventory/accounting modules and customize workflows — faster and lower risk than greenfield." },
      { q: "Do you integrate with Tally?", a: "Yes — bi-directional sync or export/import depending on your accounting process." },
    ],
  },
  "ecommerce-marketplace": {
    overview:
      "Online revenue needs more than a catalog — checkout, payments, logistics, returns, seller onboarding, and omnichannel inventory must work together. We build D2C storefronts, B2B ordering portals, and multi-vendor marketplaces with commission engines, seller dashboards, and payment reconciliation.",
    problems: [
      "Cart abandonment from slow checkout or limited payment options",
      "Inventory out of sync between online and offline channels",
      "Seller onboarding chaos on marketplace models",
      "COD mismatches and return/refund disputes",
      "No analytics on product, channel, or campaign performance",
    ],
    approach: [
      "Headless or monolith commerce architecture based on scale",
      "Payment gateway, UPI, COD, and wallet options",
      "Seller KYC, catalog approval, and commission rules",
      "Shipping partner API integration and tracking pages",
      "Promotions, coupons, loyalty, and referral engines",
    ],
    deliverables: [
      "Customer storefront (web + optional mobile app)",
      "Admin panel for catalog, orders, and promotions",
      "Seller/vendor portal for marketplace models",
      "Payment and settlement reconciliation reports",
      "SEO, sitemap, and analytics integration",
    ],
    industries: ["D2C brands", "B2B distributors", "Hyperlocal marketplaces", "Franchise retail"],
    metrics: [
      { value: "Multi-vendor", label: "Marketplace ready" },
      { value: "UPI + COD", label: "Payment rails" },
      { value: "10–20 wks", label: "Store MVP range" },
    ],
    engagement: DEFAULT_ENGAGEMENT,
    faq: [
      { q: "Shopify alternative with full customization?", a: "Yes — we build owned platforms where you control checkout, data, and integrations without platform fees." },
      { q: "Can you connect to Shiprocket or Delhivery?", a: "Yes — we integrate major Indian logistics APIs for rates, labels, and tracking." },
    ],
  },
  "fintech-payments": {
    overview:
      "Payment software in India requires NPCI awareness, sponsor-bank partnerships, settlement logic, and audit-ready systems. We build UPI apps, AePS BC agent networks, payment gateways, switches, SoftPOS, wallets, and developer APIs — the same infrastructure categories top fintech IT companies deliver for banks and aggregators.",
    problems: [
      "Manual reconciliation between gateway, bank, and internal ledger",
      "AePS transaction failures without clear error mapping",
      "Merchant onboarding bottlenecks and KYC delays",
      "No webhook reliability for partner integrations",
      "Compliance gaps in logs, encryption, and access control",
    ],
    approach: [
      "Sponsor-bank and NPCI guideline alignment from architecture phase",
      "Idempotent APIs and double-entry ledger patterns",
      "Real-time and batch reconciliation dashboards",
      "Agent, merchant, and admin apps with role separation",
      "Webhook signing, retries, and partner sandbox environments",
    ],
    deliverables: [
      "Payment app or BC portal (web + mobile)",
      "Transaction ledger and settlement reports",
      "REST APIs, webhooks, and SDK samples",
      "Admin panel for agents, merchants, and commissions",
      "Audit logs and compliance documentation support",
    ],
    industries: ["BC networks", "Payment aggregators", "Fintech startups", "NBFC tech", "Wallets"],
    metrics: [
      { value: "UPI · AePS", label: "Core rails" },
      { value: "NPCI aware", label: "Integration approach" },
      { value: "24/7", label: "Transaction uptime target" },
    ],
    engagement: DEFAULT_ENGAGEMENT,
    process: [
      {
        step: "01",
        title: "Discovery & compliance",
        text: "Workshop to map UPI, AePS, gateway, or wallet flows — sponsor-bank requirements, NPCI guidelines, KYC, and partner integrations.",
      },
      {
        step: "02",
        title: "Ledger & architecture",
        text: "Double-entry ledger design, idempotent APIs, webhook strategy, and reconciliation logic — signed off before development starts.",
      },
      {
        step: "03",
        title: "Build, UAT & certification",
        text: "Agile sprints with sandbox testing, bank/NPCI UAT cycles, load tests, and security review on staging environments.",
      },
      {
        step: "04",
        title: "Go-live & reconciliation",
        text: "Production deployment, merchant/agent onboarding, settlement dashboards, monitoring, and optional AMC or dedicated team.",
      },
    ],
    faq: [
      { q: "Are you a bank or PPI license holder?", a: "We are a technology company. Regulated payment activities run through licensed banks and authorized partners — we build the software layer." },
      { q: "Can you integrate with existing sponsor bank APIs?", a: "Yes — we work from bank API specs, UAT environments, and certification checklists." },
    ],
  },
  "healthcare-software": {
    overview:
      "Hospitals and clinics need software that reduces queues, billing errors, and stock mismatches — not more paperwork. We build HMS platforms with OPD/IPD, appointments, billing, lab orders, pharmacy inventory, and patient apps, with role-based access for doctors, nurses, billing staff, and administrators.",
    problems: [
      "Long OPD queues with paper registers",
      "Billing disputes and insurance claim delays",
      "Lab reports delivered late or lost",
      "Pharmacy stock not linked to prescriptions",
      "No patient communication between visits",
    ],
    approach: [
      "Department-wise workflow mapping (OPD, IPD, lab, pharmacy)",
      "Role-based screens so staff see only what they need",
      "SMS/WhatsApp reminders for appointments and reports",
      "Patient app for reports, bills, and follow-ups",
      "Audit trails for sensitive data access",
    ],
    deliverables: [
      "Hospital or clinic management system",
      "Doctor schedule and appointment module",
      "Billing, pharmacy, and lab modules",
      "Patient mobile app (optional)",
      "Staff training and go-live support",
    ],
    industries: ["Multi-specialty hospitals", "Clinics", "Diagnostic labs", "Pharmacy chains"],
    metrics: [
      { value: "OPD + IPD", label: "Modules" },
      { value: "Patient app", label: "Optional add-on" },
      { value: "Role-based", label: "Access control" },
    ],
    engagement: DEFAULT_ENGAGEMENT,
    faq: [
      { q: "Is the software ABHA or NABH compliant?", a: "We build ABHA integration hooks and workflow support; formal accreditation is an operational process we assist with via configurable modules." },
      { q: "Can small clinics start with OPD only?", a: "Yes — modular rollout starting with appointments and billing, adding IPD and lab later." },
    ],
  },
  "edtech-lms": {
    overview:
      "Schools, colleges, and coaching institutes still run on registers and phone calls. We digitize admissions, fees, attendance, exams, live classes, test series, and parent communication — with web portals and mobile apps that work for administrators, teachers, students, and parents.",
    problems: [
      "Fee collection follow-ups consuming admin time",
      "Attendance and exam records in disconnected notebooks",
      "No online test or rank list capability",
      "Parents uninformed about homework, results, or events",
      "Coaching batches managed on Excel and WhatsApp",
    ],
    approach: [
      "Role-based apps for admin, teacher, student, parent",
      "Fee reminders via SMS, WhatsApp, or in-app",
      "Live class integration (Zoom, Google Meet, or embedded)",
      "Question banks, timers, and auto-grading for tests",
      "Multi-campus and franchise reporting for chains",
    ],
    deliverables: [
      "School ERP or coaching management portal",
      "Student/parent mobile app",
      "Online test and LMS module",
      "Fee collection with payment gateway",
      "Report cards, certificates, and analytics",
    ],
    industries: ["K-12 schools", "Colleges", "Coaching institutes", "Online academies"],
    metrics: [
      { value: "LMS + ERP", label: "Combined platform" },
      { value: "Live class", label: "Integration ready" },
      { value: "Multi-campus", label: "Franchise support" },
    ],
    engagement: DEFAULT_ENGAGEMENT,
    faq: [
      { q: "Can you migrate our existing student data?", a: "Yes — Excel/CSV import with validation and duplicate checks before go-live." },
      { q: "Do you support recorded courses and subscriptions?", a: "Yes — LMS modules with payments, progress tracking, and certificates." },
    ],
  },
  "logistics-supply-chain": {
    overview:
      "Logistics companies live on speed and accuracy — booking, dispatch, hub sorting, rider tracking, COD collection, and warehouse operations cannot run on phone calls alone. We build courier management systems, fleet GPS dashboards, rider apps, and warehouse modules with partner API integrations.",
    problems: [
      "Dispatch done manually with no live fleet visibility",
      "COD collection mismatches at hub and field level",
      "Customers calling for status with no tracking link",
      "Warehouse pick-pack errors and missing GRN records",
      "Partner integrations via email instead of APIs",
    ],
    approach: [
      "Booking web portal and API for partners",
      "Rider app with GPS, POD capture, and COD entry",
      "Hub scan workflows and manifest generation",
      "Customer tracking page with SMS notifications",
      "COD reconciliation dashboards by rider, hub, and day",
    ],
    deliverables: [
      "Courier/fleet management admin panel",
      "Rider and driver mobile apps",
      "Customer tracking portal",
      "Warehouse GRN and dispatch module",
      "Partner booking API",
    ],
    industries: ["Courier companies", "3PL", "E-commerce logistics", "Cold chain"],
    metrics: [
      { value: "Live GPS", label: "Fleet tracking" },
      { value: "COD recon", label: "Built-in" },
      { value: "API", label: "Partner integrations" },
    ],
    engagement: DEFAULT_ENGAGEMENT,
    faq: [
      { q: "Can riders work offline in low-network areas?", a: "Yes — offline capture with sync when connectivity returns." },
      { q: "Do you integrate with Shiprocket or Delhivery?", a: "Yes — as aggregator or direct API depending on your model." },
    ],
  },
  "on-demand-apps": {
    overview:
      "On-demand businesses — food, home services, cab, rental — need real-time matching, provider apps, in-app payments, ratings, and surge pricing logic. We build the full triangle: customer app, provider app, and admin panel with dispatch, payouts, and support tooling.",
    problems: [
      "Matching delays causing customer drop-off",
      "Provider payout disputes and unclear commission rules",
      "No real-time order tracking or ETA",
      "Support tickets lost across phone and WhatsApp",
      "Peak-hour crashes without auto-scaling",
    ],
    approach: [
      "Real-time dispatch with Socket.io or Firebase",
      "Geo-fencing, radius search, and surge pricing hooks",
      "Wallet, UPI, and COD payment flows",
      "Provider KYC, availability, and earnings dashboard",
      "Promo codes, referrals, and push campaigns",
    ],
    deliverables: [
      "Customer mobile app (iOS + Android)",
      "Provider/partner mobile app",
      "Admin panel for orders, payouts, and support",
      "Payment settlement and commission reports",
      "Analytics for orders, retention, and unit economics",
    ],
    industries: ["Food delivery", "Home services", "Cab & bike taxi", "Equipment rental"],
    metrics: [
      { value: "3 apps", label: "Customer + provider + admin" },
      { value: "Real-time", label: "Dispatch engine" },
      { value: "12–20 wks", label: "Platform MVP" },
    ],
    engagement: DEFAULT_ENGAGEMENT,
    faq: [
      { q: "Uber clone — how custom can it be?", a: "We use proven booking patterns but customize categories, pricing, payouts, and branding for your market." },
      { q: "How do provider payouts work?", a: "Configurable commission slabs, wallet holds, and bank transfer batches with reconciliation reports." },
    ],
  },
  "ai-automation": {
    overview:
      "Teams lose hours on repetitive data entry, report generation, and first-line support. We automate workflows with rule engines, integrations, document processing, and AI assistants — connected to your ERP, CRM, helpdesk, and communication tools via APIs.",
    problems: [
      "Manual approval chains slowing operations",
      "Support teams answering the same questions daily",
      "Reports compiled manually from multiple systems",
      "Documents processed by hand (invoices, KYC, forms)",
      "Siloed tools with no automation between them",
    ],
    approach: [
      "Process audit to find high-ROI automation targets",
      "Workflow builders with approval chains and notifications",
      "Chatbots trained on your FAQs and docs",
      "OCR and extraction for invoices and forms",
      "Webhook and Zapier-style connectors to existing tools",
    ],
    deliverables: [
      "Automation workflow engine or integrations",
      "Internal or customer-facing chatbot",
      "Document processing pipeline",
      "Ops dashboard for monitoring jobs and errors",
      "Documentation and handover for your team",
    ],
    industries: ["Operations teams", "Customer support", "Finance back-office", "HR onboarding"],
    metrics: [
      { value: "API-first", label: "Integrations" },
      { value: "AI + rules", label: "Hybrid automation" },
      { value: "2–6 wks", label: "Pilot projects" },
    ],
    engagement: DEFAULT_ENGAGEMENT,
    faq: [
      { q: "Do you use ChatGPT or custom models?", a: "We use OpenAI and other APIs with your data policies, plus rule-based automation where AI is not needed." },
      { q: "Can automation connect to our existing ERP?", a: "Yes — via REST APIs, webhooks, scheduled jobs, or file drops." },
    ],
  },
  "cloud-devops": {
    overview:
      "Shipping code is only half the battle — production needs CI/CD, containers, monitoring, backups, and security hardening. We set up AWS, GCP, or Azure infrastructure, Docker/Kubernetes deployments, GitHub Actions pipelines, and observability so your team deploys confidently.",
    problems: [
      "Manual FTP deployments causing downtime",
      "No staging environment matching production",
      "Surprise cloud bills without cost visibility",
      "Downtime discovered by customers, not alerts",
      "Security patches applied ad hoc",
    ],
    approach: [
      "Infrastructure-as-code and documented runbooks",
      "CI/CD with automated tests on every merge",
      "Containerized deployments for consistency",
      "Monitoring, alerts, and log aggregation",
      "Backup, disaster recovery, and SSL automation",
    ],
    deliverables: [
      "Cloud architecture diagram and setup",
      "CI/CD pipeline configuration",
      "Docker/Kubernetes deployment manifests",
      "Monitoring dashboards and alert rules",
      "Security hardening checklist completion",
    ],
    industries: ["SaaS startups", "Fintech APIs", "High-traffic web apps", "Migration projects"],
    metrics: [
      { value: "AWS · GCP", label: "Cloud platforms" },
      { value: "CI/CD", label: "Automated deploys" },
      { value: "99.9%", label: "Uptime target" },
    ],
    engagement: [
      "Infrastructure setup project",
      "DevOps retainer (monthly)",
      "Migration & optimization audit",
    ],
    faq: [
      { q: "Can you manage our existing AWS account?", a: "Yes — with IAM least-privilege access and billing alerts under your account ownership." },
      { q: "Do you support Hostinger VPS deployment?", a: "Yes — Nginx, PM2, Docker, SSL, and backup scripts for VPS hosting." },
    ],
  },
  "ui-ux-design": {
    overview:
      "Great engineering with poor UX still fails in market. We run user research, map journeys, wireframe flows, and deliver high-fidelity Figma designs with design systems — so developers ship interfaces that look premium, convert better, and pass accessibility checks.",
    problems: [
      "Developers guessing UI from verbal descriptions",
      "Inconsistent screens across web and mobile",
      "Low conversion on signup or checkout flows",
      "Enterprise dashboards overwhelming users",
      "Rebrand needed but no design system",
    ],
    approach: [
      "Stakeholder interviews and competitor UX review",
      "Wireframes for approval before visual design",
      "Figma components with design tokens",
      "Mobile-first responsive layouts",
      "Developer handoff with specs and assets",
    ],
    deliverables: [
      "User journey maps and wireframes",
      "High-fidelity UI in Figma",
      "Design system or component library",
      "Interactive prototype for testing",
      "Export assets and dev handoff documentation",
    ],
    industries: ["Fintech apps", "SaaS dashboards", "E-commerce", "Enterprise portals"],
    metrics: [
      { value: "Figma", label: "Primary tool" },
      { value: "WCAG", label: "Accessibility aware" },
      { value: "2–4 wks", label: "Design sprint" },
    ],
    engagement: [
      "Fixed-scope design project",
      "Design + development bundle",
      "Ongoing design retainer",
    ],
    faq: [
      { q: "Design only or design + development?", a: "Both — many clients start with design sprint then continue with our dev team for seamless handoff." },
      { q: "Do you redesign existing products?", a: "Yes — UX audit, phased redesign, and component migration plan included." },
    ],
  },
  "api-integration": {
    overview:
      "Modern businesses run on connected systems — payments, SMS, KYC, ERP, logistics, and partner platforms must exchange data reliably. We design REST and GraphQL APIs, build middleware, implement webhooks with retry logic, and publish OpenAPI docs with SDK samples for your partners.",
    problems: [
      "Point-to-point integrations that break on every update",
      "No API documentation for partners",
      "Webhook failures causing settlement gaps",
      "Rate limit and auth issues under load",
      "Duplicate data across systems",
    ],
    approach: [
      "API design workshops with versioning strategy",
      "OpenAPI/Swagger documentation from day one",
      "Webhook queues with signing and retries",
      "OAuth 2.0, API keys, and JWT patterns",
      "Middleware for ERP, payment, and SMS connectors",
    ],
    deliverables: [
      "Production REST or GraphQL API",
      "Authentication and rate limiting layer",
      "Webhook delivery system",
      "OpenAPI docs and Postman collections",
      "Partner sandbox environment",
    ],
    industries: ["Payment aggregators", "SaaS platforms", "ERP vendors", "Marketplaces"],
    metrics: [
      { value: "REST · GraphQL", label: "API styles" },
      { value: "Webhooks", label: "Event delivery" },
      { value: "OpenAPI", label: "Documentation" },
    ],
    engagement: DEFAULT_ENGAGEMENT,
    faq: [
      { q: "Can you expose APIs for our existing software?", a: "Yes — we add API layers on top of legacy systems without full rewrites." },
      { q: "How do you handle API security?", a: "HTTPS, auth tokens, rate limits, input validation, and audit logs per endpoint." },
    ],
  },
  "legacy-modernization": {
    overview:
      "Legacy Excel, desktop apps, and monoliths still run critical operations — but they block growth, remote work, and integrations. We audit existing systems, plan phased migration, migrate data safely, and deliver modern web/mobile stacks without stopping day-to-day business.",
    problems: [
      "Business logic trapped in one person's Excel files",
      "Old desktop apps that won't run on new Windows versions",
      "Monolith code nobody wants to touch",
      "No API access for mobile or partner integrations",
      "Security vulnerabilities in unmaintained code",
    ],
    approach: [
      "Legacy audit and risk assessment",
      "Parallel run during phased migration",
      "Data migration scripts with validation reports",
      "API facade on old system while new modules go live",
      "Knowledge transfer from old vendors where possible",
    ],
    deliverables: [
      "Migration roadmap and architecture plan",
      "Modern web/mobile replacement modules",
      "Data migration with reconciliation report",
      "API layer on legacy where needed",
      "Decommission plan for old system",
    ],
    industries: ["Manufacturing", "Finance back-office", "Government contractors", "Retail chains"],
    metrics: [
      { value: "Phased", label: "Zero big-bang" },
      { value: "Data safe", label: "Validated migration" },
      { value: "API layer", label: "Bridge option" },
    ],
    engagement: DEFAULT_ENGAGEMENT,
    faq: [
      { q: "Can we migrate module by module?", a: "Yes — we recommend parallel run: new module live while legacy handles rest until cutover." },
      { q: "What if we lost the original source code?", a: "We reverse-engineer workflows from UI and data, then rebuild on modern stack." },
    ],
  },
  "dedicated-teams": {
    overview:
      "Hiring full-time engineers takes months — dedicated teams from Anilax work as your extended engineering department with daily standups, sprint planning, code review, and the stack you already use. Scale up for launches, scale down after release, without recruitment overhead.",
    problems: [
      "Open dev positions unfilled for months",
      "Agency handoffs with no long-term continuity",
      "Freelancers disappearing mid-project",
      "No QA or design capacity alongside dev",
      "Timezone and communication gaps with offshore teams",
    ],
    approach: [
      "Team composition matched to your stack (React, Node, mobile, QA)",
      "Shared Slack/Teams, Jira/Linear, and GitHub workflows",
      "Daily standups and bi-weekly sprint reviews",
      "Code review and documentation standards",
      "Flexible scale — add QA or DevOps as needed",
    ],
    deliverables: [
      "Dedicated developers assigned to your product",
      "Sprint boards and velocity reporting",
      "Merge-ready code in your repository",
      "Weekly status and demo calls",
      "Smooth transition to your in-house team when ready",
    ],
    industries: ["Product startups", "Agencies", "Enterprise IT", "ISVs scaling delivery"],
    metrics: [
      { value: "Days", label: "Onboarding speed" },
      { value: "Your stack", label: "We adapt" },
      { value: "Flexible", label: "Scale up/down" },
    ],
    engagement: [
      "Monthly dedicated team retainer",
      "Sprint-based augmentation",
      "Team + project management bundle",
    ],
    faq: [
      { q: "How is this different from outsourcing a fixed project?", a: "Dedicated teams work on your roadmap continuously — priorities shift sprint to sprint like in-house staff." },
      { q: "Who manages the developers?", a: "We provide a tech lead and PM; you set priorities and accept deliverables each sprint." },
    ],
  },
};

export const SERVICE_PROCESS_DETAILED = [
  { step: "01", title: "Discovery call", text: "30-minute call to understand goals, users, timeline, and budget. We ask about workflows, integrations, and compliance needs." },
  { step: "02", title: "Scope & proposal", text: "Written scope, architecture outline, milestone plan, and fixed or T&M estimate within 48–72 hours." },
  { step: "03", title: "Design & build", text: "Figma designs where needed, then agile sprints with weekly demos, staging access, and transparent progress." },
  { step: "04", title: "Launch & support", text: "Production deployment, training, documentation, and optional AMC or dedicated team for ongoing work." },
];
