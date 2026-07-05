/** Client profession / business profiles — Shree uses these for warm, tailored replies */

export const SHREE_CLIENT_PROFILES = [
  {
    id: "ca",
    label: "Chartered Accountant",
    labelHi: "Chartered Accountant (CA)",
    patterns: [
      /\bca\b/i,
      /chartered\s*account/i,
      /cac\b/i,
      /accountant/i,
      /tax\s*consult/i,
      /audit\s*firm/i,
      /ca\s*firm/i,
    ],
    excludeIf: /\bcallback\b|\bcard\b|\bapi\b/i,
    comfort: {
      en: "That's great — CAs handle so much trust from clients. I completely understand how important accuracy, GST compliance, and client deadlines are for your practice.",
      hi: "Bahut accha — CA profession mein clients ka poora bharosa hota hai. Main samajhti hoon kitni **accuracy, GST compliance, aur deadlines** matter karti hain aapke liye.",
      hinglish:
        "Bahut accha — CA line mein trust sabse important hai. Main samajh sakti hoon GST, filing, aur client management kitna heavy hota hai.",
    },
    discover: {
      en: "Are you running a solo practice or a CA firm? Roughly how many clients — and do you need GST billing, ledgers, client portal, or a full practice ERP?",
      hi: "Aap **solo practice** chala rahe hain ya **CA firm**? Kitne clients hain approx — aur kya chahiye: **GST billing, ledgers, client portal**, ya poora practice ERP?",
      hinglish:
        "Solo CA ho ya firm? Kitne clients handle karte ho — GST billing, ledger, client portal chahiye ya full practice software?",
    },
    recommend: {
      en: "For CAs we usually suggest **Accounting, Billing & GST Software** (ledgers, e-invoice hooks, reports), plus **CRM** for client follow-ups. Many firms also want a **custom client portal** — we build that too.",
      hi: "CA ke liye hum usually **Accounting, Billing & GST Software** (ledger, e-invoice, reports), saath mein **CRM** client follow-up ke liye suggest karte hain. Kai firms **custom client portal** bhi banwati hain — woh bhi hum karte hain.",
      hinglish:
        "CA ke liye best: **Accounting & GST software**, **CRM** for clients, aur agar chaho to **custom portal** — sab Anilax banata hai.",
    },
    products: [
      { id: "accounting", label: "Accounting & GST" },
      { id: "crm", label: "CRM for clients" },
      { id: "erp", label: "ERP / practice ops" },
    ],
    services: [{ href: "/services/erp-software", label: "ERP development" }],
    suggestions: {
      discover: {
        en: ["Solo practice, ~15 clients", "CA firm, GST billing needed", "Ledger + client portal", "Connect me to team"],
        hi: ["Solo practice, 15 clients", "CA firm, GST billing chahiye", "Ledger + client portal chahiye", "Team se connect karo"],
        hinglish: ["Solo CA hu, 15 clients", "Firm hai, GST billing chahiye", "Ledger + portal chahiye", "Team se baat karo"],
      },
      recommend: {
        en: ["Accounting & GST software detail", "CRM for CA clients", "Custom client portal cost?", "Book a demo call"],
        hi: ["Accounting GST software detail mein", "CA clients ke liye CRM", "Custom portal kitne mein?", "Demo call book karo"],
        hinglish: ["Accounting GST software detail", "CRM for clients", "Custom portal cost?", "Demo chahiye"],
      },
    },
  },
  {
    id: "doctor",
    label: "Doctor / Healthcare",
    labelHi: "Doctor / Healthcare",
    patterns: [/doctor/i, /dr\.?\s/i, /hospital/i, /clinic/i, /medical/i, /healthcare/i],
    comfort: {
      en: "Healthcare is demanding — patient care comes first. I get that software should simplify OPD, billing, and records, not add stress.",
      hi: "Healthcare mein patient care sabse pehle — main samajhti hoon software **OPD, billing, records** easy banaye, tension na badhaye.",
      hinglish: "Doctor/clinic line tough hai — software ko OPD aur billing easy banana chahiye, complicated nahi.",
    },
    discover: {
      en: "Clinic or multi-specialty hospital? OPD only or IPD, lab, pharmacy too?",
      hi: "**Clinic** hai ya **hospital**? Sirf OPD ya IPD, lab, pharmacy bhi?",
      hinglish: "Chhota clinic hai ya hospital? OPD, IPD, lab — kya chahiye?",
    },
    recommend: {
      en: "We build **Hospital / HMS software** — appointments, OPD/IPD, billing, pharmacy linkage, and admin dashboards.",
      hi: "Hum **Hospital / HMS software** banate hain — appointments, OPD/IPD, billing, pharmacy, admin dashboard.",
      hinglish: "Hospital HMS — OPD, billing, pharmacy, appointments — sab custom ya ready modules.",
    },
    products: [{ id: "hospital", label: "Hospital HMS" }],
    services: [{ href: "/services/healthcare-software", label: "Healthcare software" }],
    suggestions: {
      discover: {
        en: ["Small clinic, OPD only", "Multi-specialty hospital", "Need lab + pharmacy module", "Connect me to team"],
        hi: ["Chhota clinic, sirf OPD", "Multi-specialty hospital", "Lab + pharmacy module chahiye", "Team se connect karo"],
        hinglish: ["Clinic hai, OPD only", "Hospital hai, IPD bhi", "Lab pharmacy module", "Team se baat karo"],
      },
      recommend: {
        en: ["Hospital HMS features", "OPD + billing workflow", "Pharmacy integration", "Demo for my clinic"],
        hi: ["Hospital HMS features batao", "OPD + billing kaise kaam karega", "Pharmacy integration", "Clinic ke liye demo"],
        hinglish: ["HMS features detail", "OPD billing workflow", "Pharmacy link chahiye", "Demo book karo"],
      },
    },
  },
  {
    id: "retailer",
    label: "Retailer / Shop owner",
    labelHi: "Retailer / Dukaan",
    patterns: [/retail/i, /dukaan/i, /shop\s*owner/i, /store\s*owner/i, /kirana/i, /merchant/i],
    comfort: {
      en: "Running a store means speed at billing and clear stock — I understand that completely.",
      hi: "Dukaan chalana matlab **fast billing aur clear stock** — main yeh bilkul samajhti hoon.",
      hinglish: "Retail mein speed billing aur stock clear hona — samajh aa jata hai.",
    },
    discover: {
      en: "Single outlet or multiple branches? Need POS, GST invoices, inventory, or online orders too?",
      hi: "Ek outlet ya **multiple branches**? POS, GST invoice, inventory, online order — kya chahiye?",
      hinglish: "Kitni branches? POS, GST bill, inventory, online — kya priority hai?",
    },
    recommend: {
      en: "**POS & Retail billing** with GST, inventory, loyalty, and multi-store sync — we also do e-commerce if you want online sales.",
      hi: "**POS & Retail billing** GST ke saath, inventory, loyalty, multi-store — online ke liye e-commerce bhi.",
      hinglish: "POS + GST billing + inventory — multi-store bhi, online shop bhi kar sakte ho.",
    },
    products: [
      { id: "pos", label: "POS billing" },
      { id: "ecommerce", label: "E-commerce" },
    ],
    services: [{ href: "/services/ecommerce-development", label: "E-commerce" }],
    suggestions: {
      discover: {
        en: ["Single shop, POS billing", "3 branches, inventory sync", "GST invoice + stock", "Connect me to team"],
        hi: ["Ek dukaan, POS billing", "3 branches, inventory sync", "GST invoice + stock chahiye", "Team se connect karo"],
        hinglish: ["Single shop, POS chahiye", "Multiple branches", "GST bill + inventory", "Team se baat karo"],
      },
      recommend: {
        en: ["POS + GST billing detail", "Multi-store inventory", "Online store add karna hai", "Demo for my shop"],
        hi: ["POS + GST billing detail", "Multi-store inventory", "Online store bhi chahiye", "Dukaan ke liye demo"],
        hinglish: ["POS GST detail", "Multi-store stock", "Online shop bhi", "Demo chahiye"],
      },
    },
  },
  {
    id: "fintech",
    label: "Fintech / BC / Payments",
    labelHi: "Fintech / Payments",
    patterns: [/fintech/i, /bc\s*network/i, /business correspondent/i, /aeps/i, /upi/i, /payment/i, /nbfc/i],
    comfort: {
      en: "Fintech moves fast — compliance and uptime are everything. You're in the right place; that's our core strength.",
      hi: "Fintech mein **compliance aur uptime** sab kuch hai — aap sahi jagah aaye, yeh hamari core strength hai.",
      hinglish: "Payments/fintech — compliance + scale. Anilax ka main kaam yahi hai.",
    },
    discover: {
      en: "AePS network, UPI app, payment gateway, or API integration — which rail are you building on?",
      hi: "**AePS network**, UPI app, gateway, ya API — kis rail par kaam chal raha hai?",
      hinglish: "AePS, UPI, gateway ya API — kya build kar rahe ho?",
    },
    recommend: {
      en: "We offer **AePS portals & APIs**, **UPI apps**, payment gateways, and full sandbox-to-go-live support with NPCI-aligned flows.",
      hi: "**AePS portal/API**, **UPI app**, gateway — sandbox se go-live tak NPCI-aligned support.",
      hinglish: "AePS, UPI, APIs — portal + integration, full go-live support.",
    },
    products: [
      { id: "aeps", label: "AePS" },
      { id: "upi", label: "UPI app" },
      { id: "gateway", label: "Payment gateway" },
    ],
    services: [{ href: "/services/fintech-payments", label: "Fintech services" }],
    suggestions: {
      discover: {
        en: ["AePS BC network setup", "UPI app for my brand", "Payment gateway integration", "Connect me to team"],
        hi: ["AePS BC network setup", "Apna UPI app banana hai", "Payment gateway integration", "Team se connect karo"],
        hinglish: ["AePS BC network", "UPI app banwani hai", "Gateway integration", "Team se baat karo"],
      },
      recommend: {
        en: ["AePS API vs portal?", "UPI app development cost", "Sandbox + go-live process", "Talk to fintech team"],
        hi: ["AePS API ya portal?", "UPI app cost kitni?", "Sandbox se go-live process", "Fintech team se baat"],
        hinglish: ["AePS API vs portal", "UPI app kitne mein", "Go-live process kya hai", "Team se connect"],
      },
    },
  },
];

export function matchClientProfile(text) {
  const q = text.toLowerCase();
  for (const profile of SHREE_CLIENT_PROFILES) {
    for (const pattern of profile.patterns) {
      if (pattern.test(q)) {
        if (profile.excludeIf?.test(q)) continue;
        return profile;
      }
    }
  }
  return null;
}

export function getProfileById(id) {
  return SHREE_CLIENT_PROFILES.find((p) => p.id === id) ?? null;
}

export function getProfileSuggestions(profile, stage, lang) {
  const bucket = profile.suggestions?.[stage];
  if (!bucket) return null;
  return bucket[lang] ?? bucket.hinglish ?? bucket.en ?? null;
}

export function getProfileProductLinks(profile) {
  return (profile.products ?? []).map((p) => ({
    label: p.label,
    href: `/software/${p.id}`,
  }));
}
