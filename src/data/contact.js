/** Contact page content */

export const contactPageData = {
  eyebrow: "CONTACT",
  title: "Let’s build what’s next",
  sub: "Partnerships, product demos, API access, custom software, or support — tell us what you need and we’ll route it to the right team in Jaipur.",
  stats: [
    { n: "24h", l: "Typical first reply" },
    { n: "Mon–Sat", l: "10:00 AM – 7:00 PM IST" },
    { n: "Jaipur", l: "HQ · in-person demos" },
    { n: "1 form", l: "Right team, no runaround" },
  ],
  channels: [
    {
      title: "Sales & partnerships",
      body: "B2B AePS, enterprise APIs, white-label, and distributor onboarding.",
      href: `mailto:businesswithanilax@outlook.com?subject=${encodeURIComponent("Sales & partnerships")}`,
      cta: "Email sales",
    },
    {
      title: "API & developer support",
      body: "Sandbox keys, integration help, webhooks, and technical documentation.",
      href: "/docs",
      cta: "Open API docs",
    },
    {
      title: "Software projects",
      body: "Custom apps, ERP, portals, mobile, and end-to-end product development.",
      href: "/services",
      cta: "Browse services",
    },
    {
      title: "HR & careers",
      body: "Job applications, internships, and team opportunities.",
      href: "/careers",
      cta: "See careers",
    },
  ],
  office: {
    title: "Jaipur office",
    lines: [
      "OFFICE NO 728, SEVENTH",
      "Mall of Jaipur, Gandhi Path Rd",
      "Vaishali Nagar, Jaipur",
      "Rajasthan 302021",
    ],
    hours: "Monday – Saturday, 10:00 AM – 7:00 PM IST",
    maps: "https://www.google.com/maps/search/?api=1&query=Mall+of+Jaipur+Vaishali+Nagar+Jaipur",
  },
  steps: [
    { t: "Share context", d: "Goal, timeline, and any systems you already use." },
    { t: "We reply fast", d: "Usually within 24 hours on business days." },
    { t: "Discovery call", d: "30 minutes to map scope, risk, and next steps." },
    { t: "Clear proposal", d: "Milestones, stack recommendation, and engagement model." },
  ],
  faqs: [
    {
      q: "How fast do you respond?",
      a: "Most enquiries get a first reply within 24 hours on business days. Urgent production issues on contracted systems can call us directly.",
    },
    {
      q: "Can we visit the Jaipur office?",
      a: "Yes — schedule ahead for demos and partnership discussions at Mall of Jaipur, Vaishali Nagar.",
    },
    {
      q: "Do you sign NDAs before discovery?",
      a: "Yes. We can execute an NDA before detailed product or data discussions.",
    },
    {
      q: "Is this the right channel for sandbox API keys?",
      a: "For self-serve sandbox access use the developer hub login. Use this form for production rails, custom scopes, or integration help.",
    },
  ],
};
