import {
  blogPosts,
  brand,
  caseStudies,
  industryCatalog,
  portfolio,
  pricingTiers,
  processSteps,
  serviceCatalog,
  trustStats,
} from "./data/anilax.js";
import {
  blogDetails,
  caseStudyDetails,
  industryDetails,
  legalPages,
  serviceDetails,
} from "./data/offerings.js";
import { iconFor } from "./icons.js";

function esc(s = "") {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function btn(href, label, variant = "solid") {
  if (href === "/free-consultation" || href === "/contact") {
    return `<button type="button" class="btn btn--${variant}" data-consult-open>${esc(label)}</button>`;
  }
  if (href === "/start-project") {
    return `<button type="button" class="btn btn--${variant}" data-project-open>${esc(label)}</button>`;
  }
  return `<a href="${href}" data-link class="btn btn--${variant}">${esc(label)}</a>`;
}

/** Quick call-booking form — Free Consultation */
export function consultFormHtml() {
  return `
    <form class="form-card form-card--consult" data-contact-form data-form-kind="consult">
      <div class="form-card__head">
        <span class="form-card__badge form-card__badge--soft">Free · 30 min</span>
        <h3>Book a consultation call</h3>
        <p>Tell us a little — we’ll suggest a slot and come prepared.</p>
      </div>
      <input type="hidden" name="goal" value="Free Consultation" />
      <div class="form-card__fields form-card__fields--consult">
        <label class="field"><span>Name *</span><input name="name" required autocomplete="name" placeholder="Your name" /></label>
        <label class="field"><span>Work email *</span><input type="email" name="email" required autocomplete="email" placeholder="you@company.com" /></label>
        <label class="field"><span>Phone *</span><input name="phone" required autocomplete="tel" placeholder="${esc(brand.phone)}" /></label>
        <label class="field"><span>Best time to call</span>
          <select name="timeline">
            <option value="">Select</option>
            <option>Morning (10–12)</option>
            <option>Afternoon (12–4)</option>
            <option>Evening (4–7)</option>
            <option>Anytime</option>
          </select>
        </label>
        <label class="field field--full">
          <span>What should we discuss? *</span>
          <textarea name="message" required rows="3" placeholder="e.g. School ERP for 3 campuses, or AePS for distributors…"></textarea>
        </label>
      </div>
      <button type="submit" class="btn btn--solid btn--block"><span>Request consultation</span></button>
      <p class="form-note" data-form-note hidden></p>
    </form>
  `;
}

/** Full project brief form — Start Your Project */
export function projectFormHtml() {
  const goals = [
    { value: "Build a New Product", label: "New Product", hint: "MVP / launch", icon: "Software Development" },
    { value: "Custom ERP", label: "Custom ERP", hint: "Operations", icon: "Custom ERP Development" },
    { value: "FinTech / Payments", label: "FinTech", hint: "UPI · AePS", icon: "FinTech Development" },
    { value: "SaaS Platform", label: "SaaS", hint: "Multi-tenant", icon: "SaaS Development" },
    { value: "Mobile App", label: "Mobile App", hint: "iOS · Android", icon: "Mobile App Development" },
    { value: "Need a Dedicated Team", label: "Dedicated Team", hint: "Hire pod", icon: "API Development" },
  ];

  return `
    <form class="form-card form-card--project" data-contact-form data-form-kind="project">
      <div class="form-card__head">
        <div class="form-card__head-row">
          <span class="form-card__badge form-card__badge--dark">Project brief</span>
          <span class="form-card__meta">Avg reply · 24h</span>
        </div>
        <h3>Tell us what you’re building</h3>
        <p>Pick a type, add scope & budget — we send a clear build plan.</p>
      </div>
      <fieldset class="form-card__goals">
        <legend>Project type *</legend>
        <div class="goal-grid goal-grid--project">
          ${goals
            .map(
              (g, i) => `
            <label class="goal goal--project">
              <input type="radio" name="goal" value="${esc(g.value)}" ${i === 0 ? "checked" : ""} />
              <span class="goal__icon" aria-hidden="true">${iconFor(g.icon)}</span>
              <span class="goal__copy"><strong>${esc(g.label)}</strong><em>${esc(g.hint)}</em></span>
              <span class="goal__tick" aria-hidden="true"></span>
            </label>`
            )
            .join("")}
        </div>
      </fieldset>
      <div class="form-card__fields form-card__fields--project">
        <label class="field"><span>Name *</span><input name="name" required autocomplete="name" placeholder="Your name" /></label>
        <label class="field"><span>Work email *</span><input type="email" name="email" required autocomplete="email" placeholder="you@company.com" /></label>
        <label class="field"><span>Company *</span><input name="company" required autocomplete="organization" placeholder="Company / brand" /></label>
        <label class="field"><span>Phone</span><input name="phone" autocomplete="tel" placeholder="${esc(brand.phone)}" /></label>
        <label class="field"><span>Timeline *</span>
          <select name="timeline" required>
            <option value="">Select timeline</option>
            <option>ASAP</option>
            <option>2–4 weeks</option>
            <option>1–2 months</option>
            <option>3+ months</option>
            <option>Flexible</option>
          </select>
        </label>
        <label class="field"><span>Budget *</span>
          <select name="budget" required>
            <option value="">Select budget</option>
            <option>Under ₹2L</option>
            <option>₹2L–₹5L</option>
            <option>₹5L–₹15L</option>
            <option>₹15L+</option>
            <option>Retainer / dedicated team</option>
          </select>
        </label>
        <label class="field field--full">
          <span>Project requirement *</span>
          <textarea name="message" required rows="4" placeholder="Users, must-have modules, integrations, success criteria…"></textarea>
        </label>
      </div>
      <div class="form-card__foot">
        <p class="form-card__note">No spam. A senior engineer replies on WhatsApp / email.</p>
        <button type="submit" class="btn btn--solid btn--block"><span>Send project brief</span></button>
        <p class="form-note" data-form-note hidden></p>
      </div>
    </form>
  `;
}

function setTitle(route, title) {
  const base = "Anilax Software";
  if (route === "/") document.title = `${base} — Custom Software, ERP & FinTech`;
  else if (title) document.title = `${title} | ${base}`;
  else document.title = base;
}

function sectionHead({ eyebrow, title, sub, actions = "" }) {
  return `
    <div class="section__head">
      ${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ""}
      <h2>${esc(title)}</h2>
      ${sub ? `<p>${esc(sub)}</p>` : ""}
      ${actions ? `<div class="section__actions">${actions}</div>` : ""}
    </div>
  `;
}

function homePage() {
  const rotateWords = ["Digital Solutions", "Custom ERP", "FinTech Products", "Mobile Apps", "SaaS Platforms"];
  const showcase = [
    {
      tag: "Customized",
      title: "Customized Software Tailored to Your Growth",
      body: "We develop software solutions that adapt to your unique business needs. Our technology evolves as your operations grow — from startup MVP to enterprise scale.",
      href: "/services/software-development",
      image: "/works/work-api.jpg",
      points: ["Discovery to launch", "Full code ownership", "Weekly demos"],
    },
    {
      tag: "FinTech",
      title: "Smarter Payments & Lending Platforms",
      body: "AePS, UPI, wallets, NBFC/MFI workflows, and settlement-ready ledgers — built for distributors, agents, and finance teams across India.",
      href: "/services/fintech-development",
      image: "/works/work-aeps.jpg",
      points: ["AePS · UPI · Wallets", "Commission & MIS", "Field-ready apps"],
    },
    {
      tag: "Innovation",
      title: "AI & Automation Solutions by Anilax Software",
      body: "We harness AI to help businesses automate processes, extract documents, and support teams with practical copilots — not slideware demos.",
      href: "/services/ai-software",
      image: "/works/work-wallet.jpg",
      points: ["Workflow automation", "Secure integrations", "Measurable ROI"],
    },
  ];
  const tech = ["React", "Node.js", "Flutter", "Python", "PostgreSQL", "AWS", "Kotlin", "Next.js"];

  return `
    <section class="hero">
      <div class="hero__glow" aria-hidden="true"></div>
      <div class="wrap hero__inner">
        <div class="hero__copy">
          <p class="hero__brand">Anilax Software</p>
          <h1>
            <span class="hero__lead">Leading software development in</span>
            <span class="hero__rotate" data-rotate="${esc(rotateWords.join("|"))}">
              <span data-rotate-word>${esc(rotateWords[0])}</span>
            </span>
          </h1>
          <p class="hero__sub">From Startup to Enterprise — we build secure, scalable, and customizable platforms that grow with your business.</p>
          <ul class="hero__bullets">
            <li>Trusted delivery for innovation & reliability</li>
            <li>Latest tech stack with practical product sense</li>
            <li>ERP, FinTech, SaaS, mobile & APIs under one roof</li>
          </ul>
          <div class="hero__actions">
            ${btn("/free-consultation", "Schedule a call", "solid")}
            ${btn("/start-project", "Start Your Project", "ghost")}
          </div>
          <div class="hero__trust">
            <span><strong>15+</strong> yrs craft</span>
            <span><strong>80+</strong> products</span>
            <span><strong>24h</strong> reply</span>
          </div>
        </div>
        <div class="hero__visual" aria-hidden="true">
          <div class="hero__stage">
            <div class="hero__shot hero__shot--main">
              <img src="/works/work-aeps.jpg" alt="" />
              <div class="hero__shot-cap"><strong>AePS network</strong><span>Live across districts</span></div>
            </div>
            <div class="hero__shot hero__shot--side">
              <img src="/works/work-edtech.jpg" alt="" />
            </div>
            <div class="hero__chip hero__chip--1"><b>●</b> Production ready</div>
            <div class="hero__chip hero__chip--2"><b>●</b> Jaipur · India</div>
            <div class="hero__chip hero__chip--3"><b>↑</b> 1.2M wallet users</div>
          </div>
        </div>
      </div>
    </section>

    <div class="marquee" aria-hidden="true">
      <div class="marquee__track">
        ${Array(2)
          .fill(0)
          .map(
            () =>
              `<span>DIGITAL SOLUTIONS • ANILAX • INNOVATION • STRATEGY • TECHNOLOGY • FINTECH • ERP • SaaS • MOBILE • AI • </span>`
          )
          .join("")}
      </div>
    </div>

    <section class="section section--tech">
      <div class="wrap tech-row">
        <p>Built with modern stacks teams already trust</p>
        <div class="tech-row__list">
          ${tech.map((t) => `<span>${esc(t)}</span>`).join("")}
        </div>
      </div>
    </section>

    <section class="section section--showcase">
      <div class="wrap">
        ${sectionHead({
          eyebrow: "Capabilities",
          title: "Software that grows with you",
          sub: "Custom products, payment rails, and intelligent automation — designed for Indian operations.",
        })}
        <div class="showcase">
          ${showcase
            .map(
              (s, i) => `
            <article class="show${i % 2 ? " show--flip" : ""}">
              <div class="show__copy">
                <p class="show__tag">${esc(s.tag)}</p>
                <h2>${esc(s.title)}</h2>
                <p>${esc(s.body)}</p>
                <ul class="show__points">${s.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
                <a href="${s.href}" data-link class="btn btn--solid">Explore ${esc(s.tag)}</a>
              </div>
              <div class="show__art">
                <img src="${s.image}" alt="" loading="lazy" />
                <div class="show__badge">${esc(s.tag)}</div>
              </div>
            </article>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section section--about">
      <div class="wrap about">
        <div class="about__copy">
          <p class="eyebrow">About Anilax</p>
          <h2>Your trusted <em>software development</em> company in India</h2>
          <p>We deliver high-performance digital solutions for startups, SMEs, and enterprises — custom software, FinTech products, ERP systems, and mobile apps built for real-world operations.</p>
          <div class="hero__actions">
            ${btn("/services", "View services", "solid")}
            ${btn("/portfolio", "See portfolio", "ghost")}
          </div>
        </div>
        <div class="about__stats">
          <div class="about__stat about__stat--year">
            <strong>2021</strong>
            <span>We're shipping since</span>
          </div>
          ${trustStats
            .map(
              (s) => `
            <div class="about__stat">
              <strong>${esc(s.n)}</strong>
              <span>${esc(s.l)}</span>
            </div>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        ${sectionHead({
          eyebrow: "Services",
          title: "What we develop",
          sub: "From custom software to FinTech rails — focused offerings with clear outcomes.",
          actions: btn("/services", "View all services", "text"),
        })}
        <div class="svc-grid">
          ${serviceCatalog
            .map(
              (s, i) => `
            <a class="svc" href="${s.href}" data-link style="--i:${i}">
              <span class="svc__icon" aria-hidden="true">${iconFor(s.title)}</span>
              <h3>${esc(s.title)}</h3>
              <p>${esc(s.sub)}</p>
              <span class="svc__go">Learn more →</span>
            </a>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section section--tint">
      <div class="wrap">
        ${sectionHead({
          eyebrow: "Industries",
          title: "Industries we power",
          sub: "Domain-ready patterns across the sectors where Anilax ships repeatedly.",
        })}
        <div class="ind-grid">
          ${industryCatalog
            .map(
              (s) => `
            <a class="ind" href="${s.href}" data-link>
              <span class="ind__icon" aria-hidden="true">${iconFor(s.title)}</span>
              <h3>${esc(s.title)}</h3>
              <p>${esc(s.sub)}</p>
            </a>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        ${sectionHead({
          eyebrow: "Case Studies",
          title: "Outcomes partners remember",
          sub: "Real delivery across payments, education, health, and logistics.",
          actions: btn("/case-studies", "All case studies", "text"),
        })}
        <div class="case-grid">
          ${caseStudies
            .slice(0, 3)
            .map(
              (c) => `
            <a class="case" href="${c.href}" data-link>
              <div class="case__media">
                <img src="${c.image}" alt="" loading="lazy" />
                <span class="case__float">${esc(c.result)}</span>
              </div>
              <div class="case__body">
                <span class="pill">${esc(c.tag)}</span>
                <h3>${esc(c.title)}</h3>
                <p>${esc(c.body)}</p>
              </div>
            </a>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section section--tint">
      <div class="wrap">
        ${sectionHead({
          eyebrow: "Process",
          title: "How we build",
          sub: "A clear path from discovery to launch — weekly demos, full code ownership.",
        })}
        <ol class="steps steps--light">
          ${processSteps
            .map(
              (s) => `
            <li>
              <span>${esc(s.n)}</span>
              <div>
                <h3>${esc(s.title)}</h3>
                <p>${esc(s.body)}</p>
              </div>
            </li>`
            )
            .join("")}
        </ol>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        ${sectionHead({
          eyebrow: "Pricing",
          title: "Transparent starting points",
          sub: "Final quotes follow discovery — these bands help you plan.",
          actions: btn("/pricing", "See pricing", "text"),
        })}
        <div class="price-grid">
          ${pricingTiers
            .map(
              (p) => `
            <article class="price${p.highlight ? " price--hot" : ""}">
              ${p.highlight ? `<span class="price__badge">Most chosen</span>` : ""}
              <h3>${esc(p.name)}</h3>
              <p class="price__amt">${esc(p.price)} <small>/ ${esc(p.unit)}</small></p>
              <p>${esc(p.blurb)}</p>
              <ul>${p.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
              ${btn(p.href, p.cta, p.highlight ? "solid" : "ghost")}
            </article>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section section--tint">
      <div class="wrap">
        ${sectionHead({
          eyebrow: "Blog",
          title: "Insights & updates",
          actions: btn("/blog", "All posts", "text"),
        })}
        <div class="blog-grid">
          ${blogPosts
            .map(
              (p) => `
            <a class="post" href="${p.href}" data-link>
              <span class="pill">${esc(p.tag)}</span>
              <h3>${esc(p.title)}</h3>
              <p>${esc(p.excerpt)}</p>
              <time>${esc(p.date)}</time>
            </a>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section section--cta">
      <div class="wrap cta-panel">
        <div>
          <p class="eyebrow">Free Consultation</p>
          <h2>Ready to build something that lasts?</h2>
          <p>Share your brief — a senior engineer replies with scope options and a realistic timeline.</p>
        </div>
        <div class="hero__actions">
          ${btn("/free-consultation", "Schedule a call", "solid")}
          ${btn("/start-project", "Start Your Project", "ghost")}
        </div>
      </div>
    </section>
  `;
}

function listingPage({ eyebrow, title, sub, items, kind = "svc" }) {
  return `
    <section class="page-hero">
      <div class="wrap page-hero__inner">
        <p class="eyebrow">${esc(eyebrow)}</p>
        <h1>${esc(title)}</h1>
        <p class="page-hero__sub">${esc(sub)}</p>
        <div class="hero__actions">
          ${btn("/free-consultation", "Free Consultation", "solid")}
          ${btn("/start-project", "Start Your Project", "ghost")}
        </div>
      </div>
    </section>
    <section class="section">
      <div class="wrap ${kind === "ind" ? "ind-grid" : "svc-grid"}">
        ${items
          .map(
            (s, i) => `
          <a class="${kind === "ind" ? "ind" : "svc"}" href="${s.href}" data-link style="--i:${i}">
            <span class="${kind === "ind" ? "ind__icon" : "svc__icon"}" aria-hidden="true">${iconFor(s.title)}</span>
            <h3>${esc(s.title)}</h3>
            <p>${esc(s.sub || s.body || "")}</p>
            <span class="svc__go">Explore →</span>
          </a>`
          )
          .join("")}
      </div>
    </section>
  `;
}

function servicePage(route, d) {
  return `
    <section class="page-hero">
      <div class="wrap page-hero__inner">
        <p class="eyebrow">${esc(d.eyebrow)}</p>
        <h1>${esc(d.title)}</h1>
        <p class="page-hero__sub">${esc(d.sub)}</p>
        <div class="hero__actions">
          ${btn(d.ctaPrimary.href, d.ctaPrimary.label, "solid")}
          ${btn(d.ctaSecondary.href, d.ctaSecondary.label, "ghost")}
        </div>
      </div>
    </section>
    <section class="section">
      <div class="wrap prose-split">
        <div>
          <p class="lead">${esc(d.lead)}</p>
          <h2>Challenges we remove</h2>
          <ul class="check-list">${d.challenges.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>
        </div>
        <aside class="side-panel">
          <h3>What you get</h3>
          <ul>${d.outcomes.map((o) => `<li>${esc(o)}</li>`).join("")}</ul>
          <h3>Modules</h3>
          <ul>${d.modules.map((m) => `<li>${esc(m)}</li>`).join("")}</ul>
        </aside>
      </div>
    </section>
  `;
}

function industryPage(route, d) {
  return `
    <section class="page-hero">
      <div class="wrap page-hero__inner">
        <p class="eyebrow">${esc(d.eyebrow)}</p>
        <h1>${esc(d.title)}</h1>
        <p class="page-hero__sub">${esc(d.sub)}</p>
        <div class="hero__actions">
          ${btn("/free-consultation", "Free Consultation", "solid")}
          ${btn("/start-project", "Start Your Project", "ghost")}
        </div>
      </div>
    </section>
    <section class="section">
      <div class="wrap prose-split">
        <div>
          <p class="lead">${esc(d.lead)}</p>
          <h2>Focus areas</h2>
          <ul class="check-list">${d.focus.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
        </div>
        <aside class="side-panel">
          <h3>Related services</h3>
          <ul>
                ${d.related
              .map((href) => {
                const s = serviceCatalog.find((x) => x.href === href);
                return s ? `<li><a href="${href}" data-link>${esc(s.title)}</a></li>` : "";
              })
              .join("")}

          </ul>
        </aside>
      </div>
    </section>
  `;
}

function caseStudyPage(route, d) {
  return `
    <section class="page-hero page-hero--media">
      <div class="wrap page-hero__inner">
        <p class="eyebrow">${esc(d.tag)}</p>
        <h1>${esc(d.title)}</h1>
        <p class="page-hero__sub">${esc(d.summary)}</p>
        <p class="result-chip">${esc(d.result)}</p>
      </div>
      <div class="page-hero__shot wrap"><img src="${d.image}" alt="" /></div>
    </section>
    <section class="section">
      <div class="wrap prose-split">
        <div>
          <h2>Challenge</h2>
          <p>${esc(d.challenge)}</p>
          <h2>Solution</h2>
          <p>${esc(d.solution)}</p>
        </div>
        <aside class="side-panel">
          <h3>Impact</h3>
          <ul>${d.impact.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
          ${btn("/start-project", "Start a similar project", "solid")}
        </aside>
      </div>
    </section>
  `;
}

function portfolioPage() {
  return `
    <section class="page-hero">
      <div class="wrap page-hero__inner">
        <p class="eyebrow">Portfolio</p>
        <h1>Selected work</h1>
        <p class="page-hero__sub">A visual index of products and platforms we have shipped.</p>
      </div>
    </section>
    <section class="section">
      <div class="wrap portfolio-grid">
        ${portfolio
          .map(
            (p) => `
          <a class="folio" href="${p.href}" data-link>
            <img src="${p.image}" alt="" loading="lazy" />
            <div>
              <span class="pill">${esc(p.tag)}</span>
              <h3>${esc(p.title)}</h3>
            </div>
          </a>`
          )
          .join("")}
      </div>
    </section>
  `;
}

function caseStudiesIndex() {
  return `
    <section class="page-hero">
      <div class="wrap page-hero__inner">
        <p class="eyebrow">Case Studies</p>
        <h1>Delivery stories</h1>
        <p class="page-hero__sub">How Anilax ships ERP, FinTech, SaaS, and ops platforms for Indian businesses.</p>
        <div class="hero__actions">
          ${btn("/free-consultation", "Free Consultation", "solid")}
          ${btn("/start-project", "Start Your Project", "ghost")}
        </div>
      </div>
    </section>
    <section class="section">
      <div class="wrap case-grid">
        ${caseStudies
          .map(
            (c) => `
          <a class="case" href="${c.href}" data-link>
            <div class="case__media"><img src="${c.image}" alt="" loading="lazy" /></div>
            <div class="case__body">
              <span class="pill">${esc(c.tag)}</span>
              <h3>${esc(c.title)}</h3>
              <p>${esc(c.body)}</p>
              <strong>${esc(c.result)}</strong>
            </div>
          </a>`
          )
          .join("")}
      </div>
    </section>
  `;
}

function pricingPage() {
  return `
    <section class="page-hero">
      <div class="wrap page-hero__inner">
        <p class="eyebrow">Pricing</p>
        <h1>Plans that match how you buy software</h1>
        <p class="page-hero__sub">Project builds or dedicated pods — discovery locks the final quote.</p>
      </div>
    </section>
    <section class="section">
      <div class="wrap price-grid">
        ${pricingTiers
          .map(
            (p) => `
          <article class="price${p.highlight ? " price--hot" : ""}">
            <h3>${esc(p.name)}</h3>
            <p class="price__amt">${esc(p.price)} <small>/ ${esc(p.unit)}</small></p>
            <p>${esc(p.blurb)}</p>
            <ul>${p.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
            ${btn(p.href, p.cta, p.highlight ? "solid" : "ghost")}
          </article>`
          )
          .join("")}
      </div>
    </section>
  `;
}

function blogIndex() {
  return `
    <section class="page-hero">
      <div class="wrap page-hero__inner">
        <p class="eyebrow">Blog</p>
        <h1>Notes from the build floor</h1>
        <p class="page-hero__sub">Practical writing on ERP, FinTech, SaaS, and shipping in India.</p>
      </div>
    </section>
    <section class="section">
      <div class="wrap blog-grid">
        ${blogPosts
          .map(
            (p) => `
          <a class="post" href="${p.href}" data-link>
            <span class="pill">${esc(p.tag)}</span>
            <h3>${esc(p.title)}</h3>
            <p>${esc(p.excerpt)}</p>
            <time>${esc(p.date)}</time>
          </a>`
          )
          .join("")}
      </div>
    </section>
  `;
}

function blogPage(route, d) {
  return `
    <section class="page-hero">
      <div class="wrap page-hero__inner">
        <p class="eyebrow">${esc(d.tag)} · ${esc(d.date)}</p>
        <h1>${esc(d.title)}</h1>
      </div>
    </section>
    <section class="section">
      <div class="wrap prose">
        ${d.body.map((p) => `<p>${esc(p)}</p>`).join("")}
        <div class="hero__actions" style="margin-top:2rem">
          ${btn("/free-consultation", "Discuss your project", "solid")}
        </div>
      </div>
    </section>
  `;
}

function consultationPage() {
  return `
    <section class="page-hero">
      <div class="wrap page-hero__inner">
        <p class="eyebrow">Free Consultation</p>
        <h1>A working session, not a pitch deck</h1>
        <p class="page-hero__sub">Bring goals, constraints, and rough budget — we return architecture options and a realistic timeline.</p>
      </div>
    </section>
    <section class="section">
      <div class="wrap form-layout">
        ${consultFormHtml()}
        <aside class="side-panel">
          <h3>What to expect</h3>
          <ul>
            <li>Response within 24 hours</li>
            <li>Senior engineer on the thread</li>
            <li>NDA available on request</li>
            <li>${esc(brand.hq)}</li>
          </ul>
          <p><a href="tel:${brand.phone}">${esc(brand.phone)}</a><br /><a href="mailto:${brand.email}">${esc(brand.email)}</a></p>
        </aside>
      </div>
    </section>
  `;
}

function startProjectPage() {
  return `
    <section class="page-hero page-hero--project">
      <div class="wrap page-hero__inner">
        <p class="eyebrow">Start Your Project</p>
        <h1>Send the brief. We will scope the build.</h1>
        <p class="page-hero__sub">MVP, ERP module, FinTech rail, or dedicated team — tell us what “done” looks like.</p>
      </div>
    </section>
    <section class="section">
      <div class="wrap form-layout">
        ${projectFormHtml()}
        <aside class="side-panel side-panel--project">
          <h3>Typical next steps</h3>
          <ul>
            <li>Scope call (30–45 min)</li>
            <li>Written proposal + timeline</li>
            <li>Kickoff & weekly demos</li>
          </ul>
          ${btn("/pricing", "Review pricing bands", "ghost")}
        </aside>
      </div>
    </section>
  `;
}

function legalPage(d) {
  return `
    <section class="page-hero">
      <div class="wrap page-hero__inner">
        <p class="eyebrow">Legal · Updated ${esc(d.updated)}</p>
        <h1>${esc(d.title)}</h1>
      </div>
    </section>
    <section class="section"><div class="wrap prose"><p>${esc(d.body)}</p></div></section>
  `;
}

function notFound() {
  return `
    <section class="page-hero">
      <div class="wrap page-hero__inner">
        <p class="eyebrow">404</p>
        <h1>Page not found</h1>
        <div class="hero__actions">${btn("/", "Back home", "solid")}</div>
      </div>
    </section>
  `;
}

export function renderPage(route) {
  if (route === "/") {
    setTitle(route);
    return homePage();
  }
  if (route === "/services") {
    setTitle(route, "Services");
    return listingPage({
      eyebrow: "Services",
      title: "Software capabilities",
      sub: "Custom development across ERP, FinTech, SaaS, AI, mobile, and APIs.",
      items: serviceCatalog,
    });
  }
  if (route === "/industries") {
    setTitle(route, "Industries");
    return listingPage({
      eyebrow: "Industries",
      title: "Industries we serve",
      sub: "Deep patterns where Anilax delivers repeatedly.",
      items: industryCatalog,
      kind: "ind",
    });
  }
  if (route === "/case-studies") {
    setTitle(route, "Case Studies");
    return caseStudiesIndex();
  }
  if (route === "/portfolio") {
    setTitle(route, "Portfolio");
    return portfolioPage();
  }
  if (route === "/pricing") {
    setTitle(route, "Pricing");
    return pricingPage();
  }
  if (route === "/blog") {
    setTitle(route, "Blog");
    return blogIndex();
  }
  if (route === "/free-consultation" || route === "/contact") {
    setTitle(route, "Free Consultation");
    return consultationPage();
  }
  if (route === "/start-project") {
    setTitle(route, "Start Your Project");
    return startProjectPage();
  }
  if (serviceDetails[route]) {
    setTitle(route, serviceDetails[route].title);
    return servicePage(route, serviceDetails[route]);
  }
  if (industryDetails[route]) {
    setTitle(route, industryDetails[route].title);
    return industryPage(route, industryDetails[route]);
  }
  if (caseStudyDetails[route]) {
    setTitle(route, caseStudyDetails[route].title);
    return caseStudyPage(route, caseStudyDetails[route]);
  }
  if (blogDetails[route]) {
    setTitle(route, blogDetails[route].title);
    return blogPage(route, blogDetails[route]);
  }
  if (legalPages[route]) {
    setTitle(route, legalPages[route].title);
    return legalPage(legalPages[route]);
  }
  // Soft redirects from old URLs
  if (route.startsWith("/stories/")) {
    const map = {
      "/stories/regional-bc-network": "/case-studies/regional-bc-network",
      "/stories/upi-wallet-app": "/case-studies/upi-wallet-app",
      "/stories/school-erp": "/case-studies/school-erp",
      "/stories/clinic-hms": "/case-studies/clinic-hms",
      "/stories/courier-fleet": "/case-studies/courier-fleet",
      "/stories/saas-api-platform": "/case-studies/saas-api-platform",
    };
    if (map[route] && caseStudyDetails[map[route]]) {
      setTitle(route, caseStudyDetails[map[route]].title);
      return caseStudyPage(map[route], caseStudyDetails[map[route]]);
    }
  }
  setTitle(route, "Not found");
  return notFound();
}
