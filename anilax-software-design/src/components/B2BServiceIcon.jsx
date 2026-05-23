const ICONS = {
  withdraw: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <rect x="5" y="3" width="14" height="12" rx="2" />
      <path d="M9 7h6M9 10h4" />
      <path d="M12 15v4" />
      <path d="M9 19h6" />
      <path d="M10 15l2 2 2-2" />
    </svg>
  ),
  deposit: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <rect x="5" y="8" width="14" height="12" rx="2" />
      <path d="M9 12h6M9 15h4" />
      <path d="M12 4v4" />
      <path d="M10 8l2-2 2 2" />
    </svg>
  ),
  balance: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <rect x="3" y="5" width="13" height="10" rx="2" />
      <path d="M6.5 8.5h7" />
      <path d="M6.5 11h5" />
      <path d="M6.5 13.5h3.5" />
      <circle cx="16.5" cy="16.5" r="4" />
      <path d="M19.3 19.3L21 21" />
    </svg>
  ),
  statement: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M7 4h10a2 2 0 012 2v14l-4-2-4 2-4-2-4 2V6a2 2 0 012-2z" />
      <path d="M9 9h6M9 13h4M9 17h5" />
    </svg>
  ),
  "aadhaar-pay": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M4 8V6a2 2 0 012-2h2M16 4h2a2 2 0 012 2v2M20 16v2a2 2 0 01-2 2h-2M8 20H6a2 2 0 01-2-2v-2" />
      <path d="M9 12h6" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  matm: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="7" y="8" width="10" height="5" rx="1" />
      <path d="M9 16h6" />
      <path d="M12 4v2" />
    </svg>
  ),
};

export function B2BServiceIcon({ name }) {
  return <span className="b2b-service-icon">{ICONS[name] ?? ICONS.withdraw}</span>;
}
