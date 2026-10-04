/** Platform status page */

export const statusPageData = {
  eyebrow: "SYSTEM STATUS",
  title: "Anilax platform health",
  sub: "Live status for our website, APIs, partner auth, payments rails, and admin tools. Updated manually — contact us for incident alerts on contracted systems.",
  updatedAt: "3 Oct 2026, 5:15 pm IST",
  overall: {
    state: "operational",
    label: "All systems operational",
    detail: "No open incidents. Sandbox and production partner rails are available.",
  },
  stats: [
    { n: "99.99%", l: "API uptime SLA target" },
    { n: "0", l: "Open incidents" },
    { n: "<50ms", l: "Median sandbox latency" },
    { n: "24×7", l: "Monitoring coverage" },
  ],
  services: [
    {
      name: "Website & marketing",
      state: "operational",
      detail: "anilaxsoftware.com pages, docs, static assets, and navigation",
      components: ["Homepage", "Service / industry pages", "Static assets / CDN"],
    },
    {
      name: "Documentation hub",
      state: "operational",
      detail: "Technology, Docs, SDKs, Changelog, and Status pages",
      components: ["/docs", "/sdks", "/changelog", "/technology"],
    },
    {
      name: "Public API (sandbox & v1)",
      state: "operational",
      detail: "REST endpoints, webhooks, and developer console routes",
      components: ["Sandbox API", "Production v1", "Webhook delivery"],
    },
    {
      name: "Payments rails",
      state: "operational",
      detail: "UPI, AePS, payouts, and settlement integrations for partners",
      components: ["UPI collect / payout", "AePS B2B", "Settlement MIS"],
    },
    {
      name: "Developer login",
      state: "operational",
      detail: "Partner portal sign-in, sandbox keys, and returnTo docs flow",
      components: ["/login", "Sandbox key issue", "Session auth"],
    },
    {
      name: "Contact & lead capture",
      state: "operational",
      detail: "Contact forms, partner signups, and enquiry handoff",
      components: ["/contact", "Lead inbox", "Email notifications"],
    },
    {
      name: "Admin console",
      state: "operational",
      detail: "Lead dashboard and partner signup review tools",
      components: ["Lead dashboard", "Signup review", "Ops alerts"],
    },
    {
      name: "Assisted chat hooks",
      state: "operational",
      detail: "On-site assisted journeys and Gemini-backed deep answers where enabled",
      components: ["Rule engine", "Handoff to leads", "Profile prompts"],
    },
  ],
  regions: [
    { name: "India (primary)", detail: "Jaipur HQ · partner bank integrations · IST support window" },
    { name: "API edge", detail: "Cloud-hosted API and docs with global CDN for static assets" },
    { name: "Sandbox", detail: "Isolated from production settlement — safe for integration tests" },
  ],
  incidents: [
    {
      date: "28 Jun 2026",
      state: "resolved",
      title: "Scheduled maintenance — API sandbox",
      summary:
        "Sandbox keys and test transactions were briefly unavailable during a database migration. Production traffic was not affected.",
      impact: "Sandbox only · ~45 minutes",
      updates: [
        { t: "11:00 IST", d: "Maintenance window announced for sandbox DB migration." },
        { t: "14:10 IST", d: "Sandbox writes paused; reads degraded." },
        { t: "14:55 IST", d: "Migration complete; sandbox fully restored." },
      ],
    },
    {
      date: "9 May 2026",
      state: "resolved",
      title: "Elevated latency — documentation CDN",
      summary:
        "Static asset latency spiked for some Indian ISPs. API and partner auth were unaffected. CDN cache purged and origin tuned.",
      impact: "Docs / marketing assets · ~25 minutes",
      updates: [
        { t: "16:20 IST", d: "Latency alerts on static asset origin." },
        { t: "16:35 IST", d: "CDN purge + origin connection pool increase." },
        { t: "16:45 IST", d: "Latency returned to baseline." },
      ],
    },
  ],
  maintenance: [
    {
      when: "Next window",
      title: "No upcoming maintenance scheduled",
      detail: "Planned sandbox or docs work will be posted here at least 24 hours ahead when possible.",
    },
  ],
  subscribe: [
    { title: "Changelog", sub: "Product and API release notes", href: "/changelog" },
    { title: "API docs", sub: "Rails, errors, and webhooks", href: "/docs" },
    { title: "SDKs", sub: "Client libraries and matrix", href: "/sdks" },
    { title: "Report an issue", sub: "Contact engineering support", href: "/contact" },
  ],
  note: "Status is updated manually for marketing, docs, and shared sandbox environments. Contracted production systems may have private status channels and SLAs defined in your agreement. For urgent production issues, call or email Anilax directly.",
};
