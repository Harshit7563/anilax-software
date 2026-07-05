import { ServiceLineIcon } from "../ServiceLineIcon";

export const S = {
  stroke: "currentColor",
  strokeWidth: 1.75,
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const GLYPHS = {
  bolt: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  bridge: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M4 12h16M6 12v4M10 12v4M14 12v4M18 12v4M2 16h20" />
    </svg>
  ),
  shuffle: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
    </svg>
  ),
  qrcode: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect {...S} x="3" y="3" width="7" height="7" rx="1" />
      <rect {...S} x="14" y="3" width="7" height="7" rx="1" />
      <rect {...S} x="3" y="14" width="7" height="7" rx="1" />
      <path {...S} d="M14 14h3v3h-3zM17 17h4v4h-4zM14 20h3" />
    </svg>
  ),
  refresh: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M21 12a9 9 0 11-2.64-6.36" />
      <path {...S} d="M21 3v6h-6" />
    </svg>
  ),
  factory: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M3 21V8l6-3 6 3v13M9 21v-6h6v6" />
      <path {...S} d="M9 8V5h2v3M13 8V5h2v3" />
    </svg>
  ),
  box: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M21 8l-9-4-9 4v8l9 4 9-4V8z" />
      <path {...S} d="M3 8l9 4 9-4M12 12v8" />
    </svg>
  ),
  receipt: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M6 2h12v20l-2-1-2 1-2-1-2 1-2-1-2 1V2z" />
      <path {...S} d="M8 7h8M8 11h8M8 15h5" />
    </svg>
  ),
  graduation: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M22 10l-10 5L2 10l10-5 10 5z" />
      <path {...S} d="M6 12v5c0 0 2.5 2 6 2s6-2 6-2v-5" />
    </svg>
  ),
  book: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path {...S} d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </svg>
  ),
  edit: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  ),
  clipboard: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
      <rect {...S} x="9" y="3" width="6" height="4" rx="1" />
      <path {...S} d="M9 12h6M9 16h4" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle {...S} cx="9" cy="7" r="3" />
      <path {...S} d="M3 21v-1a5 5 0 015-5h2a5 5 0 015 5v1" />
      <path {...S} d="M16 11l2 2 4-4" />
    </svg>
  ),
  userBadge: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle {...S} cx="12" cy="8" r="3" />
      <path {...S} d="M6 21v-1a4 4 0 014-4h4a4 4 0 014 4v1" />
      <rect {...S} x="16" y="3" width="5" height="5" rx="1" />
    </svg>
  ),
  layout: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect {...S} x="3" y="3" width="18" height="18" rx="2" />
      <path {...S} d="M3 9h18M9 9v12" />
    </svg>
  ),
  lifeBuoy: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle {...S} cx="12" cy="12" r="9" />
      <circle {...S} cx="12" cy="12" r="4" />
      <path {...S} d="M12 3v2M12 19v2M3 12h2M19 12h2" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  ),
  terminal: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M4 17l6-6-6-6M12 19h8" />
      <rect {...S} x="2" y="3" width="20" height="18" rx="2" />
    </svg>
  ),
  coins: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <ellipse {...S} cx="8" cy="8" rx="5" ry="2" />
      <path {...S} d="M3 8v4c0 1.1 2.2 2 5 2s5-.9 5-2V8" />
      <ellipse {...S} cx="16" cy="14" rx="5" ry="2" />
      <path {...S} d="M11 14v4c0 1.1 2.2 2 5 2s5-.9 5-2v-4" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path {...S} d="M9 12l2 2 4-4" />
    </svg>
  ),
  cart: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M6 6h15l-1.5 9h-12L6 6z" />
      <circle {...S} cx="9" cy="20" r="1" />
      <circle {...S} cx="18" cy="20" r="1" />
      <path {...S} d="M6 6L5 3H2" />
    </svg>
  ),
  storefront: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M3 9l2-4h14l2 4" />
      <path {...S} d="M3 9v11h18V9" />
      <path {...S} d="M9 22v-7h6v7" />
      <path {...S} d="M7 9v0a2 2 0 014 0v0a2 2 0 014 0v0a2 2 0 014 0" />
    </svg>
  ),
  barcode: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M4 7v10M7 7v10M10 7v10M14 7v10M17 7v10M20 7v10" />
    </svg>
  ),
  bag: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M6 6h12l1 14H5L6 6z" />
      <path {...S} d="M9 6V5a3 3 0 016 0v1" />
    </svg>
  ),
  utensils: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M6 3v8a2 2 0 104 0V3M8 11v10" />
      <path {...S} d="M16 3v18M16 3c2 0 4 2 4 5v3" />
    </svg>
  ),
  chef: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M6 13c0-3 2.5-5 6-5s6 2 6 5v2H6v-2z" />
      <path {...S} d="M4 15h16v3H4zM8 18v2h8v-2" />
    </svg>
  ),
  building: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect {...S} x="4" y="3" width="16" height="18" rx="1" />
      <path {...S} d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M9 19h6" />
    </svg>
  ),
  plane: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M2 12h6l8-8 2 8 6 2-6 2-2 8-8-8H2z" />
    </svg>
  ),
  car: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M5 17h14l-1.5-5H6.5L5 17z" />
      <circle {...S} cx="7.5" cy="17.5" r="1.5" />
      <circle {...S} cx="16.5" cy="17.5" r="1.5" />
      <path {...S} d="M5 12h14M7 7l2-3h6l2 3" />
    </svg>
  ),
  bus: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect {...S} x="4" y="4" width="16" height="14" rx="2" />
      <path {...S} d="M4 10h16M8 18v2M16 18v2" />
      <circle {...S} cx="8" cy="16" r="1" />
      <circle {...S} cx="16" cy="16" r="1" />
    </svg>
  ),
  truck: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M1 14h12v5H1zM13 10h8l2 4v5h-10V10z" />
      <circle {...S} cx="5.5" cy="19" r="1.5" />
      <circle {...S} cx="18.5" cy="19" r="1.5" />
    </svg>
  ),
  columns: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M6 20V4M12 20V4M18 20V4M4 20h16M4 4h16" />
    </svg>
  ),
  hardhat: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M4 14a8 8 0 0116 0v3H4v-3z" />
      <path {...S} d="M12 6V4M8 8l-1-2M16 8l1-2" />
    </svg>
  ),
  pill: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M8.5 8.5l7 7a4 4 0 01-5.66 5.66l-7-7a4 4 0 015.66-5.66z" />
    </svg>
  ),
  medical: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect {...S} x="4" y="4" width="16" height="16" rx="3" />
      <path {...S} d="M12 8v8M8 12h8" />
    </svg>
  ),
  flask: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M9 3h6M10 3v6l-4 9a2 2 0 001.8 3h8.4a2 2 0 001.8-3l-4-9V3" />
    </svg>
  ),
  smile: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle {...S} cx="12" cy="12" r="9" />
      <path {...S} d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
    </svg>
  ),
  activity: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  scissors: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle {...S} cx="6" cy="6" r="2" />
      <circle {...S} cx="6" cy="18" r="2" />
      <path {...S} d="M8 8l12 8M8 16l12-8" />
    </svg>
  ),
  gem: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M6 3h12l4 7-10 11L2 10l4-7z" />
    </svg>
  ),
  shirt: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M16 3l4 3v4l-4-2v12H8V8L4 10V6l4-3 4 2 4-2z" />
    </svg>
  ),
  fuel: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M6 20V4h8v16M6 8h8" />
      <path {...S} d="M14 8h4l2 4v8h-6V8z" />
    </svg>
  ),
  sprout: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M12 22V12M12 12C12 7 7 4 4 4c0 4 3 8 8 8M12 12c0-5 5-8 8-8 0 4-3 8-8 8" />
    </svg>
  ),
  droplet: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M12 2.69l5.66 5.66a8 8 0 11-11.32 0L12 2.69z" />
    </svg>
  ),
  network: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle {...S} cx="12" cy="5" r="2" />
      <circle {...S} cx="5" cy="19" r="2" />
      <circle {...S} cx="19" cy="19" r="2" />
      <path {...S} d="M12 7v4M8.5 15l-2 2M15.5 15l2 2M12 11v2" />
    </svg>
  ),
  link: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
      <path {...S} d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect {...S} x="2" y="7" width="20" height="14" rx="2" />
      <path {...S} d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M2 12h20" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  ),
  tag: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
      <circle {...S} cx="7" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  newspaper: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect {...S} x="3" y="4" width="18" height="16" rx="2" />
      <path {...S} d="M7 8h10M7 12h10M7 16h6" />
    </svg>
  ),
  play: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle {...S} cx="12" cy="12" r="9" />
      <path {...S} d="M10 8l6 4-6 4V8z" />
    </svg>
  ),
  share: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle {...S} cx="18" cy="5" r="3" />
      <circle {...S} cx="6" cy="12" r="3" />
      <circle {...S} cx="18" cy="19" r="3" />
      <path {...S} d="M8.59 13.51l6.83 3.98M15.42 6.49l-6.82 3.98" />
    </svg>
  ),
  message: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect {...S} x="2" y="4" width="20" height="16" rx="2" />
      <path {...S} d="M2 7l10 7 10-7" />
    </svg>
  ),
  listCheck: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M9 6h12M9 12h12M9 18h12" />
      <path {...S} d="M3 6l1.5 1.5L6 5M3 12l1.5 1.5L6 11M3 18l1.5 1.5L6 17" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M4 19V5M4 19h16" />
      <path {...S} d="M8 17V11M12 17V7M16 17v-4" />
    </svg>
  ),
  folder: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M4 20h16a1 1 0 001-1V7a1 1 0 00-1-1h-5l-2-2H4a1 1 0 00-1 1v13a1 1 0 001 1z" />
    </svg>
  ),
  home: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M3 11l9-7 9 7M5 10v10h14V10" />
    </svg>
  ),
  scale: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M12 3v18M5 7h14" />
      <path {...S} d="M3 7l4 8H1M23 7l-4 8h6" />
    </svg>
  ),
  library: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M4 19V5M4 19c0 0 2 1 4 1s4-1 4-1M12 19V5M12 19c0 0 2 1 4 1s4-1 4-1M20 19V5" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect {...S} x="3" y="4" width="18" height="18" rx="2" />
      <path {...S} d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  ),
  clapper: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M4 11h16v8H4zM4 11l4-7h12l-4 7" />
    </svg>
  ),
  queue: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle {...S} cx="6" cy="8" r="2" />
      <circle {...S} cx="12" cy="8" r="2" />
      <circle {...S} cx="18" cy="8" r="2" />
      <path {...S} d="M6 12v8M12 12v8M18 12v8" />
    </svg>
  ),
  badge: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect {...S} x="4" y="5" width="16" height="14" rx="2" />
      <circle {...S} cx="12" cy="11" r="3" />
      <path {...S} d="M8 21h8" />
    </svg>
  ),
  parking: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle {...S} cx="12" cy="12" r="9" />
      <path {...S} d="M9 8h3a2 2 0 010 4H9v4" />
    </svg>
  ),
  cpu: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect {...S} x="6" y="6" width="12" height="12" rx="1" />
      <path {...S} d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
    </svg>
  ),
  bot: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect {...S} x="4" y="8" width="16" height="12" rx="2" />
      <circle {...S} cx="9" cy="13" r="1" fill="currentColor" stroke="none" />
      <circle {...S} cx="15" cy="13" r="1" fill="currentColor" stroke="none" />
      <path {...S} d="M9 17h6M12 8V5M9 5h6" />
    </svg>
  ),
  gavel: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M14 4l6 6-8 8-6-6 8-8zM4 20l4-4" />
    </svg>
  ),
  stores: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M3 9h8v12H3zM13 9h8v12h-8zM3 9l1-4h6l1 4M13 9l1-4h6l1 4" />
    </svg>
  ),
  dashboard: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect {...S} x="3" y="3" width="8" height="8" rx="1" />
      <rect {...S} x="13" y="3" width="8" height="5" rx="1" />
      <rect {...S} x="13" y="10" width="8" height="11" rx="1" />
      <rect {...S} x="3" y="13" width="8" height="8" rx="1" />
    </svg>
  ),
  award: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle {...S} cx="12" cy="8" r="5" />
      <path {...S} d="M8.5 14.5L7 22l5-2.5L17 22l-1.5-7.5" />
    </svg>
  ),
  card: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect {...S} x="2" y="5" width="20" height="14" rx="2" />
      <path {...S} d="M2 10h20" />
      <path {...S} d="M6 15h4" />
    </svg>
  ),
  smartphone: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect {...S} x="7" y="2" width="10" height="20" rx="2" />
      <path {...S} d="M11 18h2" />
    </svg>
  ),
  server: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect {...S} x="3" y="4" width="18" height="6" rx="1" />
      <rect {...S} x="3" y="14" width="18" height="6" rx="1" />
      <path {...S} d="M7 7h.01M7 17h.01" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <ellipse {...S} cx="12" cy="5" rx="8" ry="3" />
      <path {...S} d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path {...S} d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
    </svg>
  ),
  pen: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M12 19l7-7 3 3-7 7-3-3z" />
      <path {...S} d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  ),
  article: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path {...S} d="M14 2v6h6M8 13h8M8 17h5" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...S} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  default: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect {...S} x="4" y="4" width="16" height="16" rx="3" />
      <path {...S} d="M9 12h6" />
    </svg>
  ),
};

