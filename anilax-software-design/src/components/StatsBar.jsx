import { HOME_STATS } from "../data/homePage";

export function StatsBar() {
  return (
    <section className="dw-stats">
      <div className="dw-container">
        <div className="dw-stats__header">
        <h2 className="dw-heading">
          120+ Products Shipped Across Fintech, Healthcare, Logistics & SaaS
        </h2>
        <p className="dw-lead">
          Through collaborative teamwork and strong product engineering, we&apos;ve expanded our
          ecosystem and built lasting value for partners across India.
        </p>
      </div>
      <div className="dw-stats__grid">
        {HOME_STATS.map((stat) => (
          <article key={stat.label} className="dw-stat">
            <p className="dw-stat__value">{stat.value}</p>
            <h3 className="dw-stat__label">{stat.label}</h3>
            <p className="dw-stat__desc">{stat.desc}</p>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}
