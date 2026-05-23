const STEPS = [
  {
    num: "01",
    title: "Connect your stack",
    text: "Plug in ERPs, banking partners, and apps via API, SDK, or no-code connectors.",
  },
  {
    num: "02",
    title: "Configure flows",
    text: "Set up payouts, collections, wallets, and compliance rules — per segment or entity.",
  },
  {
    num: "03",
    title: "Scale with confidence",
    text: "Real-time dashboards, webhooks, and audit trails so every rupee is traceable.",
  },
];

export function Workflow() {
  return (
    <section className="workflow">
      <div className="workflow__inner">
        <p className="section-label">How it works</p>
        <h2 className="section-title">From integration to production</h2>
        <p className="section-sub">
          Ship fintech features without rebuilding core banking — Anilax handles the rails.
        </p>
        <div className="workflow__grid">
          {STEPS.map((s) => (
            <article key={s.num} className="workflow-step">
              <div className="workflow-step__num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