export const PRODUCT_GLYPH = {
  upi: "bolt",
  gateway: "bridge",
  switch: "shuffle",
  pos: "qrcode",
  recurring: "refresh",
  erp: "factory",
  inventory: "box",
  accounting: "receipt",
  school: "graduation",
  tutorial: "book",
  coaching: "edit",
  exam: "clipboard",
  crm: "users",
  hrms: "userBadge",
  project: "layout",
  helpdesk: "lifeBuoy",
  callcenter: "phone",
  "fintech-dev": "terminal",
  lending: "coins",
  insurance: "shield",
  ecommerce: "cart",
  "b2b-marketplace": "storefront",
  "retail-pos": "barcode",
  supermarket: "bag",
  restaurant: "utensils",
  "cloud-kitchen": "chef",
  hotel: "building",
  travel: "plane",
  taxi: "car",
  "bus-ticket": "bus",
  ondemand: "bolt",
  logistics: "truck",
  fleet: "truck",
  realestate: "columns",
  construction: "hardhat",
  pharmacy: "pill",
  hospital: "medical",
  lab: "flask",
  dental: "smile",
  gym: "activity",
  salon: "scissors",
  jewellery: "gem",
  garment: "shirt",
  "auto-dealer": "car",
  "petrol-pump": "fuel",
  agri: "sprout",
  dairy: "droplet",
  mlm: "network",
  affiliate: "link",
  "job-portal": "briefcase",
  matrimonial: "heart",
  classified: "tag",
  news: "newspaper",
  ott: "play",
  social: "share",
  chat: "message",
  whatsapp: "message",
  "email-sms": "mail",
  survey: "listCheck",
  bi: "chart",
  dms: "folder",
  society: "home",
  ngo: "heart",
  legal: "scale",
  library: "library",
  event: "calendar",
  cinema: "clapper",
  queue: "queue",
  visitor: "badge",
  parking: "parking",
  iot: "cpu",
  "ai-chatbot": "bot",
  auction: "gavel",
  franchise: "stores",
  mis: "dashboard",
  certificate: "award",
};

