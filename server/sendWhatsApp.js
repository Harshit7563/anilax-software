/**
 * Server-side WhatsApp delivery for contact enquiries.
 * Providers: greenapi (recommended) | callmebot | meta | webhook
 */

function get(data, key) {
  return String(data?.[key] ?? "").trim();
}

function digitsPhone(value, fallback = "918118898370") {
  return String(value || fallback).replace(/\D/g, "");
}

export function formatEnquiryMessage(data) {
  const lines = [
    "New website enquiry — Anilax Software",
    "",
    `Goal: ${get(data, "goal") || "—"}`,
    `Name: ${get(data, "name") || "—"}`,
    `Email: ${get(data, "email") || "—"}`,
  ];

  if (get(data, "company")) lines.push(`Company: ${get(data, "company")}`);
  if (get(data, "phone")) lines.push(`Phone: ${get(data, "phone")}`);
  if (get(data, "timeline")) lines.push(`Timeline: ${get(data, "timeline")}`);
  if (get(data, "budget")) lines.push(`Budget: ${get(data, "budget")}`);

  lines.push("", "Requirement:", get(data, "message") || "—");
  return lines.join("\n");
}

async function sendViaGreenApi(text, env) {
  const idInstance = env.GREEN_API_ID_INSTANCE || env.GREENAPI_ID_INSTANCE || "";
  const apiToken = env.GREEN_API_TOKEN_INSTANCE || env.GREENAPI_TOKEN_INSTANCE || "";
  const apiUrl = String(env.GREEN_API_URL || env.GREENAPI_URL || "https://api.green-api.com").replace(/\/$/, "");
  const phone = digitsPhone(env.WHATSAPP_TO || env.GREEN_API_CHAT_ID);

  if (!idInstance || !apiToken) {
    throw new Error("GREEN_API_ID_INSTANCE or GREEN_API_TOKEN_INSTANCE missing in .env");
  }

  const chatId = phone.includes("@") ? phone : `${phone}@c.us`;
  const url = `${apiUrl}/waInstance${idInstance}/sendMessage/${apiToken}`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chatId,
      message: text.slice(0, 20000),
    }),
  });

  const json = await res.json().catch(() => ({}));
  if (!res.ok || json?.idMessage == null) {
    throw new Error(json?.message || json?.error || `Green-API failed (${res.status})`);
  }
  return { provider: "greenapi", phone, body: json };
}

async function sendViaCallMeBot(text, env) {
  const phone = digitsPhone(env.WHATSAPP_TO || env.CALLMEBOT_PHONE);
  const apikey = env.CALLMEBOT_APIKEY || env.WHATSAPP_APIKEY || "";
  if (!apikey) {
    throw new Error("CALLMEBOT_APIKEY missing in .env");
  }

  const url = new URL("https://api.callmebot.com/whatsapp.php");
  url.searchParams.set("phone", phone);
  url.searchParams.set("text", text);
  url.searchParams.set("apikey", apikey);

  const res = await fetch(url);
  const body = await res.text();
  if (!res.ok || /error|invalid|denied/i.test(body)) {
    throw new Error(body || `CallMeBot failed (${res.status})`);
  }
  return { provider: "callmebot", phone, body };
}

async function sendViaMeta(text, data, env) {
  const token = env.WHATSAPP_TOKEN || env.META_WHATSAPP_TOKEN || "";
  const phoneNumberId = env.WHATSAPP_PHONE_NUMBER_ID || "";
  const to = digitsPhone(env.WHATSAPP_TO);
  const apiVersion = env.WHATSAPP_API_VERSION || "v21.0";
  if (!token || !phoneNumberId) {
    throw new Error("WHATSAPP_TOKEN or WHATSAPP_PHONE_NUMBER_ID missing in .env");
  }

  const template = env.WHATSAPP_TEMPLATE_NAME || "";
  let body;

  if (template) {
    // Template required for first outreach / outside 24h window (business → you)
    const lang = env.WHATSAPP_TEMPLATE_LANG || "en_US";
    const preview = text.slice(0, 900);
    body = {
      messaging_product: "whatsapp",
      to,
      type: "template",
      template: {
        name: template,
        language: { code: lang },
        components: [
          {
            type: "body",
            parameters: [
              { type: "text", text: get(data, "name") || "Website" },
              { type: "text", text: get(data, "email") || "—" },
              { type: "text", text: (get(data, "message") || preview).slice(0, 500) },
            ],
          },
        ],
      },
    };
  } else {
    // Free-form text (works for test numbers / open customer-care window)
    body = {
      messaging_product: "whatsapp",
      to,
      type: "text",
      text: { body: text.slice(0, 4096) },
    };
  }

  const res = await fetch(`https://graph.facebook.com/${apiVersion}/${phoneNumberId}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(json?.error?.message || `Meta WhatsApp failed (${res.status})`);
  }
  return { provider: "meta", phone: to, body: json };
}

async function sendViaWebhook(text, data, env) {
  const webhook = env.CONTACT_WEBHOOK_URL || "";
  if (!webhook) throw new Error("CONTACT_WEBHOOK_URL missing in .env");

  const res = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, ...data, source: "anilax-website" }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(body || `Webhook failed (${res.status})`);
  }
  return { provider: "webhook", body: "ok" };
}

export async function sendEnquiryToWhatsApp(data, env = process.env) {
  const text = formatEnquiryMessage(data);
  const provider = String(env.WHATSAPP_PROVIDER || "greenapi").toLowerCase();

  if (provider === "callmebot") return sendViaCallMeBot(text, env);
  if (provider === "meta") return sendViaMeta(text, data, env);
  if (provider === "webhook") return sendViaWebhook(text, data, env);
  return sendViaGreenApi(text, env);
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 1_000_000) {
        reject(new Error("Payload too large"));
        req.destroy();
      }
    });
    req.on("end", () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch {
        reject(new Error("Invalid JSON body"));
      }
    });
    req.on("error", reject);
  });
}

export function createContactApiMiddleware(env = process.env) {
  return async function contactApiMiddleware(req, res, next) {
    const url = req.url?.split("?")[0] || "";
    if (url !== "/api/contact" && url !== "/api/contact/") {
      return next?.();
    }

    if (req.method === "OPTIONS") {
      res.statusCode = 204;
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      res.end();
      return;
    }

    if (req.method !== "POST") {
      res.statusCode = 405;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ ok: false, error: "Method not allowed" }));
      return;
    }

    try {
      const data = await readJsonBody(req);
      if (!get(data, "name") || !get(data, "email") || !get(data, "message")) {
        res.statusCode = 400;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ ok: false, error: "Name, email and message are required" }));
        return;
      }

      const result = await sendEnquiryToWhatsApp(data, env);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.end(JSON.stringify({ ok: true, provider: result.provider }));
    } catch (err) {
      console.error("[contact-api]", err);
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.end(JSON.stringify({ ok: false, error: err.message || "Failed to send WhatsApp" }));
    }
  };
}
