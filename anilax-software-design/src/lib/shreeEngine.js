import { COMPANY_EMAIL, COMPANY_PHONE } from "../data/company";
import {
  SHREE_PERSONA,
  SHREE_SUGGESTIONS,
  isConversationalGreeting,
  isHindiGreeting,
  matchShreeProduct,
  matchShreeKnowledge,
} from "../data/shreeKnowledge";
import {
  matchClientProfile,
  getProfileProductLinks,
  getProfileById as getProfileByIdFromData,
  getProfileSuggestions,
  SHREE_CLIENT_PROFILES,
} from "../data/shreeProfiles";
import { submitShreeConversation } from "./siteApi";
import { fetchShreeAiReply } from "./shreeAiClient";

const HINDI_MARKERS =
  /[\u0900-\u097F]|kya|kaise|kab|kahan|kyun|hai|hain|ho|hoon|chahiye|chahie|batao|bataye|bataiye|samjha|samjh|kitna|karna|krna|karo|kro|banana|banw|mujhe|aap|mera|meri|hamko|hamein|accha|theek|dhanyawad|shukriya|namaste|prnam|software|chahie|baat|bol|bolo|hindi|mein|main|poochna|puchna|samjhao|samjhaye|bata|dekho|karo/i;

function parseLanguagePreference(text) {
  const q = text.toLowerCase();
  if (
    /hindi\s*me|hindi\s*mein|hindi\s*main|hindi\s*bol|hindi\s*baat|hindi\s*jawab|hindi\s*reply|speak\s*hindi|in\s*hindi|pure\s*hindi|hindi\s*me\s*baat/i.test(
      q,
    )
  ) {
    return "hi";
  }
  if (
    /english\s*me|english\s*mein|english\s*main|english\s*bol|speak\s*english|in\s*english|english\s*baat|english\s*reply/i.test(
      q,
    )
  ) {
    return "en";
  }
  if (/hinglish|mix\s*language|dono\s*language/i.test(q)) {
    return "hinglish";
  }
  return null;
}

export function detectLanguage(text) {
  if (/[\u0900-\u097F]/.test(text)) return "hi";
  const pref = parseLanguagePreference(text);
  if (pref) return pref;
  if (/^(me|main)\s+.+\s*(hu|hoon|hun)\b/i.test(text.trim())) return "hi";
  const words = text.toLowerCase().split(/\s+/);
  let hindiScore = 0;
  for (const w of words) {
    if (HINDI_MARKERS.test(w)) hindiScore += 1;
  }
  if (hindiScore >= 1) return "hi";
  return "en";
}

export function createShreeSession() {
  return {
    lang: "hinglish",
    userName: "",
    userEmail: "",
    userPhone: "",
    userProfile: "",
    profileIntroduced: false,
    topic: "",
    messageCount: 0,
    lowConfidenceStreak: 0,
    adminSynced: false,
    history: [],
    greeted: false,
  };
}

function pickLang(session, queryLang) {
  if (queryLang === "hi") return "hi";
  if (queryLang === "en") return "en";
  if (session.lang === "hi" || session.lang === "en") return session.lang;
  return "hinglish";
}

function t(session, en, hi, hinglish) {
  const lang = session.lang;
  if (lang === "hi") return hi;
  if (lang === "en") return en;
  return hinglish ?? hi;
}

function humanDelay(text) {
  return 450 + Math.random() * 500 + Math.min(text.length * 8, 900);
}

export function getHumanTypingDelay(text) {
  return humanDelay(text);
}

function parseContact(text) {
  const email = text.match(/[\w.+-]+@[\w.-]+\.\w{2,}/)?.[0] ?? "";
  const phone =
    text.match(/(?:\+91|91)?[\s-]?[6-9]\d{9}/)?.[0]?.replace(/[\s-]/g, "") ?? "";
  return { email, phone };
}

const NOT_A_NAME =
  /^(ca|dr|mr|ms|mrs|hi|hey|hello|namaste|shree|anilax|team|hu|hoon|hun|am|the|a|an)$/i;

