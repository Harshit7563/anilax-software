const S = {
  stroke: "currentColor",
  strokeWidth: 1.75,
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const ICONS = {
  "custom-software": (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
      <path {...S} d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  ),
  "web-development": (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect {...S} x="3" y="4" width="18" height="14" rx="2" />
      <path {...S} d="M3 8h18M8 20h8" />
      <path {...S} d="M8 12l2 2 4-4" />
    </svg>
  ),
  "mobile-apps": (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect {...S} x="7" y="2" width="10" height="20" rx="2" />
      <path {...S} d="M11 18h2" />
      <path {...S} d="M9 6h6" />
    </svg>
  ),
  "saas-development": (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
      <path {...S} d="M8 14h8M8 17h5" />
    </svg>
  ),
  "enterprise-erp-crm": (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M3 21V8l9-4 9 4v13" />
      <path {...S} d="M9 21v-8h6v8M9 12h6" />
      <path {...S} d="M12 4v4" />
    </svg>
  ),
  "ecommerce-marketplace": (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M6 6h15l-1.5 9h-12L6 6z" />
      <circle {...S} cx="9" cy="20" r="1" />
      <circle {...S} cx="18" cy="20" r="1" />
      <path {...S} d="M6 6L5 3H2" />
    </svg>
  ),
  "fintech-payments": (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect {...S} x="2" y="5" width="20" height="14" rx="2" />
      <path {...S} d="M2 10h20" />
      <path {...S} d="M6 15h4" />
    </svg>
  ),
  "healthcare-software": (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect {...S} x="4" y="4" width="16" height="16" rx="3" />
      <path {...S} d="M12 8v8M8 12h8" />
    </svg>
  ),
  "edtech-lms": (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M22 10l-10 5L2 10l10-5 10 5z" />
      <path {...S} d="M6 12v5c0 0 2.5 2 6 2s6-2 6-2v-5" />
      <path {...S} d="M22 10v6" />
    </svg>
  ),
  "logistics-supply-chain": (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M1 14h12v5H1zM13 10h8l2 4v5h-10V10z" />
      <circle {...S} cx="5.5" cy="19" r="1.5" />
      <circle {...S} cx="18.5" cy="19" r="1.5" />
      <path {...S} d="M13 10V6H5v4" />
    </svg>
  ),
  "on-demand-apps": (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  "ai-automation": (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect {...S} x="4" y="8" width="16" height="12" rx="2" />
      <circle {...S} cx="9" cy="13" r="1" fill="currentColor" stroke="none" />
      <circle {...S} cx="15" cy="13" r="1" fill="currentColor" stroke="none" />
      <path {...S} d="M9 17h6" />
      <path {...S} d="M12 8V5M9 5h6" />
    </svg>
  ),
  "cloud-devops": (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <ellipse {...S} cx="12" cy="5" rx="8" ry="3" />
      <path {...S} d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path {...S} d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </svg>
  ),
  "ui-ux-design": (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect {...S} x="3" y="3" width="18" height="18" rx="2" />
      <path {...S} d="M3 9h18M9 9v12" />
      <circle {...S} cx="6" cy="6" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  "api-integration": (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle {...S} cx="6" cy="12" r="3" />
      <circle {...S} cx="18" cy="6" r="3" />
      <circle {...S} cx="18" cy="18" r="3" />
      <path {...S} d="M8.7 10.7l6.6-3.4M8.7 13.3l6.6 3.4" />
    </svg>
  ),
  "legacy-modernization": (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M21 12a9 9 0 11-2.64-6.36" />
      <path {...S} d="M21 3v6h-6" />
      <path {...S} d="M8 8l-2 4 4-2" />
    </svg>
  ),
  "dedicated-teams": (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle {...S} cx="9" cy="7" r="3" />
      <path {...S} d="M3 21v-1a5 5 0 015-5h2a5 5 0 015 5v1" />
      <path {...S} d="M16 11l2 2 4-4" />
    </svg>
  ),
};

const FALLBACK = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect {...S} x="4" y="4" width="16" height="16" rx="3" />
    <path {...S} d="M9 12h6" />
  </svg>
);

export function ServiceLineIcon({ id, className = "", size = "md" }) {
  return (
    <span className={`service-line-icon service-line-icon--${size} ${className}`.trim()}>
      {ICONS[id] ?? FALLBACK}
    </span>
  );
}
