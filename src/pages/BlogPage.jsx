import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ConnectButton } from "../components/ConnectButton";
import { BLOG_CATEGORIES, BLOG_HERO, BLOG_POSTS, formatBlogDate } from "../data/blogPosts";
import "../styles/blog.css";

const PAGE_SIZE = 12;

export function BlogPage() {
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  const posts = useMemo(() => {
    if (category === "All") return BLOG_POSTS;
    return BLOG_POSTS.filter((p) => p.category === category);
  }, [category]);

  const totalPages = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));
  const paginated = posts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const featured =
    BLOG_POSTS.find((p) => p.category !== "Software") ?? BLOG_POSTS[0];

  useEffect(() => {
    setPage(1);
  }, [category]);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="blog-hero__bg" aria-hidden="true" />
        <p className="blog-hero__eyebrow">{BLOG_HERO.eyebrow}</p>
        <h1 className="blog-hero__title">
          {BLOG_HERO.title}{" "}
          <span className="gradient">{BLOG_HERO.titleHighlight}</span>
        </h1>
        <p className="blog-hero__sub">{BLOG_HERO.subtitle}</p>
      </section>

      <section className="blog-featured">
        <div className="blog-section__inner">
          <p className="section-label">Featured</p>
          <article className="blog-featured-card">
            <div className="blog-featured-card__meta">
              <span className="blog-card__category">{featured.category}</span>
              <time dateTime={featured.date}>{formatBlogDate(featured.date)}</time>
              <span>{featured.readMinutes} min read</span>
            </div>
            <h2>
              <Link to={`/blog/${featured.slug}`}>{featured.title}</Link>
            </h2>
            <p>{featured.excerpt}</p>
            <Link to={`/blog/${featured.slug}`} className="blog-card__read">
              Read article →
            </Link>
          </article>
        </div>
      </section>

      <section className="blog-list">
        <div className="blog-section__inner">
          <div className="blog-list__head">
            <div>
              <p className="section-label">Articles</p>
              <h2 className="section-title">Latest from Anilax</h2>
              <p className="blog-list__count">
                {posts.length} article{posts.length === 1 ? "" : "s"}
                {category === "Software" ? " — one guide per software product" : ""}
              </p>
            </div>
            <div className="blog-filters" role="tablist" aria-label="Filter by category">
              {BLOG_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={category === cat}
                  className={`blog-filter ${category === cat ? "blog-filter--active" : ""}`}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="blog-grid">
            {paginated.map((post) => (
              <article key={post.slug} className="blog-card">
                <div className="blog-card__meta">
                  <span className="blog-card__category">{post.category}</span>
                  <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                </div>
                <h3>
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="blog-card__excerpt">{post.excerpt}</p>
                <div className="blog-card__foot">
                  <span>{post.readMinutes} min read</span>
                  <Link to={`/blog/${post.slug}`} className="blog-card__read">
                    Read →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {totalPages > 1 && (
            <nav className="blog-pagination" aria-label="Blog pages">
              <button
                type="button"
                className="blog-pagination__btn"
                disabled={page <= 1}
                onClick={() => setPage((p) => p - 1)}
              >
                ← Previous
              </button>
              <span className="blog-pagination__info">
                Page {page} of {totalPages}
              </span>
              <button
                type="button"
                className="blog-pagination__btn"
                disabled={page >= totalPages}
                onClick={() => setPage((p) => p + 1)}
              >
                Next →
              </button>
            </nav>
          )}
        </div>
      </section>

      <section className="blog-cta">
        <div className="blog-section__inner blog-cta__inner">
          <h2>Building AePS or API products?</h2>
          <p>Talk to our team in Jaipur — integration, portal, or both.</p>
          <ConnectButton className="btn btn--gradient btn--connect" />
        </div>
      </section>
    </div>
  );
}
