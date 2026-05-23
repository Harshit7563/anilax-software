const QUOTES = [
  { text: "Anilax cut our payout integration from months to two weeks.", cite: "FinOps Lead, Series B SaaS" },
  { text: "The API docs and sandbox are the best we have used in Indian fintech.", cite: "CTO, Consumer super-app" },
  { text: "B2B treasury and B2C wallets on one stack — finally.", cite: "Head of Product, Neobank" },
  { text: "Compliance-ready infrastructure without hiring a 20-person payments team.", cite: "CEO, Lending startup" },
  { text: "Webhooks and ledger APIs that actually make sense.", cite: "Staff Engineer, Marketplace" },
  { text: "We launched wallets for 500K users in under 30 days.", cite: "VP Engineering, Retail brand" },
];

export function Testimonials() {
  const doubled = [...QUOTES, ...QUOTES];

  return (
    <section className="testimonials">
      <p className="testimonials__title">Trusted by teams building the future of money</p>
      <div className="marquee" aria-hidden="true">
        {doubled.map((q, i) => (
          <blockquote key={`${q.cite}-${i}`} className="quote-card">
            <p>&ldquo;{q.text}&rdquo;</p>
            <cite>— {q.cite}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
