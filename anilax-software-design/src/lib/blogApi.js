const API_BASE = import.meta.env.VITE_API_URL ?? "";

export async function fetchBlogPosts() {
  try {
    const res = await fetch(`${API_BASE}/api/blog/posts`);
    if (!res.ok) throw new Error("Blog API unavailable");
    const data = await res.json();
    return data.items ?? [];
  } catch {
    const { BLOG_POSTS } = await import("../data/blogPosts.js");
    return BLOG_POSTS;
  }
}

export async function fetchBlogPost(slug) {
  try {
    const res = await fetch(`${API_BASE}/api/blog/posts/${encodeURIComponent(slug)}`);
    if (!res.ok) throw new Error("Not found");
    return await res.json();
  } catch {
    const { getBlogPost } = await import("../data/blogPosts.js");
    return getBlogPost(slug) ?? null;
  }
}
