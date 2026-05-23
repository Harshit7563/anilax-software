import { Link } from "react-router-dom";

const SEGMENTS = [
  {
    id: "fintech",
    badge: "fintech",
    badgeLabel: "Fintech",
    title: "Core banking & payments infrastructure",
    desc: "Launch neobanks, lending products, and payment networks on regulated, battle-tested rails.",
    points: [
      "Multi-currency ledgers & real-time settlement",
      "KYC/AML workflows built in",
      "RBI & PCI-DSS aligned architecture",
    ],
    rows: [
      ["Ledger balance", "₹12.4 Cr"],
      ["Settlement T+0", "Active"],
      ["Compliance", "Passed"],
    ],
  },
  {
    id: "b2c",
    badge: "b2c",
    badgeLabel: "B2C",
    title: "Consumer wallets & checkout",
    desc: "Delight users with instant UPI, cards, rewards, and bill pay — white-label or embedded.",
    points: [
      "UPI, cards, BNPL integrations",
      "Loyalty & cashback engines",
      "Mobile SDKs for iOS & Android",
    ],
    rows: [
      ["MAU", "1.2M"],
      ["Avg. transaction", "₹840"],
      ["Success rate", "99.1%"],
    ],
  },
  {
    id: "api",
    badge: "api",
    badgeLabel: "API",
    title: "Developer-first financial APIs",
    desc: "RESTful APIs, webhooks, and SDKs with sandbox environments — ship integrations in days.",
    points: [
      "Payments, payouts, KYC, accounts APIs",
      "Webhooks for every lifecycle event",
      "Node, Python, Go SDKs + OpenAPI spec",
    ],
    rows: [
      ["API uptime", "99.99%"],
      ["Median latency", "42ms"],
      ["Sandbox", "Free forever"],
    ],
    reverse: true,
  },
];

export function Segments() {
  return (
    <section className="segments">
      <div className="segments__inner">
        {SEGMENTS.map((seg) => (
          <div
            key={seg.id}
            id={seg.id}
            className={`segment-block ${seg.reverse ? "segment-block--reverse" : ""}`}
          >
            <div className="segment-block__content">
              <span className={`segment-block__badge segment-block__badge--${seg.badge}`}>
                {seg.badgeLabel}
              </span>
              <h3>{seg.title}</h3>
              <p>{seg.desc}</p>
              <ul>
                {seg.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              {seg.id === "b2c" ? (
                <Link to="/b2c" className="btn btn--outline">
                  View B2C apps →
                </Link>
              ) : (
                <a href="#contact" className="btn btn--outline">
                  Learn more →
                </a>
              )}
            </div>
            <div className="segment-block__visual segment-visual">
              {seg.rows.map(([label, value]) => (
                <div key={label} className="segment-visual__row">
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
