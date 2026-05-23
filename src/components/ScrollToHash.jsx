import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scroll to #section after cross-page navigation (e.g. footer → /#fintech from /b2b). */
export function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const scroll = () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      const t = window.setTimeout(scroll, 80);
      return () => window.clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
