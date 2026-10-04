import { brand, nav, footer } from "./data/anilax.js";
import { iconFor } from "./icons.js";
import { consultFormHtml, projectFormHtml } from "./pages.js";

function link(href, label, extra = "") {
  if (href === "/free-consultation" || href === "/contact") {
    return `<button type="button" class="linkish" data-consult-open ${extra}>${label}</button>`;
  }
  if (href === "/start-project") {
    return `<button type="button" class="linkish" data-project-open ${extra}>${label}</button>`;
  }
  return `<a href="${href}" data-link ${extra}>${label}</a>`;
}

function logo() {
  return `
    <a href="/" class="logo" data-link aria-label="Anilax Software home">
      <span class="logo__mark" aria-hidden="true">A</span>
      <span class="logo__text">Anilax <strong>Software</strong></span>
    </a>
  `;
}

function dropdownItem(i) {
  if (i.viewAll) return "";
  if (i.sub) {
    return `
      <a href="${i.href}" data-link class="dd__item">
        <span class="dd__icon" aria-hidden="true">${iconFor(i.label)}</span>
        <span class="dd__copy">
          <strong>${i.label}</strong>
          <span>${i.sub}</span>
        </span>
        <span class="dd__arrow" aria-hidden="true">→</span>
      </a>
    `;
  }
  return link(i.href, i.label);
}

function dropdown(item) {
  const mega = item.mega ? " dd--mega" : "";
  const panelMega = item.mega ? " dd__panel--mega" : "";
  const links = (item.items || []).filter((i) => !i.viewAll);
  const promo =
    item.id === "services"
      ? {
          title: "Not sure where to start?",
          body: "Book a free consultation — we map the right stack and timeline for your brief.",
          cta: "Free Consultation",
          consult: true,
        }
      : {
          title: "Industry playbooks",
          body: "See how Anilax ships for FinTech, education, healthcare, and more.",
          cta: "View industries",
          href: "/industries",
        };

  return `
    <div class="dd${mega}" data-dd>
      <button type="button" class="dd__btn" data-dropdown="${item.id}" aria-expanded="false">
        ${item.label}
        <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>
      </button>
      <div class="dd__panel${panelMega}" data-panel="${item.id}">
        <div class="dd__mega">
          <div class="dd__main">
            <div class="dd__grid">
              ${links.map((i) => dropdownItem(i)).join("")}
            </div>
          </div>
          <aside class="dd__promo">
            <p class="dd__promo-kicker">${item.label}</p>
            <h4>${promo.title}</h4>
            <p>${promo.body}</p>
            ${
              promo.consult
                ? `<button type="button" class="btn btn--solid btn--sm" data-consult-open>${promo.cta}</button>`
                : `<a href="${promo.href}" data-link class="btn btn--solid btn--sm">${promo.cta}</a>`
            }
          </aside>
        </div>
      </div>
    </div>
  `;
}

function consultModal() {
  return `
    <div class="modal modal--consult" data-consult-modal hidden>
      <div class="modal__backdrop" data-consult-close tabindex="-1"></div>
      <div class="modal__dialog modal__dialog--consult" role="dialog" aria-modal="true" aria-labelledby="consult-title">
        <button type="button" class="modal__close" data-consult-close aria-label="Close">×</button>
        <div class="modal__grid modal__grid--consult">
          <aside class="modal__aside modal__aside--consult">
            <p class="eyebrow">Free Consultation</p>
            <h2 id="consult-title">Quick call. Clear next step.</h2>
            <p>30-minute working session — no pitch deck, just scope and fit.</p>
            <ul>
              <li>Reply within 24 hours</li>
              <li>Senior engineer on the call</li>
              <li>NDA on request</li>
            </ul>
          </aside>
          <div class="modal__form">${consultFormHtml()}</div>
        </div>
      </div>
    </div>
  `;
}

