import { Link } from "react-router-dom";

const ENDPOINTS = [
  { method: "POST", path: "/v1/payments" },
  { method: "POST", path: "/v1/payouts" },
  { method: "GET", path: "/v1/accounts/{id}" },
  { method: "POST", path: "/v1/customers" },
  { method: "GET", path: "/v1/transactions" },
];

export function ApiSection() {
  return (
    <section className="api-section" id="api">
      <div className="api-section__inner">
        <div>
          <p className="section-label">Developer API</p>
          <h2 className="section-title">Build on financial rails</h2>
          <p className="section-sub">
            Predictable REST APIs, idempotent requests, and comprehensive webhooks.
            Sandbox is free — go live when you are ready.
          </p>
          <div className="api-endpoints">
            {ENDPOINTS.map((ep) => (
              <div key={ep.path + ep.method} className="api-endpoint">
                <span className={`api-method api-method--${ep.method.toLowerCase()}`}>
                  {ep.method}
                </span>
                <span>{ep.path}</span>
              </div>
            ))}
          </div>
          <Link to="/signup" className="btn btn--gradient">
            Get API keys
          </Link>
        </div>
        <pre className="api-panel">
          <code>{`import { Anilax } from '@anilax/sdk';

const client = new Anilax(process.env.ANILAX_SECRET);

const payment = await client.payments.create({
  amount: 250000,
  currency: 'INR',
  customer: 'cus_abc123',
  metadata: { order_id: 'ord_991' },
});

console.log(payment.status); // succeeded`}</code>
        </pre>
      </div>
    </section>
  );
}
