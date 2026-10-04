/** Inline SVG logos for nav + industry cards */

function svg(paths, { view = "0 0 24 24" } = {}) {
  return `<svg class="ico" viewBox="${view}" width="20" height="20" fill="none" aria-hidden="true">${paths}</svg>`;
}

const stroke = `stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"`;

export const industryIcons = {
  FinTech: svg(`
    <rect x="3" y="6" width="18" height="12" rx="2.5" ${stroke}/>
    <path d="M3 10h18" ${stroke}/>
    <path d="M7 14h3" ${stroke}/>
    <circle cx="16.5" cy="14" r="1.2" fill="currentColor"/>
  `),
  Education: svg(`
    <path d="M3 9.5 12 5l9 4.5-9 4.5L3 9.5z" ${stroke}/>
    <path d="M7 12.2v4.1c0 .9 2.2 2.2 5 2.2s5-1.3 5-2.2v-4.1" ${stroke}/>
    <path d="M21 10.2v5.3" ${stroke}/>
  `),
  Healthcare: svg(`
    <path d="M9.5 3.5h5v5.5H20.5v5H14.5V20h-5v-6H3.5v-5h6V3.5z" ${stroke}/>
  `),
  Retail: svg(`
    <path d="M4 8h16l-1.2 11.2a2 2 0 0 1-2 1.8H7.2a2 2 0 0 1-2-1.8L4 8z" ${stroke}/>
    <path d="M8 8a4 4 0 0 1 8 0" ${stroke}/>
  `),
  Logistics: svg(`
    <path d="M3 16V8.5A1.5 1.5 0 0 1 4.5 7H14v9" ${stroke}/>
    <path d="M14 10h3.2l2.8 3.2V16H14V10z" ${stroke}/>
    <circle cx="7.5" cy="17.5" r="1.8" ${stroke}/>
    <circle cx="17" cy="17.5" r="1.8" ${stroke}/>
  `),
  Manufacturing: svg(`
    <path d="M4 19V9l5 3V9l5 3V5l6 4v10H4z" ${stroke}/>
    <path d="M8 19v-3h3v3M14 19v-2h3v2" ${stroke}/>
  `),
};

export const serviceIcons = {
  "Software Development": svg(`
    <path d="M8 8 4.5 12 8 16" ${stroke}/>
    <path d="M16 8l3.5 4L16 16" ${stroke}/>
    <path d="M13 6l-2 12" ${stroke}/>
  `),
  "Custom ERP Development": svg(`
    <rect x="3.5" y="4" width="17" height="16" rx="2" ${stroke}/>
    <path d="M3.5 9h17M9 9v11M14 9v11" ${stroke}/>
  `),
  "SaaS Development": svg(`
    <path d="M7 16a4 4 0 1 1 .7-7.9A5.5 5.5 0 0 1 18.5 11 3.5 3.5 0 1 1 17 16H7z" ${stroke}/>
  `),
  "FinTech Development": industryIcons.FinTech,
  "School ERP": industryIcons.Education,
  "NBFC / MFI Software": svg(`
    <path d="M4 19V7l8-3 8 3v12" ${stroke}/>
    <path d="M8 19v-6h8v6M9.5 10h5" ${stroke}/>
  `),
  "Accounting Software": svg(`
    <rect x="5" y="3.5" width="14" height="17" rx="2" ${stroke}/>
    <path d="M8.5 8h7M8.5 12h7M8.5 16h4" ${stroke}/>
  `),
  "AI Software Development": svg(`
    <rect x="8" y="9" width="8" height="7" rx="2" ${stroke}/>
    <path d="M12 5v2M9 6.5 10 8M15 6.5 14 8M10 16v2M14 16v2M7 12H5M19 12h-2" ${stroke}/>
    <circle cx="10.5" cy="12.2" r="0.8" fill="currentColor"/>
    <circle cx="13.5" cy="12.2" r="0.8" fill="currentColor"/>
  `),
  "Mobile App Development": svg(`
    <rect x="8" y="3" width="8" height="18" rx="2" ${stroke}/>
    <path d="M11 18.5h2" ${stroke}/>
  `),
  "API Development": svg(`
    <path d="M8 8H5.5A2.5 2.5 0 0 0 5.5 13H8" ${stroke}/>
    <path d="M16 8h2.5a2.5 2.5 0 1 1 0 5H16" ${stroke}/>
    <path d="M9 10.5h6" ${stroke}/>
  `),
};

export function iconFor(label = "") {
  return industryIcons[label] || serviceIcons[label] || svg(`
    <circle cx="12" cy="12" r="8" ${stroke}/>
    <path d="M12 8v4l2.5 2.5" ${stroke}/>
  `);
}
