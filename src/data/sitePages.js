import { brand } from "./anilax.js";

const updated = "1 October 2026";
const entity = brand.legal;
const contact = `${brand.email} · ${brand.phone}`;

export const policies = {
  "/privacy": {
    eyebrow: "LEGAL",
    title: "Privacy Policy",
    sub: `Last updated ${updated}. How Anilax Software collects, uses, and protects personal data.`,
    sections: [
      {
        h: "1. Who we are",
        p: [
          `${entity} (“Anilax”, “we”, “us”) is a software and fintech technology company headquartered in ${brand.hq}.`,
          `This Privacy Policy explains how we process personal data when you visit anilaxsoftware.com, contact us, use our products, APIs, or partner portals.`,
          `For privacy questions: ${contact}. CIN ${brand.cin} · GSTIN ${brand.gstin}.`,
        ],
      },
      {
        h: "2. Data we collect",
        p: [
          "Identity & contact data: name, email, phone, company, role.",
          "Project / enquiry data: messages you send via forms, email, or calls.",
          "Account & developer data: login identifiers, API key metadata, sandbox usage (not your full secret keys in plaintext logs).",
          "Technical data: IP address, device/browser type, pages viewed, approximate location derived from IP, cookies/similar technologies.",
          "Transaction / ops data (for customers): data needed to operate contracted software or payment integrations, as defined in your agreement.",
        ],
      },
      {
        h: "3. How we use data",
        p: [
          "Respond to enquiries and provide demos, quotes, and support.",
          "Deliver contracted software, APIs, portals, and dedicated team services.",
          "Improve site performance, security, and product quality.",
          "Send service communications; marketing only with consent or as allowed by law.",
          "Meet legal, tax, accounting, and compliance obligations.",
        ],
      },
      {
        h: "4. Legal bases",
        p: [
          "Contract performance and pre-contract steps (enquiries, delivery).",
          "Legitimate interests (security, product improvement, B2B relationship management) balanced against your rights.",
          "Consent where required (certain cookies/marketing).",
          "Legal obligation where applicable.",
        ],
      },
      {
        h: "5. Sharing",
        p: [
          "We do not sell personal data.",
          "We may share data with: cloud/hosting providers, analytics/email tools, payment or banking partners (only as needed for your project), professional advisors, and authorities when legally required.",
          "Processors are bound by confidentiality and data-protection terms.",
        ],
      },
      {
        h: "6. International transfers",
        p: [
          "Primary operations are in India. If tools or subprocessors store data outside India, we use appropriate contractual and security safeguards.",
        ],
      },
      {
        h: "7. Retention",
        p: [
          "Enquiry data: typically up to 24 months unless a commercial relationship continues.",
          "Customer/project data: for the contract term plus a reasonable period for legal and dispute purposes.",
          "Security logs: retained for shorter operational windows unless investigation requires longer.",
        ],
      },
      {
        h: "8. Your rights",
        p: [
          "Depending on applicable law, you may request access, correction, deletion, restriction, or a copy of certain data.",
          `Email ${brand.email} with “Privacy request” in the subject. We may verify identity before acting.`,
          "You may also raise concerns via our Grievance page.",
        ],
      },
      {
        h: "9. Security",
        p: [
          "We use access controls, encryption in transit, least-privilege practices, and monitoring appropriate to the systems we operate.",
          "No method of transmission or storage is 100% secure; report suspected incidents to us immediately.",
        ],
      },
      {
        h: "10. Children",
        p: ["Our services are directed to businesses and professionals, not children under 18."],
      },
      {
        h: "11. Changes",
        p: [`We may update this policy. The “Last updated” date will change. Material updates may be highlighted on this site.`],
      },
    ],
  },

  "/terms": {
    eyebrow: "LEGAL",
    title: "Terms of Use",
    sub: `Last updated ${updated}. Terms governing use of Anilax Software websites, content, and online services.`,
    sections: [
      {
        h: "1. Agreement",
        p: [
          `By accessing anilaxsoftware.com or related online properties operated by ${entity}, you agree to these Terms of Use.`,
          "Separate master service agreements, statements of work, NDAs, or API terms apply to paid projects and production integrations.",
        ],
      },
      {
        h: "2. Services described",
        p: [
          "Website content describes software development, fintech technology, APIs, and related services. Descriptions are informational and not a binding offer until confirmed in writing.",
          "AePS, UPI, and similar payment solutions require authorized banking/partner arrangements. Anilax provides technology services; we are not a bank or RBI-regulated payment system operator unless expressly stated in a signed agreement.",
        ],
      },
      {
        h: "3. Accounts & API access",
        p: [
          "You are responsible for credentials issued to you and for activity under your account.",
          "Sandbox keys are for non-production testing. Production use requires approval and compliance with integration guidelines.",
          "Do not attempt unauthorized access, reverse engineering beyond lawful interoperability, or abuse of rate limits.",
        ],
      },
      {
        h: "4. Acceptable use",
        p: [
          "No unlawful, fraudulent, infringing, or harmful activity.",
          "No malware, scraping that degrades service, or interference with platform integrity.",
          "No misrepresentation of affiliation with Anilax, NPCI, banks, or partners.",
        ],
      },
      {
        h: "5. Intellectual property",
        p: [
          "Site design, branding, and content are owned by Anilax or licensors.",
          "Customer deliverables and IP ownership are governed by the project contract — typically full code ownership for custom software unless otherwise agreed.",
        ],
      },
      {
        h: "6. Disclaimers",
        p: [
          "Website content is provided “as is” without warranties of completeness for every use case.",
          "We do not warrant uninterrupted availability of marketing pages or sandbox environments.",
        ],
      },
      {
        h: "7. Liability",
        p: [
          "To the fullest extent permitted by law, Anilax is not liable for indirect, incidental, or consequential damages arising from website use.",
          "Liability for paid services is limited as set out in the applicable commercial agreement.",
        ],
      },
      {
        h: "8. Governing law",
        p: [
          `These Terms are governed by the laws of India. Courts at Jaipur, Rajasthan shall have exclusive jurisdiction, subject to mandatory law.`,
        ],
      },
      {
        h: "9. Contact",
        p: [`Questions: ${contact}.`],
      },
    ],
  },

  "/cookies": {
    eyebrow: "LEGAL",
    title: "Cookie Policy",
    sub: `Last updated ${updated}. How we use cookies and similar technologies on Anilax Software websites.`,
    sections: [
      {
        h: "1. What are cookies?",
        p: [
          "Cookies are small text files stored on your device. Similar technologies include local storage and pixels used for functionality, analytics, and security.",
        ],
      },
      {
        h: "2. Types we use",
        p: [
          "Essential: required for navigation, security, load balancing, and form protection.",
          "Preferences: remember choices such as dismissed notices where enabled.",
          "Analytics: help us understand aggregate traffic and improve pages (may be first- or third-party).",
          "Marketing: only if enabled for campaigns; not required for core browsing.",
        ],
      },
      {
        h: "3. Managing cookies",
        p: [
          "You can control cookies via browser settings. Blocking essential cookies may break parts of the site.",
          "Where a consent banner is shown, non-essential cookies load according to your choice.",
        ],
      },
      {
        h: "4. Updates",
        p: [`We may revise this Cookie Policy. See the date above. Contact: ${contact}.`],
      },
    ],
  },

  "/security": {
    eyebrow: "LEGAL",
    title: "Security at Anilax",
    sub: `Last updated ${updated}. How we approach application, infrastructure, and operational security.`,
    sections: [
      {
        h: "1. Principles",
        p: [
          "Least privilege access, defense in depth, and secure defaults for customer-facing systems.",
          "Security is part of delivery — not a post-launch checklist only.",
        ],
      },
      {
        h: "2. Application security",
        p: [
          "Secure coding practices, dependency awareness, and review on critical paths.",
          "Authentication, authorization (RBAC), input validation, and encrypted transport (TLS).",
          "Secrets managed outside source control; environment separation for sandbox vs production.",
        ],
      },
      {
        h: "3. Infrastructure",
        p: [
          "Hardened cloud configurations, network controls, backups, and monitoring appropriate to the workload.",
          "Access to production limited to authorized personnel with accountability.",
        ],
      },
      {
        h: "4. Fintech & integrations",
        p: [
          "Payment and AePS/UPI-related builds follow partner bank / scheme guidelines provided under contract.",
          "Audit trails and reconciliation support where required by the product scope.",
        ],
      },
      {
        h: "5. Reporting issues",
        p: [
          `If you believe you found a vulnerability, email ${brand.email} with “Security” in the subject. Please avoid public disclosure until we can assess and remediate.`,
          "Do not access data that is not yours or disrupt production systems while testing.",
        ],
      },
      {
        h: "6. Customer responsibilities",
        p: [
          "Protect API keys, rotate credentials, and follow integration guides.",
          "Apply your own organizational access policies to admin portals we deliver.",
        ],
      },
    ],
  },

  "/compliance": {
    eyebrow: "LEGAL",
    title: "Compliance Framework",
    sub: `Last updated ${updated}. How Anilax Software approaches regulatory and contractual compliance.`,
    sections: [
      {
        h: "1. Company details",
        p: [
          `${entity}`,
          `CIN: ${brand.cin}`,
          `GSTIN: ${brand.gstin}`,
          `Registered / HQ: ${brand.hq}`,
          `Incorporated: ${brand.founded}`,
        ],
      },
      {
        h: "2. Scope",
        p: [
          "Anilax builds software and fintech technology for businesses. Compliance obligations depend on the product, industry, and partner arrangements in each engagement.",
          "We support customers with technical controls (access, logs, encryption, data isolation) aligned to agreed requirements.",
        ],
      },
      {
        h: "3. Payments technology",
        p: [
          "AePS, UPI, and similar rails require licensed banks / payment partners. Anilax provides software and integration services under those partnerships.",
          "NPCI® and AePS® are trademarks of National Payments Corporation of India. Use of scheme marks follows partner rules.",
          "Customers remain responsible for licenses, KYC policies, and operational compliance applicable to their business.",
        ],
      },
      {
        h: "4. Data protection",
        p: [
          "We process personal data as described in our Privacy Policy and customer agreements.",
          "NDAs and confidentiality terms are available for projects on request.",
        ],
      },
      {
        h: "5. Records & tax",
        p: [
          "Invoices and GST documentation are issued as per Indian tax rules for taxable supplies.",
        ],
      },
      {
        h: "6. Contact",
        p: [`Compliance enquiries: ${contact}.`],
      },
    ],
  },

  "/grievance": {
    eyebrow: "LEGAL",
    title: "Grievance & Redressal Policy",
    sub: `Last updated ${updated}. How to raise concerns and how we handle them.`,
    sections: [
      {
        h: "1. Purpose",
        p: [
          "This policy explains how customers, partners, website users, and other stakeholders can raise grievances related to Anilax Software services, website, or data practices.",
        ],
      },
      {
        h: "2. How to raise a grievance",
        p: [
          `Email: ${brand.email}`,
          `Phone: ${brand.phone}`,
          "Subject line: “Grievance – <short description>”",
          "Include: your name, organization, contact details, order/project reference (if any), and a clear description of the issue with supporting documents where relevant.",
        ],
      },
      {
        h: "3. Acknowledgement & timelines",
        p: [
          "We aim to acknowledge grievances within 2 business days.",
          "We aim to provide a resolution or reasoned update within 15 business days for standard matters. Complex technical or partner-dependent issues may take longer; we will keep you informed.",
        ],
      },
      {
        h: "4. Escalation",
        p: [
          "If you are unsatisfied with the response, reply to the same thread requesting escalation to management.",
          "For privacy-related grievances, mark the email “Privacy / Grievance”.",
        ],
      },
      {
        h: "5. Good faith",
        p: [
          "We handle grievances in good faith. Abusive, fraudulent, or repetitive submissions may be declined.",
        ],
      },
      {
        h: "6. Office",
        p: [`${entity}, ${brand.hq}.`],
      },
    ],
  },
};

