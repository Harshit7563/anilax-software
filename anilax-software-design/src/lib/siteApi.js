const API_BASE = import.meta.env.VITE_API_URL ?? "";

export async function submitContactLead(payload) {
  const res = await fetch(`${API_BASE}/api/contact-leads`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const text = await res.text();
  let data = {};
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    throw new Error(
      res.ok
        ? "Invalid server response"
        : `Could not reach API. Check that ${import.meta.env.VITE_API_URL || "https://anilaxsoftware.com"}/api is live and DNS points to your server.`,
    );
  }
  if (!res.ok) {
    throw new Error(data.error ?? "Failed to submit");
  }
  return data;
}

export async function recordPartnerSignup(payload) {
  const res = await fetch(`${API_BASE}/api/partner-signups`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error ?? "Failed to record signup");
  }
  return data;
}

/** Forward Shree AI conversation to admin contact leads */
export async function submitShreeConversation({
  name,
  email,
  phone,
  topic,
  transcript,
  pathname,
  reason,
}) {
  const requirement = [
    transcript,
    "",
    phone ? `Phone: ${phone}` : "",
    reason ? `Reason: ${reason}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  return submitContactLead({
    name,
    email,
    industry: topic || "Shree AI Chat",
    requirement,
    sourcePage: pathname,
    apiName: "Shree AI",
    categoryTitle: reason || "Shree AI handoff",
  });
}
