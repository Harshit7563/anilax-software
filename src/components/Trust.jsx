export function Trust() {
  return (
    <section className="trust">
      <div className="trust__inner">
        <p>
          We never use your transaction data to train models. Your financial data stays
          private to your organization — encrypted at rest and in transit.
        </p>
        <div className="trust__badges">
          <span className="trust__badge">PCI-DSS</span>
          <span className="trust__badge">ISO 27001</span>
          <span className="trust__badge">SOC 2 Type II</span>
          <span className="trust__badge">256-bit encryption</span>
          <span className="trust__badge">99.99% uptime SLA</span>
        </div>
      </div>
    </section>
  );
}
