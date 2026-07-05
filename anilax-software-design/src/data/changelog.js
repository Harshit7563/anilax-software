export const CHANGELOG_HERO = {
  eyebrow: "Changelog",
  title: "Product updates",
  subtitle:
    "Release notes for Anilax Software website, Shree AI, developer docs, and partner tools.",
};

/** Newest first */
export const CHANGELOG_ENTRIES = [
  {
    version: "2.4.0",
    date: "2026-07-05",
    tag: "Website",
    title: "Shree AI mobile, auth portal & platform pages",
    highlights: [
      "Shree AI bottom-sheet layout with safe-area support on phones",
      "Dedicated /auth partner portal with returnTo flow for API docs",
      "New Status and Changelog pages in the developer footer",
      "Richer software product detail copy across the catalog",
    ],
  },
  {
    version: "2.3.0",
    date: "2026-06-20",
    tag: "Shree AI",
    title: "Hindi profiles & Gemini integration",
    highlights: [
      "CA, doctor, retailer, and fintech conversation profiles",
      "Comfort-first replies before product recommendations",
      "Backend-ready Gemini route for deep software answers",
      "Auto-forward long conversations to admin leads",
    ],
  },
  {
    version: "2.2.0",
    date: "2026-06-01",
    tag: "Content",
    title: "Services, industries & legal pages",
    highlights: [
      "17 service detail pages with industry-specific modules",
      "Privacy, Terms, Compliance, Grievance, and Cookies pages",
      "Software catalog expanded to 68+ product categories",
      "Orange theme refresh across marketing sections",
    ],
  },
  {
    version: "2.1.0",
    date: "2026-05-10",
    tag: "Developers",
    title: "API docs & sandbox console",
    highlights: [
      "Interactive API reference with auth guard on live calls",
      "SDK catalog and sandbox base URL documentation",
      "Partner signup and login lead capture",
      "Admin dashboard for contact leads and signups",
    ],
  },
  {
    version: "2.0.0",
    date: "2026-04-01",
    tag: "Platform",
    title: "anilaxsoftware.com launch",
    highlights: [
      "Unified domain for site, API, and partner auth",
      "B2B AePS and B2C wallet product pages",
      "Contact modal with industry and API prefill",
      "Capacitor Android admin app scaffold",
    ],
  },
];

export function formatChangelogDate(iso) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
