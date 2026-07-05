import { useState } from "react";
import { Link } from "react-router-dom";
import { createAdminBlogPost, deleteAdminBlogPost } from "../../lib/adminApi";

const BLOG_CATEGORIES = ["AePS", "APIs", "Product", "Industry", "Software"];

function formatDate(iso) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

const EMPTY_FORM = {
  title: "",
  excerpt: "",
  category: "Product",
  author: "Anilax Team",
  tags: "",
  body: "",
};

export function AdminBlogPanel({ posts, loading, onRefresh, onError }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [deletingSlug, setDeletingSlug] = useState("");

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleCreate = async (e) => {
    e.preventDefault();
    setSaving(true);
    onError("");
    try {
      await createAdminBlogPost({
        title: form.title.trim(),
        excerpt: form.excerpt.trim(),
        category: form.category,
        author: form.author.trim(),
        tags: form.tags,
        body: form.body.trim(),
      });
      setForm(EMPTY_FORM);
      await onRefresh();
    } catch (err) {
      onError(err.message ?? "Failed to add blog post");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (slug, title) => {
    if (!window.confirm(`Delete blog post "${title}"?`)) return;
    setDeletingSlug(slug);
    onError("");
    try {
      await deleteAdminBlogPost(slug);
      await onRefresh();
    } catch (err) {
      onError(err.message ?? "Failed to delete post");
    } finally {
      setDeletingSlug("");
    }
  };

  return (
    <div className="admin-blog">
      <section className="admin-panel admin-blog__form-panel">
        <div className="admin-panel__toolbar">
          <h2 className="admin-blog__heading">Add new blog post</h2>
        </div>
        <form className="admin-blog__form" onSubmit={handleCreate}>
          <label className="admin-field">
            <span>Title</span>
            <input type="text" value={form.title} onChange={update("title")} required />
          </label>
          <label className="admin-field">
            <span>Short excerpt</span>
            <textarea
              rows={2}
              value={form.excerpt}
              onChange={update("excerpt")}
              required
            />
          </label>
          <div className="admin-blog__row">
            <label className="admin-field">
              <span>Category</span>
              <select value={form.category} onChange={update("category")}>
                {BLOG_CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>
            <label className="admin-field">
              <span>Author</span>
              <input type="text" value={form.author} onChange={update("author")} />
            </label>
          </div>
          <label className="admin-field">
            <span>Tags (comma separated)</span>
            <input
              type="text"
              value={form.tags}
              onChange={update("tags")}
              placeholder="AePS, Onboarding"
            />
          </label>
          <label className="admin-field">
            <span>Article body</span>
            <textarea
              rows={8}
              value={form.body}
              onChange={update("body")}
              placeholder="Write paragraphs separated by a blank line…"
              required
            />
          </label>
          <button type="submit" className="btn btn--gradient" disabled={saving}>
            {saving ? "Publishing…" : "Publish post"}
          </button>
        </form>
      </section>

      <section className="admin-panel">
        <div className="admin-panel__toolbar">
          <h2 className="admin-blog__heading">All blog posts ({posts.total})</h2>
        </div>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Category</th>
                <th>Slug</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {loading && !posts.items.length ? (
                <tr>
                  <td colSpan={5} className="admin-table__empty">
                    Loading…
                  </td>
                </tr>
              ) : posts.items.length === 0 ? (
                <tr>
                  <td colSpan={5} className="admin-table__empty">
                    No blog posts yet
                  </td>
                </tr>
              ) : (
                posts.items.map((row) => (
                  <tr key={row.slug}>
                    <td data-label="Date">{formatDate(row.date)}</td>
                    <td data-label="Title">{row.title}</td>
                    <td data-label="Category">{row.category}</td>
                    <td data-label="Slug">
                      <code className="admin-blog__slug">{row.slug}</code>
                    </td>
                    <td data-label="">
                      <div className="admin-blog__actions">
                        <Link to={`/blog/${row.slug}`} className="admin-link-btn" target="_blank">
                          View
                        </Link>
                        <button
                          type="button"
                          className="admin-link-btn admin-link-btn--danger"
                          disabled={deletingSlug === row.slug}
                          onClick={() => handleDelete(row.slug, row.title)}
                        >
                          {deletingSlug === row.slug ? "Deleting…" : "Delete"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
