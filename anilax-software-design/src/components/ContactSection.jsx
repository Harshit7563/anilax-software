import { useState } from "react";
import { submitContactLead } from "../lib/siteApi";
import { CONTACT_GOALS } from "../data/homePage";

const INITIAL = { goal: "", name: "", email: "", phone: "", message: "" };

export function ContactSection() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const next = {};
    if (!form.goal) next.goal = "Select your goal";
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email";
    if (!form.message.trim()) next.message = "Tell us about your project";
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
        industry: form.goal,
        requirement: [form.phone.trim() && `Phone: ${form.phone.trim()}`, form.message.trim()]
          .filter(Boolean)
          .join("\n\n"),
      });
      setSubmitted(true);
      setForm(INITIAL);
    } catch {
      setSubmitError("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="dw-contact" id="contact">
      <div className="dw-container dw-contact__inner">
        <div className="dw-contact__info">
          <p className="dw-eyebrow">Let&apos;s Start the Conversation</p>
          <h2 className="dw-heading">Partner with us to scale your business</h2>
          <p className="dw-lead">
            We architect and build technology solutions that improve operations, increase revenue,
            and enable long-term growth.
          </p>
          <ul className="dw-contact__trust">
            <li>
              <strong>24-Hour Response</strong>
              <span>We respond within 24 hours, guaranteed.</span>
            </li>
            <li>
              <strong>100% Confidential</strong>
              <span>Your information is safe with us.</span>
            </li>
            <li>
              <strong>No Sales Pitch</strong>
              <span>Just honest advice and the right solution.</span>
            </li>
          </ul>
        </div>

        <div className="dw-contact__form-wrap">
          {submitted ? (
            <div className="dw-contact__success">
              <h3>Thank you!</h3>
              <p>We&apos;ve received your message and will get back to you within 24 hours.</p>
              <button type="button" className="btn btn--outline" onClick={() => setSubmitted(false)}>
                Send another message
              </button>
            </div>
          ) : (
            <form className="dw-contact__form" onSubmit={handleSubmit} noValidate>
              <p className="dw-contact__form-title">What are you looking to do?</p>
              <div className="dw-contact__goals">
                {CONTACT_GOALS.map((goal) => (
                  <label key={goal} className={`dw-goal ${form.goal === goal ? "dw-goal--active" : ""}`}>
                    <input
                      type="radio"
                      name="goal"
                      value={goal}
                      checked={form.goal === goal}
                      onChange={(e) => setForm((f) => ({ ...f, goal: e.target.value }))}
                    />
                    {goal}
                  </label>
                ))}
              </div>
              {errors.goal && <p className="dw-field-error">{errors.goal}</p>}

              <label className="dw-field">
                <span>Name *</span>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="Your name"
                />
                {errors.name && <p className="dw-field-error">{errors.name}</p>}
              </label>

              <label className="dw-field">
                <span>Email Address *</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder="you@company.com"
                />
                {errors.email && <p className="dw-field-error">{errors.email}</p>}
              </label>

              <label className="dw-field">
                <span>Phone Number</span>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  placeholder="+91-8118898370"
                />
              </label>

              <label className="dw-field">
                <span>About Your Project *</span>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Project goals, required features, timeline, or business requirements."
                />
                {errors.message && <p className="dw-field-error">{errors.message}</p>}
              </label>

              {submitError && <p className="dw-field-error dw-field-error--block">{submitError}</p>}

              <button type="submit" className="btn btn--accent btn--full" disabled={submitting}>
                {submitting ? "Sending…" : "Submit"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
