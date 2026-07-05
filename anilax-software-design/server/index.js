import express from "express";
import cors from "cors";
import {
  createAdminToken,
  requireAdmin,
  verifyAdminCredentials,
  verifyAdminToken,
} from "./adminAuth.js";
import { normalizeBlogPost, slugify } from "./blogHelpers.js";
import { nextId, readStore, writeStore } from "./store.js";

const PORT = Number(process.env.PORT || 3001);
const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: "1mb" }));

async function ensureBlogSeed() {
  const blogs = await readStore("blogs.json", null);
  if (blogs && blogs.length > 0) return;
  const { BLOG_POSTS } = await import("../src/data/blogPosts.js");
  await writeStore("blogs.json", BLOG_POSTS);
}

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "anilax-api" });
});

app.post("/api/contact-leads", async (req, res) => {
  try {
    const { name, email, industry, requirement, sourcePage, apiName, categoryTitle } = req.body ?? {};
    if (!name?.trim() || !email?.trim() || !industry?.trim() || !requirement?.trim()) {
      res.status(400).json({ error: "name, email, industry, and requirement are required" });
      return;
    }

    const leads = await readStore("leads.json", []);
    const row = {
      id: nextId(leads),
      name: name.trim(),
      email: email.trim(),
      industry: industry.trim(),
      requirement: requirement.trim(),
      source_page: sourcePage?.trim() || null,
      api_name: apiName?.trim() || null,
      category_title: categoryTitle?.trim() || null,
      status: "new",
      created_at: new Date().toISOString(),
    };
    leads.unshift(row);
    await writeStore("leads.json", leads);
    res.status(201).json({ ok: true, id: row.id });
  } catch (err) {
    res.status(500).json({ error: err.message ?? "Failed to save lead" });
  }
});

app.post("/api/partner-signups", async (req, res) => {
  try {
    const { mode, name, email, company, phone, role, source } = req.body ?? {};
    if (!email?.trim()) {
      res.status(400).json({ error: "email is required" });
      return;
    }

    const signups = await readStore("signups.json", []);
    const row = {
      id: nextId(signups),
      mode: mode === "login" ? "login" : "signup",
      name: name?.trim() || "",
      email: email.trim(),
      company: company?.trim() || "",
      phone: phone?.trim() || "",
      role: role?.trim() || "",
      source: source?.trim() || "site",
      created_at: new Date().toISOString(),
    };
    signups.unshift(row);
    await writeStore("signups.json", signups);
    res.status(201).json({ ok: true, id: row.id });
  } catch (err) {
    res.status(500).json({ error: err.message ?? "Failed to save signup" });
  }
});

app.get("/api/blog/posts", async (_req, res) => {
  try {
    const posts = await readStore("blogs.json", []);
    const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
    res.json({ items: sorted, total: sorted.length });
  } catch (err) {
    res.status(500).json({ error: err.message ?? "Failed to load blog" });
  }
});

app.get("/api/blog/posts/:slug", async (req, res) => {
  try {
    const posts = await readStore("blogs.json", []);
    const post = posts.find((p) => p.slug === req.params.slug);
    if (!post) {
      res.status(404).json({ error: "Post not found" });
      return;
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message ?? "Failed to load post" });
  }
});

app.post("/api/admin/login", (req, res) => {
  const { username, password } = req.body ?? {};
  if (!verifyAdminCredentials(username, password)) {
    res.status(401).json({ error: "Invalid username or password" });
    return;
  }
  res.json({ ok: true, token: createAdminToken(String(username).trim()) });
});

app.get("/api/admin/session", (req, res) => {
  const header = req.headers.authorization ?? "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  const session = verifyAdminToken(token);
  if (!session) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  res.json({ ok: true, username: session.username });
});

app.get("/api/admin/stats", requireAdmin, async (_req, res) => {
  const leads = await readStore("leads.json", []);
  const signups = await readStore("signups.json", []);
  const blogs = await readStore("blogs.json", []);
  const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
  res.json({
    contact_new: leads.filter((l) => l.status === "new").length,
    contact_total: leads.length,
    signup_total: signups.length,
    signup_week: signups.filter((s) => new Date(s.created_at).getTime() >= weekAgo).length,
    blog_total: blogs.length,
  });
});

app.get("/api/admin/contact-leads", requireAdmin, async (req, res) => {
  const status = req.query.status ?? "all";
  const limit = Math.min(Number(req.query.limit) || 50, 200);
  const offset = Math.max(Number(req.query.offset) || 0, 0);
  let leads = await readStore("leads.json", []);
  if (status !== "all") leads = leads.filter((l) => l.status === status);
  res.json({ items: leads.slice(offset, offset + limit), total: leads.length });
});

app.patch("/api/admin/contact-leads/:id", requireAdmin, async (req, res) => {
  const id = Number(req.params.id);
  const status = req.body?.status;
  if (!["new", "contacted", "qualified", "closed"].includes(status)) {
    res.status(400).json({ error: "Invalid status" });
    return;
  }
  const leads = await readStore("leads.json", []);
  const idx = leads.findIndex((l) => l.id === id);
  if (idx === -1) {
    res.status(404).json({ error: "Lead not found" });
    return;
  }
  leads[idx] = { ...leads[idx], status, updated_at: new Date().toISOString() };
  await writeStore("leads.json", leads);
  res.json({ ok: true, lead: leads[idx] });
});

app.get("/api/admin/partner-signups", requireAdmin, async (req, res) => {
  const limit = Math.min(Number(req.query.limit) || 50, 200);
  const offset = Math.max(Number(req.query.offset) || 0, 0);
  const signups = await readStore("signups.json", []);
  res.json({ items: signups.slice(offset, offset + limit), total: signups.length });
});

app.get("/api/admin/blog", requireAdmin, async (_req, res) => {
  const posts = await readStore("blogs.json", []);
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  res.json({ items: sorted, total: sorted.length });
});

app.post("/api/admin/blog", requireAdmin, async (req, res) => {
  try {
    const posts = await readStore("blogs.json", []);
    const post = normalizeBlogPost(req.body ?? {});
    if (posts.some((p) => p.slug === post.slug)) {
      res.status(409).json({ error: "A post with this slug already exists" });
      return;
    }
    posts.unshift(post);
    await writeStore("blogs.json", posts);
    res.status(201).json({ ok: true, post });
  } catch (err) {
    res.status(400).json({ error: err.message ?? "Invalid blog post" });
  }
});

app.delete("/api/admin/blog/:slug", requireAdmin, async (req, res) => {
  const slug = req.params.slug;
  const posts = await readStore("blogs.json", []);
  const next = posts.filter((p) => p.slug !== slug);
  if (next.length === posts.length) {
    res.status(404).json({ error: "Post not found" });
    return;
  }
  await writeStore("blogs.json", next);
  res.json({ ok: true, slug });
});

app.use((err, _req, res, _next) => {
  res.status(500).json({ error: err.message ?? "Server error" });
});

await ensureBlogSeed();

app.listen(PORT, () => {
  console.log(`Anilax API listening on http://127.0.0.1:${PORT}`);
});
