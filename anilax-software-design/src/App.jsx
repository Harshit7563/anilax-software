import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import "./styles/responsive.css";
import { ContactModalProvider } from "./context/ContactModalContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToHash } from "./components/ScrollToHash";
import { ContactModal } from "./components/ContactModal";
import { AnilaxAiAssistant } from "./components/AnilaxAiAssistant";
import { HomePage } from "./pages/HomePage";
import { B2BPage } from "./pages/B2BPage";
import { B2CPage } from "./pages/B2CPage";
import { SoftwarePage } from "./pages/SoftwarePage";
import { SoftwareProductPage } from "./pages/SoftwareProductPage";
import { ApiPage } from "./pages/ApiPage";
import { DocsPage } from "./pages/DocsPage";
import { SdksPage } from "./pages/SdksPage";
import { TechnologyPage } from "./pages/TechnologyPage";
import { CompanyPage } from "./pages/CompanyPage";
import { StoriesPage } from "./pages/StoriesPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { SitePage } from "./pages/SitePage";
import { AuthPage } from "./pages/AuthPage";
import { AdminLoginPage } from "./pages/admin/AdminLoginPage";
import { AdminDashboardPage } from "./pages/admin/AdminDashboardPage";
import { AdminGuard } from "./components/admin/AdminGuard";
import { SITE_PAGE_SLUGS } from "./data/sitePages";

function AppShell() {
  const { pathname } = useLocation();
  const isDocs = pathname === "/docs";
  const isAuth = pathname === "/signup" || pathname === "/login";
  const isAdmin = pathname.startsWith("/admin");

  return (
    <div
      className={`app ${isDocs ? "app--docs" : ""} ${isAuth ? "app--auth" : ""} ${isAdmin ? "app--admin" : ""}`}
    >
      <ScrollToHash />
      {!isDocs && !isAuth && !isAdmin && <Header />}
      <main
        className={
          isDocs ? "main--docs" : isAuth ? "main--auth" : isAdmin ? "main--admin" : undefined
        }
      >
        <Routes>
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route
            path="/admin"
            element={
              <AdminGuard>
                <AdminDashboardPage />
              </AdminGuard>
            }
          />
          <Route path="/signup" element={<AuthPage mode="signup" />} />
          <Route path="/login" element={<AuthPage mode="login" />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/b2b" element={<B2BPage />} />
          <Route path="/b2c" element={<B2CPage />} />
          <Route path="/software" element={<SoftwarePage />} />
          <Route path="/software/:productId" element={<SoftwareProductPage />} />
          <Route path="/api" element={<ApiPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/sdks" element={<SdksPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          {SITE_PAGE_SLUGS.map((slug) => (
            <Route key={slug} path={`/${slug}`} element={<SitePage />} />
          ))}
        </Routes>
      </main>
      {!isDocs && !isAuth && !isAdmin && <Footer />}
      {!isDocs && !isAuth && !isAdmin && <AnilaxAiAssistant />}
      <ContactModal />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ContactModalProvider>
        <AppShell />
      </ContactModalProvider>
    </BrowserRouter>
  );
}

export default App;
