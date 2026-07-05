import crypto from "crypto";

const ADMIN_USERNAME = (process.env.ADMIN_USERNAME || "Bawji").trim();
const ADMIN_PASSWORD = (process.env.ADMIN_PASSWORD || "075630").trim();
const ADMIN_SECRET = process.env.ADMIN_SECRET || `${ADMIN_PASSWORD}-anilax-admin-v1`;
const TOKEN_TTL_MS = 12 * 60 * 60 * 1000;

export function verifyAdminCredentials(username, password) {
  return (
    String(username ?? "").trim() === ADMIN_USERNAME &&
    String(password ?? "").trim() === ADMIN_PASSWORD
  );
}

export function createAdminToken(username = ADMIN_USERNAME) {
  const exp = Date.now() + TOKEN_TTL_MS;
  const payload = `${username}:${exp}`;
  const sig = crypto.createHmac("sha256", ADMIN_SECRET).update(payload).digest("hex");
  return Buffer.from(`${payload}:${sig}`).toString("base64url");
}

export function verifyAdminToken(token) {
  if (!token) return null;
  try {
    const decoded = Buffer.from(token, "base64url").toString("utf8");
    const lastColon = decoded.lastIndexOf(":");
    const sig = decoded.slice(lastColon + 1);
    const rest = decoded.slice(0, lastColon);
    const expIdx = rest.lastIndexOf(":");
    const username = rest.slice(0, expIdx);
    const exp = Number(rest.slice(expIdx + 1));
    const payload = `${username}:${exp}`;
    const expected = crypto.createHmac("sha256", ADMIN_SECRET).update(payload).digest("hex");
    if (sig !== expected || !Number.isFinite(exp) || Date.now() > exp) return null;
    return { username };
  } catch {
    return null;
  }
}

export function requireAdmin(req, res, next) {
  const header = req.headers.authorization ?? "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  const session = verifyAdminToken(token);
  if (!session) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  req.admin = session;
  next();
}