function parseName(text) {
  const patterns = [
    /(?:mera naam|my name is|i am|i'm|this is)\s+([A-Za-z\u0900-\u097F]{2,30})/i,
    /(?:naam|name)[:\s]+([A-Za-z\u0900-\u097F]{2,30})/i,
  ];
  for (const p of patterns) {
    const m = text.match(p);
    const candidate = m?.[1]?.trim();
    if (
      candidate &&
      !NOT_A_NAME.test(candidate) &&
      !/shree|anilax|team|customer/i.test(candidate) &&
      !matchClientProfile(candidate)
    ) {
      return candidate;
    }
  }
  return "";
}

function isProfileIntroduction(text) {
  const q = text.toLowerCase();
  return (
    /^(main|me|i am|i'm|mera|my|hum|ham)/i.test(q) ||
    /\b(hu|hoon|hun|profession|kaam|business|field|line)\b/i.test(q) ||
    text.trim().split(/\s+/).length <= 12
  );
}

function getProfileById(id) {
  return getProfileByIdFromData(id);
}

function suggestionLang(session) {
  if (session.lang === "en" || session.lang === "hi") return session.lang;
  return "hinglish";
}

function pickProfileText(session, block) {
  if (session.lang === "en") return block.en;
  if (session.lang === "hi") return block.hi;
  return block.hinglish ?? block.hi;
}

function buildProfileReply(session, profile) {
  const name = session.userName ? `, ${session.userName}` : "";
  session.userProfile = profile.id;
  session.topic = profile.label;

  if (!session.profileIntroduced) {
    session.profileIntroduced = true;
    const comfort = pickProfileText(session, profile.comfort);
    const discover = pickProfileText(session, profile.discover);
    return {
      text: `${comfort}${name}\n\n${discover}`,
      links: [],
      confidence: "high",
      escalate: false,
    };
  }

  const comfort = pickProfileText(session, profile.comfort);
  const recommend = pickProfileText(session, profile.recommend);
  const links = [
    ...getProfileProductLinks(profile),
    ...(profile.services ?? []),
    { label: t(session, "Talk to team", "Team se baat", "Team se connect"), action: "contact" },
  ];

  return {
    text: `${comfort}\n\n${recommend}`,
    links,
    confidence: "high",
    escalate: false,
  };
}

function classifyIntent(query, session) {
  const q = query.toLowerCase();

  if (parseLanguagePreference(query)) return "lang_pref";

  if (isConversationalGreeting(query)) return "greet";

  if (/^(hi\b|hello\b|hey\b|namaste|pranam|good morning|good evening|kaise ho|kese ho|kya haal)/i.test(q)) {
    return "greet";
  }
  if (/dhanyawad|shukriya|thank|thanks|thx/i.test(q)) {
    return "thanks";
  }
  const profile = matchClientProfile(query);
  if (profile && isProfileIntroduction(query)) return "profile";
  if (
    /human|person|real|call|phone|team se|baat kar|connect|callback|sales|demo|quote|price|pricing|kitna|cost|fees|admin|manager/i.test(
      q,
    )
  ) {
    return "handoff";
  }
  if (/privacy|safe|data|secure|trust/i.test(q)) {
    return "trust";
  }
  if (!isConversationalGreeting(query) && matchShreeProduct(query)) return "product";
  if (matchShreeKnowledge(query)) return "knowledge";
  return "unknown";
}

function buildProductDeepAnswer(product, session) {
  const name = session.userName ? `, ${session.userName}` : "";
  const detail = product.detail;
  const moduleItems = detail?.deliverables?.items ?? detail?.howWeBuild?.steps;
  const intro =
    detail?.safeIntro?.paragraphs?.[0] ??
    detail?.overview ??
    product.desc;

  if (session.lang === "hi") {
    let text = `Bilkul${name} — **${product.title}** ke baare mein detail se batati hoon.\n\n`;
    text += `${intro}\n\n`;
    if (product.tagline) text += `*${product.tagline}*\n\n`;
    if (moduleItems?.length) {
      const list = moduleItems
        .slice(0, 5)
        .map((m) => (typeof m === "string" ? m : m.title || m.text))
        .join(" · ");
      text += `**Modules / deliverables:** ${list}\n\n`;
    }
    if (detail?.timeline?.phases?.length) {
      text += `**Timeline:** ${detail.timeline.phases.slice(0, 3).map((p) => p.label).join(" → ")}\n\n`;
    }
    text += `Aapka use-case thoda batayenge? Main notes le kar **admin team ko bhej deti hoon** taaki woh aapko call kar saken.`;
    return text;
  }

  if (session.lang === "en") {
    let text = `Sure${name} — let me walk you through **${product.title}** properly.\n\n`;
    text += `${intro}\n\n`;
    if (detail?.howWeBuild?.steps?.length) {
      text += `**How we build:** ${detail.howWeBuild.steps.map((s) => s.title).join(" → ")}\n\n`;
    }
    if (detail?.deliverables?.items?.length) {
      text += `**Key modules:** ${detail.deliverables.items.slice(0, 5).join(" · ")}\n\n`;
    }
    text += `Share your workflow — I'll **pass a clear summary to our admin team** so someone calls you back.`;
    return text;
  }

  let text = `Haan${name}, **${product.title}** — detail mein samjhati hoon.\n\n`;
  text += `${intro}\n\n`;
  if (product.tags?.length) text += `**Stack:** ${product.tags.join(", ")}\n\n`;
  text += `Exact requirement batao — main **admin team ko forward** kar dungi, wahan se real person connect karega.`;
  return text;
}

function buildKnowledgeAnswer(chunk, session) {
  const name = session.userName ? `, ${session.userName}` : "";
  const opener =
    session.lang === "hi"
      ? `Achha sawaal hai${name}. `
      : session.lang === "en"
        ? `Good question${name}. `
        : `Samajh gayi${name}. `;

  let body = chunk.answer;
  if (session.lang === "hi" || session.lang === "hinglish") {
    body += `\n\nAur detail chahiye ho to poochiye — ya main **team ko aapki query bhej doon**?`;
  } else {
    body += `\n\nWant me to go deeper, or shall I **route this to our team** for a call?`;
  }

  return opener + body;
}

function buildHandoffReply(session, hasContact) {
  if (hasContact) {
    return t(
      session,
      `Perfect — I've noted your details and **sent this conversation to our admin team**. Someone from Anilax will reach out on ${COMPANY_PHONE} or email soon. Usually within a few hours on working days.`,
      `Theek hai — maine aapki details le li hain aur **poori baat admin team ko bhej di hai**. Anilax ki team jald ${COMPANY_PHONE} ya email par contact karegi.`,
      `Done — **admin team ko aapki poori query bhej di**. Koi real person jald call/email karega. ${COMPANY_PHONE} par bhi reach kar sakte ho.`,
    );
  }

  return t(
    session,
    `Of course — I'll connect you with a real person. Share your **name + email or phone** here, and I'll instantly forward everything to our team (no repeat explaining).`,
    `Bilkul — main aapko **asli team member** se connect karwaungi. Bas **naam + email ya phone** likh dijiye, main admin ko poori chat bhej dungi.`,
    `Haan, main **team se connect** karwa deti hoon. Bas apna **naam + email/phone** bhej do — main admin panel par forward kar dungi.`,
  );
}

function buildUnknownReply(session) {
  session.lowConfidenceStreak += 1;

  if (session.lowConfidenceStreak >= 2) {
    return {
      text: buildHandoffReply(session, false),
      links: [{ label: t(session, "Open contact form", "Contact form", "Contact form"), action: "contact" }],
      confidence: "low",
      escalate: false,
    };
  }

  return {
    text: t(
      session,
      `Hmm, let me think about that differently. We build **120+ software products** — ERP, hospital, UPI, AePS, logistics, school ERP, and custom apps.\n\nTell me which industry you're in, or name a product (e.g. "hospital software", "UPI app"). I'll explain deeply and can **forward to our team** if needed.`,
      `Thoda aur clear batayenge? Hum **120+ software** banate hain — hospital, UPI, AePS, ERP, school, logistics.\n\nKaunsa domain hai aapka? Main detail mein samjhaungi aur zarurat par **admin team ko bhej dungi**.`,
      `Ek minute — aap thoda aur batao. Hum **ERP, hospital HMS, UPI app, AePS BC, e-commerce** sab karte hain.\n\nAap kis type ka software dhundh rahe ho? Deep explain karungi, aur chaho to **team ko forward** bhi kar dungi.`,
    ),
    links: [
      { label: "Software catalog", href: "/software" },
      { label: "Services", href: "/services" },
    ],
    confidence: "low",
    escalate: false,
  };
}

export function getShreeWelcome(pathname) {
  void pathname;
  return {
    role: "assistant",
    text: `Namaste! **Main Anilax ki Shree AI hoon** — aapki personal guide.\n\nAaj aap kya explore karna chahte ho?`,
    links: [
      { label: "Software products", href: "/software" },
      { label: "Our services", href: "/services" },
    ],
    special: true,
  };
}

export function getShreeSuggestions(session, pathname = "/") {
  const lang = suggestionLang(session);

  if (session.userProfile) {
    const profile = getProfileById(session.userProfile);
    const stage = session.messageCount <= 1 ? "discover" : "recommend";
    const chips = profile ? getProfileSuggestions(profile, stage, lang) : null;
    if (chips?.length) return chips;
  }

  if (session.topic) {
    const topic = session.topic.toLowerCase();
    if (/account|gst|ca|billing/i.test(topic)) {
      return lang === "en"
        ? ["GST billing modules", "CRM for clients", "Client portal", "Get a quote"]
        : lang === "hi"
          ? ["GST billing modules", "Clients ke liye CRM", "Client portal", "Quote chahiye"]
          : ["GST billing detail", "CRM for clients", "Client portal", "Quote bhejo"];
    }
    if (/hospital|clinic|health/i.test(topic)) {
      return lang === "en"
        ? ["OPD workflow", "IPD + billing", "Pharmacy module", "Book demo"]
        : ["OPD workflow", "IPD billing", "Pharmacy module", "Demo chahiye"];
    }
    if (/aeps|upi|payment|fintech/i.test(topic)) {
      return lang === "en"
        ? ["AePS integration steps", "UPI app timeline", "API sandbox access", "Talk to team"]
        : ["AePS integration", "UPI app timeline", "API sandbox", "Team se baat"];
    }
  }

  if (pathname.startsWith("/software/")) {
    const id = pathname.split("/")[2];
    if (id === "accounting") {
      return lang === "en"
        ? ["GST + e-invoice support", "Multi-client ledgers", "Reports for CAs", "Connect team"]
        : ["GST e-invoice", "Multi-client ledger", "CA reports", "Team se connect"];
    }
    if (id === "hospital") {
      return lang === "en"
        ? ["OPD module", "IPD + billing", "Lab integration", "Demo call"]
        : ["OPD module", "IPD billing", "Lab link", "Demo chahiye"];
    }
  }

  if (pathname === "/b2b" || pathname.startsWith("/b2b")) {
    return lang === "en"
      ? ["AePS for BC network", "API integration", "Retailer onboarding", "Contact sales"]
      : ["AePS BC network", "API integration", "Retailer onboarding", "Sales se baat"];
  }

  return SHREE_SUGGESTIONS[lang] ?? SHREE_SUGGESTIONS.hinglish;
}

function shouldAutoEscalate(session, intent, confidence) {
  if (session.adminSynced) return false;
  if (intent === "handoff") return true;
  if (intent === "product" && session.messageCount >= 2) return true;
  if (intent === "knowledge" && (session.topic === "pricing" || session.topic === "contact")) return true;
  if (confidence === "low" && session.lowConfidenceStreak >= 2) return true;
  return false;
}

function buildTranscript(session, pathname) {
  const lines = session.history.map((m) => `${m.role === "user" ? "Customer" : "Shree"}: ${m.text}`);
  return [
    `[Shree AI Conversation Handoff]`,
    `Page: ${pathname}`,
    `Language: ${session.lang}`,
    `Name: ${session.userName || "—"}`,
    `Profile: ${session.userProfile || "—"}`,
    `Email: ${session.userEmail || "—"}`,
    `Phone: ${session.userPhone || "—"}`,
    `Topic: ${session.topic || "—"}`,
    ``,
    ...lines,
  ].join("\n");
}

export async function syncShreeToAdmin(session, pathname, reason) {
  if (session.adminSynced) return { ok: true, already: true };

  try {
    await submitShreeConversation({
      name: session.userName || "Shree AI Visitor",
      email: session.userEmail || "shree-chat@visitor.anilax",
      phone: session.userPhone || "",
      topic: session.topic || "General inquiry",
      transcript: buildTranscript(session, pathname),
      pathname,
      reason,
    });
    session.adminSynced = true;
    return { ok: true };
  } catch {
    return { ok: false };
  }
}

export function processShreeMessageLocal(query, session, pathname) {
  const trimmed = query.trim();
  if (!trimmed) {
    return {
      text: t(session, "Type your question…", "Apna sawaal likhiye…", "Kuch poochna ho to likho…"),
      links: [],
      confidence: "low",
      delay: 300,
    };
  }

  const langPref = parseLanguagePreference(trimmed);
  const queryLang = detectLanguage(trimmed);
  session.lang = langPref ?? pickLang(session, queryLang);
  if (isConversationalGreeting(trimmed) && isHindiGreeting(trimmed)) {
    session.lang = "hi";
  }
  session.messageCount += 1;

  const contact = parseContact(trimmed);
  if (contact.email) session.userEmail = contact.email;
  if (contact.phone) session.userPhone = contact.phone.replace(/^91/, "+91-");
  const parsedName = parseName(trimmed);
  if (parsedName) session.userName = parsedName;

  session.history.push({ role: "user", text: trimmed });

  const intent = classifyIntent(trimmed, session);
  let result;
  let matchedProduct = null;
  let matchedKnowledge = null;
  let matchedProfile = null;

  if (intent === "profile") {
    matchedProfile = matchClientProfile(trimmed);
    session.lowConfidenceStreak = 0;
    result = buildProfileReply(session, matchedProfile);
  } else if (intent === "lang_pref") {
    result = {
      text: t(
        session,
        `Sure — I'll reply in English from now on. What would you like to know about our software or payments?`,
        `Theek hai! Ab se main **Hindi mein** baat karungi. Kya jaanna chahte ho — hospital software, UPI, AePS, ERP?`,
        `Okay — Hinglish mein chalte hain. Software, payments, APIs — kya poochna hai?`,
      ),
      links: [],
      confidence: "high",
    };
  } else if (intent === "greet") {
    const name = session.userName ? `, ${session.userName}` : "";
    const hindiGreet = isHindiGreeting(trimmed);
    result = {
      text: hindiGreet
        ? `Namaskar${name}! Main Shree hoon, Anilax Software ki taraf se. Aap kaise hain? Bataiye aaj kya help chahiye — software, GST, hospital, payments — kuch bhi pooch sakte ho.`
        : t(
            session,
            `Hey${name}! I'm doing well, thanks for asking. I'm Shree from Anilax — tell me what you're looking for and I'll help properly.`,
            `Namaskar${name}! Main bilkul theek hoon. Main Shree hoon, Anilax Software se — aaj kya jaanna chahte ho?`,
            `Namaskar${name}! Main theek hoon — batao kya help chahiye.`,
          ),
      links: [],
      confidence: "high",
    };
  } else if (intent === "thanks") {
    result = {
      text: t(
        session,
        `You're welcome! Anything else I can explain about our products?`,
        `Koi baat nahi! Aur kuch poochna ho to likhiye.`,
        `Welcome! Aur help chahiye ho to batao.`,
      ),
      links: [],
      confidence: "high",
    };
  } else if (intent === "trust") {
    result = {
      text: t(
        session,
        `Your data stays with Anilax under our privacy policy. Shree uses only public product knowledge on this site — when I forward to admin, it's so a real person can help you, not to sell your chat.`,
        `Aapka data safe rehta hai. Main sirf product knowledge se jawab deti hoon. Admin ko tab bhejti hoon jab aap team se baat chahte ho.`,
        `Trust rakho — privacy policy ke hisaab se data handle hota hai. Admin forward tab hota hai jab aapko real person chahiye.`,
      ),
      links: [{ label: "Privacy policy", href: "/privacy" }],
      confidence: "high",
    };
  } else if (intent === "handoff") {
    const hasContact = Boolean(session.userEmail || session.userPhone || session.userName);
    result = {
      text: buildHandoffReply(session, hasContact),
      links: hasContact
        ? []
        : [{ label: t(session, "Contact form", "Contact form", "Contact form"), action: "contact" }],
      confidence: "high",
      escalate: hasContact,
    };
  } else if (intent === "product") {
    const product = matchShreeProduct(trimmed);
    matchedProduct = product;
    session.topic = product.title;
    session.lowConfidenceStreak = 0;
    if (session.userProfile) {
      const prof = getProfileById(session.userProfile);
      const comfort = prof ? `${pickProfileText(session, prof.comfort)}\n\n` : "";
      result = {
        text: comfort + buildProductDeepAnswer(product, session),
        links: [
          { label: t(session, "View page", "Page dekhein", "Page dekho"), href: product.href },
          { label: t(session, "Talk to team", "Team se baat", "Team se connect"), action: "contact" },
        ],
        confidence: "high",
        escalate: session.messageCount >= 2,
      };
    } else {
      result = {
        text: buildProductDeepAnswer(product, session),
        links: [
          { label: t(session, "View page", "Page dekhein", "Page dekho"), href: product.href },
          { label: t(session, "Talk to team", "Team se baat", "Team se connect"), action: "contact" },
        ],
        confidence: "high",
        escalate: session.messageCount >= 2,
      };
    }
  } else if (intent === "knowledge") {
    const chunk = matchShreeKnowledge(trimmed);
    matchedKnowledge = chunk;
    session.lowConfidenceStreak = 0;
    if (chunk.id.includes("contact") || chunk.id.includes("pricing")) {
      session.topic = chunk.id;
    }
    result = {
      text: buildKnowledgeAnswer(chunk, session),
      links: chunk.links ?? [],
      confidence: "high",
      escalate: chunk.id === "pricing" || chunk.id === "contact",
    };
  } else {
    if (session.userProfile) {
      const prof = getProfileById(session.userProfile);
      if (prof && session.profileIntroduced) {
        matchedProfile = prof;
        result = buildProfileReply(session, prof);
      } else {
        result = buildUnknownReply(session);
      }
    } else {
      result = buildUnknownReply(session);
    }
  }

  if (shouldAutoEscalate(session, intent, result.confidence)) {
    result.escalate = true;
  }

  session.history.push({ role: "assistant", text: result.text });

  return {
    ...result,
    intent,
    product: matchedProduct,
    knowledge: matchedKnowledge,
    profile: matchedProfile,
    delay: getHumanTypingDelay(result.text),
  };
}

export async function processShreeMessage(query, session, pathname) {
  const local = processShreeMessageLocal(query, session, pathname);

  const skipAi = ["greet", "thanks", "lang_pref"].includes(local.intent);
  if (skipAi) {
    return local;
  }

  try {
    const aiText = await fetchShreeAiReply({
      query: query.trim(),
      session,
      pathname,
      context: {
        intent: local.intent,
        product: local.product
          ? {
              title: local.product.title,
              desc: local.product.desc,
              href: local.product.href,
            }
          : null,
        knowledge: local.knowledge
          ? { answer: local.knowledge.answer, id: local.knowledge.id }
          : null,
        profile: local.profile
          ? {
              id: local.profile.id,
              label: local.profile.label,
              recommend: local.profile.recommend,
              stage: session.profileIntroduced ? "recommend" : "comfort",
            }
          : session.userProfile
            ? { id: session.userProfile, stage: "ongoing" }
            : null,
      },
    });

    if (aiText) {
      session.history[session.history.length - 1].text = aiText;
      return {
        ...local,
        text: aiText,
        delay: getHumanTypingDelay(aiText),
        ai: true,
      };
    }
  } catch {
    /* rule-based fallback */
  }

  return local;
}

export function getRouteHint(pathname) {
  if (pathname.startsWith("/software")) return "Yahan se software products ke baare mein pooch sakte ho.";
  if (pathname.startsWith("/services")) return "Is service ke baare mein detail mein poochiye.";
  if (pathname === "/b2b") return "AePS, BC network, API — kuch bhi poochiye.";
  return "Software, payments, AePS, APIs — kisi bhi topic par baat kijiye.";
}

/** Backward-compatible exports */
export function getAiResponse(query, pathname, session = createShreeSession()) {
  return processShreeMessageLocal(query, session, pathname);
}

export function getWelcomeMessage(pathname) {
  return getShreeWelcome(pathname);
}

export function getSuggestions(pathname, session = createShreeSession()) {
  void pathname;
  return getShreeSuggestions(session);
}

export { SHREE_PERSONA };
