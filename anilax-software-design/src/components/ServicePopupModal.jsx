import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ServiceLineIcon } from "./ServiceLineIcon";
import { useContactModal } from "../context/ContactModalContext";
import { getServiceLine } from "../data/serviceLines";
import { BUSINESS_SOLUTIONS, PAYMENT_SOLUTIONS } from "../data/softwareServices";

const ALL_PRODUCTS = [...PAYMENT_SOLUTIONS, ...BUSINESS_SOLUTIONS];
import "../styles/service-popup.css";

export function ServicePopupModal({
  serviceId,
  open,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}) {
  const { openContact } = useContactModal();
  const service = serviceId ? getServiceLine(serviceId) : null;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (!open) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev?.();
      if (e.key === "ArrowRight" && hasNext) onNext?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!open || !service) return null;

  const related = ALL_PRODUCTS.filter((p) => service.relatedProducts?.includes(p.id)).slice(0, 6);

  return (
    <div className="service-popup" role="dialog" aria-modal="true" aria-labelledby="service-popup-title">
      <button type="button" className="service-popup__backdrop" onClick={onClose} aria-label="Close" />
      <div className="service-popup__dialog">
        <button type="button" className="service-popup__close" onClick={onClose} aria-label="Close">
          ×
        </button>

        {(hasPrev || hasNext) && (
          <div className="service-popup__nav">
            <button type="button" className="service-popup__nav-btn" onClick={onPrev} disabled={!hasPrev}>
              ← Prev
            </button>
            <button type="button" className="service-popup__nav-btn" onClick={onNext} disabled={!hasNext}>
              Next →
            </button>
          </div>
        )}

        <div className="service-popup__scroll">
          <header className="service-popup__hero">
            <ServiceLineIcon id={service.id} size="lg" className="service-popup__icon" />
            <p className="service-popup__eyebrow">Service</p>
            <h2 id="service-popup-title">{service.title}</h2>
            <p className="service-popup__tagline">{service.tagline}</p>
            <p className="service-popup__summary">{service.summary}</p>
          </header>

          <div className="service-popup__grid">
            <section>
              <h3>What we deliver</h3>
              <ul>
                {service.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </section>
            <section>
              <h3>Technology stack</h3>
              <div className="service-popup__chips">
                {service.stack.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <h3 className="service-popup__h3-spaced">Ideal for</h3>
              <ul>
                {service.useCases.map((u) => (
                  <li key={u}>{u}</li>
                ))}
              </ul>
            </section>
          </div>

          {related.length > 0 && (
            <section className="service-popup__related">
              <h3>Related software products</h3>
              <div className="service-popup__related-grid">
                {related.map((p) => (
                  <Link key={p.id} to={`/software/${p.id}`} className="service-popup__related-card" onClick={onClose}>
                    <strong>{p.title}</strong>
                    <span>{p.tagline}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>

        <footer className="service-popup__footer">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              openContact({
                apiName: service.title,
                categoryId: service.id,
                categoryTitle: "Services",
              });
              onClose();
            }}
          >
            Discuss this service
          </button>
          <Link to={`/services/${service.id}`} className="btn btn-outline" onClick={onClose}>
            Full service page
          </Link>
        </footer>
      </div>
    </div>
  );
}
