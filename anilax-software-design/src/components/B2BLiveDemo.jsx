import { B2B_DEMO_STATS, B2B_DEMO_ROWS } from "../data/b2bAeps";
import { B2BOfficialLogos } from "./B2BOfficialLogos";

export function B2BLiveDemo() {
  return (
    <section className="demo demo--b2b-page">
      <div className="demo__inner">
        <B2BOfficialLogos />
        <div className="demo__header">
          <p className="section-label">Live dashboard</p>
          <h2 className="section-title">AePS transactions in real time</h2>
          <p className="section-sub">
            Monitor withdrawals, enquiries, and settlements across your retailer network.
          </p>
        </div>
        <div className="demo-card">
          <div className="demo-body">
            <div className="demo-stats">
              {B2B_DEMO_STATS.map((s) => (
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
                    <th>Service</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {B2B_DEMO_ROWS.map(([id, desc, amt, st]) => (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{desc}</td>
                      <td>{amt}</td>
                      <td>
                        <span className={`status status--${st}`}>Settled</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