function projectModal() {
  return `
    <div class="modal modal--project" data-project-modal hidden>
      <div class="modal__backdrop" data-project-close tabindex="-1"></div>
      <div class="modal__dialog modal__dialog--project" role="dialog" aria-modal="true" aria-labelledby="project-title">
        <button type="button" class="modal__close" data-project-close aria-label="Close">×</button>
        <div class="modal__grid modal__grid--project">
          <aside class="modal__aside modal__aside--project">
            <div class="modal__aside-top">
              <p class="eyebrow">Start Your Project</p>
              <h2 id="project-title">Full brief.<br />Build plan back.</h2>
              <p>Share type, budget, and timeline — we return a scoped proposal.</p>
            </div>
            <ul class="modal__checklist">
              <li>Written proposal + timeline</li>
              <li>You own the code & IP</li>
              <li>Weekly demos after kickoff</li>
            </ul>
            <div class="modal__aside-card">
              <strong>Prefer a quick call first?</strong>
              <button type="button" class="btn btn--ghost-light btn--sm" data-consult-open data-project-close>Free Consultation</button>
            </div>
            <p class="modal__contact">
              <a href="tel:${brand.phone}">${brand.phone}</a>
              <a href="mailto:${brand.email}">${brand.email}</a>
            </p>
          </aside>
          <div class="modal__form modal__form--project">${projectFormHtml()}</div>
        </div>
      </div>
    </div>
  `;
}

export function renderShell(_route, pageHtml) {
  const drawerLinks = nav.flatMap((item) =>
    item.items
      ? [{ href: item.href || item.items[0].href, label: item.label }, ...item.items.filter((i) => !i.viewAll)]
      : [item]
  );

  return `
    <header class="topnav" data-nav>
      <div class="topnav__inner">
        ${logo()}
        <nav class="topnav__links" aria-label="Main">
          ${nav.map((item) => (item.items ? dropdown(item) : link(item.href, item.label))).join("")}
        </nav>
        <div class="topnav__cta">
          <button type="button" class="btn btn--ghost" data-consult-open>Free Consultation</button>
          <button type="button" class="btn btn--solid" data-project-open>Start Your Project</button>
        </div>
        <button class="topnav__burger" type="button" aria-label="Open menu" data-menu-toggle>
          <i></i><i></i><i></i>
        </button>
      </div>
      <div class="topnav__drawer">
        ${drawerLinks.map((i) => link(i.href, i.label)).join("")}
        <button type="button" data-consult-open>Free Consultation</button>
        <button type="button" data-project-open>Start Your Project</button>
        <a href="tel:${brand.phone}">${brand.phone}</a>
      </div>
    </header>

    <main id="top">${pageHtml}</main>

    <footer class="footer">
      <div class="wrap footer__cta">
        <p class="footer__kicker">Build smarter.</p>
        <h2>Scale faster with Anilax.</h2>
        <div class="footer__contact">
          <a href="tel:${brand.phone}">${brand.phone}</a>
          <a href="mailto:${brand.email}">${brand.email}</a>
          <p>${brand.hq}</p>
        </div>
        <div class="hero__actions">
          <button type="button" class="btn btn--solid" data-consult-open>Schedule a call</button>
          <button type="button" class="btn btn--ghost-light" data-project-open>Start Your Project</button>
        </div>
      </div>
      <div class="wrap footer__grid">
        <div>
          <h4>Services</h4>
          ${footer.services.map((i) => link(i.href, i.label)).join("")}
        </div>
        <div>
          <h4>Industries</h4>
          ${footer.industries.map((i) => link(i.href, i.label)).join("")}
        </div>
        <div>
          <h4>Company</h4>
          ${footer.company.map((i) => link(i.href, i.label)).join("")}
        </div>
        <div>
          <h4>Fintech focus</h4>
          ${link("/services/fintech-development", "FinTech Development")}
          ${link("/services/nbfc-mfi-software", "NBFC / MFI Software")}
          ${link("/services/api-development", "API Development")}
          ${link("/services/mobile-app-development", "Mobile App Development")}
        </div>
      </div>
      <div class="wrap footer__bottom">
        <p>Copyright © ${brand.founded}–${String(new Date().getFullYear()).slice(2)} Anilax Software. All rights reserved.</p>
        <p>${footer.legal.map((i) => link(i.href, i.label)).join(" · ")}</p>
      </div>
    </footer>

    ${consultModal()}
    ${projectModal()}
  `;
}
