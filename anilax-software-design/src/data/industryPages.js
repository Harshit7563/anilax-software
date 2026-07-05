export const INDUSTRIES_HERO = {
  eyebrow: "Anilax Software · Industries",
  title: "Software built for your industry",
  subtitle:
    "Deep experience across fintech, healthcare, logistics, education, retail, and more — with ready-made modules and fully custom builds for each vertical.",
  stats: [
    { value: "10+", label: "Industries served" },
    { value: "68+", label: "Product templates" },
    { value: "28+", label: "States across India" },
  ],
};

export const INDUSTRIES = [
  {
    id: "fintech",
    icon: "💳",
    title: "Fintech & Banking",
    tagline: "Payments, wallets, AePS & compliance-ready rails",
    summary:
      "We build UPI apps, AePS BC networks, payment gateways, wallets, lending platforms, and developer APIs aligned with RBI guidelines and partner bank requirements.",
    challenges: [
      "Complex settlement and reconciliation",
      "NPCI and sponsor-bank integrations",
      "KYC tiers and audit requirements",
      "High-volume transaction uptime",
    ],
    solutions: [
      "AePS agent & BC portal software",
      "UPI collect, intent & merchant apps",
      "Payment gateway & switch routing",
      "REST APIs, webhooks & SDKs",
    ],
    relatedServices: ["fintech-payments", "mobile-apps", "api-integration"],
    relatedProducts: ["upi", "gateway", "switch", "pos", "recurring"],
  },
  {
    id: "healthcare",
    icon: "🏥",
    title: "Healthcare & Pharma",
    tagline: "HMS, clinic, lab & pharmacy systems",
    summary:
      "Hospital management, OPD/IPD, billing, lab orders, pharmacy inventory, and patient apps — with role-based access for doctors, staff, and administrators.",
    challenges: [
      "Multi-department coordination",
      "Sensitive patient data handling",
      "Billing errors and long queues",
      "Pharmacy stock mismatches",
    ],
    solutions: [
      "Hospital & clinic management (HMS)",
      "OPD appointment & queue systems",
      "Lab report delivery portals",
      "Pharmacy billing & stock control",
    ],
    relatedServices: ["healthcare-software", "mobile-apps", "custom-software"],
    relatedProducts: ["hospital", "clinic", "pharmacy", "lab"],
  },
  {
    id: "education",
    icon: "🎓",
    title: "Education & EdTech",
    tagline: "School ERP, LMS & coaching platforms",
    summary:
      "Digitize admissions, fees, attendance, exams, live classes, test series, and parent communication — for schools, colleges, and coaching institutes.",
    challenges: [
      "Excel-based admin chaos",
      "Fee collection and reminders",
      "Online exam integrity",
      "Parent-teacher communication gaps",
    ],
    solutions: [
      "School / college management ERP",
      "LMS & online class portals",
      "Coaching test series software",
      "Parent & student mobile apps",
    ],
    relatedServices: ["edtech-lms", "web-development", "mobile-apps"],
    relatedProducts: ["school", "tutorial", "coaching", "exam", "lms"],
  },
  {
    id: "logistics",
    icon: "🚚",
    title: "Logistics & Supply Chain",
    tagline: "Fleet, courier, warehouse & last-mile",
    summary:
      "Courier booking, rider apps, hub management, GPS tracking, COD reconciliation, and warehouse operations for logistics companies at scale.",
    challenges: [
      "Manual dispatch and phone follow-ups",
      "COD mismatches and delays",
      "No real-time fleet visibility",
      "Warehouse pick-pack errors",
    ],
    solutions: [
      "Courier & fleet management systems",
      "Rider and hub mobile apps",
      "Live GPS tracking dashboards",
      "Warehouse & inventory modules",
    ],
    relatedServices: ["logistics-supply-chain", "on-demand-apps", "mobile-apps"],
    relatedProducts: ["logistics", "fleet", "ondemand"],
  },
  {
    id: "ecommerce",
    icon: "🛒",
    title: "E-Commerce & Retail",
    tagline: "D2C stores, B2B ordering & marketplaces",
    summary:
      "Online storefronts, multi-vendor marketplaces, POS integrations, inventory sync, and loyalty programs for retail brands and distributors.",
    challenges: [
      "Fragmented online + offline sales",
      "Inventory sync across channels",
      "Checkout drop-offs",
      "Seller onboarding at scale",
    ],
    solutions: [
      "D2C e-commerce websites & apps",
      "Multi-vendor marketplace platforms",
      "POS, QR & SoftPOS solutions",
      "Inventory & order management",
    ],
    relatedServices: ["ecommerce-marketplace", "mobile-apps", "fintech-payments"],
    relatedProducts: ["ecommerce", "b2b-marketplace", "retail-pos", "inventory"],
  },
  {
    id: "on-demand",
    icon: "⚡",
    title: "On-Demand Services",
    tagline: "Food, home services, cab & hyperlocal",
    summary:
      "Uber-style booking flows, provider apps, real-time dispatch, in-app payments, and admin panels for on-demand business models.",
    challenges: [
      "Matching supply and demand in real time",
      "Provider onboarding and payouts",
      "Customer retention and ratings",
      "Peak-hour scaling",
    ],
    solutions: [
      "Customer, provider & admin apps",
      "Real-time booking & dispatch",
      "Wallet and UPI payment flows",
      "Promotions, referrals & support",
    ],
    relatedServices: ["on-demand-apps", "mobile-apps", "fintech-payments"],
    relatedProducts: ["ondemand", "taxi", "restaurant", "cloud-kitchen"],
  },
  {
    id: "manufacturing",
    icon: "🏭",
    title: "Manufacturing & Operations",
    tagline: "ERP, production & inventory control",
    summary:
      "Production planning, BOM, job work, purchase, sales, quality checks, and plant dashboards for factories and distributors.",
    challenges: [
      "Production vs inventory mismatches",
      "Manual job work tracking",
      "Delayed purchase decisions",
      "No single plant view",
    ],
    solutions: [
      "Manufacturing ERP modules",
      "BOM & job work tracking",
      "Purchase, sales & GST billing",
      "Plant dashboards & reports",
    ],
    relatedServices: ["enterprise-erp-crm", "custom-software"],
    relatedProducts: ["erp", "inventory", "accounting"],
  },
  {
    id: "real-estate",
    icon: "🏢",
    title: "Real Estate & PropTech",
    tagline: "Listings, CRM & property management",
    summary:
      "Property listing portals, broker CRM, rent collection, society management, and construction project tracking for real estate businesses.",
    challenges: [
      "Lead follow-up leakage",
      "Manual rent and maintenance tracking",
      "Scattered listing data",
      "Society billing complexity",
    ],
    solutions: [
      "Property listing & search portals",
      "Broker CRM & lead pipelines",
      "Society / rental management apps",
      "Construction project trackers",
    ],
    relatedServices: ["web-development", "mobile-apps", "custom-software"],
    relatedProducts: ["realestate", "society", "construction"],
  },
  {
    id: "hospitality",
    icon: "🍽️",
    title: "Hospitality & Restaurants",
    tagline: "POS, ordering, kitchen & table management",
    summary:
      "Restaurant POS, table QR ordering, kitchen display, inventory, franchise dashboards, and food delivery integrations.",
    challenges: [
      "Order errors between floor and kitchen",
      "Stock wastage and pilferage",
      "Multi-outlet reporting gaps",
      "Delivery aggregator reconciliation",
    ],
    solutions: [
      "Restaurant POS & billing",
      "QR table ordering systems",
      "Kitchen display (KDS) software",
      "Franchise & inventory control",
    ],
    relatedServices: ["custom-software", "ecommerce-marketplace", "on-demand-apps"],
    relatedProducts: ["restaurant", "hotel", "retail-pos"],
  },
  {
    id: "retail",
    icon: "🏪",
    title: "Retail & Distribution",
    tagline: "Billing, stock & channel sales",
    summary:
      "Retail billing, distributor ordering apps, van sales, scheme management, and GST-ready invoicing for FMCG and retail chains.",
    challenges: [
      "Van sales without connectivity",
      "Scheme and discount complexity",
      "Stock-outs at retail level",
      "Distributor order delays",
    ],
    solutions: [
      "Retail billing & barcode POS",
      "Distributor B2B ordering apps",
      "Van sales with offline sync",
      "Scheme & discount engines",
    ],
    relatedServices: ["enterprise-erp-crm", "mobile-apps", "ecommerce-marketplace"],
    relatedProducts: ["retail-pos", "supermarket", "ecommerce", "inventory"],
  },
];

export function getIndustry(id) {
  return INDUSTRIES.find((i) => i.id === id) ?? null;
}

export function getAllIndustryIds() {
  return INDUSTRIES.map((i) => i.id);
}
