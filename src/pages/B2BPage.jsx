import { B2B_HERO } from "../data/b2bAeps";
import { B2BLiveDemo } from "../components/B2BLiveDemo";
import { B2BAeps } from "../components/B2BAeps";
import { AepsFingerprintIcon } from "../components/AepsFingerprintIcon";
import "../styles/b2b-page.css";

export function B2BPage() {
  return (
    <>
      <section className="b2b-page-hero">
        <div className="b2b-page-hero__glow" aria-hidden="true" />
        <div className="b2b-page-hero__fp-wrap">
          <div className="b2b-page-hero__fp-plate">
            <AepsFingerprintIcon size={80} variant="light" />
          </div>
          <span className="b2b-page-hero__fp-badge">NPCI · UIDAI biometric</span>
        </div>
        <p className="b2b-page-hero__eyebrow">{B2B_HERO.eyebrow}</p>
        <h1 className="b2b-page-hero__title">
          <span className="gradient">{B2B_HERO.title}</span>
        </h1>
        <p className="b2b-page-hero__sub">{B2B_HERO.subtitle}</p>
        <div className="b2b-page-hero__actions">
          <a href={B2B_HERO.ctaPrimary.href} className="btn btn--gradient">
            {B2B_HERO.ctaPrimary.label}
          </a>
          <a href={B2B_HERO.ctaSecondary.href} className="btn btn--ghost btn--ghost-dark">
            {B2B_HERO.ctaSecondary.label}
          </a>
        </div>
        <p className="b2b-page-hero__notice">{B2B_HERO.notice}</p>
      </section>
      <B2BLiveDemo />
      <B2BAeps showHero={false} />
    </>
  );
}
