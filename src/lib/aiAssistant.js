import { AI_KNOWLEDGE, AI_ROUTE_HINTS, AI_SUGGESTIONS } from "../data/aiKnowledge";

const STOP = new Set([
  "a", "an", "the", "is", "are", "was", "what", "how", "can", "do", "does", "i", "we", "you",
  "my", "me", "for", "to", "of", "in", "on", "and", "or", "with", "about", "tell", "please",
  "kya", "ka", "ke", "ki", "hai", "hain", "mujhe", "batao", "bataye",
]);

function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s+]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1 && !STOP.has(w));
}

function scoreChunk(tokens, chunk) {
  let score = 0;
  const answerLower = chunk.answer.toLowerCase();

  for (const token of tokens) {
    for (const kw of chunk.keywords) {
      if (kw === token || kw.includes(token) || token.includes(kw)) {
        score += token.length >= 4 ? 3 : 2;
      }
    }
    if (answerLower.includes(token)) score += 0.75;
  }

  return score;
}

export function getRouteHint(pathname) {
  if (AI_ROUTE_HINTS[pathname]) return AI_ROUTE_HINTS[pathname];
  if (pathname.startsWith("/software")) return AI_ROUTE_HINTS["/software"];
  return "Ask about AePS, APIs, B2C apps, software, pricing, or how to reach our team.";
}

export function getSuggestions(pathname) {
  if (pathname === "/b2b") {
    return ["What is AePS?", "API vs portal?", "Biometric devices", "Contact sales"];
  }
  if (pathname === "/api" || pathname === "/docs") {
    return ["How to authenticate?", "Sandbox timeline", "Webhooks", "Contact sales"];
  }
  return AI_SUGGESTIONS;
}

export function getAiResponse(query, pathname = "/") {
  const trimmed = query.trim();
  if (!trimmed) {
    return {
      text: "Type a question about AePS, APIs, onboarding, or support — I’ll answer from our product docs.",
      links: [],
      confidence: "low",
    };
  }

  const tokens = tokenize(trimmed);
  if (tokens.length === 0) {
    return {
      text: "Could you add a few more words? For example: “AePS API integration” or “settlement timing”.",
      links: [{ label: "View B2B", href: "/b2b" }],
      confidence: "low",
    };
  }

  const scored = AI_KNOWLEDGE.map((chunk) => ({
    chunk,
    score: scoreChunk(tokens, chunk) + (pathname === "/b2b" && chunk.id.startsWith("aeps") ? 0.5 : 0),
  }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);

  if (scored.length === 0) {
    return {
      text: "I don’t have a exact match in our docs for that. Our sales team can help with commercials, bank onboarding, and custom integrations.",
      links: [
        { label: "B2B AePS", href: "/b2b" },
        { label: "API catalog", href: "/api" },
        { label: "Connect with us", action: "contact" },
      ],
      confidence: "low",
    };
  }

  const best = scored[0];
  const second = scored[1];
  const confidence = best.score >= 4 ? "high" : best.score >= 2 ? "medium" : "low";

  let text = best.chunk.answer;
  if (confidence === "medium" && second && second.score >= best.score * 0.7) {
    text += `\n\nRelated: ${second.chunk.answer.split(".")[0]}.`;
  }

  return {
    text,
    links: best.chunk.links ?? [],
    confidence,
  };
}

export function getWelcomeMessage(pathname) {
  return {
    role: "assistant",
    text: `Hi — I’m **Anilax AI**, your integration assistant.\n\n${getRouteHint(pathname)}\n\nPick a suggestion below or type your question.`,
    links: [],
  };
}
