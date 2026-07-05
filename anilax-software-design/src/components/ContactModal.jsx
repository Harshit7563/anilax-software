import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useContactModal } from "../context/ContactModalContext";
import { COMPANY_PHONE, COMPANY_PHONE_TEL, COMPANY_EMAIL } from "../data/company";
import { formStateFromPrefill } from "../lib/contactPrefill";
import { submitContactLead } from "../lib/siteApi";
import "../styles/contact-modal.css";

const INDUSTRIES = [
  "Fintech & Banking",
  "B2B / AePS & Payments",
  "B2C / Consumer Apps",
  "E-commerce & Marketplace",
  "Education & EdTech",
  "Healthcare & Pharmacy",
  "Food & Restaurant",
  "On-Demand Services",
  "MLM & Network Marketing",
  "Media & News",
  "Enterprise / SaaS",
  "Other",
];

const TRUST_POINTS = [
  "Reply within 24–48 business hours",
  "AePS · UPI · Payouts · Custom software",
  "Dedicated solutions architect",
];

const INITIAL = { name: "", email: "", industry: "", requirement: "" };

export function ContactModal() {
  const { pathname } = useLocation();
  const { open, prefill, closeContact } = useContactModal();
  const [form, setForm] = useState(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setSubmitted(false);
      setSubmitting(false);
      setSubmitError("");
      setErrors({});
      setForm(prefill?.apiName ? formStateFromPrefill(prefill) : INITIAL);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, prefill]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeContact();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeContact]);

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email";
    if (!form.industry) next.industry = "Select your industry";
    if (!form.requirement.trim()) next.requirement = "Tell us about your requirement";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError("");
    try {
      await submitContactLead({
        name: form.name.trim(),
        email: form.email.trim(),
        industry: form.industry,
        requirement: form.requirement.trim(),
        apiName: prefill?.apiName,
        categoryId: prefill?.categoryId,
        categoryTitle: prefill?.categoryTitle,
        sourcePage: pathname,
      });
      setSubmitted(true);
      setForm(INITIAL);
      setErrors({});
    } catch (err) {
      setSubmitError(
        err.message ?? "Could not save your request. Start the API with: npm run server",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((err) => ({ ...err, [field]: undefined }));
  };

  if (!open) return null;

  return (
    <div className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
      <button
        type="button"
        className="contact-modal__backdrop"
        aria-label="Close"
        onClick={closeContact}
      />

      <div className="contact-modal__dialog">
        <button
          type="button"
          className="contact-modal__close"
          aria-label="Close"
          onClick={closeContact}
        >
          <span aria-hidden="true">×</span>
        </button>

        {submitted ? (
          <div className="contact-modal__success">
            <div className="contact-modal__success-glow" aria-hidden="true" />
            <span className="contact-modal__success-icon" aria-hidden="true">
              ✓
            </span>
            <h2 id="contact-modal-title">Request received</h2>
            <p>
              Our partnerships team will review your requirement and reach out within{" "}
              <strong>24–48 business hours</strong>.
            </p>
            <button type="button" className="btn btn--gradient" onClick={closeContact}>
              Done
            </button>
          </div>
        ) : (
          <div className="contact-modal__split">
            <aside className="contact-modal__aside" aria-hidden="false">
              <div className="contact-modal__aside-mesh" aria-hidden="true" />
              <p className="contact-modal__brand">
                Anilax <span>Software</span>
              </p>
              <h2 className="contact-modal__aside-title">Let&apos;s build your next product</h2>
              <p className="contact-modal__aside-lead">
                Fintech rails, white-label software, or API integration — tell us what you need and
                we&apos;ll map the right stack.
              </p>

              <ul className="contact-modal__trust">
                {TRUST_POINTS.map((point) => (
                  <li key={point}>
                    <span className="contact-modal__trust-dot" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>

              <a href={`tel:${COMPANY_PHONE_TEL}`} className="contact-modal__phone-card">
                <span className="contact-modal__phone-label">Prefer a call?</span>
                <strong>{COMPANY_PHONE}</strong>
                <span className="contact-modal__phone-cta">Tap to dial →</span>
              </a>
              <a href={`mailto:${COMPANY_EMAIL}`} className="contact-modal__phone-card contact-modal__email-card">
                <span className="contact-modal__phone-label">Or email us</span>
                <strong>{COMPANY_EMAIL}</strong>
                <span className="contact-modal__phone-cta">Tap to send →</span>
              </a>
            </aside>

            <div className="contact-modal__main">
              <header className="contact-modal__header">
                <p className="contact-modal__eyebrow">Partner inquiry</p>
                <h2 id="contact-modal-title">Connect with us</h2>
                {prefill?.apiName ? (
                  <p className="contact-modal__prefill">
                    <span className="contact-modal__prefill-badge">API access</span>
                    Requesting <strong>{prefill.apiName}</strong>
                    {prefill.categoryTitle ? ` · ${prefill.categoryTitle}` : ""}. Details are
                    pre-filled — edit if needed.
                  </p>
                ) : (
                  <p>Share a few details and we&apos;ll route you to the right team.</p>
                )}
              </header>

              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="contact-form__row">
                  <label className={`contact-field ${errors.name ? "contact-field--error" : ""}`}>
                    <span>Full name</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={update("name")}
                      autoComplete="name"
                      aria-invalid={Boolean(errors.name)}
                    />
                    {errors.name && <em role="alert">{errors.name}</em>}
                  </label>
                  <label className={`contact-field ${errors.email ? "contact-field--error" : ""}`}>
                    <span>Work email</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={update("email")}
                      autoComplete="email"
                      aria-invalid={Boolean(errors.email)}
                    />
                    {errors.email && <em role="alert">{errors.email}</em>}
                  </label>
                </div>

                <label className={`contact-field ${errors.industry ? "contact-field--error" : ""}`}>
                  <span>Industry</span>
                  <select
                    name="industry"
                    value={form.industry}
                    onChange={update("industry")}
                    aria-invalid={Boolean(errors.industry)}
                  >
                    <option value="">Select industry</option>
                    {INDUSTRIES.map((ind) => (
                      <option key={ind} value={ind}>
                        {ind}
                      </option>
                    ))}
                  </select>
                  {errors.industry && <em role="alert">{errors.industry}</em>}
                </label>

                <label
                  className={`contact-field ${errors.requirement ? "contact-field--error" : ""}`}
                >
                  <span>Software / API requirement</span>
                  <textarea
                    name="requirement"
                    rows={4}
                    placeholder="UPI app, payment gateway, AePS network, school ERP, API integration…"
                    value={form.requirement}
                    onChange={update("requirement")}
                    aria-invalid={Boolean(errors.requirement)}
                  />
                  {errors.requirement && <em role="alert">{errors.requirement}</em>}
                </label>

                {submitError && (
                  <p className="contact-form__error" role="alert">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  className="btn btn--gradient contact-form__submit"
                  disabled={submitting}
                >
                  {submitting ? "Sending…" : "Submit request"}
                </button>

                <p className="contact-form__legal">
                  By submitting, you agree to our{" "}
                  <Link to="/privacy" onClick={closeContact}>
                    Privacy Policy
                  </Link>
                  . We never share your details with third parties for marketing.
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
