const ICONS = {
  node: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M12 2l7 4v8l-7 4-7-4V6l7-4z" />
      <path d="M12 12v8M12 12L5 8M12 12l7-4" />
    </svg>
  ),
  python: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M9 4h6v4H9V4zM9 16h6v4H9v-4z" />
      <path d="M12 8v8M8 10c-2 0-3 1-3 2s1 2 3 2M16 14c2 0 3 1 3 2s-1 2-3 2" />
    </svg>
  ),
  go: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <circle cx="8" cy="12" r="3" />
      <circle cx="16" cy="12" r="3" />
      <path d="M11 12h2" />
    </svg>
  ),
  php: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <ellipse cx="12" cy="12" rx="9" ry="5" />
      <path d="M7 12h10" />
    </svg>
  ),
  java: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M8 4c4 2 8 2 8 6s-4 4-8 6M8 14c4 2 8 2 8 6" />
    </svg>
  ),
  ruby: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M12 4l8 14H4L12 4z" />
    </svg>
  ),
  android: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M8 8l-2-3M16 8l2-3M7 12h10v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6z" />
      <circle cx="10" cy="11" r="0.5" fill="currentColor" />
      <circle cx="14" cy="11" r="0.5" fill="currentColor" />
    </svg>
  ),
  ios: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </svg>
  ),
};

export function SdkLangIcon({ name }) {
  return <span className="sdk-lang-icon">{ICONS[name] ?? ICONS.node}</span>;
}
