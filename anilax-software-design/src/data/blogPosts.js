export const BLOG_HERO = {
  eyebrow: "Blog",
  title: "Insights on",
  titleHighlight: "fintech & scale",
  subtitle:
    "66+ detailed software guides plus AePS, API, and fintech insights — written by the Anilax team for partners building in India.",
};

import { SOFTWARE_BLOG_POSTS } from "./softwareBlogPosts.js";

export const BLOG_CATEGORIES = ["All", "AePS", "APIs", "Product", "Industry", "Software"];

const BLOG_POSTS_INSIGHTS = [
  {
    slug: "aeps-retailer-onboarding-100-outlets",
    title: "How to onboard your first 100 AePS retailers without ops chaos",
    excerpt:
      "Hierarchy, limits, biometric mapping, and UAT — a phased playbook BC networks use before full state rollout.",
    category: "AePS",
    date: "2026-05-08",
    readMinutes: 7,
    author: "Anilax Product Team",
    tags: ["AePS", "Onboarding", "BC"],
    sections: [
      {
        type: "p",
        text: "Most AePS rollouts fail quietly in week three — not because NPCI rails are down, but because retailer hierarchy, device mapping, and limit policies were designed on a spreadsheet instead of in your portal.",
      },
      {
        type: "h2",
        text: "Start with a pilot corridor",
      },
      {
        type: "p",
        text: "Pick one district or city cluster with 50–100 outlets. Map master distributor → super distributor → retailer before you touch production keys. Run sandbox UAT with real devices but test Aadhaar numbers.",
      },
      {
        type: "ul",
        items: [
          "Import retailer KYC pack from sponsor bank template",
          "Pair each outlet ID to a UIDAI-certified scanner serial",
          "Set wallet and per-transaction limits per role",
          "Run withdrawal, enquiry, and mini statement test matrix",
        ],
      },
      {
        type: "h2",
        text: "Field training beats feature slides",
      },
      {
        type: "p",
        text: "Retail staff need 15-minute drills: failed biometric, timeout, reversal reference, and when to escalate. Record short Hindi/English clips inside your app — Anilax portals support multi-language UI for this reason.",
      },
      {
        type: "p",
        text: "When pilot success rate stays above 97% for five working days, expand in batches of 200–500 outlets. Keep the same escalation channel you used during UAT.",
      },
    ],
    relatedSlugs: ["uidai-biometric-devices-partners", "aeps-settlement-real-time-planning"],
  },
  {
    slug: "api-webhooks-success-failure-reversal",
    title: "AePS API webhooks: success, failure, and reversal events",
    excerpt:
      "Signed payloads, idempotency keys, and what your core banking system should do when NPCI sends a late reversal.",
    category: "APIs",
    date: "2026-04-22",
    readMinutes: 6,
    author: "Anilax Engineering",
    tags: ["API", "Webhooks", "Integration"],
    sections: [
      {
        type: "p",
        text: "Your app UX can be beautiful — but settlement truth lives in webhooks. Treat every POST from Anilax as a state machine input, not a notification toast.",
      },
      {
        type: "h2",
        text: "Verify signatures first",
      },
      {
        type: "p",
        text: "Each webhook includes a signature header derived from your partner secret. Reject unsigned or stale timestamps before you touch ledger tables. Log raw payload hashes for disputes.",
      },
      {
        type: "ul",
        items: [
          "payment.success — credit retailer commission, mark txn settled",
          "payment.failed — release holds, surface reason code to ops",
          "payment.reversed — claw back commission if already credited",
          "settlement.batch — reconcile against bank statement row",
        ],
      },
      {
        type: "h2",
        text: "Idempotency is non-negotiable",
      },
      {
        type: "p",
        text: "Use the transaction reference ID as an idempotency key in your database. Duplicate webhooks are normal during retries — your handler must return 200 without double-posting.",
      },
    ],
    relatedSlugs: ["sandbox-to-production-api-timeline", "aeps-retailer-onboarding-100-outlets"],
  },
  {
    slug: "uidai-biometric-devices-partners",
    title: "UIDAI-certified biometric devices: what AePS partners should verify",
    excerpt:
      "Scanner certification, driver support, session hygiene, and why device mapping matters for audit trails.",
    category: "AePS",
    date: "2026-04-10",
    readMinutes: 5,
    author: "Anilax Compliance",
    tags: ["UIDAI", "Biometric", "AePS"],
    sections: [
      {
        type: "p",
        text: "AePS trust is biometric trust. Partners sometimes buy hardware in bulk without checking certification status or firmware channels — that creates avoidable authentication failures in the field.",
      },
      {
        type: "h2",
        text: "Checklist before go-live",
      },
      {
        type: "ul",
        items: [
          "Device on UIDAI-approved list for your sponsor bank",
          "Latest RD service / driver installed on retailer device",
          "Outlet ID locked to scanner serial in your portal",
          "No storage of full Aadhaar in application logs",
          "Session timeout aligned with bank policy (typically 5–15 min)",
        ],
      },
      {
        type: "p",
        text: "Anilax shares a supported-device matrix during technical onboarding. m-ATM bundles follow the same mapping rules as standalone fingerprint scanners.",
      },
    ],
    relatedSlugs: ["aeps-retailer-onboarding-100-outlets", "api-webhooks-success-failure-reversal"],
  },
  {
    slug: "aeps-settlement-real-time-planning",
    title: "Real-time settlement vs T+1: planning cash flow for BC networks",
    excerpt:
      "What sponsor banks actually credit, how distributors should model float, and reporting you need daily.",
    category: "Industry",
    date: "2026-03-28",
    readMinutes: 6,
    author: "Anilax Operations",
    tags: ["Settlement", "AePS", "Finance"],
    sections: [
      {
        type: "p",
        text: "Marketing says “instant settlement.” Operations lives sponsor bank calendars, NPCI cycles, and holiday cut-offs. Plan treasury with the conservative case.",
      },
      {
        type: "h2",
        text: "Questions for your commercial call",
      },
      {
        type: "ul",
        items: [
          "Is credit T+0 to distributor pool or retailer wallet only?",
          "Commission deduction timing — pre or post settlement?",
          "Who holds chargeback risk on failed-then-reversed txns?",
          "EOD CSV vs real-time webhook for reconciliation",
        ],
      },
      {
        type: "p",
        text: "Anilax portals expose live transaction monitors; combine them with bank statement imports. Mismatch alerts on day one save CFO escalations on day thirty.",
      },
    ],
    relatedSlugs: ["aeps-retailer-onboarding-100-outlets", "scaling-agent-networks-india"],
  },
  {
    slug: "white-label-wallet-mvp-checklist",
    title: "White-label wallet MVP: 12-week checklist for fintech founders",
    excerpt:
      "KYC tiers, UPI collect, ledger design, and compliance gates before you spend on performance marketing.",
    category: "Product",
    date: "2026-03-12",
    readMinutes: 8,
    author: "Anilax B2C Team",
    tags: ["Wallet", "B2C", "MVP"],
    sections: [
      {
        type: "p",
        text: "Founders often sequence wallet builds backwards — growth ads before settlement rails. This checklist mirrors how we ship B2C apps on Anilax infrastructure.",
      },
      {
        type: "h2",
        text: "Weeks 1–4: foundation",
      },
      {
        type: "ul",
        items: [
          "Entity structure + bank/partner agreements",
          "KYC vendor + liveness flow wired in sandbox",
          "Ledger with double-entry for wallet balance",
          "Admin console for support and limits",
        ],
      },
      {
        type: "h2",
        text: "Weeks 5–8: money movement",
      },
      {
        type: "ul",
        items: [
          "UPI collect and P2P in sandbox",
          "Bill pay or recharge as anchor use case",
          "Push notifications for payment events",
          "Security review on token storage",
        ],
      },
      {
        type: "p",
        text: "Weeks 9–12: pilot cohort, grievance flow, and store listing. Keep marketing spend at zero until settlement reconciliation matches bank for seven consecutive days.",
      },
    ],
    relatedSlugs: ["sandbox-to-production-api-timeline", "api-webhooks-success-failure-reversal"],
  },
  {
    slug: "sandbox-to-production-api-timeline",
    title: "From sandbox API keys to production: a realistic 4-week timeline",
    excerpt:
      "What engineering, compliance, and business teams do in parallel — week by week.",
    category: "APIs",
    date: "2026-02-20",
    readMinutes: 5,
    author: "Anilax Engineering",
    tags: ["API", "Sandbox", "Go-live"],
    sections: [
      {
        type: "p",
        text: "Teams that ship sandbox integrations in two days still wait on bank KYC and NPCI alignment for production. The timeline below assumes parallel workstreams.",
      },
      {
        type: "h2",
        text: "Week 1 — technical",
      },
      {
        type: "p",
        text: "Authenticate, run happy-path payment, handle webhooks in a staging DB, and document error codes your app surfaces to users.",
      },
      {
        type: "h2",
        text: "Week 2 — compliance pack",
      },
      {
        type: "p",
        text: "Submit architecture diagram, data flow, and access control narrative to sponsor bank. Start UAT test cases with signed approvals.",
      },
      {
        type: "h2",
        text: "Weeks 3–4 — pilot & keys",
      },
      {
        type: "p",
        text: "Limited production traffic with caps, daily reconciliation, escalation runbook shared with Anilax support. Remove caps after sign-off.",
      },
    ],
    relatedSlugs: ["api-webhooks-success-failure-reversal", "white-label-wallet-mvp-checklist"],
  },
  {
    slug: "scaling-agent-networks-india",
    title: "Scaling agent networks from one state to pan-India",
    excerpt:
      "Language, limits, sponsor bank rules, and support tiers when your AePS footprint crosses state lines.",
    category: "Industry",
    date: "2026-01-15",
    readMinutes: 7,
    author: "Anilax Partnerships",
    tags: ["Scale", "AePS", "Operations"],
    sections: [
      {
        type: "p",
        text: "Rajasthan-first networks often underestimate how sponsor bank rules differ when they add MP, UP, or NE states. Software that worked in one RO may need limit templates per zone.",
      },
      {
        type: "h2",
        text: "Standardize playbooks, localize support",
      },
      {
        type: "ul",
        items: [
          "State-wise escalation numbers for field staff",
          "Commission slabs editable without code deploys",
          "Dashboards filtered by region for ops managers",
          "Quarterly device health audits in high-failure clusters",
        ],
      },
      {
        type: "p",
        text: "Anilax has supported partners into 28+ states — the lesson is always the same: central policy, local language, single reconciliation view.",
      },
    ],
    relatedSlugs: ["aeps-settlement-real-time-planning", "aeps-retailer-onboarding-100-outlets"],
  },
];

export const BLOG_POSTS = [...BLOG_POSTS_INSIGHTS, ...SOFTWARE_BLOG_POSTS].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export function getBlogPost(slug) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(slugs) {
  return slugs.map((s) => getBlogPost(s)).filter(Boolean);
}

export function formatBlogDate(iso) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
