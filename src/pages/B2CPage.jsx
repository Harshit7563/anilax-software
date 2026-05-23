import { Link } from "react-router-dom";
import { B2C_HERO } from "../data/b2cApps";
import { BankMarquee } from "../components/BankMarquee";
import { B2CLiveDemo } from "../components/B2CLiveDemo";
import { B2CConsumer } from "../components/B2CConsumer";
import "../styles/b2c-page.css";

export function B2CPage() {
  return (
    <>
      <section className="b2c-page-hero">
        <div className="b2c-page-hero__glow" aria-hidden="true" />
        <p className="b2c-page-hero__eyebrow">{B2C_HERO.eyebrow}</p>
        <h1 className="b2c-page-hero__title">
          <span className="gradient">{B2C_HERO.title}</span>
        </h1>
        <p className="b2c-page-hero__sub">{B2C_HERO.subtitle}</p>
        <div className="b2c-page-hero__actions">
          <a href={B2C_HERO.ctaPrimary.href} className="btn btn--gradient">
            {B2C_HERO.ctaPrimary.label}
          </a>
          <Link to={B2C_HERO.ctaSecondary.href} className="btn btn--ghost btn--ghost-dark">
            {B2C_HERO.ctaSecondary.label}
          </Link>
        </div>
        <p className="b2c-page-hero__notice">{B2C_HERO.notice}</p>
      </section>
      <BankMarquee />
      <B2CLiveDemo />
      <B2CConsumer showHero={false} />
    </>
  );
}
