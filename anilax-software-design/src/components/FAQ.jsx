import { useState } from "react";
import { HOME_FAQS } from "../data/homePage";

export function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="dw-faq" id="faq">
      <div className="dw-container dw-faq__inner">
        <p className="dw-eyebrow">FAQ</p>
        <h2 className="dw-heading">Frequently asked questions</h2>
        <p className="dw-lead">
          Questions founders ask before building or scaling their systems.
        </p>
        <div className="dw-faq__list">
          {HOME_FAQS.map((item, i) => (
            <div
              key={item.q}
              className={`dw-faq-item ${open === i ? "dw-faq-item--open" : ""}`}
            >
              <button
                type="button"
                className="dw-faq-item__q"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{item.q}</span>
                <span aria-hidden="true">{open === i ? "−" : "+"}</span>
              </button>
              <div className="dw-faq-item__a">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
