/** Platform status — update incident rows when ops changes. */
export const STATUS_HERO = {
  eyebrow: "System status",
  title: "Anilax platform health",
  subtitle:
    "Live status for our website, APIs, partner auth, Shree AI, and admin tools. Updated manually; subscribe via contact for incident alerts.",
  lastUpdated: "2026-07-05T12:00:00+05:30",
};

export const STATUS_OVERALL = {
  label: "All systems operational",
  level: "operational",
};

export const STATUS_SERVICES = [
  {
    id: "website",
    name: "Website & marketing",
    description: "anilaxsoftware.com pages, docs, and static assets",
    status: "operational",
  },
  {
    id: "api",
    name: "Public API (sandbox & v1)",
    description: "REST endpoints, webhooks, and developer console routes",
    status: "operational",
  },
  {
    id: "payments",
    name: "Payments rails",
    description: "UPI, AePS, payouts, and settlement integrations",
    status: "operational",
  },
  {
    id: "shree",
    name: "Shree AI assistant",
    description: "On-site chat, rule engine, and Gemini-backed replies",
    status: "operational",
  },
  {
    id: "contact",
    name: "Contact & lead capture",
    description: "Contact forms, partner signups, and Shree handoff",
    status: "operational",
  },
  {
    id: "admin",
    name: "Admin console",
    description: "Lead dashboard and partner signup review",
    status: "operational",
  },
];

export const STATUS_INCIDENTS = [
  {
    date: "2026-06-28",
    title: "Scheduled maintenance — API sandbox",
    status: "resolved",
    summary:
      "Sandbox keys and test transactions were briefly unavailable during a database migration. Production traffic was not affected.",
  },
];

export const STATUS_LABELS = {
  operational: "Operational",
  degraded: "Degraded performance",
  partial: "Partial outage",
  major: "Major outage",
  resolved: "Resolved",
};
