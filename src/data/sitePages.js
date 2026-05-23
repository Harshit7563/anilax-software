import {
  COMPANY_LEGAL,
  COMPANY_OFFICE,
  COMPANY_MISSION,
  COMPANY_VALUES,
  COMPANY_STATS,
  COMPANY_PHONE,
} from "./company";

export const SITE_PAGE_SLUGS = [
  "about",
  "careers",
  "press",
  "contact",
  "security",
  "privacy",
  "terms",
  "compliance",
  "grievance",
  "cookies",
];

export const SITE_PAGES = {
  about: {
    slug: "about",
    eyebrow: "About",
    title: "Who we are",
    subtitle: `${COMPANY_LEGAL.brand} builds fintech infrastructure, B2B banking solutions, APIs, and custom software for businesses across India.`,
    blocks: [
      {
        type: "prose",
        heading: "Our company",
        paragraphs: [
          `${COMPANY_LEGAL.name} (${COMPANY_LEGAL.brand}) was incorporated on ${COMPANY_LEGAL.incorporated} and is registered with ${COMPANY_LEGAL.roc}. We operate in ${COMPANY_LEGAL.industry.toLowerCase()}, with a focus on payments, AePS, wallets, developer APIs, and enterprise software.`,
          "Headquartered in Jaipur, Rajasthan, we partner with banks, business correspondents, startups, and enterprises to launch and scale digital financial products — from agent networks to consumer apps and API-first platforms.",
        ],
      },
      {
        type: "stats",
        items: COMPANY_STATS,
      },
      {
        type: "cards",
        heading: "What we deliver",
        items: [
          {
            title: "Fintech infrastructure",
            text: "Payments, wallets, ledgers, KYC, and settlement-ready architecture.",
          },
          {
            title: "B2B & AePS",
            text: "Business correspondent software, micro ATM, and retail agent networks.",
          },
          {
            title: "APIs",
            text: "REST APIs, webhooks, SMS, verification, BBPS, and custom integrations.",
          },
          {
            title: "Software development",
            text: "Web, mobile, ERP, and UI/UX — from MVP to enterprise scale.",
          },
        ],
      },
      {
        type: "prose",
        heading: "Mission & vision",
        paragraphs: [COMPANY_MISSION.mission, COMPANY_MISSION.vision],
      },
      {
        type: "cards",
        heading: "Our values",
        items: COMPANY_VALUES.map((v) => ({ title: v.title, text: v.text })),
      },
      {
        type: "facts",
        heading: "Corporate facts",
        rows: [
          { label: "Legal name", value: COMPANY_LEGAL.name },
          { label: "CIN", value: COMPANY_LEGAL.cin },
          { label: "GSTIN", value: COMPANY_LEGAL.gstin },
          { label: "Status", value: COMPANY_LEGAL.status },
          { label: "Incorporated", value: COMPANY_LEGAL.incorporated },
        ],
      },
    ],
    cta: {
      title: "Explore our products",
      text: "See how we help partners with B2B, APIs, and software.",
      link: { label: "View Company overview", to: "/company" },
    },
  },

  careers: {
    slug: "careers",
    eyebrow: "Careers",
    title: "Build the future of fintech with us",
    subtitle:
      "Join engineers, designers, and fintech specialists in Jaipur and remote. We hire builders who care about shipping secure, scalable products.",
    blocks: [
      {
        type: "prose",
        heading: "Life at Anilax",
        paragraphs: [
          "We are a product-focused team working on payments, APIs, and software used by real businesses and agents every day. You will work across the stack — from React and Node.js to cloud deployment and partner integrations.",
          "We value ownership, clear communication, and learning. Whether you are early in your career or a senior specialist, we look for people who take responsibility end to end.",
        ],
      },
      {
        type: "list",
        heading: "What we offer",
        items: [
          "Competitive salary and performance incentives",
          "Flexible work — Jaipur office + remote-friendly roles",
          "Exposure to fintech, banking partners, and high-scale APIs",
          "Learning budget for courses, conferences, and certifications",
          "Modern tooling — React, Node.js, cloud, CI/CD",
        ],
      },
      {
        type: "jobs",
        heading: "Open roles",
        jobs: [
          {
            title: "Senior Full-Stack Engineer",
            location: "Jaipur / Remote",
            type: "Full-time",
            desc: "React, Node.js, PostgreSQL, payment integrations, and API design.",
          },
          {
            title: "Fintech Integration Engineer",
            location: "Jaipur",
            type: "Full-time",
            desc: "AePS, UPI, banking APIs, webhooks, reconciliation, and partner onboarding.",
          },
          {
            title: "UI/UX Designer",
            location: "Jaipur / Remote",
            type: "Full-time",
            desc: "Product design for dashboards, mobile apps, and developer documentation.",
          },
          {
            title: "Business Development — B2B",
            location: "Pan India",
            type: "Full-time",
            desc: "BC/BF networks, distributors, and enterprise fintech partnerships.",
          },
          {
            title: "QA / Automation Engineer",
            location: "Remote",
            type: "Full-time",
            desc: "API testing, payment flows, regression suites, and release quality.",
          },
        ],
      },
      {
        type: "prose",
        heading: "How to apply",
        paragraphs: [
          "Share your resume, GitHub or portfolio, and the role you are interested in. Our HR team reviews applications on a rolling basis.",
          "Email: careers@anilaxsoftware.com — or use Connect With Us and mention “Careers” in your requirement.",
        ],
      },
    ],
    cta: {
      title: "Ready to apply?",
      text: "Tell us about your experience and the role you want.",
      connect: true,
    },
  },

  press: {
    slug: "press",
    eyebrow: "Press",
    title: "News & media",
    subtitle:
      "Resources for journalists, analysts, and partners covering Anilax Software and the Indian fintech ecosystem.",
    blocks: [
      {
        type: "prose",
        heading: "Media inquiries",
        paragraphs: [
          "For press releases, interviews, logo usage, and fact-checking, contact our communications team. We respond to verified media requests within 2 business days.",
          "Email: press@anilaxsoftware.com",
        ],
      },
      {
        type: "facts",
        heading: "Company at a glance",
        rows: [
          { label: "Brand", value: COMPANY_LEGAL.brand },
          { label: "Legal entity", value: COMPANY_LEGAL.name },
          { label: "Founded", value: "2021" },
          { label: "Headquarters", value: "Jaipur, Rajasthan, India" },
          { label: "Focus", value: "Fintech, B2B AePS, APIs, custom software" },
          { label: "CIN", value: COMPANY_LEGAL.cin },
        ],
      },
      {
        type: "list",
        heading: "Press kit includes",
        items: [
          "Company description (short & long)",
          "Leadership bios (on request)",
          "Brand logos — PNG/SVG (on request)",
          "Product screenshots for AePS, API, and software lines",
          "Approved boilerplate for articles and reports",
        ],
      },
      {
        type: "cards",
        heading: "Recent highlights",
        items: [
          {
            title: "Fintech infrastructure expansion",
            text: "Growing API catalog across B2B, B2C, payments, SMS, verification, and BBPS.",
          },
          {
            title: "B2B agent network growth",
            text: "Supporting business correspondents and retail partners across multiple states.",
          },
          {
            title: "Software delivery",
            text: "120+ products delivered across education, health, retail, and enterprise verticals.",
          },
        ],
      },
      {
        type: "prose",
        heading: "Disclaimer",
        paragraphs: [
          "Forward-looking statements on this site describe intent and roadmap items; actual product availability may vary. Banking and regulated activities are conducted through licensed partners where applicable.",
        ],
      },
    ],
    cta: {
      title: "Request press materials",
      text: "We will share logos, facts, and spokesperson availability.",
      connect: true,
    },
  },

  contact: {
    slug: "contact",
    eyebrow: "Contact",
    title: "Get in touch",
    subtitle:
      "Partnerships, product demos, API access, software projects, or support — reach the right team.",
    blocks: [
      {
        type: "contact",
        channels: [
          {
            title: "Sales & partnerships",
            text: "B2B AePS, enterprise APIs, white-label, and distributor onboarding.",
            email: "sales@anilaxsoftware.com",
            phone: COMPANY_PHONE,
          },
          {
            title: "API & developer support",
            text: "Sandbox keys, integration help, webhooks, and technical documentation.",
            email: "api@anilaxsoftware.com",
          },
          {
            title: "Software projects",
            text: "Custom apps, ERP, portals, and end-to-end product development.",
            email: "projects@anilaxsoftware.com",
          },
          {
            title: "HR & careers",
            text: "Job applications and internship inquiries.",
            email: "careers@anilaxsoftware.com",
          },
        ],
        office: COMPANY_OFFICE,
        hours: "Monday – Saturday, 10:00 AM – 7:00 PM IST (Jaipur office)",
      },
      {
        type: "prose",
        heading: "Visit us",
        paragraphs: [
          "Schedule a visit to our Jaipur office for in-person demos and partnership discussions. Use Google Maps for directions to Mall of Jaipur, Vaishali Nagar.",
        ],
      },
    ],
    cta: {
      title: "Send a detailed request",
      text: "Use our form for fintech, software, or API requirements — we respond within 1–2 business days.",
      connect: true,
    },
  },

  security: {
    slug: "security",
    eyebrow: "Security",
    title: "Security at Anilax",
    subtitle:
      "We design for trust — protecting partner data, payment flows, and platform availability across our fintech and software products.",
    blocks: [
      {
        type: "prose",
        heading: "Our approach",
        paragraphs: [
          "Security is embedded in architecture, development, and operations — not added as an afterthought. We follow industry practices for access control, encryption, monitoring, and secure SDLC.",
        ],
      },
      {
        type: "cards",
        heading: "Security program",
        items: [
          {
            title: "Encryption",
            text: "TLS 1.2+ in transit; sensitive data encrypted at rest where applicable. API keys and secrets are never stored in client-side code.",
          },
          {
            title: "Access control",
            text: "Role-based access, least-privilege principles, MFA for internal systems, and audit logs for administrative actions.",
          },
          {
            title: "Network & infrastructure",
            text: "Segmented environments, firewall rules, DDoS mitigation partners, and separate sandbox vs production stacks.",
          },
          {
            title: "Application security",
            text: "Code review, dependency scanning, input validation, and rate limiting on public APIs.",
          },
          {
            title: "Payments & PCI awareness",
            text: "Tokenization patterns, no storage of full card PAN/CVV on our apps where card flows exist; partner-certified gateways where required.",
          },
          {
            title: "Monitoring & response",
            text: "Logging, alerting, incident playbooks, and post-incident reviews for production incidents.",
          },
        ],
      },
      {
        type: "list",
        heading: "Partner responsibilities",
        items: [
          "Rotate API keys periodically and store secrets server-side only",
          "Use HTTPS webhook endpoints with signature verification",
          "Report suspicious activity immediately",
          "Complete KYC/onboarding as required for regulated products",
        ],
      },
      {
        type: "prose",
        heading: "Responsible disclosure",
        paragraphs: [
          "If you discover a security vulnerability, report it responsibly to security@anilaxsoftware.com with steps to reproduce. Do not publicly disclose before we acknowledge and address the issue.",
          "We appreciate researchers who help keep our platform safe.",
        ],
      },
    ],
    cta: {
      title: "Security questions?",
      text: "Enterprise partners can request our security overview document.",
      connect: true,
    },
  },

  privacy: {
    slug: "privacy",
    eyebrow: "Legal",
    title: "Privacy Policy",
    subtitle: `Last updated: May 2026 · ${COMPANY_LEGAL.name}`,
    blocks: [
      {
        type: "legal",
        sections: [
          {
            title: "1. Introduction",
            body: `${COMPANY_LEGAL.name} ("Anilax", "we", "us") respects your privacy. This policy explains how we collect, use, disclose, and protect personal information when you use our websites, APIs, software products, and support channels.`,
          },
          {
            title: "2. Information we collect",
            body: "We may collect: (a) identity and contact data — name, email, phone, company; (b) account and KYC data for regulated products; (c) technical data — IP address, device, logs, API usage; (d) transaction and business data necessary to deliver fintech services; (e) communications you send via forms, email, or support.",
          },
          {
            title: "3. How we use information",
            body: "We use data to provide and improve services, onboard partners, process payments and APIs, prevent fraud, comply with law, send service notices, respond to inquiries, and analyze product usage in aggregated form.",
          },
          {
            title: "4. Legal basis & consent",
            body: "Processing is based on contract performance, legitimate interests, legal obligations (including RBI/AML/KYC where applicable), and consent where required — e.g. marketing communications.",
          },
          {
            title: "5. Sharing with third parties",
            body: "We may share data with: banking and payment partners, cloud hosting providers, SMS/KYC/verification vendors, auditors, and authorities when required by law. We do not sell personal data.",
          },
          {
            title: "6. Data retention",
            body: "We retain data as long as needed for services, legal/regulatory requirements, and dispute resolution. Retention periods vary by product and regulation.",
          },
          {
            title: "7. Security",
            body: "We implement technical and organizational measures described in our Security page. No method of transmission is 100% secure; we encourage partners to follow security best practices.",
          },
          {
            title: "8. Your rights",
            body: "Subject to applicable law, you may request access, correction, deletion, or restriction of processing, and withdraw consent where processing is consent-based. Contact privacy@anilaxsoftware.com.",
          },
          {
            title: "9. Children",
            body: "Our services are not directed at children under 18. We do not knowingly collect data from minors.",
          },
          {
            title: "10. International transfers",
            body: "Data is primarily processed in India. If transferred abroad, we ensure appropriate safeguards per applicable law.",
          },
          {
            title: "11. Changes",
            body: "We may update this policy. Material changes will be posted on this page with an updated date.",
          },
          {
            title: "12. Contact",
            body: `Data protection queries: privacy@anilaxsoftware.com · ${COMPANY_LEGAL.name}, ${COMPANY_OFFICE.lines.join(", ")}.`,
          },
        ],
      },
    ],
  },

  terms: {
    slug: "terms",
    eyebrow: "Legal",
    title: "Terms of Service",
    subtitle: `Last updated: May 2026 · ${COMPANY_LEGAL.name}`,
    blocks: [
      {
        type: "legal",
        sections: [
          {
            title: "1. Agreement",
            body: `By accessing anilaxsoftware.com, our APIs, dashboards, or contracted software, you agree to these Terms. If you use services on behalf of an organization, you represent authority to bind that entity.`,
          },
          {
            title: "2. Services",
            body: "We provide fintech technology, APIs, B2B software, and custom development. Regulated financial services may be delivered through licensed partners. Service scope is defined in order forms, SLAs, or partner agreements.",
          },
          {
            title: "3. Accounts & API keys",
            body: "You are responsible for safeguarding credentials. Unauthorized use must be reported immediately. We may suspend keys for abuse, fraud risk, or non-payment.",
          },
          {
            title: "4. Acceptable use",
            body: "You must not: violate law or RBI/regulatory guidelines; engage in fraud or money laundering; attack our systems; resell APIs without authorization; scrape excessively; or use services for prohibited categories (illegal goods, unlicensed lending, etc.).",
          },
          {
            title: "5. Fees & payment",
            body: "Commercial terms, setup fees, transaction charges, and billing cycles are as per your agreement. Taxes (GST) apply as per Indian law.",
          },
          {
            title: "6. Intellectual property",
            body: "We retain rights to our platform, code, brands, and documentation. You receive a limited license to use services per agreement. Your data and brand remain yours.",
          },
          {
            title: "7. Confidentiality",
            body: "Non-public technical and business information exchanged during engagements is confidential, except where disclosure is required by law.",
          },
          {
            title: "8. Disclaimers",
            body: 'Services are provided "as is" to the extent permitted by law. We do not guarantee uninterrupted access. Uptime targets, if any, are in SLAs.',
          },
          {
            title: "9. Limitation of liability",
            body: "To the maximum extent permitted by law, our liability is limited to fees paid in the 12 months preceding the claim. We are not liable for indirect, consequential, or partner-bank delays.",
          },
          {
            title: "10. Indemnity",
            body: "You indemnify us against claims arising from your misuse, violation of law, or breach of these Terms.",
          },
          {
            title: "11. Termination",
            body: "Either party may terminate per contract. We may suspend immediately for security or legal risk. Upon termination, access ends; data handling follows Privacy Policy and agreements.",
          },
          {
            title: "12. Governing law",
            body: "These Terms are governed by the laws of India. Courts at Jaipur, Rajasthan shall have exclusive jurisdiction, subject to mandatory arbitration clauses in specific contracts.",
          },
          {
            title: "13. Contact",
            body: "legal@anilaxsoftware.com",
          },
        ],
      },
    ],
  },

  compliance: {
    slug: "compliance",
    eyebrow: "Legal",
    title: "Compliance",
    subtitle:
      "How Anilax approaches regulatory requirements, partner banking, and risk management in Indian fintech.",
    blocks: [
      {
        type: "prose",
        heading: "Regulatory posture",
        paragraphs: [
          `${COMPANY_LEGAL.brand} is a technology company. Where products touch regulated activities — payments, AePS, lending, or insurance — we work with licensed banks, PPI issuers, NBFCs, or other authorized entities as required.`,
          "Partners must complete onboarding, KYC, and agreements before production access.",
        ],
      },
      {
        type: "cards",
        heading: "Compliance areas",
        items: [
          {
            title: "KYC & identity",
            text: "Aadhaar, PAN, bank verification, and liveness flows per RBI and partner guidelines.",
          },
          {
            title: "AML & fraud monitoring",
            text: "Transaction monitoring hooks, velocity checks, and partner reporting obligations.",
          },
          {
            title: "AePS & BC guidelines",
            text: "Business correspondent operations aligned with NPCI and sponsor bank requirements.",
          },
          {
            title: "Data localization & privacy",
            text: "Processing per Indian law and our Privacy Policy; DPA available for enterprise clients.",
          },
          {
            title: "GST & invoicing",
            text: `GSTIN ${COMPANY_LEGAL.gstin} — compliant billing for software and technology services.`,
          },
          {
            title: "Audit & records",
            text: "Books, logs, and reconciliation support for partner and statutory audits.",
          },
        ],
      },
      {
        type: "list",
        heading: "Partner obligations",
        items: [
          "Maintain valid licenses for your business model",
          "Do not onboard prohibited merchants or use cases",
          "Submit required reports to sponsor banks/regulators",
          "Cooperate with compliance reviews and site visits when applicable",
        ],
      },
      {
        type: "prose",
        heading: "Grievance & escalation",
        paragraphs: [
          "Compliance queries: compliance@anilaxsoftware.com",
          "For customer complaints on partner-led products, escalation paths are defined in your partner agreement and sponsor bank policy.",
        ],
      },
    ],
    cta: {
      title: "Compliance documentation",
      text: "Enterprise clients can request compliance packs during onboarding.",
      connect: true,
    },
  },

  grievance: {
    slug: "grievance",
    eyebrow: "Legal",
    title: "Grievance & Redressal Policy",
    subtitle: `Last updated: May 2026 · ${COMPANY_LEGAL.name}`,
    blocks: [
      {
        type: "prose",
        heading: "Purpose",
        paragraphs: [
          `${COMPANY_LEGAL.name} ("${COMPANY_LEGAL.brand}") is committed to fair, transparent handling of complaints and grievances from customers, partners, agents, and other stakeholders using our websites, software, APIs, and supported fintech services.`,
          "This policy outlines how you may lodge a grievance, how we acknowledge and resolve it, and escalation options if you are not satisfied with our response.",
        ],
      },
      {
        type: "legal",
        sections: [
          {
            title: "1. Scope",
            body: "This policy applies to grievances relating to Anilax-owned technology services, onboarding, billing for our services, platform access, data/privacy concerns, and support quality. For regulated payment or banking transactions executed through sponsor banks or licensed partners, the partner’s grievance mechanism may also apply in parallel.",
          },
          {
            title: "2. Who may raise a grievance",
            body: "End users (where we have a direct relationship), business correspondents, merchants, API partners, software clients, and visitors to our digital properties may submit a grievance in writing.",
          },
          {
            title: "3. How to lodge a grievance",
            body: `Email: grievance@anilaxsoftware.com · Phone: ${COMPANY_PHONE} (Mon–Sat, 10:00 AM – 7:00 PM IST) · Post: Grievance Officer, ${COMPANY_LEGAL.name}, ${COMPANY_OFFICE.lines.join(", ")}. Please include your name, contact details, partner/merchant ID (if any), transaction reference, date of incident, and a clear description of the issue.`,
          },
          {
            title: "4. Acknowledgement",
            body: "We aim to send an acknowledgement within 2 business days of receiving a complete grievance, with a reference number for tracking.",
          },
          {
            title: "5. Resolution timeline",
            body: "We strive to resolve grievances within 15 business days. Complex cases involving third-party banks, NPCI, or reconciliation may take longer; we will keep you informed of status and expected timelines.",
          },
          {
            title: "6. Investigation process",
            body: "Grievances are reviewed by our Grievance Officer and relevant teams (operations, compliance, technology). We may request additional documents or logs. Findings and remedial actions are documented internally.",
          },
          {
            title: "7. Escalation matrix",
            body: "Level 1 — Customer Support / Partner Success (initial intake). Level 2 — Grievance Officer (unresolved after 15 business days or serious complaints). Level 3 — Management escalation committee (final internal review).",
          },
          {
            title: "8. Grievance Officer",
            body: `Designated Grievance Officer for ${COMPANY_LEGAL.name}: Grievance Officer, Jaipur Office. Email: grievance@anilaxsoftware.com. The officer is responsible for oversight, reporting, and coordination with compliance.`,
          },
          {
            title: "9. Regulatory & ombudsman routes",
            body: "If your complaint relates to banking or payment services provided through a regulated entity, you may also approach the concerned bank’s grievance cell or the RBI Integrated Ombudsman Scheme (as applicable) after exhausting the provider’s internal process. Details are available on the RBI website.",
          },
          {
            title: "10. Records",
            body: "We maintain records of grievances, responses, and resolution outcomes for audit and regulatory purposes as required by law and partner agreements.",
          },
          {
            title: "11. Policy review",
            body: "This policy is reviewed periodically and updated on this page. Material changes will be reflected with an updated “Last updated” date.",
          },
        ],
      },
      {
        type: "facts",
        heading: "Quick reference",
        rows: [
          { label: "Grievance email", value: "grievance@anilaxsoftware.com" },
          { label: "Phone", value: COMPANY_PHONE },
          { label: "Target acknowledgement", value: "2 business days" },
          { label: "Target resolution", value: "15 business days" },
          { label: "Entity", value: COMPANY_LEGAL.name },
          { label: "CIN", value: COMPANY_LEGAL.cin },
        ],
      },
    ],
    cta: {
      title: "Need to file a grievance?",
      text: "Use email with your reference details, or contact us via the form.",
      connect: true,
    },
  },

  cookies: {
    slug: "cookies",
    eyebrow: "Legal",
    title: "Cookie Policy",
    subtitle: `How ${COMPANY_LEGAL.brand} uses cookies and similar technologies on our website.`,
    blocks: [
      {
        type: "prose",
        heading: "What are cookies?",
        paragraphs: [
          "Cookies are small text files stored on your device when you visit a website. They help remember preferences, keep sessions secure, and understand how visitors use our site.",
        ],
      },
      {
        type: "cards",
        heading: "Types we use",
        items: [
          {
            title: "Strictly necessary",
            text: "Required for site function, security, and load balancing. Cannot be disabled without breaking core features.",
          },
          {
            title: "Functional",
            text: "Remember choices such as theme or form progress on marketing pages.",
          },
          {
            title: "Analytics",
            text: "Aggregated usage statistics to improve content and performance (e.g. page views, referrers).",
          },
          {
            title: "Marketing (if enabled)",
            text: "Measure campaign effectiveness. We minimize third-party marketing cookies unless explicitly used.",
          },
        ],
      },
      {
        type: "list",
        heading: "Managing cookies",
        items: [
          "Use your browser settings to block or delete cookies",
          "Note: blocking necessary cookies may affect site experience",
          "For API/dashboard products, session cookies may be required for login",
        ],
      },
      {
        type: "prose",
        heading: "Updates & contact",
        paragraphs: [
          "We may update this policy when our site or tools change. Questions: privacy@anilaxsoftware.com.",
          "See also our Privacy Policy for how personal data is handled.",
        ],
      },
    ],
  },
};
