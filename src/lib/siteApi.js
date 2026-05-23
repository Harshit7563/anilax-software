const API_BASE = import.meta.env.VITE_API_URL ?? "";

export async function submitContactLead(payload) {
  const res = await fetch(`${API_BASE}/api/contact-leads`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => ({}));
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
