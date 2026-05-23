import { useState } from "react";

const TABS = {
  fintech: {
    stats: [
      { label: "Settlement volume", value: "₹842M", change: "+12.4%" },
      { label: "Active accounts", value: "24,891", change: "+8.1%" },
      { label: "Compliance score", value: "99.2%", change: "Stable" },
    ],
    rows: [
      ["TXN-8841", "NEFT settlement", "₹2,40,000", "ok"],
      ["TXN-8840", "UPI collect", "₹1,850", "ok"],
      ["TXN-8839", "Card auth", "₹12,400", "pending"],
    ],
  },
  b2c: {
    stats: [
      { label: "Wallet users", value: "1.2M", change: "+31%" },
      { label: "Daily transactions", value: "89K", change: "+18%" },
      { label: "App rating", value: "4.8", change: "★" },
    ],
    rows: [
      ["WAL-4412", "Top-up UPI", "₹500", "ok"],
      ["WAL-4411", "Bill pay — electricity", "₹2,340", "ok"],
      ["WAL-4410", "P2P transfer", "₹1,000", "pending"],
    ],
  },
  api: {
    code: true,
  },
  software: {
    stats: [
      { label: "Active projects", value: "24", change: "+4" },
      { label: "Sprint velocity", value: "94%", change: "On track" },
      { label: "Client satisfaction", value: "4.9", change: "★" },
    ],
    rows: [
      ["PRJ-1024", "Payment portal UI", "Sprint 6", "ok"],
      ["PRJ-1023", "Mobile wallet app", "QA", "ok"],
      ["PRJ-1022", "Admin dashboard", "Dev", "pending"],
    ],
  },
};

export function PlatformDemo() {
  const [tab, setTab] = useState("fintech");
  const data = TABS[tab];

  return (
    <section className="demo" id="demo">
      <div className="demo__inner">
        <div className="demo__header">
          <p className="section-label">Live dashboard</p>
          <h2 className="section-title">See your money in motion</h2>
          <p className="section-sub">
            One console for ops, finance, and engineering — switch views by product line.
          </p>
        </div>
        <div className="demo-card">
          <div className="demo-tabs" role="tablist">
            {Object.keys(TABS).map((key) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={tab === key}
                className={`demo-tab ${tab === key ? "demo-tab--active" : ""}`}
                onClick={() => setTab(key)}
              >
                {key === "api"
                  ? "API"
                  : key === "b2c"
                    ? "B2C"
                    : key === "software"
                      ? "Software Dev"
                      : "Fintech"}
              </button>
            ))}
          </div>
          <div className="demo-body" role="tabpanel">
            {data.code ? (
              <pre className="api-panel">
                <code>{`curl https://api.anilaxpayments.com/v1/payments \\
  -H "Authorization: Bearer sk_live_..." \\
  -d '{
    "amount": 50000,
    "currency": "INR",
    "customer_id": "cus_8f2a",
    "method": "upi"
  }'

// → 201 Created
{
  "id": "pay_3k9m2x",
  "status": "succeeded",
  "receipt_url": "https://..."
}`}</code>
              </pre>
            ) : (
              <>
                <div className="demo-stats">
                  {data.stats.map((s) => (
                    <div key={s.label} className="demo-stat">
                      <p className="demo-stat__label">{s.label}</p>
                      <p className="demo-stat__value">{s.value}</p>
                      <p className="demo-stat__change">{s.change}</p>
                    </div>
                  ))}
                </div>
                <div className="demo-table-wrap">
                  <table className="demo-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.rows.map(([id, desc, amt, st]) => (
                        <tr key={id}>
                          <td>{id}</td>
                          <td>{desc}</td>
                          <td>{amt}</td>
                          <td>
                            <span className={`status status--${st}`}>
                              {st === "ok" ? "Settled" : "Pending"}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
