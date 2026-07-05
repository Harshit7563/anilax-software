import { HOME_PROCESS } from "../data/homePage";

export function Workflow() {
  return (
    <section className="dw-process">
      <div className="dw-container">
        <div className="dw-process__header">
        <p className="dw-eyebrow">Process</p>
        <h2 className="dw-heading">Our average project kicks off within 7 days of first contact</h2>
        <p className="dw-lead">
          Technology built around your business, not the other way around.
        </p>
      </div>
      <div className="dw-process__grid">
        {HOME_PROCESS.map((step) => (
          <article key={step.title} className="dw-process-step">
            <span className="dw-process-step__label">{step.step}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
      <p className="dw-process__note">We work across all timezones. Same-day responses, always.</p>
      </div>
    </section>
  );
}
