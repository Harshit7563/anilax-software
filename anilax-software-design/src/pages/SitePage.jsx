import { Navigate, useLocation } from "react-router-dom";
import { SitePageLayout } from "../components/SitePageLayout";
import { SITE_PAGES } from "../data/sitePages";
import "../styles/site-page.css";

export function SitePage() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\//, "");
  const page = SITE_PAGES[slug];

  if (!page) {
    return <Navigate to="/" replace />;
  }

  return <SitePageLayout page={page} />;
}
