import { brand, nav, footer } from "./data/anilax.js";

function link(href, label, extra = "") {
  return `<a href="${href}" data-link ${extra}>${label}</a>`;
}

function logo() {
  return `
    <a href="/" class="logo" data-link aria-label="Anilax Software home">Anilax Software</a>
  `;
}

function dropdownItem(i) {
  if (i.sub) {
    const arrow = i.viewAll ? ` <i aria-hidden="true">→</i>` : "";
    return `
      <a href="${i.href}" data-link class="dd__item${i.viewAll ? " dd__item--all" : ""}">
        <strong>${i.label}${arrow}</strong>
        <span>${i.sub}</span>
      </a>
    `;
  }
  return link(i.href, i.label);
}

function dropdown(item) {
  const mega = item.mega ? " dd--mega" : "";
  const panelMega = item.mega ? " dd__panel--mega" : "";
  return `
    <div class="dd${mega}">
      <button type="button" class="dd__btn" data-dropdown="${item.id}">
        ${item.label}${item.badge ? `<span class="pill">${item.badge}</span>` : ""}
        <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round"/></svg>
      </button>
      <div class="dd__panel${panelMega}" data-panel="${item.id}">
        ${item.items.map(dropdownItem).join("")}
      </div>
    </div>
  `;
}

export function renderShell(_route, pageHtml) {
  const drawerLinks = nav.flatMap((item) =>
    item.items
      ? [{ href: item.items[0].href, label: item.label }, ...item.items]
      : [item]
  );

  return `
    <div class="grain" aria-hidden="true"></div>
    <header class="topnav" data-nav>
      <div class="topnav__inner">
        ${logo()}
        <nav class="topnav__links" aria-label="Main">
          ${nav
            .map((item) =>
              item.items
                ? dropdown(item)
                : link(item.href, item.label)
            )
            .join("")}
          ${link("/login", "Login")}
        </nav>
        <a class="btn btn--talk" href="/contact" data-link>
          <span>Let's Talk</span>
          <span aria-hidden="true">Let's Talk</span>
        </a>
        <button class="topnav__burger" type="button" aria-label="Open menu" data-menu-toggle>
          <i></i><i></i>
        </button>
      </div>
      <div class="topnav__drawer">
        ${drawerLinks.map((i) => link(i.href, i.label)).join("")}
        ${link("/login", "Login")}
        ${link("/contact", "Let's Talk")}
        <a href="tel:${brand.phone}">${brand.phone}</a>
      </div>
    </header>

    <main id="top">${pageHtml}</main>

    <footer class="footer">
      <div class="wrap footer__cta">
        <h2>Your product backlog isn't getting any shorter.</h2>
        <p>Custom software, fintech, and dedicated teams. One engineering partner from Jaipur to production.</p>
        <div class="hero__actions">
          ${link("/contact", "Get a Custom Quote", 'class="btn btn--blue"')}
          <a class="btn btn--ghost" href="tel:${brand.phone}">Call ${brand.phone}</a>
        </div>
      </div>
      <div class="wrap footer__grid">
        <div>
          <h4>Shop & Learn</h4>
          ${footer.shop.map((i) => link(i.href, i.label)).join("")}
        </div>
        <div>
          <h4>Developers</h4>
          ${footer.developers.map((i) => link(i.href, i.label)).join("")}
        </div>
        <div>
          <h4>Company</h4>
          ${footer.company.map((i) => link(i.href, i.label)).join("")}
        </div>
        <div>
          <h4>Legal</h4>
          ${footer.legal.map((i) => link(i.href, i.label)).join("")}
          <p class="footer__legal">${brand.legal}<br />CIN ${brand.cin}<br />GSTIN ${brand.gstin}</p>
        </div>
      </div>
      <div class="wrap footer__bottom">
        <p>© ${new Date().getFullYear()} Anilax Software. All rights reserved. · ${brand.hq}</p>
        <p>
          <a href="mailto:${brand.email}">${brand.email}</a> ·
          <a href="tel:${brand.phone}">${brand.phone}</a>
        </p>
      </div>
    </footer>
  `;
}
