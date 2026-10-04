import siteData from "./data/site.json";
import { awards, brand, home, homeProducts } from "./data/anilax.js";
import { allDetails, serviceDetails } from "./data/details.js";
import { policies, contentPages } from "./data/sitePages.js";
import { technologyPageData } from "./data/technology.js";
import { docsPageData } from "./data/docs.js";
import { sdksPageData } from "./data/sdks.js";
import { changelogPageData } from "./data/changelog.js";
import { statusPageData } from "./data/status.js";
import { contactPageData } from "./data/contact.js";
import { pdfActionsHtml } from "./pdfSpec.js";

function esc(s = "") {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function btn(href, label, variant = "blue") {
  return `<a href="${href}" data-link class="btn btn--${variant}">${label}</a>`;
}

function tags(list, sm = false) {
  return `<div class="tags ${sm ? "tags--sm" : ""}">${list.map((t) => `<span>${esc(t)}</span>`).join("")}</div>`;
}

function pageHero({ eyebrow, h1, sub, actions = "" }) {
  return `
    <section class="page-hero">
      <div class="wrap page-hero__inner">
        ${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ""}
        <h1>${esc(h1)}</h1>
        ${sub ? `<p class="page-hero__sub">${esc(sub)}</p>` : ""}
        ${actions ? `<div class="hero__actions">${actions}</div>` : ""}
      </div>
    </section>
  `;
}

function contactForm({ expanded = false } = {}) {
  const goals = [
    { value: "Build a New Product", label: "New Product", hint: "MVP / launch" },
    { value: "Automate Operations", label: "Automate Ops", hint: "Workflows" },
    { value: "Upgrade Existing System", label: "Upgrade System", hint: "Modernize" },
    { value: "Need a Dedicated Team", label: "Dedicated Team", hint: "Hire pod" },
    { value: "Fintech / AePS Integration", label: "Fintech / AePS", hint: "Payments" },
    { value: "API & Developer Tools", label: "API / Developers", hint: "Integrate" },
  ];

  return `
    <form class="contact-card ${expanded ? "contact-card--page" : ""}" data-contact-form>
      <div class="contact-card__head">
        <span class="contact-card__badge">Reply in 24h</span>
        <h3>${expanded ? "Send a detailed request" : "Start a project"}</h3>
        <p>${expanded ? "Fintech, software, or API requirements — we respond within 1–2 business days." : "Tell us what you're building — we'll come back with a clear next step."}</p>
      </div>

      <fieldset class="contact-card__goals">
        <legend>What are you looking to do?</legend>
        <div class="goal-grid">
          ${goals
            .map(
              (g, i) => `
            <label class="goal">
              <input type="radio" name="goal" value="${esc(g.value)}" ${i === 0 ? "checked" : ""} />
              <span class="goal__check" aria-hidden="true"></span>
              <span class="goal__copy">
                <strong>${esc(g.label)}</strong>
                <em>${esc(g.hint)}</em>
              </span>
            </label>`
            )
            .join("")}
        </div>
      </fieldset>

      <div class="contact-card__fields">
        <label class="field">
          <span>Name *</span>
          <input name="name" required autocomplete="name" placeholder="Your name" />
        </label>
        <label class="field">
          <span>Work email *</span>
          <input type="email" name="email" required autocomplete="email" placeholder="you@company.com" />
        </label>
        ${
          expanded
            ? `
        <label class="field">
          <span>Company</span>
          <input name="company" autocomplete="organization" placeholder="Company / brand" />
        </label>
        <label class="field">
          <span>Phone</span>
          <input name="phone" autocomplete="tel" placeholder="${brand.phone}" />
        </label>
        <label class="field">
          <span>Timeline</span>
          <select name="timeline">
            <option value="">Select timeline</option>
            <option>ASAP / this month</option>
            <option>1–3 months</option>
            <option>3–6 months</option>
            <option>Exploring / budget planning</option>
          </select>
        </label>
        <label class="field">
          <span>Budget range</span>
          <select name="budget">
            <option value="">Optional</option>
            <option>Under ₹5L</option>
            <option>₹5L – ₹15L</option>
            <option>₹15L – ₹40L</option>
            <option>₹40L+</option>
            <option>Retainer / dedicated team</option>
          </select>
        </label>`
            : `
        <label class="field field--full">
          <span>Phone</span>
          <input name="phone" autocomplete="tel" placeholder="${brand.phone}" />
        </label>`
        }
        <label class="field field--full">
          <span>About your project *</span>
          <textarea name="message" rows="${expanded ? 5 : 4}" required placeholder="Goals, features, timeline, integrations, or links."></textarea>
        </label>
      </div>

      <button class="btn btn--blue btn--block contact-card__submit" type="submit">
        <span>Send requirement</span>
        <span aria-hidden="true">Send requirement</span>
      </button>
      <p class="form-note" data-form-note hidden>Your requirement has been sent to WhatsApp.</p>
    </form>
  `;
}

function contentBlocks(page) {
  if (!page) return "";
  const h2s = new Set(page.h2s || []);
  const h1 = page.h1 || "";
  const lines = (page.body || "")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .filter((l) => l !== h1)
    .slice(0, 180);

  let html = "";
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const next = lines[i + 1] || "";
    const next2 = lines[i + 2] || "";

    if (/^(←|ON THIS PAGE|GETTING STARTED|PRODUCT RAILS|LIVE DASHBOARD|NPCI|ID\t)/i.test(line)) {
      i += 1;
      continue;
    }

    if (h2s.has(line) || (/^[A-Z0-9 ·&/,-]{8,48}$/.test(line) && line === line.toUpperCase() && line.length < 40 && !/[.!?]$/.test(line))) {
      html += `<h2 class="prose-h2">${esc(line)}</h2>`;
      i += 1;
      continue;
    }

    if (
      line.length < 70 &&
      next &&
      next.length < 100 &&
      next2 &&
      next2.length > 55 &&
      !h2s.has(next) &&
      !/[.!?]$/.test(line)
    ) {
      html += `
        <article class="prose-card">
          <h3>${esc(line)}</h3>
          <p class="prose-card__sub">${esc(next)}</p>
          <p>${esc(next2)}</p>
        </article>`;
      i += 3;
      continue;
    }

    if (line.length > 90 || /[.!?]$/.test(line)) {
      html += `<p>${esc(line)}</p>`;
      i += 1;
      continue;
    }

    const group = [line];
    let j = i + 1;
    while (j < lines.length && lines[j].length < 70 && !h2s.has(lines[j]) && !/[.!?]$/.test(lines[j])) {
      group.push(lines[j]);
      j += 1;
      if (group.length >= 8) break;
    }
    if (group.length >= 3 && group.every((g) => g.length < 52)) {
      html += `<ul class="prose-list">${group.map((g) => `<li>${esc(g)}</li>`).join("")}</ul>`;
      i = j;
    } else {
      html += `<p><strong>${esc(line)}</strong>${next && next.length < 90 && !h2s.has(next) ? ` — ${esc(next)}` : ""}</p>`;
      i += next && next.length < 90 && !h2s.has(next) ? 2 : 1;
    }
  }
  return html;
}

function setTitle(route, page) {
  const base = "Anilax Software";
  if (route === "/") document.title = `${base} — Custom Software & Fintech Development`;
  else if (page?.h1) document.title = `${page.h1} | ${base}`;
  else document.title = base;
}

