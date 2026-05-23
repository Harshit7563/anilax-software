import { useState } from "react";

const FAQS = [
  {
    q: "What makes Anilax different from other payment gateways?",
    a: "Anilax is a full-stack fintech platform — not just checkout. You get B2B treasury, B2C wallets, core banking primitives, and developer APIs on one infrastructure with shared compliance and reporting.",
  },
  {
    q: "Can I use Anilax for both B2B and B2C products?",
    a: "Yes. Many customers run enterprise payouts and consumer wallets on the same Anilax account, with separate entities, ledgers, and API keys per product line.",
  },
  {
    q: "How fast can we integrate the API?",
    a: "Most teams ship a sandbox integration in 1–2 days using our REST API or Node/Python SDKs. Production go-live typically takes 2–4 weeks including KYC and bank partner setup.",
  },
  {
    q: "Is Anilax suitable for regulated fintech startups?",
    a: "Yes. We provide KYC/AML tooling, audit logs, settlement reporting, and architecture aligned with RBI guidelines. Your legal team still owns licensing — we provide the tech rails.",
  },
  {
    q: "What are your pricing models?",
    a: "Pay-as-you-go for API volume, plus platform fees for B2B and B2C modules. Enterprise plans include dedicated support, custom SLAs, and white-label options. Contact us for a quote.",
  },
  {
    q: "How is data privacy handled?",
    a: "Transaction and customer data is encrypted, access-controlled, and never sold. Enterprise customers can opt for dedicated infrastructure. We do not train AI models on your financial data.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="faq" id="faq">
      <div className="faq__inner">
        <h2 className="section-title">Want to learn more?</h2>
        <p className="section-sub">Answers to common questions about Anilax Software.</p>
        {FAQS.map((item, i) => (
          <div
            key={item.q}
            className={`faq-item ${open === i ? "faq-item--open" : ""}`}
          >
            <button
              type="button"
              className="faq-item__q"
              aria-expanded={open === i}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span>{item.q}</span>
              <span aria-hidden="true">+</span>
            </button>
            <div className="faq-item__a">
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
