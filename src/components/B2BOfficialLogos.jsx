/** NPCI & AePS wordmarks — replace SVGs in /public/logos/ with files from NPCI Brand Centre if needed. */
export function B2BOfficialLogos() {
  return (
    <div className="b2b-official-logos">
      <div className="b2b-official-logos__item">
        <img
          src="/logos/npci.svg"
          alt="NPCI — National Payments Corporation of India"
          className="b2b-official-logos__npci"
          width={320}
          height={98}
          loading="lazy"
          decoding="async"
        />
      </div>
      <span className="b2b-official-logos__divider" aria-hidden="true" />
      <div className="b2b-official-logos__item">
        <img
          src="/logos/aeps.svg"
          alt="AePS — Aadhaar Enabled Payment System"
          className="b2b-official-logos__aeps"
          width={360}
          height={83}
          loading="lazy"
          decoding="async"
        />
      </div>
      <p className="b2b-official-logos__note">
        NPCI® and AePS® are trademarks of National Payments Corporation of India.
      </p>
    </div>
  );
}
