const FLATICON_FINGERPRINT = "/icons/fingerprint-flaticon.png";

/** Biometric read / scan — paired with fingerprint on AePS API card */
const READ_BADGE = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 8H5V6M17 8h2V6M17 16h2v2M7 16H5v-2" />
    <path d="M8 12h8" />
    <path d="M10 10.5v3M14 10.5v3" />
  </svg>
);

const SOFTWARE_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
    <rect x="3" y="4" width="18" height="13" rx="2" />
    <path d="M8 20h8" />
    <path d="M12 17v3" />
    <path d="M8 9h8M8 12h5" />
  </svg>
);

export function B2BSolutionIcon({ name }) {
  if (name === "api") {
    return (
      <span className="b2b-solution-icon b2b-solution-icon--api">
        <img src={FLATICON_FINGERPRINT} alt="" className="b2b-solution-icon__fp" width={22} height={22} decoding="async" />
        <span className="b2b-solution-icon__read">{READ_BADGE}</span>
      </span>
    );
  }

  return (
    <span className="b2b-solution-icon">
      {SOFTWARE_ICON}
    </span>
  );
}
