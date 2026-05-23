const API_BASE = import.meta.env.VITE_API_URL ?? "";
const TOKEN_KEY = "anilax_admin_token";

export function getAdminToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setAdminToken(token) {
  if (token) localStorage.setItem(TOKEN_KEY, token);
  else localStorage.removeItem(TOKEN_KEY);
}

async function adminFetch(path, options = {}) {
  const token = getAdminToken();
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers ?? {}),
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`${API_BASE}${path}`, { ...options, headers });
  const data = await res.json().catch(() => ({}));

  if (res.status === 401) {
    setAdminToken(null);
    throw new Error("SESSION_EXPIRED");
  }
  if (!res.ok) throw new Error(data.error ?? "Request failed");
  return data;
}

export async function adminLogin(password) {
  const res = await fetch(`${API_BASE}/api/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error ?? "Invalid password");
  setAdminToken(data.token);
  return data;
}

export function adminLogout() {
  setAdminToken(null);
}

export async function adminCheckSession() {
  if (!getAdminToken()) return false;
  try {
    const data = await adminFetch("/api/admin/session");
    return data.ok === true;
  } catch (err) {
    if (err.message === "SESSION_EXPIRED") return false;
    throw err;
  }
}

export function fetchAdminStats() {
  return adminFetch("/api/admin/stats");
}

export function fetchContactLeads({ status = "all", limit = 50, offset = 0 } = {}) {
  const q = new URLSearchParams({ limit, offset });
  if (status !== "all") q.set("status", status);
  return adminFetch(`/api/admin/contact-leads?${q}`);
}

export function updateLeadStatus(id, status) {
  return adminFetch(`/api/admin/contact-leads/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ status }),
  });
}

export function fetchPartnerSignups({ limit = 50, offset = 0 } = {}) {
  const q = new URLSearchParams({ limit, offset });
  return adminFetch(`/api/admin/partner-signups?${q}`);
}