function homePage() {
  const { services, works, pricing, faqs, testimonials, comparison, columns, matrix } = home;
  const mediaLetters = ["a", "b", "c", "d", "e", "f"];

  return `
    <section class="hero">
      <div class="wrap hero__inner">
        <div class="hero__copy">
          <p class="eyebrow">${esc(home.eyebrow)}</p>
          <h1>${esc(home.h1)}</h1>
          <div class="hero__actions">
            <a class="btn btn--blue" href="/contact" data-link><span>Contact now</span><span aria-hidden="true">Contact now</span></a>
            <a class="btn btn--ghost" href="/stories" data-link><span>Works</span><span aria-hidden="true">Works</span></a>
          </div>
          <p class="hero__lede">${esc(home.lede)}</p>
        </div>
        <div class="hero__float" aria-label="Core modules">
          <a class="float-mod float-mod--1" href="/docs" data-link>
            <span class="float-mod__tag">01</span>
            <strong>API Platforms</strong>
            <p>Payments, webhooks &amp; sandbox-ready rails</p>
          </a>
          <a class="float-mod float-mod--2" href="/services/custom-software" data-link>
            <span class="float-mod__tag">02</span>
            <strong>Custom Software</strong>
            <p>Products shaped around real workflows</p>
          </a>
          <a class="float-mod float-mod--3" href="/stories" data-link>
            <span class="float-mod__tag">03</span>
            <strong>15+ Yrs Experience</strong>
            <p>Production craft across India industries</p>
          </a>
          <a class="float-mod float-mod--4" href="/services/dedicated-teams" data-link>
            <span class="float-mod__tag">04</span>
            <strong>Expert Team</strong>
            <p>Senior engineers as your delivery pod</p>
          </a>
        </div>
      </div>
      <div class="wrap hero__cards">
        <a class="spot spot--club" href="/b2b" data-link>
          <h3>Anilax Payments Stack</h3>
          <p>B2B AePS, B2C wallets, and developer APIs — ready to integrate.</p>
          <span class="spot__cta">Explore Software <i>→</i></span>
        </a>
        <a class="spot spot--news" href="/stories" data-link>
          <div class="spot__media spot__media--live" aria-hidden="true">
            <div class="liveboard">
              <div class="liveboard__top"><i></i><i></i><i></i><span>Anilax Console</span></div>
              <div class="liveboard__bars">${[42, 68, 55, 80, 48, 92, 70, 86].map((n) => `<b style="--h:${n}%"></b>`).join("")}</div>
              <p>Live · AePS · UPI · API</p>
            </div>
          </div>
          <div class="spot__copy">
            <strong>120+ products shipped</strong>
            <span>Fintech, logistics, healthcare & SaaS — 100% code ownership.</span>
          </div>
        </a>
      </div>
    </section>

    <section class="band">
      <div class="wrap band__inner">
        <h2>Think of us as your senior engineering team.<br /><em>Without hiring one.</em></h2>
        <p>You bring the priorities. We bring architecture, craft, and production delivery.</p>
      </div>
    </section>

    <section class="section section--tight">
      <div class="wrap proof">
        <div class="proof__item"><strong>15+</strong><span>Years of engineering craft across the delivery team</span></div>
        <div class="proof__item"><strong>120+</strong><span>Products shipped across fintech, SaaS, health & logistics</span></div>
        <div class="proof__item"><strong>950+</strong><span>B2B partners live on AePS and payment rails</span></div>
        <div class="proof__item"><strong>100%</strong><span>Code & IP ownership transferred to your team</span></div>
      </div>
    </section>

    <section class="section" id="capabilities">
      <div class="wrap">
        <p class="kicker">WHAT WE BUILD</p>
        <div class="section__head">
          <h2>Deep capability — not a menu of buzzwords.</h2>
          <p>Six practice areas we actually ship in production. Full catalog lives in the header under Services.</p>
        </div>
        <div class="svc">
          ${services
            .map(
              (s) => `
            <a class="svc__row" href="${s.href}" data-link>
              <span class="svc__n">${esc(s.n)}</span>
              <div class="svc__main">
                <h3>${esc(s.title)}</h3>
                ${tags(s.tags)}
              </div>
              <p class="svc__body">${esc(s.body)}</p>
            </a>`
            )
            .join("")}
        </div>
        <p class="section__more"><a class="text-link" href="/services" data-link>Browse all services <i>→</i></a></p>
      </div>
    </section>

    <section class="section" id="software">
      <div class="wrap">
        <p class="kicker">SOFTWARE PRODUCTS</p>
        <div class="section__head">
          <h2>Payments software ready to white-label and integrate.</h2>
          <p>AePS networks, consumer wallets, and developer APIs — the stack partners use when “build from scratch” is too slow.</p>
        </div>
        <div class="detail-cards">
          ${homeProducts
            .map(
              (p) => `
            <a class="detail-card" href="${p.href}" data-link>
              <p class="detail-card__eye">${esc(p.eyebrow)}</p>
              <h3>${esc(p.title)}</h3>
              <p>${esc(p.body)}</p>
              <span class="text-link">${esc(p.cta)} <i>→</i></span>
            </a>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section" id="selected-work">
      <div class="wrap">
        <p class="kicker">SELECTED WORK</p>
        <div class="section__head">
          <h2>Outcomes from the field — not slide-deck case studies.</h2>
          <p>How teams launched AePS networks, wallets, campus ERPs, clinics, and fleets with Anilax engineering.</p>
        </div>
        <div class="works">
          ${works
            .slice(0, 3)
            .map(
              (w, i) => `
            <a class="work ${i === 0 ? "work--featured" : ""}" href="${w.href}" data-link>
              <div class="work__media work__media--${w.media || mediaLetters[i % mediaLetters.length]}${w.image ? " work__media--photo" : ""}">
                ${
                  w.image
                    ? `<img class="work__img" src="${esc(w.image)}" alt="" loading="lazy" decoding="async" />`
                    : ""
                }
                <div class="work__glow" aria-hidden="true"></div>
                <span>${esc(w.short || w.tag)}</span>
              </div>
              <div class="work__meta">
                <div class="work__top"><span>${esc(w.tag)}</span></div>
                <h3>${esc(w.title)}</h3>
                <p>${esc(w.body)}</p>
                <div class="work__foot">
                  <span class="work__badge">View story</span>
                  <span aria-hidden="true">→</span>
                </div>
              </div>
            </a>`
            )
            .join("")}
        </div>
        <p class="section__more"><a class="text-link" href="/stories" data-link>See all stories <i>→</i></a></p>
      </div>
    </section>

    <section class="section" id="process">
      <div class="wrap">
        <p class="kicker">HOW WE WORK</p>
        <div class="section__head">
          <h2>Software shouldn't need a complicated process.</h2>
          <p>Clear scope. Weekly demos. Full ownership.<br />Like a core engineering piece of your team.</p>
        </div>
        <div class="steps">
          <article class="step">
            <span>01</span>
            <h5>Discover</h5>
            <p>30-min strategy session to map workflows, gaps, and automation opportunities.</p>
            <div class="mini-card">
              <p class="mini-card__label">Kickoff</p>
              <p class="mini-card__sub">Roadmap with deliverables within 48 hours.</p>
              <strong>48h</strong><span class="per">plan ready</span>
              <a class="btn btn--blue btn--block" href="/contact" data-link>Book Discovery</a>
            </div>
          </article>
          <article class="step">
            <span>02</span>
            <h5>Build</h5>
            <p>Agile sprints with transparent priorities and production-minded engineering.</p>
            <div class="queue">
              ${[
                ["In Review", "API Contracts"],
                ["In Progress", "Agent Dashboard"],
                ["Queued", "Settlement Jobs"],
                ["Queued", "KYC Flow"],
                ["Completed", "Auth Module"],
                ["Completed", "CI/CD Pipeline"],
              ]
                .map(
                  ([st, name]) => `
                <div class="queue__item">
                  <i class="${st === "Completed" ? "done" : st === "In Progress" ? "live" : ""}"></i>
                  <b>${st}</b><span>${name}</span>
                </div>`
                )
                .join("")}
            </div>
          </article>
          <article class="step">
            <span>03</span>
            <h5>Handover</h5>
            <p>Full code, infra, and IP ownership — with support that doesn't vanish after launch.</p>
            <a class="btn btn--ghost btn--block" href="/contact" data-link>Start Your Next Build</a>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <p class="kicker">WHY TEAMS CHOOSE ANILAX</p>
        <div class="section__head">
          <h2>A better way to build software.</h2>
          <p>Senior thinking, production craft, and a frictionless process built around how modern teams actually ship.</p>
        </div>
        <div class="bento">
          <article class="bento__card bento__card--wide">
            <a class="handle" href="mailto:${brand.email}">${brand.email}</a>
            <h6>Founder-accessible studio</h6>
            <p>The people you talk to are the people architecting and shipping your product.</p>
          </article>
          <article class="bento__card">
            <h6>Built for real operations.</h6>
            <p>From AePS peak days to multi-campus fee runs — we design for load, edge cases, and people on the ground.</p>
            <div class="statline"><b>120+</b><b>950+</b><b>28+</b><b>99.9%</b></div>
          </article>
          <article class="bento__card bento__card--stat"><h6>120+</h6><p>Projects delivered.</p></article>
          <article class="bento__card bento__card--stat"><h6>100%</h6><p>Code ownership.</p></article>
          <article class="bento__card">
            <h6>Beyond tickets.</h6>
            <p>We understand users, flows, systems, and the business decisions behind great software.</p>
          </article>
          <article class="bento__card bento__card--chips">
            <div class="chip-grid">
              <div><strong>Senior</strong><span>From day one.</span></div>
              <div><strong>Fast</strong><span>By default.</span></div>
              <div><strong>Own</strong><span>Your code & IP.</span></div>
              <div><strong>India</strong><span>Jaipur HQ.</span></div>
            </div>
          </article>
          <article class="bento__card bento__card--wide">
            <h6>Crafted for production, not demos.</h6>
            <p>Architecture, observability, and handoff quality matter as much as the UI.</p>
            <div class="marquee" aria-hidden="true">
              <div class="marquee__track">
                ${["Custom Software","AePS","UPI","Wallets","Payment APIs","React Native","Node.js","Python","AWS","Dedicated Teams","ERP / CRM","SaaS"]
                  .concat(["Custom Software","AePS","UPI","Wallets","Payment APIs","React Native","Node.js","Python","AWS","Dedicated Teams","ERP / CRM","SaaS"])
                  .map((t) => `<span>${t}</span>`)
                  .join("")}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <p class="kicker">SERVICE COMPARISON</p>
        <div class="section__head">
          <h2>Why build another engineering department?</h2>
          <p>Senior delivery without the hiring drag.</p>
        </div>
        <div class="table-wrap">
          <table class="cmp">
            <thead><tr><th></th>${columns.map((c) => `<th>${c}</th>`).join("")}</tr></thead>
            <tbody>
              ${comparison
                .map(
                  (row, i) => `
                <tr>
                  <td>${row}</td>
                  ${matrix[i]
                    .map((ok, j) => `<td class="${j === 3 ? "hl" : ""}">${ok ? `<span class="yes">✓</span>` : `<span class="no">—</span>`}</td>`)
                    .join("")}
                </tr>`
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <p class="kicker">TRUSTED DELIVERY</p>
        <div class="section__head">
          <h2>Stories from teams we've built with</h2>
          <p>From fintech rails to campus ERPs — we help visionary teams design, build, and launch software fast.</p>
        </div>
        <div class="quotes" data-quotes>
          ${testimonials
            .map(
              (t) => `
            <article class="quote">
              <p class="quote__co">${esc(t.company)}</p>
              <p class="quote__text">“${esc(t.quote)}”</p>
              <div class="quote__who"><strong>${esc(t.name)}</strong><span>${esc(t.role)}</span></div>
            </article>`
            )
            .join("")}
        </div>
        <div class="quote-nav">
          <button type="button" data-q-prev aria-label="Previous">←</button>
          <button type="button" data-q-next aria-label="Next">→</button>
        </div>
      </div>
    </section>

    <section class="section" id="recognition" aria-label="Industry recognition">
      <div class="wrap">
        <p class="kicker">INDUSTRY RECOGNITION</p>
        <div class="section__head">
          <h2>15+ years of craft. Recognition that matches the work.</h2>
          <p>Engineering depth, India delivery, and fintech focus — markers partners look for before they commit.</p>
        </div>
        <div class="recog">
          ${awards
            .map(
              (a) => `
            <article class="recog__item recog__item--${esc(a.kind)}">
              <div class="recog__mark" aria-hidden="true"><i></i></div>
              <div class="recog__copy">
                <strong>${esc(a.title)}</strong>
                <h3>${esc(a.line)}</h3>
                <p>${esc(a.sub)}</p>
              </div>
            </article>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section" id="pricing">
      <div class="wrap">
        <p class="kicker">ENGAGEMENT</p>
        <div class="section__head section__head--center">
          <h2>Simple engagement. Serious engineering.</h2>
          <p>Choose a project, retainer, or dedicated team — scoped around your workflows.</p>
        </div>
        <div class="tabs" data-price-tabs>
          ${pricing.tabs
            .map(
              (t, i) => `
            <button type="button" class="${i === 0 ? "is-active" : ""}" data-tab="${t.id}">
              ${t.label}${t.note ? `<em>${t.note}</em>` : ""}
            </button>`
            )
            .join("")}
        </div>
        <div class="plans">
          ${pricing.plans
            .map(
              (p) => `
            <article class="plan ${p.featured ? "plan--hot" : ""}">
              <h3>${esc(p.name)}</h3>
              <p>${esc(p.desc)}</p>
              <div class="plan__price">
                <strong data-price data-project="${esc(p.prices.project)}" data-retainer="${esc(p.prices.retainer)}" data-team="${esc(p.prices.team)}">${esc(p.prices.project)}</strong>
                <span data-unit data-project="${esc(p.unit.project)}" data-retainer="${esc(p.unit.retainer)}" data-team="${esc(p.unit.team)}">${esc(p.unit.project)}</span>
              </div>
              <a class="btn ${p.featured ? "btn--blue" : "btn--ghost"} btn--block" href="/contact" data-link>${esc(p.cta)}</a>
              <ul>${p.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
            </article>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section" id="contact">
      <div class="wrap contact-grid">
        <div>
          <p class="kicker">FAQ</p>
          <div class="section__head section__head--stack">
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about working with Anilax — scope, timelines, fintech, and ownership.</p>
            <p class="faq-help">Have a different question?<br /><a href="tel:${brand.phone}">${brand.phone}</a> · <a href="mailto:${brand.email}">${brand.email}</a></p>
          </div>
          <div class="faq">
            ${faqs
              .map(
                (f) => `
              <div class="faq__item">
                <button type="button" data-faq><span>${esc(f.q)}</span><i>+</i></button>
                <div class="faq__a"><p>${esc(f.a)}</p></div>
              </div>`
              )
              .join("")}
          </div>
        </div>
        ${contactForm()}
      </div>
    </section>
  `;
}

function servicesIndex() {
  return `
    ${pageHero({
      eyebrow: "SERVICES",
      h1: "Full-stack software development for every business",
      sub: "From MVPs to enterprise platforms — web, mobile, SaaS, ERP, fintech, healthcare, logistics, and more.",
      actions: btn("/contact", "Book a consultation", "blue") + btn("/software", "Product catalog", "ghost"),
    })}
    <section class="section">
      <div class="wrap">
        <div class="svc-head">
          <h2>All service lines</h2>
          <a class="text-link" href="/contact" data-link>Book a call <i>→</i></a>
        </div>
        <div class="svc-list">
          ${home.serviceCatalog
            .map(
              (s) => `
            <a class="svc-list__item" href="${s.href}" data-link>
              <h3>${esc(s.title)}</h3>
              <p>${esc(s.sub)}</p>
            </a>`
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function industriesIndex() {
  return `
    ${pageHero({
      eyebrow: "INDUSTRIES",
      h1: "Software built for your industry",
      sub: "From regulated fintech to campus ERP and last-mile logistics — domain-ready platforms shaped around how your sector actually works.",
      actions: btn("/contact", "Start a project", "blue") + btn("/services", "View services", "ghost"),
    })}
    <section class="section">
      <div class="wrap">
        <div class="svc-head">
          <h2>Industries</h2>
          <a class="text-link" href="/contact" data-link>Talk to us <i>→</i></a>
        </div>
        <div class="svc-list">
          ${home.industryCatalog
            .map(
              (s) => `
            <a class="svc-list__item" href="${s.href}" data-link>
              <h3>${esc(s.title)}</h3>
              <p>${esc(s.sub)}</p>
            </a>`
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function statusPage() {
  const s = statusPageData;
  document.title = `${s.title} | Anilax Software`;
  const stateClass = (state) =>
    state === "operational" || state === "resolved" ? "is-ok" : state === "degraded" ? "is-warn" : "is-down";

  return `
    ${pageHero({
      eyebrow: s.eyebrow,
      h1: s.title,
      sub: s.sub,
      actions: btn("/changelog", "View changelog", "blue") + btn("/contact", "Report an issue", "ghost"),
    })}

    <section class="section section--tight">
      <div class="wrap">
        <div class="st-banner ${stateClass(s.overall.state)}">
          <div class="st-banner__main">
            <span class="st-dot" aria-hidden="true"></span>
            <div>
              <strong>${esc(s.overall.label)}</strong>
              <p>${esc(s.overall.detail)}</p>
            </div>
          </div>
          <span class="st-banner__updated">Updated ${esc(s.updatedAt)}</span>
        </div>
        <div class="detail__stats">
          ${s.stats.map((x) => `<div class="detail__stat"><strong>${esc(x.n)}</strong><span>${esc(x.l)}</span></div>`).join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <p class="kicker">SERVICES</p>
        <div class="section__head">
          <h2>Component status across the platform.</h2>
          <p>Each row covers a customer-facing or partner-facing surface we operate publicly.</p>
        </div>
        <div class="st-services">
          ${s.services
            .map(
              (svc) => `
            <article class="st-service">
              <div class="st-service__head">
                <div>
                  <h3>${esc(svc.name)}</h3>
                  <p>${esc(svc.detail)}</p>
                </div>
                <span class="st-pill ${stateClass(svc.state)}">${esc(svc.state)}</span>
              </div>
              <div class="st-service__parts">
                ${svc.components.map((c) => `<span>${esc(c)}</span>`).join("")}
              </div>
            </article>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section section--tight">
      <div class="wrap">
        <p class="kicker">REGIONS & ENVIRONMENTS</p>
        <div class="detail__grid tech-principles">
          ${s.regions
            .map(
              (r) => `
            <article class="detail__panel">
              <h2>${esc(r.name)}</h2>
              <p class="tech-principles__body">${esc(r.detail)}</p>
            </article>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <p class="kicker">RECENT INCIDENTS</p>
        <div class="section__head">
          <h2>History you can audit.</h2>
          <p>Resolved incidents and maintenance windows affecting shared sandbox or public surfaces.</p>
        </div>
        <div class="st-incidents">
          ${s.incidents
            .map(
              (inc) => `
            <article class="st-incident">
              <div class="st-incident__meta">
                <span class="st-pill ${stateClass(inc.state)}">${esc(inc.state)}</span>
                <span class="cl-date">${esc(inc.date)}</span>
                <span class="st-impact">${esc(inc.impact)}</span>
              </div>
              <h3>${esc(inc.title)}</h3>
              <p>${esc(inc.summary)}</p>
              <div class="st-updates">
                ${inc.updates
                  .map(
                    (u) => `
                  <div class="st-update">
                    <strong>${esc(u.t)}</strong>
                    <span>${esc(u.d)}</span>
                  </div>`
                  )
                  .join("")}
              </div>
            </article>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section section--tight">
      <div class="wrap">
        <p class="kicker">MAINTENANCE</p>
        <div class="st-maint">
          ${s.maintenance
            .map(
              (m) => `
            <article class="detail__panel">
              <p class="detail-card__eye">${esc(m.when)}</p>
              <h2>${esc(m.title)}</h2>
              <p class="tech-principles__body">${esc(m.detail)}</p>
            </article>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <p class="kicker">HELP & ALERTS</p>
        <div class="card-grid docs-guides">
          ${s.subscribe
            .map(
              (ch) => `
            <a class="info-card" href="${ch.href}" data-link>
              <h3>${esc(ch.title)}</h3>
              <p>${esc(ch.sub)}</p>
              <span class="text-link">Open <i>→</i></span>
            </a>`
            )
            .join("")}
        </div>
        <div class="tech-note">
          <p>${esc(s.note)}</p>
        </div>
        <div class="detail__cta">
          <h2>Seeing something we haven’t posted?</h2>
          <p>Tell us the endpoint, timestamp (IST), and whether you’re on sandbox or production — we’ll investigate.</p>
          <div class="hero__actions">
            ${btn("/contact", "Report an issue", "blue")}
            <a class="btn btn--ghost" href="tel:${brand.phone}">${brand.phone}</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function changelogPage() {
  const c = changelogPageData;
  document.title = `${c.title} | Anilax Software`;

  return `
    ${pageHero({
      eyebrow: c.eyebrow,
      h1: c.title,
      sub: c.sub,
      actions: btn("/status", "Platform status", "blue") + btn("/docs", "API reference", "ghost"),
    })}

    <section class="section section--tight">
      <div class="wrap">
        <div class="detail__stats">
          ${c.stats.map((s) => `<div class="detail__stat"><strong>${esc(s.n)}</strong><span>${esc(s.l)}</span></div>`).join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <p class="kicker">RELEASE HISTORY</p>
        <div class="section__head">
          <h2>What shipped — and why it matters.</h2>
          <p>Filter by surface. Every entry lists concrete changes you can verify in product or docs.</p>
        </div>

        <div class="cl-filters" data-changelog>
          <div class="docs-rails__tabs cl-filters__tabs">
            ${c.filters
              .map(
                (f, i) => `
              <button type="button" class="docs-rail-tab ${i === 0 ? "is-active" : ""}" data-cl-filter="${f.id}">
                <strong>${esc(f.label)}</strong>
              </button>`
              )
              .join("")}
          </div>

          <div class="cl-list">
            ${c.releases
              .map(
                (r) => `
              <article class="cl-item" data-cl-item="${r.filter}">
                <div class="cl-item__rail" aria-hidden="true"></div>
                <div class="cl-item__body">
                  <div class="cl-item__meta">
                    <span class="cl-tag">${esc(r.tag)}</span>
                    <span class="cl-ver">${esc(r.version)}</span>
                    <span class="cl-date">${esc(r.date)}</span>
                  </div>
                  <h3>${esc(r.title)}</h3>
                  <p class="cl-item__summary">${esc(r.summary)}</p>
                  <ul class="prose-list">
                    ${r.points.map((p) => `<li>${esc(p)}</li>`).join("")}
                  </ul>
                </div>
              </article>`
              )
              .join("")}
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <p class="kicker">STAY CURRENT</p>
        <div class="card-grid docs-guides">
          ${c.channels
            .map(
              (ch) => `
            <a class="info-card" href="${ch.href}" data-link>
              <h3>${esc(ch.title)}</h3>
              <p>${esc(ch.sub)}</p>
              <span class="text-link">Open <i>→</i></span>
            </a>`
            )
            .join("")}
        </div>
        <div class="tech-note">
          <p>${esc(c.note)}</p>
        </div>
        <div class="detail__cta">
          <h2>Need a change called out for your integration?</h2>
          <p>Ask about deprecations, sandbox behavior, or production cutovers — we’ll point you to the right release and migration notes.</p>
          <div class="hero__actions">
            ${btn("/contact", "Talk to Anilax", "blue")}
            <a class="btn btn--ghost" href="mailto:${brand.email}">${brand.email}</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function sdksPage() {
  const s = sdksPageData;
  document.title = `${s.title} | Anilax Software`;

  return `
    ${pageHero({
      eyebrow: s.eyebrow,
      h1: s.title,
      sub: s.sub,
      actions: btn("/login", "Get sandbox keys", "blue") + btn("/docs", "API reference", "ghost"),
    })}

    <section class="section section--tight">
      <div class="wrap">
        <div class="docs-base sdk-envs">
          <div class="sdk-env">
            <span class="docs-base__pill">PRODUCTION</span>
            <code>${esc(s.productionUrl)}</code>
          </div>
          <div class="sdk-env">
            <span class="docs-base__pill docs-base__pill--blue">SANDBOX</span>
            <code>${esc(s.sandboxUrl)}</code>
          </div>
        </div>
        <div class="detail__stats">
          ${s.stats.map((x) => `<div class="detail__stat"><strong>${esc(x.n)}</strong><span>${esc(x.l)}</span></div>`).join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <p class="kicker">WHY OFFICIAL SDKS</p>
        <div class="section__head">
          <h2>Everything you’d otherwise rebuild — already in the client.</h2>
          <p>Focus on product logic. Leave HTTP glue, retries, and signature checks to the SDK.</p>
        </div>
        <div class="detail__grid tech-principles">
          ${s.features
            .map(
              (f) => `
            <article class="detail__panel">
              <h2>${esc(f.title)}</h2>
              <p class="tech-principles__body">${esc(f.body)}</p>
            </article>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section" id="quickstart">
      <div class="wrap">
        <p class="kicker">QUICK START</p>
        <div class="section__head">
          <h2>Install, set a key, create a payment.</h2>
          <p>Same mental model across languages — switch the tab for your stack.</p>
        </div>
        <div class="sdk-quick" data-sdk-quick>
          <div class="docs-rails__tabs">
            ${s.quickstarts
              .map(
                (q, i) => `
              <button type="button" class="docs-rail-tab ${i === 0 ? "is-active" : ""}" data-sdk-lang="${q.id}">
                <strong>${esc(q.label)}</strong>
                <span>Quick start</span>
              </button>`
              )
              .join("")}
          </div>
          ${s.quickstarts
            .map(
              (q, i) => `
            <div class="sdk-quick__panel" data-sdk-panel="${q.id}" ${i === 0 ? "" : "hidden"}>
              <div class="docs-sample">
                <div class="docs-sample__bar"><span>Install</span></div>
                <pre><code>${esc(q.install)}</code></pre>
              </div>
              <div class="docs-sample">
                <div class="docs-sample__bar"><span>${esc(q.label)} · create payment</span></div>
                <pre><code>${esc(q.code)}</code></pre>
              </div>
            </div>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section" id="packages">
      <div class="wrap">
        <p class="kicker">ALL PACKAGES</p>
        <div class="section__head">
          <h2>Eight official clients. Pin a version in production.</h2>
          <p>We ship semver — breaking changes only on major bumps. MIT-licensed client libs.</p>
        </div>
        <div class="sdk-packages">
          ${s.packages
            .map(
              (p) => `
            <article class="sdk-pkg">
              <div class="sdk-pkg__top">
                <h3>${esc(p.lang)}</h3>
                <span class="sdk-pkg__status ${p.status === "BETA" ? "is-beta" : ""}">${esc(p.status)}</span>
              </div>
              <p class="sdk-pkg__name">${esc(p.pkg)}</p>
              <div class="sdk-pkg__meta">
                <span>${esc(p.version)}</span>
                <span>${esc(p.runtime)}</span>
                <span>Released ${esc(p.released)}</span>
              </div>
              ${tags(p.highlights, true)}
              <div class="docs-sample sdk-pkg__install">
                <div class="docs-sample__bar"><span>Install</span></div>
                <pre><code>${esc(p.install)}</code></pre>
              </div>
            </article>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <p class="kicker">WEBHOOKS</p>
        <div class="section__head">
          <h2>${esc(s.webhook.title)}</h2>
          <p>${esc(s.webhook.body)}</p>
        </div>
        <div class="detail__grid">
          <article class="detail__panel">
            <h2>Built-in helpers</h2>
            <ul class="prose-list">
              ${s.webhook.points.map((p) => `<li>${esc(p)}</li>`).join("")}
            </ul>
          </article>
          <div class="docs-sample">
            <div class="docs-sample__bar"><span>Node.js · constructEvent</span></div>
            <pre><code>${esc(s.webhook.code)}</code></pre>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <p class="kicker">CAPABILITY MATRIX</p>
        <div class="section__head">
          <h2>What each SDK covers today.</h2>
          <p>Mobile SDKs focus on checkout helpers; server SDKs cover rails and webhooks.</p>
        </div>
        <div class="table-wrap">
          <table class="cmp sdk-matrix">
            <thead>
              <tr>
                <th>Capability</th>
                ${s.matrixCols.map((c) => `<th>${esc(c.label)}</th>`).join("")}
              </tr>
            </thead>
            <tbody>
              ${s.matrix
                .map(
                  (row) => `
                <tr>
                  <td>${esc(row.capability)}</td>
                  ${s.matrixCols
                    .map((c) => `<td>${row[c.id] ? `<span class="yes">✓</span>` : `<span class="no">—</span>`}</td>`)
                    .join("")}
                </tr>`
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <p class="kicker">RESOURCES</p>
        <div class="card-grid docs-guides">
          ${s.resources
            .map(
              (r) => `
            <a class="info-card" href="${r.href}" data-link>
              <h3>${esc(r.title)}</h3>
              <p>${esc(r.sub)}</p>
              <span class="text-link">Open <i>→</i></span>
            </a>`
            )
            .join("")}
        </div>
        <div class="tech-note">
          <p>${esc(s.note)}</p>
        </div>
        <div class="detail__cta">
          <h2>Start in sandbox — go live when you’re ready.</h2>
          <p>Grab keys, install an SDK, and call your first endpoint. Need production rails? Talk to us.</p>
          <div class="hero__actions">
            ${btn("/login", "Get sandbox keys", "blue")}
            ${btn("/contact", "Talk to Anilax", "ghost")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function docsPage() {
  const d = docsPageData;
  document.title = `${d.title} | Anilax Software`;

  return `
    ${pageHero({
      eyebrow: d.eyebrow,
      h1: d.title,
      sub: d.sub,
      actions: btn("/login", "Get sandbox keys", "blue") + btn("/sdks", "Browse SDKs", "ghost"),
    })}

    <section class="section section--tight">
      <div class="wrap">
        <div class="docs-base">
          <span class="docs-base__pill">SANDBOX</span>
          <code>${esc(d.baseUrl)}</code>
        </div>
        <div class="detail__stats">
          ${d.stats.map((s) => `<div class="detail__stat"><strong>${esc(s.n)}</strong><span>${esc(s.l)}</span></div>`).join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <p class="kicker">GETTING STARTED</p>
        <div class="section__head">
          <h2>From first key to production webhooks.</h2>
          <p>Sandbox-first. Authenticate before live calls. Production keys activate settlement rails after partner checks.</p>
        </div>
        <div class="card-grid docs-guides">
          ${d.guides
            .map(
              (g) => `
            <a class="info-card" href="${g.href}" data-link>
              <h3>${esc(g.title)}</h3>
              <p>${esc(g.sub)}</p>
              <span class="text-link">Open <i>→</i></span>
            </a>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <p class="kicker">QUICK START</p>
        <div class="section__head">
          <h2>Four steps to your first sandbox call.</h2>
          <p>Keep secrets on the server. Use idempotency keys on money-moving POSTs.</p>
        </div>
        <div class="detail__steps docs-steps">
          ${d.steps
            .map(
              (s, i) => `
            <article class="detail__step">
              <span>${String(i + 1).padStart(2, "0")}</span>
              <h3>${esc(s.t)}</h3>
              <p>${esc(s.d)}</p>
            </article>`
            )
            .join("")}
        </div>
        <div class="docs-sample">
          <div class="docs-sample__bar">
            <span>${esc(d.sample.label)}</span>
          </div>
          <pre><code>${esc(d.sample.code)}</code></pre>
        </div>
      </div>
    </section>

    <section class="section" id="api-catalog">
      <div class="wrap">
        <p class="kicker">API CATALOG</p>
        <div class="section__head">
          <h2>Product rails — every endpoint your stack needs.</h2>
          <p>Pick a module to explore methods. Full sandbox access after developer sign-in.</p>
        </div>
        <div class="docs-rails" data-docs-rails>
          <div class="docs-rails__tabs">
            ${d.rails
              .map(
                (r, i) => `
              <button type="button" class="docs-rail-tab ${i === 0 ? "is-active" : ""}" data-rail="${r.id}">
                <strong>${esc(r.title)}</strong>
                <span>${r.count} endpoints</span>
              </button>`
              )
              .join("")}
          </div>
          ${d.rails
            .map(
              (r, i) => `
            <div class="docs-rail-panel" data-rail-panel="${r.id}" ${i === 0 ? "" : "hidden"}>
              <div class="docs-rail-panel__head">
                <div>
                  <h3>${esc(r.title)}</h3>
                  <p>${esc(r.sub)}</p>
                </div>
                <a class="text-link" href="${r.href}" data-link>Related product <i>→</i></a>
              </div>
              <div class="docs-endpoints">
                ${r.endpoints
                  .map(
                    (e) => `
                  <div class="docs-endpoint">
                    <span class="docs-method docs-method--${e.method.toLowerCase()}">${esc(e.method)}</span>
                    <span>${esc(e.name)}</span>
                  </div>`
                  )
                  .join("")}
              </div>
            </div>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <p class="kicker">PLATFORM CAPABILITIES</p>
        <div class="detail__grid tech-principles">
          ${d.capabilities
            .map(
              (c) => `
            <article class="detail__panel">
              <h2>${esc(c.title)}</h2>
              <p class="tech-principles__body">${esc(c.body)}</p>
            </article>`
            )
            .join("")}
        </div>
        <div class="tech-note">
          <p>${esc(d.note)}</p>
        </div>
        <div class="detail__cta">
          <h2>Ready to integrate?</h2>
          <p>Create sandbox keys, explore SDKs, or talk to us about production rails for your product.</p>
          <div class="hero__actions">
            ${btn("/login", "Open developer hub", "blue")}
            ${btn("/contact", "Talk to Anilax", "ghost")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function technologyPage() {
  const t = technologyPageData;
  document.title = `${t.title} | Anilax Software`;

  return `
    ${pageHero({
      eyebrow: t.eyebrow,
      h1: t.title,
      sub: t.sub,
      actions: btn("/contact", "Discuss your stack", "blue") + btn("/services", "Services", "ghost"),
    })}

    <section class="section section--tight">
      <div class="wrap">
        <div class="detail__stats">
          ${t.stats.map((s) => `<div class="detail__stat"><strong>${esc(s.n)}</strong><span>${esc(s.l)}</span></div>`).join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <p class="kicker">HOW WE CHOOSE TECHNOLOGY</p>
        <div class="section__head">
          <h2>Tools that fit your operations — not the other way around.</h2>
          <p>We pick stacks based on compliance, team skills, and what must stay maintainable after handover.</p>
        </div>
        <div class="detail__grid tech-principles">
          ${t.principles
            .map(
              (p) => `
            <article class="detail__panel">
              <h2>${esc(p.title)}</h2>
              <p class="tech-principles__body">${esc(p.body)}</p>
            </article>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section" id="stack">
      <div class="wrap">
        <p class="kicker">TECH STACK</p>
        <div class="section__head">
          <h2>Eight categories. One production mindset.</h2>
          <p>Languages, frameworks, cloud, design, and fintech rails we use across real client systems.</p>
        </div>
        <div class="tech-cats">
          ${t.categories
            .map(
              (c, i) => `
            <article class="tech-cat">
              <span class="tech-cat__n">${String(i + 1).padStart(2, "0")}</span>
              <div class="tech-cat__main">
                <h3>${esc(c.title)}</h3>
                <p>${esc(c.body)}</p>
                ${tags(c.items)}
              </div>
            </article>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <p class="kicker">STACK PRESETS</p>
        <div class="section__head">
          <h2>Starting points for common project types.</h2>
          <p>Defaults we often begin with — then adjust to your constraints, existing systems, and team.</p>
        </div>
        <div class="detail-cards tech-presets">
          ${t.presets
            .map(
              (p) => `
            <a class="detail-card" href="${p.href}" data-link>
              <p class="detail-card__eye">${esc(p.sub)}</p>
              <h3>${esc(p.title)}</h3>
              ${tags(p.stack, true)}
              <span class="text-link">Explore service <i>→</i></span>
            </a>`
            )
            .join("")}
        </div>
        <div class="tech-note">
          <p>${esc(t.note)}</p>
        </div>
        <div class="detail__cta">
          <h2>Need a stack review for your next build?</h2>
          <p>Share your product goals — we’ll recommend architecture, trade-offs, and a clear path to production.</p>
          <div class="hero__actions">
            ${btn("/contact", "Talk to Anilax", "blue")}
            <a class="btn btn--ghost" href="tel:${brand.phone}">${brand.phone}</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function storiesIndex() {
  return `
    ${pageHero({
      eyebrow: "OUR WORK",
      h1: "Partners we've grown with",
      sub: "Real journeys from AePS networks, API integrations, and software builds — how teams launched, scaled, and stayed supported.",
      actions: btn("/contact", "Start your story", "blue") + btn("/services", "View services", "ghost"),
    })}
    <section class="section">
      <div class="wrap">
        <div class="svc-head">
          <h2>Our Work</h2>
          <a class="text-link" href="/contact" data-link>Work with us <i>→</i></a>
        </div>
        <div class="svc-list">
          ${home.works
            .map(
              (w) => `
            <a class="svc-list__item" href="${w.href}" data-link>
              <h3>${esc(w.title)}</h3>
              <p>${esc(w.tag)}</p>
            </a>`
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function detailPage(route, detail) {
  const isService = route.startsWith("/services/");
  const isWork = route.startsWith("/stories/");
  const backHref = isService ? "/services" : isWork ? "/stories" : "/industries";
  const backLabel = isService ? "All Services" : isWork ? "All Work" : "All Industries";
  const related =
    detail.relatedServices
      ?.map((href) => {
        const s = serviceDetails[href];
        return s
          ? `<a class="svc-list__item" href="${href}" data-link><h3>${esc(s.title)}</h3><p>${esc(s.sub)}</p></a>`
          : "";
      })
      .join("") || "";

  return `
    ${pageHero({
      eyebrow: detail.eyebrow,
      h1: detail.title,
      sub: detail.sub,
      actions:
        btn("/contact", "Start a project", "blue") +
        `<a href="${backHref}" data-link class="btn btn--ghost">${backLabel}</a>`,
    })}

    <section class="section section--tight">
      <div class="wrap detail">
        <p class="detail__lead">${esc(detail.lead)}</p>

        ${
          detail.stats?.length
            ? `<div class="detail__stats">${detail.stats
                .map((s) => `<div class="detail__stat"><strong>${esc(s.n)}</strong><span>${esc(s.l)}</span></div>`)
                .join("")}</div>`
            : ""
        }

        ${
          detail.audience?.length
            ? `
          <div class="detail__block">
            <h2>Who this is for</h2>
            <div class="detail__chips">${detail.audience.map((a) => `<span>${esc(a)}</span>`).join("")}</div>
          </div>`
            : ""
        }

        <div class="detail__grid">
          <article class="detail__panel">
            <h2>Problems we solve</h2>
            <ul class="prose-list">
              ${(detail.challenges || []).map((c) => `<li>${esc(c)}</li>`).join("")}
            </ul>
          </article>
          <article class="detail__panel">
            <h2>What we build</h2>
            <ul class="prose-list">
              ${(detail.solutions || []).map((c) => `<li>${esc(c)}</li>`).join("")}
            </ul>
          </article>
        </div>

        ${
          detail.deliverables?.length || detail.outcomes?.length
            ? `
          <div class="detail__grid">
            ${
              detail.deliverables?.length
                ? `<article class="detail__panel">
              <h2>What you get</h2>
              <ul class="prose-list">${detail.deliverables.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>
            </article>`
                : ""
            }
            ${
              detail.outcomes?.length
                ? `<article class="detail__panel">
              <h2>Outcomes</h2>
              <ul class="prose-list">${detail.outcomes.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>
            </article>`
                : ""
            }
          </div>`
            : ""
        }

        ${
          detail.modules?.length
            ? `
          <div class="detail__block">
            <h2>Modules & capabilities</h2>
            ${tags(detail.modules)}
          </div>`
            : ""
        }

        ${
          detail.stack?.length
            ? `
          <div class="detail__block">
            <h2>Typical stack</h2>
            ${tags(detail.stack)}
          </div>`
            : ""
        }

        ${
          detail.timeline
            ? `
          <div class="detail__block detail__timeline">
            <h2>Timeline</h2>
            <p>${esc(detail.timeline)}</p>
          </div>`
            : ""
        }

        ${
          detail.process?.length
            ? `
          <div class="detail__block">
            <h2>How we work</h2>
            <div class="detail__steps">
              ${detail.process
                .map(
                  (p, i) => `
                <article class="detail__step">
                  <span>${String(i + 1).padStart(2, "0")}</span>
                  <h3>${esc(p.t)}</h3>
                  <p>${esc(p.d)}</p>
                </article>`
                )
                .join("")}
            </div>
          </div>`
            : ""
        }

        ${
          related
            ? `
          <div class="detail__block">
            <h2>Related services</h2>
            <div class="svc-list">${related}</div>
          </div>`
            : ""
        }

        ${
          detail.faqs?.length
            ? `
          <div class="detail__block">
            <h2>Questions answered</h2>
            <div class="faq">
              ${detail.faqs
                .map(
                  (f) => `
                <div class="faq__item">
                  <button type="button" data-faq><span>${esc(f.q)}</span><i>+</i></button>
                  <div class="faq__a"><p>${esc(f.a)}</p></div>
                </div>`
                )
                .join("")}
            </div>
          </div>`
            : ""
        }

        ${pdfActionsHtml(route)}

        <div class="detail__cta">
          <h2>${isWork ? "Want results like this?" : `Ready to start ${esc(detail.title)}?`}</h2>
          <p>${isWork ? "Tell us your goals — we’ll map a similar path for your product or operations." : "Tell us your goals — we’ll recommend scope, stack, and a clear next step."}</p>
          <div class="hero__actions">
            ${btn("/contact", "Talk to Anilax", "blue")}
            <a class="btn btn--ghost" href="tel:${brand.phone}">${brand.phone}</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function contactPage() {
  const c = contactPageData;
  document.title = `${c.title} | Anilax Software`;

  return `
    ${pageHero({
      eyebrow: c.eyebrow,
      h1: c.title,
      sub: c.sub,
      actions:
        `<a class="btn btn--blue" href="tel:${brand.phone}"><span>Call ${brand.phone}</span><span aria-hidden="true">Call ${brand.phone}</span></a>` +
        `<a class="btn btn--ghost" href="mailto:${brand.email}">Email us</a>`,
    })}

    <section class="section section--tight">
      <div class="wrap">
        <div class="detail__stats">
          ${c.stats.map((s) => `<div class="detail__stat"><strong>${esc(s.n)}</strong><span>${esc(s.l)}</span></div>`).join("")}
        </div>
      </div>
    </section>

    <section class="section" id="enquire">
      <div class="wrap contact-grid contact-grid--page">
        <div class="contact-page__left">
          <p class="kicker">REACH THE RIGHT TEAM</p>
          <div class="section__head section__head--stack">
            <h2>How can we help?</h2>
            <p>Pick a channel — or use the form and we’ll route your message internally.</p>
          </div>
          <div class="contact-channels">
            ${c.channels
              .map(
                (ch) => `
              <a class="contact-channel" href="${ch.href}" ${ch.href.startsWith("/") ? "data-link" : ""}>
                <div>
                  <h3>${esc(ch.title)}</h3>
                  <p>${esc(ch.body)}</p>
                </div>
                <span class="text-link">${esc(ch.cta)} <i>→</i></span>
              </a>`
              )
              .join("")}
          </div>

          <div class="contact-direct">
            <a class="info-card" href="tel:${brand.phone}">
              <h3>Call us</h3>
              <p>${brand.phone}</p>
              <span>Mon–Sat, 10:00 AM – 7:00 PM IST</span>
            </a>
            <a class="info-card" href="mailto:${brand.email}">
              <h3>Email</h3>
              <p>${brand.email}</p>
              <span>We reply within 24 hours</span>
            </a>
          </div>

          <article class="contact-office">
            <p class="detail-card__eye">VISIT</p>
            <h3>${esc(c.office.title)}</h3>
            <p class="contact-office__addr">${c.office.lines.map((l) => esc(l)).join("<br />")}</p>
            <p class="contact-office__hours">${esc(c.office.hours)}</p>
            <p class="contact-office__legal">${esc(brand.legal)} · CIN ${esc(brand.cin)}</p>
            <a class="text-link" href="${c.office.maps}" target="_blank" rel="noopener noreferrer">Open in Google Maps <i>→</i></a>
          </article>
        </div>
        ${contactForm({ expanded: true })}
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <p class="kicker">WHAT HAPPENS NEXT</p>
        <div class="section__head">
          <h2>A simple path from enquiry to kickoff.</h2>
          <p>No black-box sales process — clear discovery and a written next step.</p>
        </div>
        <div class="detail__steps docs-steps">
          ${c.steps
            .map(
              (s, i) => `
            <article class="detail__step">
              <span>${String(i + 1).padStart(2, "0")}</span>
              <h3>${esc(s.t)}</h3>
              <p>${esc(s.d)}</p>
            </article>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section section--last">
      <div class="wrap">
        <p class="kicker">FAQ</p>
        <div class="section__head">
          <h2>Before you write in.</h2>
          <p>Quick answers about response times, visits, NDAs, and API access.</p>
        </div>
        <div class="faq contact-faq">
          ${c.faqs
            .map(
              (f) => `
            <div class="faq__item">
              <button type="button" data-faq><span>${esc(f.q)}</span><i>+</i></button>
              <div class="faq__a"><p>${esc(f.a)}</p></div>
            </div>`
            )
            .join("")}
        </div>
        <div class="detail__cta">
          <h2>Prefer a direct line?</h2>
          <p>Call or email — the same team that architects and ships your product.</p>
          <div class="hero__actions">
            <a class="btn btn--blue" href="tel:${brand.phone}">${brand.phone}</a>
            <a class="btn btn--ghost" href="mailto:${brand.email}">${brand.email}</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function loginPage() {
  return `
    <section class="login">
      <div class="wrap login__grid">
        <div class="login__panel">
          <p class="eyebrow">Developer hub</p>
          <h1>Welcome back</h1>
          <p class="page-hero__sub">Access sandbox keys, webhooks, settlement reports, and live transaction tools.</p>
          <form class="contact-card contact-card--flat" data-contact-form>
            <label><span>Email</span><input type="email" required placeholder="you@company.com" /></label>
            <label><span>Password</span><input type="password" required placeholder="••••••••" /></label>
            <button class="btn btn--blue btn--block" type="submit"><span>Log in to console</span><span aria-hidden="true">Log in to console</span></button>
            <p class="form-note" data-form-note hidden>Demo login — connect your auth backend to go live.</p>
          </form>
          <div class="tags" style="margin-top:1rem">
            <span>99.99% API uptime SLA</span>
            <span>Free sandbox keys</span>
            <span>&lt;50ms median latency</span>
          </div>
        </div>
        <div class="login__side" aria-hidden="true">
          <pre><code>$ curl https://anilaxsoftware.com/api/v1/payments \\
  -H "Authorization: Bearer sk_test_••••" \\
  -d '{"amount": 49900, "currency": "INR"}'

← 200 { "status": "SUCCESS" }</code></pre>
        </div>
      </div>
    </section>
  `;
}

function policyPage(route, doc) {
  document.title = `${doc.title} | Anilax Software`;
  return `
    ${pageHero({
      eyebrow: doc.eyebrow,
      h1: doc.title,
      sub: doc.sub,
      actions: btn("/contact", "Contact us", "blue") + btn("/", "Home", "ghost"),
    })}
    <section class="section section--tight">
      <div class="wrap policy">
        ${doc.sections
          .map(
            (s) => `
          <article class="policy__section">
            <h2>${esc(s.h)}</h2>
            ${s.p.map((para) => `<p>${esc(para)}</p>`).join("")}
          </article>`
          )
          .join("")}
        <div class="policy__nav">
          <a href="/privacy" data-link>Privacy</a>
          <a href="/terms" data-link>Terms</a>
          <a href="/cookies" data-link>Cookies</a>
          <a href="/security" data-link>Security</a>
          <a href="/compliance" data-link>Compliance</a>
          <a href="/grievance" data-link>Grievance</a>
        </div>
      </div>
    </section>
  `;
}

function structuredPage(route, page) {
  document.title = `${page.title} | Anilax Software`;
  const primary = page.cta?.primary;
  const secondary = page.cta?.secondary;
  const actions =
    (primary
      ? primary.href.startsWith("mailto:")
        ? `<a class="btn btn--blue" href="${primary.href}">${esc(primary.label)}</a>`
        : btn(primary.href, primary.label, "blue")
      : "") +
    (secondary
      ? secondary.href.startsWith("mailto:")
        ? `<a class="btn btn--ghost" href="${secondary.href}">${esc(secondary.label)}</a>`
        : btn(secondary.href, secondary.label, "ghost")
      : "");

  const blocks = (page.blocks || [])
    .map((b) => {
      if (b.type === "cards") {
        return `
          <div class="detail__block">
            <h2>${esc(b.title)}</h2>
            <div class="card-grid">
              ${b.items
                .map(
                  (i) => `
                <a class="info-card" href="${i.href}" data-link>
                  <h3>${esc(i.title)}</h3>
                  <p>${esc(i.sub)}</p>
                  <span class="text-link">Open <i>→</i></span>
                </a>`
                )
                .join("")}
            </div>
          </div>`;
      }
      if (b.type === "text") {
        return `
          <div class="detail__block">
            <h2>${esc(b.title)}</h2>
            ${b.paras.map((p) => `<p class="detail__lead" style="margin-bottom:12px">${esc(p)}</p>`).join("")}
          </div>`;
      }
      if (b.type === "split") {
        return `
          <div class="detail__block">
            <h2>${esc(b.title)}</h2>
            <div class="detail__grid">
              <article class="detail__panel"><ul class="prose-list">${b.left.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></article>
              <article class="detail__panel"><ul class="prose-list">${b.right.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></article>
            </div>
          </div>`;
      }
      if (b.type === "note") {
        return `
          <div class="policy__note">
            ${b.paras.map((p) => `<p>${esc(p)}</p>`).join("")}
          </div>`;
      }
      if (b.type === "facts") {
        return `
          <div class="facts">
            ${b.items.map((f) => `<div class="facts__row"><span>${esc(f.k)}</span><strong>${esc(f.v)}</strong></div>`).join("")}
          </div>`;
      }
      if (b.type === "timeline") {
        return `
          <div class="timeline">
            ${b.items
              .map(
                (t) => `
              <article class="timeline__item">
                <div class="timeline__meta"><span>${esc(t.tag)}</span><span>${esc(t.date)}</span></div>
                <h3>${esc(t.title)}</h3>
                <ul class="prose-list">${t.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
              </article>`
              )
              .join("")}
          </div>`;
      }
      if (b.type === "status") {
        return `
          <div class="status-grid">
            ${b.items
              .map(
                (s) => `
              <div class="status-card">
                <span class="status-dot"></span>
                <div>
                  <strong>${esc(s.name)}</strong>
                  <em>${esc(s.state)}</em>
                </div>
              </div>`
              )
              .join("")}
          </div>`;
      }
      return "";
    })
    .join("");

  const productRoutes = new Set(["/software", "/b2b", "/b2c"]);
  const pdfBlock = productRoutes.has(route) ? pdfActionsHtml(route) : "";

  return `
    ${pageHero({
      eyebrow: page.eyebrow,
      h1: page.title,
      sub: page.sub,
      actions,
    })}
    <section class="section section--tight">
      <div class="wrap">
        ${blocks}
        ${pdfBlock}
      </div>
    </section>
  `;
}

function genericPage(route) {
  const page = siteData.pages[route];
  if (!page) {
    return `
      ${pageHero({
        eyebrow: "404",
        h1: "Page not found",
        sub: "This route is not available yet.",
        actions: btn("/", "Back home", "blue"),
      })}
    `;
  }

  const paras = page.paras || [];
  const sub =
    paras.find((p) => p && p.length > 40 && p !== page.h1 && !/^[A-Z0-9 ·&/-]+$/.test(p)) ||
    "";
  const eyebrow = route.replace(/^\//, "").split("/")[0].replace(/-/g, " ").toUpperCase();

  return `
    ${pageHero({
      eyebrow,
      h1: page.h1,
      sub,
      actions: btn("/contact", "Talk to us", "blue") + btn("/services", "View services", "ghost"),
    })}
    <section class="section">
      <div class="wrap prose prose--wide">
        ${contentBlocks(page)}
        <div class="hero__actions" style="margin-top:2rem">
          ${btn("/contact", "Get started", "blue")}
          ${btn("/stories", "See our work", "ghost")}
        </div>
      </div>
    </section>
  `;
}

export function renderPage(route) {
  const page = siteData.pages[route];
  setTitle(route, page);

  if (route === "/") return homePage();
  if (route === "/contact") return contactPage();
  if (route === "/login") return loginPage();
  if (route === "/services") return servicesIndex();
  if (route === "/industries") return industriesIndex();
  if (route === "/stories") return storiesIndex();
  if (route === "/technology") return technologyPage();
  if (route === "/docs") return docsPage();
  if (route === "/sdks") return sdksPage();
  if (route === "/changelog") return changelogPage();
  if (route === "/status") return statusPage();
  if (allDetails[route]) {
    document.title = `${allDetails[route].title} | Anilax Software`;
    return detailPage(route, allDetails[route]);
  }
  if (policies[route]) return policyPage(route, policies[route]);
  if (contentPages[route]) return structuredPage(route, contentPages[route]);
  if (siteData.pages[route]) return genericPage(route);
  return genericPage(route);
}

export { siteData };
