import {
  COMPANY_LEGAL,
  COMPANY_OFFICE,
  COMPANY_MISSION,
  COMPANY_VALUES,
  COMPANY_STATS,
  COMPANY_PHONE,
  COMPANY_EMAIL,
} from "./company";
import { LEGAL_PAGES } from "./legalPages";

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
          `Email: ${COMPANY_EMAIL} — or use Connect With Us and mention “Careers” in your requirement.`,
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
          `Email: ${COMPANY_EMAIL}`,
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
            email: COMPANY_EMAIL,
            phone: COMPANY_PHONE,
          },
          {
            title: "API & developer support",
            text: "Sandbox keys, integration help, webhooks, and technical documentation.",
            email: COMPANY_EMAIL,
            phone: COMPANY_PHONE,
          },
          {
            title: "Software projects",
            text: "Custom apps, ERP, portals, and end-to-end product development.",
            email: COMPANY_EMAIL,
            phone: COMPANY_PHONE,
          },
          {
            title: "HR & careers",
            text: "Job applications and internship inquiries.",
            email: COMPANY_EMAIL,
            phone: COMPANY_PHONE,
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
          `If you discover a security vulnerability, report it responsibly to ${COMPANY_EMAIL} with steps to reproduce. Do not publicly disclose before we acknowledge and address the issue.`,
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

  ...LEGAL_PAGES,
};
