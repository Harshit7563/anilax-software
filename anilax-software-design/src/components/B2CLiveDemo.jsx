import { B2C_ROADMAP } from "../data/b2cApps";

export function B2CLiveDemo() {
  return (
    <section className="demo demo--b2c-page">
      <div className="demo__inner demo__inner--b2c">
        <div className="demo__header">
          <p className="section-label">Product roadmap</p>
          <h2 className="section-title">
            From idea to <span className="gradient">UPI super-app</span>
          </h2>
          <p className="section-sub">
            A clear phased plan — design, UPI wallet MVP, bills, rewards, and production launch with Anilax APIs.
          </p>
        </div>

        <div className="b2c-roadmap b2c-roadmap--wide">
          <div className="b2c-roadmap__head">
            <h3>Delivery roadmap</h3>
            <span className="b2c-roadmap__eta">~12 weeks to go-live</span>
          </div>
          <ol className="b2c-roadmap__track b2c-roadmap__track--wide">
            {B2C_ROADMAP.map((step, i) => (
              <li
                key={step.phase}
                className={`b2c-roadmap__step b2c-roadmap__step--${step.status}`}
              >
                <div className="b2c-roadmap__top">
                  <span className="b2c-roadmap__phase">{step.phase}</span>
                  {i < B2C_ROADMAP.length - 1 && (
                    <span className="b2c-roadmap__connector" aria-hidden="true" />
                  )}
                </div>
                <div className="b2c-roadmap__body">
                  <div className="b2c-roadmap__title-row">
                    <h4>{step.title}</h4>
                    <span className="b2c-roadmap__duration">{step.duration}</span>
                  </div>
                  <ul>
                    {step.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {step.status === "active" && (
                    <span className="b2c-roadmap__badge">In progress</span>
                  )}
                  {step.status === "done" && (
                    <span className="b2c-roadmap__badge b2c-roadmap__badge--done">Completed</span>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