export const INDUSTRY_GLYPH = {
  fintech: "card",
  healthcare: "medical",
  education: "graduation",
  logistics: "truck",
  ecommerce: "cart",
  "on-demand": "bolt",
  manufacturing: "factory",
  "real-estate": "columns",
  hospitality: "utensils",
  retail: "storefront",
};

export const TECH_GLYPH = {
  languages: "code",
  frontend: "layout",
  backend: "server",
  mobile: "smartphone",
  database: "database",
  devops: "cloud",
  design: "pen",
  "fintech-tech": "link",
};

export function CatalogIcon({ glyph = "default", size = "md", className = "" }) {
  return (
    <span className={`catalog-icon catalog-icon--${size} ${className}`.trim()}>
      {GLYPHS[glyph] ?? GLYPHS.default}
    </span>
  );
}

export function SoftwareProductIcon({ id, size = "md", className = "" }) {
  return <CatalogIcon glyph={PRODUCT_GLYPH[id]} size={size} className={className} />;
}

export function IndustryIcon({ id, size = "md", className = "" }) {
  return <CatalogIcon glyph={INDUSTRY_GLYPH[id]} size={size} className={className} />;
}

export function TechCategoryIcon({ id, size = "md", className = "" }) {
  return <CatalogIcon glyph={TECH_GLYPH[id]} size={size} className={className} />;
}

export function BlogPostIcon({ size = "md", className = "" }) {
  return <CatalogIcon glyph="article" size={size} className={className} />;
}

export function StoryIcon({ size = "md", className = "" }) {
  return <CatalogIcon glyph="star" size={size} className={className} />;
}

export function MegaMenuIcon({ menuId, item, className = "header-mega-panel__icon" }) {
  switch (menuId) {
    case "services":
      return <ServiceLineIcon id={item.id} size="sm" className={className} />;
    case "software":
      return <SoftwareProductIcon id={item.id} size="sm" className={className} />;
    case "industries":
      return <IndustryIcon id={item.id} size="sm" className={className} />;
    case "technology":
      return <TechCategoryIcon id={item.id} size="sm" className={className} />;
    case "blog":
      return <BlogPostIcon size="sm" className={className} />;
    case "stories":
      return <StoryIcon size="sm" className={className} />;
    default:
      return (
        <span className={className} aria-hidden>
          {item.icon}
        </span>
      );
  }
}

export function MobileMegaItemIcon({ menuId, item }) {
  return <MegaMenuIcon menuId={menuId} item={item} className="" />;
}
