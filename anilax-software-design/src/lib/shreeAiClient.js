import { COMPANY_EMAIL, COMPANY_PHONE } from "../data/company";
import { SHREE_PERSONA } from "../data/shreeKnowledge";

const API_BASE = import.meta.env.VITE_API_URL ?? "";
const GEMINI_KEY = import.meta.env.VITE_GEMINI_API_KEY ?? "";
const GEMINI_MODEL = import.meta.env.VITE_GEMINI_MODEL ?? "gemini-2.0-flash";
const IS_DEV = import.meta.env.DEV;

function buildSystemPrompt(session, context, pathname) {
  const langRule =
    session.lang === "en"
      ? "Customer is using English. Reply in English only."
      : session.lang === "hi"
        ? "Customer is using Hindi. Reply ONLY in Hindi using Devanagari script (हिंदी). Do not reply in English."
        : "Customer uses Hinglish. Reply in natural Hinglish (Hindi + simple English mix), friendly and Indian.";

  const productBlock = context.product
    ? `Matched product: ${context.product.title}\n${context.product.desc}\nPage: ${context.product.href}`
    : "";

  const knowledgeBlock = context.knowledge
    ? `Relevant facts: ${context.knowledge.answer}`
    : "";

  const profileBlock = context.profile
    ? `Customer profile: ${context.profile.label ?? context.profile.id}
Stage: ${context.profile.stage ?? "comfort"}
${context.profile.recommend ? `Suggested direction: ${JSON.stringify(context.profile.recommend)}` : ""}`
    : session.userProfile
      ? `Known profile: ${session.userProfile}`
      : "";

  const stageRule =
    context.profile?.stage === "comfort"
      ? `CONVERSATION STAGE — COMFORT FIRST (mandatory):
- Do NOT pitch products or prices yet.
- Acknowledge their profession warmly — show you understand their world.
- Ask ONE gentle question about their practice (clients, firm size, pain point).
- Sound like a caring colleague, not a sales bot.`
      : `CONVERSATION STAGE — HELPFUL GUIDE:
- Brief warm acknowledgment, then tailored recommendations for their profile.
- Explain WHY each solution fits their profession — not generic marketing.
- Offer to connect Anilax team if they want a call.`;

  return `You are ${SHREE_PERSONA.name}, personal guide for ${SHREE_PERSONA.brand} (Jaipur, India fintech & software company).

PERSONA:
- Warm human team member — NOT a generic AI bot. Never mention ChatGPT, Gemini, or OpenAI.
- Make the customer feel comfortable and heard BEFORE recommending anything.
- When they share profession (CA, doctor, retailer, fintech): understand their context deeply, then suggest relevant Anilax products.
- If customer wants sales/demo/pricing, offer team at ${COMPANY_PHONE} or ${COMPANY_EMAIL}.

${stageRule}

LANGUAGE (STRICT):
${langRule}
If customer writes in Hindi or asks "hindi me baat kro", every word of your reply must be Hindi (Devanagari).

CONTEXT:
Page: ${pathname}
Intent: ${context.intent ?? "general"}
${profileBlock}
${productBlock}
${knowledgeBlock}

FORMAT:
- Use **bold** for key terms (markdown).
- 2–4 short paragraphs max unless deep product question.
- End with one helpful follow-up question in the same language.`;
}

function toGeminiHistory(history) {
  return history.slice(-10).map((m) => ({
    role: m.role === "user" ? "user" : "model",
    parts: [{ text: m.text }],
  }));
}

function shreeChatUrls() {
  const urls = ["/api/shree/chat"];
  if (API_BASE) {
    const remote = `${API_BASE.replace(/\/$/, "")}/api/shree/chat`;
    if (!urls.includes(remote)) urls.push(remote);
  }
  return urls;
}

async function callBackendShreeChat(payload) {
  for (const url of shreeChatUrls()) {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data?.text?.trim()) {
        return data.text.trim();
      }
      if (IS_DEV && data?.error) {
        console.warn("[Shree AI]", url, data.error);
      }
    } catch (err) {
      if (IS_DEV) console.warn("[Shree AI]", url, err.message ?? err);
    }
  }
  return null;
}

/** Browser direct call — often blocked by CORS; dev uses Vite /api/shree/chat instead */
async function callGeminiDirect({ query, session, pathname, context }) {
  if (!GEMINI_KEY) return null;

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": GEMINI_KEY,
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: buildSystemPrompt(session, context, pathname) }],
        },
        contents: [
          ...toGeminiHistory(session.history),
          { role: "user", parts: [{ text: query }] },
        ],
        generationConfig: {
          temperature: 0.65,
          maxOutputTokens: 900,
        },
      }),
    },
  );

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    if (IS_DEV) {
      console.warn("[Shree AI/Gemini direct]", data?.error?.message ?? res.status);
    }
    return null;
  }

  return data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || null;
}

/** Returns AI reply text or null if unavailable */
export async function fetchShreeAiReply({ query, session, pathname, context }) {
  const payload = {
    query,
    lang: session.lang,
    pathname,
    history: session.history.slice(-10),
    context,
  };

  const backendText = await callBackendShreeChat(payload);
  if (backendText) return backendText;

  try {
    return await callGeminiDirect({ query, session, pathname, context });
  } catch (err) {
    if (IS_DEV) console.warn("[Shree AI]", err.message ?? err);
    return null;
  }
}