/** Structured marketing/content pages for footer links */
export const contentPages = {
  "/software": {
    eyebrow: "SOFTWARE",
    title: "Software Catalog",
    sub: "ERP, CRM, HMS, school ERP, e-commerce, logistics, fintech, on-demand apps — ready-to-customize product lines.",
    cta: { primary: { href: "/contact", label: "Request a catalog demo" }, secondary: { href: "/services", label: "View services" } },
    blocks: [
      {
        type: "cards",
        title: "Product lines",
        items: [
          { title: "Payment Solutions", sub: "UPI, gateways, wallets, AePS", href: "/b2b" },
          { title: "Business Systems", sub: "ERP, CRM, HRMS, billing", href: "/services/erp-crm" },
          { title: "Industry Platforms", sub: "Health, education, logistics, retail", href: "/industries" },
          { title: "Consumer Apps", sub: "On-demand, D2C, marketplaces", href: "/services/ecommerce" },
          { title: "Developer APIs", sub: "Payments, SMS, verification", href: "/docs" },
          { title: "Custom Builds", sub: "Unique workflows from scratch", href: "/services/custom-software" },
        ],
      },
      {
        type: "text",
        title: "How catalog products work",
        paras: [
          "Each product line is a proven foundation we customize to your brand, workflows, and integrations — faster than greenfield, without forcing rigid templates.",
          "You get source ownership, staging environments, and a roadmap for phase-2 features.",
        ],
      },
    ],
  },

  "/b2b": {
    eyebrow: "B2B · AEPS",
    title: "Grow your network with AePS software & API",
    sub: "Cash withdrawal, deposit, balance enquiry, mini statement, and micro ATM under your brand — with real-time settlement views.",
    cta: { primary: { href: "/contact", label: "Get a quote" }, secondary: { href: "/docs", label: "API docs" } },
    blocks: [
      {
        type: "split",
        title: "Built for distributors & BC networks",
        left: [
          "Agent / retailer onboarding workflows",
          "Live dashboards for volume and settlements",
          "Commission structures and reports",
          "White-label portal and receipts",
        ],
        right: [
          "Biometric-ready transaction flows",
          "Reconciliation support",
          "Role-based admin access",
          "Partner bank integration paths",
        ],
      },
      {
        type: "note",
        paras: [
          "AePS does not register retailers via unofficial Play Store apps. Partner only through authorized banks and licensed technology providers.",
          "NPCI® and AePS® are trademarks of National Payments Corporation of India.",
        ],
      },
    ],
  },

  "/b2c": {
    eyebrow: "B2C · WALLETS",
    title: "Consumer UPI & wallet apps",
    sub: "UPI collect, P2P, bill pay, and KYC-tiered wallets — React Native apps with Node APIs and admin consoles.",
    cta: { primary: { href: "/contact", label: "Build a wallet MVP" }, secondary: { href: "/services/fintech", label: "Fintech services" } },
    blocks: [
      {
        type: "cards",
        title: "Capabilities",
        items: [
          { title: "UPI flows", sub: "Collect, intent, merchant", href: "/services/fintech" },
          { title: "KYC tiers", sub: "Onboarding & limits", href: "/compliance" },
          { title: "Admin console", sub: "Users, ledger, support", href: "/software" },
          { title: "Notifications", sub: "Push, SMS, receipts", href: "/services/mobile-apps" },
        ],
      },
    ],
  },

  "/docs": {
    eyebrow: "DEVELOPERS",
    title: "Anilax Payments API",
    sub: "Sandbox-first REST APIs for payments, AePS-related flows, webhooks, and partner integrations.",
    cta: { primary: { href: "/login", label: "Open developer hub" }, secondary: { href: "/sdks", label: "View SDKs" } },
    blocks: [
      {
        type: "cards",
        title: "Start here",
        items: [
          { title: "Authentication", sub: "API keys & environments", href: "/login" },
          { title: "Webhooks", sub: "Events with retries", href: "/docs" },
          { title: "Errors", sub: "Codes & handling", href: "/docs" },
          { title: "SDKs", sub: "Node & Python helpers", href: "/sdks" },
          { title: "Changelog", sub: "API release notes", href: "/changelog" },
          { title: "Status", sub: "Platform health", href: "/status" },
        ],
      },
      {
        type: "text",
        title: "Quick start",
        paras: [
          "Create a sandbox account, generate a test key, and call the payments endpoints from your backend.",
          "Production keys activate after partner/compliance checks defined in your agreement.",
        ],
      },
    ],
  },

  "/technology": {
    eyebrow: "TECHNOLOGY",
    title: "Modern stack for development & design",
    sub: "We pick tools based on your operations, compliance needs, and team — not hype cycles.",
    cta: { primary: { href: "/contact", label: "Discuss your stack" }, secondary: { href: "/services", label: "Services" } },
    blocks: [
      {
        type: "cards",
        title: "What we ship with",
        items: [
          { title: "Frontend", sub: "React, Next.js, Tailwind", href: "/services/web-applications" },
          { title: "Backend", sub: "Node.js, Python, PostgreSQL", href: "/services/api-integration" },
          { title: "Mobile", sub: "React Native, Flutter, native", href: "/services/mobile-apps" },
          { title: "Cloud", sub: "AWS, Docker, CI/CD", href: "/services/cloud-devops" },
          { title: "Design", sub: "Figma systems & prototypes", href: "/services/ui-ux" },
          { title: "Fintech", sub: "UPI, AePS, ledgers, webhooks", href: "/services/fintech" },
        ],
      },
    ],
  },

  "/sdks": {
    eyebrow: "DEVELOPERS",
    title: "Ship faster with official SDKs",
    sub: "Helper libraries and examples for integrating Anilax APIs in your backend services.",
    cta: { primary: { href: "/docs", label: "Read the docs" }, secondary: { href: "/login", label: "Get sandbox keys" } },
    blocks: [
      {
        type: "cards",
        title: "Available kits",
        items: [
          { title: "Node.js", sub: "REST client & webhook verify", href: "/docs" },
          { title: "Python", sub: "Requests helpers & samples", href: "/docs" },
          { title: "Postman", sub: "Collection for sandbox", href: "/docs" },
          { title: "Examples", sub: "Payments & webhooks", href: "/changelog" },
        ],
      },
    ],
  },

  "/changelog": {
    eyebrow: "DEVELOPERS",
    title: "Product updates",
    sub: "Release notes for the Anilax Software website, APIs, and partner tools.",
    cta: { primary: { href: "/status", label: "Platform status" }, secondary: { href: "/docs", label: "Documentation" } },
    blocks: [
      {
        type: "timeline",
        items: [
          {
            tag: "WEBSITE",
            title: "v3.0 — Full service & industry detail pages",
            date: "1 Oct 2026",
            points: [
              "17 service and 10 industry detail pages",
              "Updated legal policies for 2026",
              "Improved project enquiry form",
            ],
          },
          {
            tag: "PLATFORM",
            title: "v2.4 — Developer hub & status",
            date: "5 Jul 2026",
            points: ["Status and Changelog pages", "Richer software catalog copy", "Partner portal returnTo flow"],
          },
          {
            tag: "CONTENT",
            title: "v2.2 — Services & legal foundation",
            date: "1 Jun 2026",
            points: ["Service catalog expansion", "Privacy, Terms, Compliance pages", "Industry modules"],
          },
        ],
      },
    ],
  },

  "/status": {
    eyebrow: "DEVELOPERS",
    title: "Anilax platform health",
    sub: "Operational status for marketing site, docs, and sandbox API environments.",
    cta: { primary: { href: "/changelog", label: "Changelog" }, secondary: { href: "/contact", label: "Report an issue" } },
    blocks: [
      {
        type: "status",
        items: [
          { name: "Website", state: "Operational" },
          { name: "Documentation", state: "Operational" },
          { name: "Sandbox API", state: "Operational" },
          { name: "Developer login", state: "Operational" },
        ],
      },
      {
        type: "text",
        title: "Incidents",
        paras: [
          "No open incidents. Historical notices will appear here when applicable.",
          `For urgent production issues on contracted systems, contact ${brand.phone} or ${brand.email}.`,
        ],
      },
    ],
  },

  "/about": {
    eyebrow: "COMPANY",
    title: "Who we are",
    sub: "Anilax Software builds fintech infrastructure, B2B banking technology, APIs, and custom software for businesses across India.",
    cta: { primary: { href: "/contact", label: "Partner with us" }, secondary: { href: "/stories", label: "Our work" } },
    blocks: [
      {
        type: "text",
        title: "Our company",
        paras: [
          `${entity} was incorporated on 17 July 2021 and is registered with RoC — Jaipur.`,
          `Headquartered in ${brand.hq}, we partner with banks, business correspondents, startups, and enterprises to launch and scale digital products.`,
        ],
      },
      {
        type: "cards",
        title: "What we deliver",
        items: [
          { title: "Fintech rails", sub: "AePS, UPI, wallets, APIs", href: "/services/fintech" },
          { title: "Custom software", sub: "ERP, portals, automation", href: "/services/custom-software" },
          { title: "Dedicated teams", sub: "Embedded engineering pods", href: "/services/dedicated-teams" },
          { title: "Industry platforms", sub: "Health, edu, logistics, retail", href: "/industries" },
        ],
      },
      {
        type: "facts",
        items: [
          { k: "Legal", v: entity },
          { k: "CIN", v: brand.cin },
          { k: "GSTIN", v: brand.gstin },
          { k: "Founded", v: brand.founded },
          { k: "HQ", v: brand.hq },
          { k: "Contact", v: `${brand.email}` },
        ],
      },
    ],
  },

  "/company": {
    eyebrow: "COMPANY",
    title: "Anilax Software — company",
    sub: "Corporate overview for partners, customers, and press.",
    cta: { primary: { href: "/about", label: "About Anilax" }, secondary: { href: "/press", label: "Press kit" } },
    blocks: [
      {
        type: "facts",
        items: [
          { k: "Brand", v: "Anilax Software" },
          { k: "Legal entity", v: entity },
          { k: "CIN", v: brand.cin },
          { k: "GSTIN", v: brand.gstin },
          { k: "Founded", v: brand.founded },
          { k: "Headquarters", v: brand.hq },
        ],
      },
      {
        type: "text",
        title: "Focus",
        paras: [
          "Fintech technology, B2B AePS networks, developer APIs, and custom software for startups and enterprises.",
        ],
      },
    ],
  },

  "/blog": {
    eyebrow: "BLOG",
    title: "Insights on fintech & scale",
    sub: "Notes on software delivery, payments technology, and building teams that ship.",
    cta: { primary: { href: "/contact", label: "Ask us a question" }, secondary: { href: "/stories", label: "Case stories" } },
    blocks: [
      {
        type: "cards",
        title: "Latest",
        items: [
          { title: "When to Automate vs Rebuild", sub: "Operations · Architecture", href: "/contact" },
          { title: "Fintech MVPs & Compliance", sub: "AePS / UPI", href: "/services/fintech" },
          { title: "Dedicated Pods vs Vendors", sub: "Teams · Delivery", href: "/services/dedicated-teams" },
        ],
      },
    ],
  },

  "/careers": {
    eyebrow: "CAREERS",
    title: "Build the future of fintech with us",
    sub: "Engineers, designers, and operators who care about production quality — based in Jaipur with remote-friendly collaboration.",
    cta: { primary: { href: "/contact", label: "Send your profile" }, secondary: { href: "/about", label: "About Anilax" } },
    blocks: [
      {
        type: "cards",
        title: "Open paths",
        items: [
          { title: "Full-stack Engineer", sub: "React + Node / Python", href: "/contact" },
          { title: "Mobile Engineer", sub: "React Native", href: "/contact" },
          { title: "Product Designer", sub: "UI/UX systems", href: "/contact" },
          { title: "Fintech Analyst", sub: "AePS / UPI ops", href: "/contact" },
        ],
      },
      {
        type: "text",
        title: "How to apply",
        paras: [
          `Email ${brand.email} with your CV/portfolio and the role in the subject line.`,
          "Tell us about a system you shipped and what you’d improve next.",
        ],
      },
    ],
  },

  "/press": {
    eyebrow: "PRESS",
    title: "News & media",
    sub: "Resources for journalists, analysts, and partners covering Anilax Software.",
    cta: { primary: { href: `mailto:${brand.email}`, label: "Media enquiry" }, secondary: { href: "/company", label: "Company facts" } },
    blocks: [
      {
        type: "facts",
        items: [
          { k: "Brand", v: "Anilax Software" },
          { k: "Legal", v: entity },
          { k: "Founded", v: brand.founded },
          { k: "HQ", v: brand.hq },
          { k: "Focus", v: "Fintech, AePS, APIs, custom software" },
          { k: "Media email", v: brand.email },
        ],
      },
      {
        type: "text",
        title: "Press kit",
        paras: [
          "On request: short/long company description, logos (PNG/SVG), product screenshots, and approved boilerplate.",
          "We respond to verified media requests within 2 business days.",
        ],
      },
    ],
  },
};
