import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { recordPartnerSignup } from "../lib/siteApi";
import { COMPANY_API_V1 } from "../data/company";
import "../styles/auth-page.css";

const ROLES = [
  "Founder / CEO",
  "CTO / Engineering",
  "Product",
  "Operations",
  "Partner / Distributor",
  "Developer",
  "Other",
];

const HIGHLIGHTS = [
  { value: "99.99%", label: "API uptime SLA" },
  { value: "Free", label: "Sandbox keys" },
  { value: "<50ms", label: "Median latency" },
];

const TRUST = ["PCI-aware flows", "Webhook signing", "AePS · UPI · Payouts", "India-first rails"];

export function AuthPage({ mode: initialMode = "signup" }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [mode, setMode] = useState(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    role: "",
    password: "",
    agree: false,
  });

  useEffect(() => {
    const fromPath =
      location.pathname === "/login"
        ? "login"
        : location.pathname === "/signup"
          ? "signup"
          : null;
    const fromQuery = searchParams.get("mode");
    if (fromPath) setMode(fromPath);
    else if (fromQuery === "login" || fromQuery === "signup") setMode(fromQuery);
  }, [location.pathname, searchParams]);

  useEffect(() => {
    const email = searchParams.get("email");
    const name = searchParams.get("name");
    const company = searchParams.get("company");
    const phone = searchParams.get("phone");
    const role = searchParams.get("role");
    if (email || name || company || phone || role) {
      setForm((f) => ({
        ...f,
        ...(email ? { email } : {}),
        ...(name ? { name } : {}),
        ...(company ? { company } : {}),
        ...(phone ? { phone } : {}),
        ...(role ? { role } : {}),
      }));
    }
  }, [searchParams]);

  useEffect(() => {
    document.documentElement.classList.add("auth-route");
    return () => document.documentElement.classList.remove("auth-route");
  }, []);

  const switchMode = (next) => {
    setMode(next);
    if (location.pathname === "/auth") {
      const params = new URLSearchParams(searchParams);
      params.set("mode", next);
      navigate(`/auth?${params.toString()}`, { replace: true });
      return;
    }
    navigate(next === "login" ? "/login" : "/signup", { replace: true });
  };

  const update = (field) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await recordPartnerSignup({
        mode,
        name: form.name.trim(),
        email: form.email.trim(),
        company: form.company.trim(),
        phone: form.phone.trim(),
        role: form.role,
        source: mode === "login" ? "anilax-software-login" : "anilax-software-signup",
      });
    } catch {
      /* continue even if local DB is offline */
    }

    const returnTo = searchParams.get("returnTo");
    if (returnTo) {
      try {
        const parsed = new URL(returnTo, window.location.origin);
        if (parsed.origin === window.location.origin) {
          navigate(`${parsed.pathname}${parsed.search}${parsed.hash}`, { replace: true });
          return;
        }
      } catch {
        /* fall through */
      }
    }
    navigate(mode === "login" ? "/docs" : "/docs?sandbox=1", { replace: true });
    setLoading(false);
  };

  return (
    <div className="auth-page">
      <div className="auth-page__bg" aria-hidden="true">
        <div className="auth-page__mesh" />
        <div className="auth-page__grid" />
        <div className="auth-page__orb auth-page__orb--1" />
        <div className="auth-page__orb auth-page__orb--2" />
      </div>

      <header className="auth-page__top">
        <Link to="/" className="auth-page__logo">
          Anilax <span>Software</span>
        </Link>
      </header>

      <div className="auth-page__layout">
        <aside className="auth-page__showcase">
          <p className="auth-page__eyebrow">Next-gen fintech platform</p>
          <h1>
            {mode === "login" ? (
              <>
                Welcome back to your <span className="auth-page__gradient">developer hub</span>
              </>
            ) : (
              <>
                Build on India&apos;s most complete <span className="auth-page__gradient">fintech stack</span>
              </>
            )}
          </h1>
          <p className="auth-page__lead">
            {mode === "login"
              ? "Access sandbox keys, webhooks, settlement reports, and live transaction tools in one secure console."
              : "Sign up for sandbox API keys in minutes — AePS, UPI, payouts, BBPS, verification, and custom software under one roof."}
          </p>

          <div className="auth-page__stats">
            {HIGHLIGHTS.map((s) => (
              <div key={s.label} className="auth-page__stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>

          <ul className="auth-page__trust">
            {TRUST.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>

          <div className="auth-page__terminal" aria-hidden="true">
            <div className="auth-page__terminal-bar">
              <span />
              <span />
              <span />
              <code>anilax — partner console</code>
            </div>
            <pre>
              {`$ curl ${COMPANY_API_V1}/payments \\
  -H "Authorization: Bearer sk_test_••••" \\
  -d '{"amount": 49900, "currency": "INR"}'

← 200 { "status": "SUCCESS" }`}
            </pre>
          </div>
        </aside>

        <div className="auth-page__form-scroll">
          <div className="auth-page__panel-wrap">
          <div className="auth-page__panel">
            <div className="auth-page__tabs" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={mode === "signup"}
                className={mode === "signup" ? "auth-page__tab--active" : ""}
                onClick={() => switchMode("signup")}
              >
                Sign up
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={mode === "login"}
                className={mode === "login" ? "auth-page__tab--active" : ""}
                onClick={() => switchMode("login")}
              >
                Log in
              </button>
            </div>

            <div className="auth-page__panel-head">
              <h2>{mode === "login" ? "Log in to console" : "Create your account"}</h2>
              <p>
                {mode === "login"
                  ? "Use your registered work email. You’ll continue on our secure payments console."
                  : "Start with a free sandbox — no credit card required for developers."}
              </p>
            </div>

            <form className="auth-form" onSubmit={handleSubmit} noValidate>
              {mode === "signup" && (
                <>
                  <label className="auth-field">
                    <span>Full name</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Harshit Sharma"
                      value={form.name}
                      onChange={update("name")}
                      autoComplete="name"
                      required
                    />
                  </label>
                  <label className="auth-field">
                    <span>Company</span>
                    <input
                      type="text"
                      name="company"
                      placeholder="Your brand or legal entity"
                      value={form.company}
                      onChange={update("company")}
                      autoComplete="organization"
                      required
                    />
                  </label>
                </>
              )}

              <label className="auth-field">
                <span>Work email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={update("email")}
                  autoComplete="email"
                  required
                />
              </label>

              {mode === "signup" && (
                <>
                  <div className="auth-form__row">
                    <label className="auth-field">
                      <span>Phone</span>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91-8118898370"
                        value={form.phone}
                        onChange={update("phone")}
                        autoComplete="tel"
                      />
                    </label>
                    <label className="auth-field">
                      <span>Your role</span>
                      <select name="role" value={form.role} onChange={update("role")} required>
                        <option value="">Select</option>
                        {ROLES.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                </>
              )}

              <label className="auth-field auth-field--password">
                <span>Password</span>
                <div className="auth-field__password">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder={mode === "login" ? "Your password" : "Min. 8 characters"}
                    value={form.password}
                    onChange={update("password")}
                    autoComplete={mode === "login" ? "current-password" : "new-password"}
                    minLength={8}
                    required
                  />
                  <button
                    type="button"
                    className="auth-field__toggle"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </label>

              {mode === "signup" && (
                <label className="auth-check">
                  <input type="checkbox" checked={form.agree} onChange={update("agree")} required />
                  <span>
                    I agree to the{" "}
                    <Link to="/terms" target="_blank" rel="noopener noreferrer">
                      Terms
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" target="_blank" rel="noopener noreferrer">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
              )}

              <button
                type="submit"
                className="btn btn--gradient auth-form__submit"
                disabled={loading || (mode === "signup" && !form.agree)}
              >
                {loading
                  ? "Redirecting…"
                  : mode === "login"
                    ? "Continue to console"
                    : "Create account & get API keys"}
              </button>
            </form>

            <p className="auth-page__fine">
              {mode === "login" ? (
                <>
                  New here?{" "}
                  <button type="button" className="auth-page__link" onClick={() => switchMode("signup")}>
                    Sign up free
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button type="button" className="auth-page__link" onClick={() => switchMode("login")}>
                    Log in
                  </button>
                </>
              )}
            </p>

            <p className="auth-page__secure">
              <span aria-hidden="true">🔒</span> Partner portal — sandbox keys and API docs after sign-in
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
