import { brand } from "./data/anilax.js";
import { allDetails } from "./data/details.js";
import { contentPages } from "./data/sitePages.js";
import { buildFullBriefChapters } from "./data/productBriefs.js";

export { brand };

function slugify(route) {
  return String(route || "anilax")
    .replace(/^\//, "")
    .replace(/\//g, "-")
    .replace(/[^a-zA-Z0-9_-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "") || "anilax-product";
}

/** Full 10+ page client brief for any product/service/industry/work page */
export function getPdfSpec(route) {
  const detail = allDetails[route];
  const page = contentPages[route];
  if (!detail && !page) return null;

  const brief = buildFullBriefChapters({ route, detail, page });
  return {
    route,
    eyebrow: brief.eyebrow,
    title: brief.title,
    sub: brief.sub,
    chapters: brief.chapters,
    filename: `anilax-${slugify(route)}-product-brief.pdf`,
  };
}

export function hasProductPdf(route) {
  return Boolean(getPdfSpec(route));
}

export function pdfActionsHtml(route) {
  if (!hasProductPdf(route)) return "";
  return `
    <div class="pdf-cta" data-pdf-panel>
      <div class="pdf-cta__copy">
        <p class="kicker">PRODUCT BRIEF</p>
        <h2>Download the full detailing PDF</h2>
        <p>A 10+ page client brief for this offering — market context, capabilities, architecture, roadmap, FAQ, and next steps. View online or save to your device.</p>
      </div>
      <div class="pdf-cta__actions">
        <button type="button" class="btn btn--blue" data-pdf-view="${route}">
          <span>View PDF</span><span aria-hidden="true">View PDF</span>
        </button>
        <button type="button" class="btn btn--ghost" data-pdf-download="${route}">
          <span>Download PDF</span><span aria-hidden="true">Download PDF</span>
        </button>
      </div>
    </div>`;
}
