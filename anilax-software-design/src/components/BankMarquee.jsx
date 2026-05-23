import { BANK_MARQUEE_HEADLINE, BANK_MARQUEE_SUB, BANK_PARTNERS } from "../data/bankPartners";
import "../styles/bank-marquee.css";

export function BankMarquee() {
  const banks = [...BANK_PARTNERS, ...BANK_PARTNERS];

  return (
    <section className="bank-marquee" aria-label="Bank partners">
      <p className="bank-marquee__text">
        <strong>{BANK_MARQUEE_HEADLINE}</strong>
        <span className="bank-marquee__sub">{BANK_MARQUEE_SUB}</span>
      </p>
      <div className="bank-marquee__viewport">
        <div className="bank-marquee__track">
          {banks.map((name, i) => (
            <span key={`${name}-${i}`} className="bank-marquee__pill">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
