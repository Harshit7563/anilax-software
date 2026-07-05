import {
  COMPANY_EMAIL,
  COMPANY_LEGAL,
  COMPANY_OFFICE,
  COMPANY_PHONE,
} from "./company";

const LEGAL_RELATED = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Service", to: "/terms" },
  { label: "Compliance", to: "/compliance" },
  { label: "Grievance & Redressal", to: "/grievance" },
  { label: "Cookie Policy", to: "/cookies" },
];

const OFFICE_ADDRESS = COMPANY_OFFICE.lines.join(", ");

function legalPage(base) {
  return {
    layout: "legal",
    category: "legal",
    effectiveDate: "May 2026",
    relatedLinks: LEGAL_RELATED.filter((link) => link.to !== `/${base.slug}`),
    ...base,
  };
}

export const LEGAL_PAGES = {
  privacy: legalPage({
    slug: "privacy",
    eyebrow: "Legal · Privacy",
    title: "Privacy Policy",
    subtitle: `How ${COMPANY_LEGAL.brand} collects, uses, stores, and protects personal information across our websites, products, APIs, and partner channels.`,
    blocks: [
      {
        type: "legal-summary",
        items: [
          { label: "Entity", value: COMPANY_LEGAL.name },
          { label: "CIN", value: COMPANY_LEGAL.cin },
          { label: "Contact", value: COMPANY_EMAIL },
          { label: "Applies to", value: "Website, APIs, software products & support" },
        ],
      },
      {
        type: "legal",
        sections: [
          {
            id: "introduction",
            title: "1. Introduction",
            body: `${COMPANY_LEGAL.name} ("${COMPANY_LEGAL.brand}", "Anilax", "we", "us", "our") is committed to protecting personal data in accordance with applicable Indian law, including the Digital Personal Data Protection Act, 2023 (DPDP Act) where applicable, and sector guidelines for fintech and software services.`,
            paragraphs: [
              "This Privacy Policy explains what information we collect, why we collect it, how we use and share it, how long we retain it, and the choices available to you.",
              "By using our website, contacting us, signing up for services, or integrating our APIs, you acknowledge that you have read this policy.",
            ],
          },
          {
            id: "scope",
            title: "2. Scope",
            body: "This policy applies to:",
            list: [
              "Visitors to https://anilaxsoftware.com and related marketing pages",
              "Prospective clients, partners, and job applicants who contact us",
              "Users of custom software, dashboards, and admin portals we build or operate",
              "API consumers, business correspondents, merchants, and agent networks onboarded to our technology",
              "Support, billing, and onboarding communications",
            ],
            paragraphs: [
              "Regulated payment or banking activities may be performed by licensed banks or authorized partners. Where those partners act as data fiduciaries or processors, their privacy notices may also apply.",
            ],
          },
          {
            id: "data-collected",
            title: "3. Information we collect",
            body: "Depending on your relationship with us, we may collect the following categories of information:",
            subsections: [
              {
                title: "Identity & contact",
                text: "Name, email, phone number, company name, designation, postal address, and government identifiers submitted during onboarding or support.",
              },
              {
                title: "Account & KYC data",
                text: "PAN, Aadhaar (where permitted and consented), bank account details, photographs, business documents, and verification outputs from KYC/AML service providers — collected only where required for regulated products or partner onboarding.",
              },
              {
                title: "Technical & usage data",
                text: "IP address, device type, browser, operating system, API request logs, error logs, session identifiers, timestamps, and aggregated analytics.",
              },
              {
                title: "Transaction & business data",
                text: "Order details, settlement records, commission structures, merchant/agent IDs, webhook payloads, and reconciliation data necessary to deliver fintech and software services.",
              },
              {
                title: "Communications",
                text: "Messages sent via contact forms, email, chat, phone recordings (where disclosed), and support tickets.",
              },
            ],
          },
          {
            id: "how-we-use",
            title: "4. How we use information",
            body: "We process personal data for legitimate business and legal purposes, including:",
            list: [
              "Providing, operating, maintaining, and improving our websites, software, and APIs",
              "Onboarding partners, merchants, agents, and enterprise clients",
              "Processing transactions, settlements, commissions, and billing",
              "Fraud prevention, security monitoring, and incident response",
              "Compliance with RBI, NPCI, AML/KYC, tax, and other legal obligations",
              "Customer support, service notices, and contractual communications",
              "Product analytics in aggregated or de-identified form",
              "Marketing about our services where permitted and with consent where required",
            ],
          },
          {
            id: "legal-basis",
            title: "5. Legal basis for processing",
            body: "We rely on one or more of the following bases:",
            list: [
              "Performance of a contract or steps prior to entering a contract",
              "Compliance with legal or regulatory obligations",
              "Legitimate interests such as security, product improvement, and B2B relationship management — balanced against your rights",
              "Consent where required, e.g. optional marketing or certain KYC flows",
            ],
          },
          {
            id: "sharing",
            title: "6. Sharing & disclosure",
            body: "We do not sell personal data. We may share information with:",
            list: [
              "Sponsor banks, payment aggregators, NPCI-related systems, and licensed financial partners",
              "Cloud hosting, SMS, email, KYC, verification, and analytics vendors under contractual safeguards",
              "Professional advisers, auditors, and insurers where necessary",
              "Law enforcement, regulators, or courts when required by applicable law",
              "Successors in the event of merger, acquisition, or restructuring with appropriate notice",
            ],
            paragraphs: [
              "We require service providers to process data only on our instructions and implement appropriate security measures.",
            ],
          },
          {
            id: "retention",
            title: "7. Data retention",
            body: "We retain personal data only as long as necessary for the purposes described in this policy, including:",
            list: [
              "Active customer or partner relationships and post-termination periods defined in contracts",
              "Statutory retention under tax, company law, and financial regulations",
              "Dispute resolution, audit, and fraud investigation requirements",
            ],
            paragraphs: [
              "When data is no longer required, we delete, anonymize, or securely archive it in accordance with our retention schedule.",
            ],
          },
          {
            id: "security",
            title: "8. Security measures",
            body: "We implement technical and organizational safeguards including access controls, encryption in transit, network segmentation, logging, secure SDLC practices, and staff training. Details of our security program are described on our Security page.",
            paragraphs: [
              "No system is completely secure. You are responsible for safeguarding your account credentials and notifying us promptly of suspected unauthorized access.",
            ],
          },
          {
            id: "rights",
            title: "9. Your rights",
            body: "Subject to applicable law, you may have the right to:",
            list: [
              "Request access to personal data we hold about you",
              "Request correction of inaccurate or incomplete data",
              "Withdraw consent where processing is consent-based",
              "Request erasure or restriction of processing in permitted circumstances",
              "Nominate a person to exercise rights on your behalf in case of death or incapacity (as per DPDP Act)",
              "Raise concerns with us before approaching a supervisory authority",
            ],
            paragraphs: [
              `To exercise these rights, email ${COMPANY_EMAIL} with sufficient detail to verify your identity. We respond within timelines prescribed by applicable law.`,
            ],
          },
          {
            id: "children",
            title: "10. Children",
            body: "Our services are not directed at individuals under 18 years of age. We do not knowingly collect personal data from children. If you believe we have collected data from a minor, contact us for prompt deletion.",
          },
          {
            id: "transfers",
            title: "11. Cross-border transfers",
            body: "Personal data is primarily processed and stored in India. If we transfer data outside India, we do so in compliance with applicable law and with appropriate contractual or statutory safeguards.",
          },
          {
            id: "changes",
            title: "12. Changes to this policy",
            body: "We may update this Privacy Policy from time to time. Material changes will be posted on this page with an updated effective date. Continued use after changes constitutes acknowledgment where permitted by law.",
          },
          {
            id: "contact",
            title: "13. Contact us",
            body: `Data protection & privacy queries:`,
            list: [
              `Email: ${COMPANY_EMAIL}`,
              `Postal: Data Protection, ${COMPANY_LEGAL.name}, ${OFFICE_ADDRESS}`,
              `Phone: ${COMPANY_PHONE} (Mon–Sat, 10:00 AM – 7:00 PM IST)`,
            ],
          },
        ],
      },
    ],
    cta: {
      title: "Questions about your data?",
      text: "Our team responds to privacy requests within applicable legal timelines.",
      connect: true,
    },
  }),

  terms: legalPage({
    slug: "terms",
    eyebrow: "Legal · Terms",
    title: "Terms of Service",
    subtitle: `Terms governing access to ${COMPANY_LEGAL.brand} websites, APIs, dashboards, software products, and professional services.`,
    blocks: [
      {
        type: "legal-summary",
        items: [
          { label: "Entity", value: COMPANY_LEGAL.name },
          { label: "Governing law", value: "India · Courts at Jaipur, Rajasthan" },
          { label: "Legal contact", value: COMPANY_EMAIL },
          { label: "GSTIN", value: COMPANY_LEGAL.gstin },
        ],
      },
      {
        type: "legal",
        sections: [
          {
            id: "agreement",
            title: "1. Agreement to terms",
            body: `These Terms of Service ("Terms") constitute a legally binding agreement between you and ${COMPANY_LEGAL.name}. By accessing our website, using our APIs, logging into dashboards, or engaging our development services, you agree to these Terms.`,
            paragraphs: [
              "If you accept on behalf of an organization, you represent that you have authority to bind that entity. If you do not agree, do not use our services.",
            ],
          },
          {
            id: "services",
            title: "2. Description of services",
            body: `${COMPANY_LEGAL.brand} provides technology services including:`,
            list: [
              "Custom software development (web, mobile, SaaS, ERP, industry solutions)",
              "Fintech technology — UPI, AePS, wallets, payment gateways, APIs, and reconciliation systems",
              "B2B platforms for business correspondents, merchants, and partner networks",
              "APIs, webhooks, SMS, verification, and integration services",
              "Consulting, UI/UX, maintenance (AMC), and dedicated engineering teams",
            ],
            paragraphs: [
              "Regulated financial activities are performed through licensed banks and authorized entities. We are a technology provider unless explicitly stated otherwise in a separate agreement.",
            ],
          },
          {
            id: "accounts",
            title: "3. Registration & accounts",
            body: "You must provide accurate information during registration and onboarding. You are responsible for:",
            list: [
              "Maintaining confidentiality of passwords, API keys, and access tokens",
              "All activity under your account or credentials",
              "Prompt notification of unauthorized access or security incidents",
              "Compliance with partner bank and NPCI onboarding requirements where applicable",
            ],
          },
          {
            id: "acceptable-use",
            title: "4. Acceptable use",
            body: "You agree not to:",
            list: [
              "Violate any applicable law, RBI/NPCI guidelines, or third-party rights",
              "Use services for fraud, money laundering, terrorist financing, or prohibited businesses",
              "Attempt unauthorized access, penetration testing without consent, or disruption of our systems",
              "Reverse engineer, scrape, or overload APIs beyond agreed rate limits",
              "Resell or sublicense APIs or software without written authorization",
              "Upload malware, unlawful content, or data you do not have rights to process",
            ],
            paragraphs: [
              "We may suspend or terminate access immediately for violations or material risk to platform integrity.",
            ],
          },
          {
            id: "fees",
            title: "5. Fees, billing & taxes",
            body: "Commercial terms — setup fees, development milestones, transaction charges, AMC, and support fees — are defined in order forms, statements of work, or partner agreements.",
            list: [
              "Invoices are payable as per agreed credit terms unless otherwise stated",
              "GST and applicable taxes are charged as per Indian law",
              "Late payments may attract interest and suspension of services",
              "Disputed invoices must be raised in writing within 15 days of receipt",
            ],
          },
          {
            id: "ip",
            title: "6. Intellectual property",
            body: "Unless agreed otherwise in writing:",
            list: [
              "We retain ownership of our pre-existing tools, frameworks, libraries, brands, documentation, and platform code",
              "Custom deliverables transfer to you upon full payment as specified in your contract",
              "You grant us a limited license to use your marks and materials solely to perform services",
              "You may not remove proprietary notices or misrepresent ownership of our technology",
            ],
          },
          {
            id: "confidentiality",
            title: "7. Confidentiality",
            body: "Each party agrees to protect non-public technical, commercial, and business information received from the other party, except where disclosure is required by law or to professional advisers under confidentiality obligations.",
          },
          {
            id: "warranties",
            title: "8. Warranties & disclaimers",
            body: `Services are provided on an "as is" and "as available" basis to the extent permitted by law. We do not warrant uninterrupted or error-free operation except where expressly stated in an SLA.`,
            paragraphs: [
              "We disclaim implied warranties of merchantability, fitness for a particular purpose, and non-infringement where legally permissible.",
            ],
          },
          {
            id: "liability",
            title: "9. Limitation of liability",
            body: "To the maximum extent permitted by applicable law:",
            list: [
              "Our aggregate liability arising from these Terms or services is limited to fees paid by you to us in the twelve (12) months preceding the claim",
              "We are not liable for indirect, incidental, consequential, special, or punitive damages",
              "We are not liable for delays or failures of banks, NPCI, telecom providers, or third-party integrations outside our reasonable control",
            ],
          },
          {
            id: "indemnity",
            title: "10. Indemnification",
            body: "You agree to indemnify and hold harmless Anilax, its directors, employees, and agents from claims, losses, and expenses arising from your breach of these Terms, misuse of services, violation of law, or infringement of third-party rights.",
          },
          {
            id: "termination",
            title: "11. Termination & suspension",
            body: "Either party may terminate per contract terms. We may suspend access immediately for non-payment, security threats, regulatory direction, or material breach.",
            paragraphs: [
              "Upon termination, your right to use services ceases. Data handling follows our Privacy Policy and your agreement. Provisions that by nature should survive (IP, confidentiality, liability, governing law) remain in effect.",
            ],
          },
          {
            id: "disputes",
            title: "12. Dispute resolution",
            body: "Parties shall attempt good-faith resolution through designated account contacts. Where contracts include arbitration clauses, those provisions prevail.",
            paragraphs: [
              "These Terms are governed by the laws of India. Subject to mandatory arbitration, courts at Jaipur, Rajasthan shall have exclusive jurisdiction.",
            ],
          },
          {
            id: "general",
            title: "13. General provisions",
            list: [
              "Entire agreement: These Terms, together with executed contracts, constitute the full agreement for website/API use",
              "Severability: Invalid provisions do not affect remaining terms",
              "No waiver: Failure to enforce a provision is not a waiver of future enforcement",
              "Assignment: You may not assign rights without our consent; we may assign to affiliates or successors",
            ],
          },
          {
            id: "contact-terms",
            title: "14. Contact",
            body: `Legal & contractual queries: ${COMPANY_EMAIL} · ${COMPANY_LEGAL.name}, ${OFFICE_ADDRESS}.`,
          },
        ],
      },
    ],
    cta: {
      title: "Need a custom agreement?",
      text: "Enterprise clients receive MSAs, DPAs, and SLAs tailored to their engagement.",
      connect: true,
    },
  }),

  compliance: legalPage({
    slug: "compliance",
    eyebrow: "Legal · Compliance",
    title: "Compliance Framework",
    subtitle: `How ${COMPANY_LEGAL.brand} approaches regulatory requirements, partner banking, risk management, and audit readiness in Indian fintech and enterprise software.`,
    blocks: [
      {
        type: "legal-summary",
        items: [
          { label: "Entity", value: COMPANY_LEGAL.name },
          { label: "CIN", value: COMPANY_LEGAL.cin },
          { label: "Compliance contact", value: COMPANY_EMAIL },
          { label: "GSTIN", value: COMPANY_LEGAL.gstin },
        ],
      },
      {
        type: "prose",
        heading: "Our regulatory posture",
        paragraphs: [
          `${COMPANY_LEGAL.brand} is a technology company incorporated in India (${COMPANY_LEGAL.cin}). We design and deliver software, APIs, and platforms that enable partners to operate digital financial and business services.`,
          "Where products involve regulated activities — payments, AePS, lending, insurance distribution, or PPI — those activities are conducted through licensed banks, NBFCs, PPI issuers, or other authorized entities. Our role is to provide compliant technology aligned with partner and regulatory requirements.",
        ],
      },
      {
        type: "cards",
        heading: "Compliance domains",
        items: [
          {
            title: "KYC & customer due diligence",
            text: "Aadhaar, PAN, bank account verification, liveness checks, and document collection flows designed per RBI master directions and partner bank policies.",
          },
          {
            title: "AML & fraud controls",
            text: "Transaction monitoring hooks, velocity limits, blacklists, suspicious activity reporting support, and audit trails for partner compliance teams.",
          },
          {
            title: "AePS & BC operations",
            text: "Business correspondent portals aligned with NPCI AePS guidelines, sponsor bank checklists, biometric authentication, and commission settlement logic.",
          },
          {
            title: "UPI & payment rails",
            text: "Intent, collect, QR, merchant onboarding, and reconciliation modules built for NPCI and sponsor bank UAT/certification cycles.",
          },
          {
            title: "Data protection",
            text: "Privacy-by-design, access controls, encryption, and DPDP Act-aligned data handling. Data Processing Agreements available for enterprise clients.",
          },
          {
            title: "Information security",
            text: "Secure SDLC, vulnerability management, logging, backup, and incident response practices documented in our Security overview.",
          },
          {
            title: "GST & statutory records",
            text: `Compliant invoicing under GSTIN ${COMPANY_LEGAL.gstin}, maintained books of account, and support for partner and statutory audits.`,
          },
          {
            title: "Vendor & subprocessors",
            text: "Due diligence on cloud, SMS, KYC, and hosting vendors with contractual confidentiality and security obligations.",
          },
        ],
      },
      {
        type: "legal",
        sections: [
          {
            id: "partner-onboarding",
            title: "Partner onboarding requirements",
            body: "Before production access to regulated products, partners typically complete:",
            list: [
              "Commercial agreement and scope definition",
              "Corporate KYC and authorized signatory verification",
              "Sponsor bank or licensed entity onboarding (where applicable)",
              "NPCI/bank UAT and certification for payment products",
              "Security questionnaire and compliance attestation",
              "Defined grievance and escalation contacts",
            ],
          },
          {
            id: "partner-obligations",
            title: "Partner obligations",
            body: "Partners using our technology must:",
            list: [
              "Hold valid licenses and approvals for their business model",
              "Not onboard prohibited merchants, use cases, or geographies",
              "Maintain accurate agent/merchant records and conduct periodic KYC refresh",
              "Report incidents, fraud, and regulatory queries promptly",
              "Cooperate with audits, site visits, and compliance reviews when required",
              "Display required disclaimers and grievance information to end users",
            ],
          },
          {
            id: "audit-records",
            title: "Audit & record keeping",
            body: "We maintain transaction logs, access logs, change records, and reconciliation outputs to support partner audits and regulatory inquiries. Retention periods align with contractual and legal requirements.",
          },
          {
            id: "incidents",
            title: "Incident & breach notification",
            body: "Security or data incidents are investigated under our incident response process. Affected partners and authorities are notified as required by contract and applicable law.",
          },
          {
            id: "compliance-contact",
            title: "Compliance contact",
            body: `Compliance queries, audit requests, and regulatory correspondence: ${COMPANY_EMAIL} · ${COMPANY_LEGAL.name}, ${OFFICE_ADDRESS}.`,
          },
        ],
      },
      {
        type: "facts",
        heading: "Corporate identifiers",
        rows: [
          { label: "Legal name", value: COMPANY_LEGAL.name },
          { label: "CIN", value: COMPANY_LEGAL.cin },
          { label: "GSTIN", value: COMPANY_LEGAL.gstin },
          { label: "Incorporated", value: COMPANY_LEGAL.incorporated },
          { label: "RoC", value: COMPANY_LEGAL.roc },
          { label: "Status", value: COMPANY_LEGAL.status },
        ],
      },
    ],
    cta: {
      title: "Request a compliance pack",
      text: "Enterprise partners can receive security questionnaires, architecture overviews, and policy summaries during onboarding.",
      connect: true,
    },
  }),

  grievance: legalPage({
    slug: "grievance",
    eyebrow: "Legal · Grievance",
    title: "Grievance & Redressal Policy",
    subtitle: `Fair, transparent complaint handling for customers, partners, agents, and stakeholders of ${COMPANY_LEGAL.brand}.`,
    blocks: [
      {
        type: "legal-summary",
        items: [
          { label: "Grievance email", value: COMPANY_EMAIL },
          { label: "Phone", value: COMPANY_PHONE },
          { label: "Acknowledgement", value: "Within 2 business days" },
          { label: "Target resolution", value: "Within 15 business days" },
        ],
      },
      {
        type: "prose",
        heading: "Purpose",
        paragraphs: [
          `${COMPANY_LEGAL.name} is committed to addressing complaints promptly, fairly, and in accordance with applicable guidelines for technology and fintech service providers.`,
          "This policy explains how to lodge a grievance, what information to provide, expected timelines, internal escalation, and external remedies where applicable.",
        ],
      },
      {
        type: "legal",
        sections: [
          {
            id: "scope-grievance",
            title: "1. Scope",
            body: "This policy covers grievances relating to:",
            list: [
              "Anilax-owned websites, software platforms, and admin portals",
              "Onboarding, billing, and contractual matters for our technology services",
              "Platform access, downtime, and support quality",
              "Data privacy concerns handled under our Privacy Policy",
              "API integration, webhook delivery, and documentation issues",
            ],
            paragraphs: [
              "For payment or banking transactions executed through sponsor banks or licensed partners, the partner's grievance mechanism may apply in parallel. We coordinate with partners where we provide underlying technology.",
            ],
          },
          {
            id: "who-can-raise",
            title: "2. Who may raise a grievance",
            body: "End users (where a direct relationship exists), business correspondents, merchants, API partners, software clients, job applicants, and website visitors may submit a written grievance.",
          },
          {
            id: "how-to-lodge",
            title: "3. How to lodge a grievance",
            body: "Submit your complaint in writing with the following details:",
            list: [
              "Full name and contact information (email and phone)",
              "Partner ID, merchant ID, agent ID, or client reference (if applicable)",
              "Transaction reference, date, and amount (for payment-related issues)",
              "Clear description of the issue and desired resolution",
              "Supporting documents, screenshots, or logs if available",
            ],
            paragraphs: [
              `Channels: Email ${COMPANY_EMAIL} · Phone ${COMPANY_PHONE} (Mon–Sat, 10:00 AM – 7:00 PM IST) · Post: Grievance Officer, ${COMPANY_LEGAL.name}, ${OFFICE_ADDRESS}.`,
            ],
          },
          {
            id: "acknowledgement",
            title: "4. Acknowledgement",
            body: "We aim to acknowledge complete grievances within 2 business days and provide a unique reference number for tracking.",
          },
          {
            id: "resolution",
            title: "5. Resolution timeline",
            body: "We strive to resolve grievances within 15 business days from acknowledgement. Complex cases involving third-party banks, NPCI, reconciliation disputes, or forensic review may require additional time. We will keep you informed of status and revised timelines.",
          },
          {
            id: "investigation",
            title: "6. Investigation process",
            body: "Grievances are assigned to the Grievance Officer and relevant teams (operations, compliance, engineering). We may request additional information or logs. Outcomes and remedial actions are documented internally.",
          },
          {
            id: "escalation",
            title: "7. Internal escalation matrix",
            body: "If your grievance is not resolved satisfactorily:",
            subsections: [
              { title: "Level 1 — Support / Partner Success", text: "Initial intake and first response within standard timelines." },
              { title: "Level 2 — Grievance Officer", text: "Review of unresolved complaints after 15 business days or serious issues." },
              { title: "Level 3 — Management committee", text: "Final internal review before external escalation options." },
            ],
          },
          {
            id: "grievance-officer",
            title: "8. Grievance Officer",
            body: `Designated Grievance Officer for ${COMPANY_LEGAL.name}:`,
            list: [
              "Designation: Grievance Officer",
              `Email: ${COMPANY_EMAIL}`,
              `Address: ${COMPANY_LEGAL.name}, ${OFFICE_ADDRESS}`,
              `Phone: ${COMPANY_PHONE}`,
            ],
            paragraphs: [
              "The Grievance Officer oversees complaint handling, reporting, and coordination with compliance and partner banks where required.",
            ],
          },
          {
            id: "external",
            title: "9. External remedies",
            body: "If your complaint relates to banking or payment services through a regulated entity, you may approach the concerned bank's grievance cell or the RBI Integrated Ombudsman Scheme (as applicable) after exhausting the provider's internal process. Visit rbi.org.in for current ombudsman details.",
          },
          {
            id: "records-grievance",
            title: "10. Records & review",
            body: "We maintain records of grievances, responses, and resolutions for audit and regulatory purposes. This policy is reviewed periodically and updated on this page.",
          },
        ],
      },
      {
        type: "table",
        heading: "Service standards",
        columns: ["Stage", "Timeline", "Action"],
        rows: [
          ["Intake", "Day 0", "Grievance received via email, phone, or post"],
          ["Acknowledgement", "Within 2 business days", "Reference number issued"],
          ["Investigation", "Days 3–12", "Review by relevant teams; information requests if needed"],
          ["Resolution", "Within 15 business days", "Written response with outcome or action plan"],
          ["Escalation", "If unresolved", "Grievance Officer → Management committee → External routes"],
        ],
      },
      {
        type: "facts",
        heading: "Quick reference",
        rows: [
          { label: "Entity", value: COMPANY_LEGAL.name },
          { label: "CIN", value: COMPANY_LEGAL.cin },
          { label: "Grievance email", value: COMPANY_EMAIL },
          { label: "Compliance email", value: COMPANY_EMAIL },
          { label: "Phone", value: COMPANY_PHONE },
          { label: "Office hours", value: "Mon–Sat, 10:00 AM – 7:00 PM IST" },
        ],
      },
    ],
    cta: {
      title: "File a grievance",
      text: `Email ${COMPANY_EMAIL} with your reference details, or contact us through the form.`,
      connect: true,
    },
  }),

  cookies: legalPage({
    slug: "cookies",
    eyebrow: "Legal · Cookies",
    title: "Cookie Policy",
    subtitle: `How ${COMPANY_LEGAL.brand} uses cookies and similar technologies on our website and client-facing products.`,
    blocks: [
      {
        type: "legal-summary",
        items: [
          { label: "Website", value: "https://anilaxsoftware.com" },
          { label: "Contact", value: COMPANY_EMAIL },
          { label: "Related", value: "See also Privacy Policy" },
          { label: "Last updated", value: "May 2026" },
        ],
      },
      {
        type: "prose",
        heading: "What are cookies?",
        paragraphs: [
          "Cookies are small text files placed on your device when you visit a website. Similar technologies include local storage, session storage, and pixels. They help websites function, remember preferences, keep sessions secure, and understand usage patterns.",
          "This policy describes how we use these technologies and how you can manage them.",
        ],
      },
      {
        type: "cards",
        heading: "Categories of cookies",
        items: [
          {
            title: "Strictly necessary",
            text: "Required for core site functionality, security, load balancing, and form protection. These cannot be disabled without affecting essential features.",
          },
          {
            title: "Functional",
            text: "Remember choices such as dismissed banners, language preferences, or in-progress contact form state on marketing pages.",
          },
          {
            title: "Analytics",
            text: "Help us understand aggregated traffic patterns — pages viewed, referrers, device types — to improve content and performance.",
          },
          {
            title: "Authentication (products)",
            text: "Session cookies on admin dashboards, partner portals, and API consoles to keep you signed in securely.",
          },
        ],
      },
      {
        type: "table",
        heading: "Cookie inventory (website)",
        columns: ["Cookie / storage", "Purpose", "Duration", "Category"],
        rows: [
          ["session_id / auth_token", "Maintains logged-in session on dashboards", "Session", "Necessary / Auth"],
          ["csrf_token", "Protects forms from cross-site request forgery", "Session", "Necessary"],
          ["cookie_consent", "Stores your cookie preference choice", "12 months", "Functional"],
          ["_analytics_*", "Aggregated page views and navigation patterns", "Up to 13 months", "Analytics"],
          ["theme_pref", "UI preference on marketing pages (if enabled)", "6 months", "Functional"],
        ],
      },
      {
        type: "legal",
        sections: [
          {
            id: "third-party",
            title: "Third-party cookies",
            body: "We minimize third-party cookies on our marketing site. Where embedded content or analytics tools are used, those providers may set their own cookies subject to their policies. We review vendors for privacy and security alignment.",
          },
          {
            id: "manage",
            title: "Managing cookies",
            body: "You can control cookies through:",
            list: [
              "Browser settings — block, delete, or alert on cookies (see your browser help section)",
              "Device settings on mobile browsers",
              "Opt-out tools provided by analytics vendors where applicable",
            ],
            paragraphs: [
              "Blocking strictly necessary or authentication cookies may prevent login, form submission, or secure access to partner dashboards.",
            ],
          },
          {
            id: "do-not-track",
            title: "Do Not Track",
            body: "There is no uniform industry standard for responding to Do Not Track signals. We currently do not alter our practices solely based on DNT browser settings.",
          },
          {
            id: "updates-cookies",
            title: "Updates",
            body: "We may update this Cookie Policy when our site, products, or vendors change. The effective date at the top of this page will reflect material updates.",
          },
          {
            id: "contact-cookies",
            title: "Contact",
            body: `Questions about cookies or similar technologies: ${COMPANY_EMAIL} · ${COMPANY_LEGAL.name}, ${OFFICE_ADDRESS}. See our Privacy Policy for broader data handling practices.`,
          },
        ],
      },
    ],
    cta: {
      title: "Privacy questions?",
      text: "Read our Privacy Policy or contact our data protection team.",
      link: { label: "Privacy Policy", to: "/privacy" },
    },
  }),
};
