import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ConnectButton } from "../components/ConnectButton";
import { formatBlogDate, getRelatedPosts } from "../data/blogPosts";
import { fetchBlogPost } from "../lib/blogApi";
import "../styles/blog.css";

function BlogSection({ section }) {
  if (section.type === "h2") {
    return <h2 className="blog-article__h2">{section.text}</h2>;
  }
  if (section.type === "ul") {
    return (
      <ul className="blog-article__list">
        {section.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return <p className="blog-article__p">{section.text}</p>;
}

export function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    fetchBlogPost(slug).then((data) => {
      if (active) {
        setPost(data);
        setLoading(false);
      }
    });
    return () => {
      active = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <div className="blog-page blog-page--article">
        <p className="blog-hero__sub" style={{ padding: "3rem 1.5rem" }}>
          Loading article…
        </p>
      </div>
    );
  }

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const related = getRelatedPosts(post.relatedSlugs ?? []);

  return (
    <div className="blog-page blog-page--article">
      <article className="blog-article">
        <header className="blog-article__head">
          <div className="blog-article__head-bg" aria-hidden="true" />
          <Link to="/blog" className="blog-article__back">
            ← All articles
          </Link>
          <div className="blog-article__meta">
            <span className="blog-card__category">{post.category}</span>
            <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
            <span>{post.readMinutes} min read</span>
            <span>{post.author}</span>
          </div>
          <h1>{post.title}</h1>
          <p className="blog-article__lead">{post.excerpt}</p>
          <div className="blog-article__tags">
            {(post.tags ?? []).map((tag) => (
              <span key={tag} className="blog-article__tag">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="blog-article__body">
          <div className="blog-article__content">
            {(post.sections ?? []).map((section, i) => (
              <BlogSection key={`${section.type}-${i}`} section={section} />
            ))}
          </div>

          <aside className="blog-article__aside">
            <div className="blog-aside-card">
              {post.softwareId ? (
                <>
                  <h3>Build this software</h3>
                  <p>See the product overview, modules, and start a scoped project with Anilax.</p>
                  <Link to={`/software/${post.softwareId}`} className="btn btn--gradient btn--connect">
                    View software page
                  </Link>
                  <Link to="/software#solutions" className="blog-aside-card__link">
                    All software solutions →
                  </Link>
                </>
              ) : (
                <>
                  <h3>Need help implementing this?</h3>
                  <p>AePS portal, API integration, and field onboarding from one partner.</p>
                  <ConnectButton className="btn btn--gradient btn--connect" />
                  <Link to="/b2b" className="blog-aside-card__link">
                    Explore B2B AePS →
                  </Link>
                  <Link to="/api" className="blog-aside-card__link">
                    API catalog →
                  </Link>
                </>
              )}
            </div>
          </aside>
        </div>
      </article>

      {related.length > 0 && (
        <section className="blog-related">
          <div className="blog-section__inner">
            <h2 className="section-title">Related articles</h2>
            <div className="blog-grid blog-grid--compact">
              {related.map((item) => (
                <article key={item.slug} className="blog-card">
                  <div className="blog-card__meta">
                    <span className="blog-card__category">{item.category}</span>
                    <time dateTime={item.date}>{formatBlogDate(item.date)}</time>
                  </div>
                  <h3>
                    <Link to={`/blog/${item.slug}`}>{item.title}</Link>
                  </h3>
                  <p className="blog-card__excerpt">{item.excerpt}</p>
                  <Link to={`/blog/${item.slug}`} className="blog-card__read">
                    Read →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
