import { renderShell } from "./shell.js";
import { renderPage } from "./pages.js";
import { startGalaxyFavicon } from "./galaxyFavicon.js";

const app = document.getElementById("app");
startGalaxyFavicon();

function formToObject(form) {
  const data = new FormData(form);
  const out = {};
  for (const [key, value] of data.entries()) {
    out[key] = String(value || "").trim();
  }
  return out;
}

async function sendEnquiryViaApi(form) {
  const payload = formToObject(form);
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok || !json.ok) {
    throw new Error(json.error || "WhatsApp send failed");
  }
  return json;
}

function path() {
  return window.location.pathname.replace(/\/$/, "") || "/";
}

function navigate(to, { replace = false } = {}) {
  if (replace) history.replaceState({}, "", to);
  else history.pushState({}, "", to);
  mount();
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

function mount() {
  const route = path();
  app.innerHTML = renderShell(route, renderPage(route));
  bind(app);
}

function bind(root) {
  root.querySelectorAll("a[data-link]").forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
      if (href.startsWith("#")) return;
      e.preventDefault();
      navigate(href);
    });
  });

  root.querySelectorAll("[data-menu-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      root.querySelector("[data-nav]")?.classList.toggle("is-open");
    });
  });

  root.querySelectorAll("[data-dropdown]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.getAttribute("data-dropdown");
      root.querySelectorAll("[data-panel]").forEach((p) => {
        if (p.getAttribute("data-panel") !== id) p.classList.remove("is-open");
      });
      root.querySelector(`[data-panel="${id}"]`)?.classList.toggle("is-open");
    });
  });

  document.addEventListener(
    "click",
    () => root.querySelectorAll("[data-panel].is-open").forEach((p) => p.classList.remove("is-open")),
    { once: true }
  );

  root.querySelectorAll("[data-faq]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      const open = item.classList.contains("is-open");
      root.querySelectorAll(".faq__item.is-open").forEach((el) => el.classList.remove("is-open"));
      if (!open) item.classList.add("is-open");
    });
  });

  const tabs = root.querySelector("[data-price-tabs]");
  tabs?.querySelectorAll("[data-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      tabs.querySelectorAll("[data-tab]").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const key = btn.getAttribute("data-tab");
      root.querySelectorAll("[data-price]").forEach((el) => {
        const val = el.getAttribute(`data-${key}`);
        if (val != null) el.textContent = val;
      });
      root.querySelectorAll("[data-unit]").forEach((el) => {
        const val = el.getAttribute(`data-${key}`);
        if (val != null) el.textContent = val;
      });
    });
  });

  const docsRails = root.querySelector("[data-docs-rails]");
  docsRails?.querySelectorAll("[data-rail]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-rail");
      docsRails.querySelectorAll("[data-rail]").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      docsRails.querySelectorAll("[data-rail-panel]").forEach((panel) => {
        panel.hidden = panel.getAttribute("data-rail-panel") !== id;
      });
    });
  });

  const sdkQuick = root.querySelector("[data-sdk-quick]");
  sdkQuick?.querySelectorAll("[data-sdk-lang]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-sdk-lang");
      sdkQuick.querySelectorAll("[data-sdk-lang]").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      sdkQuick.querySelectorAll("[data-sdk-panel]").forEach((panel) => {
        panel.hidden = panel.getAttribute("data-sdk-panel") !== id;
      });
    });
  });

  const changelog = root.querySelector("[data-changelog]");
  changelog?.querySelectorAll("[data-cl-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-cl-filter");
      changelog.querySelectorAll("[data-cl-filter]").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      changelog.querySelectorAll("[data-cl-item]").forEach((item) => {
        const tag = item.getAttribute("data-cl-item");
        item.hidden = id !== "all" && tag !== id;
      });
    });
  });

  const scroller = root.querySelector("[data-quotes]");
  root.querySelector("[data-q-prev]")?.addEventListener("click", () => {
    scroller?.scrollBy({ left: -340, behavior: "smooth" });
  });
  root.querySelector("[data-q-next]")?.addEventListener("click", () => {
    scroller?.scrollBy({ left: 340, behavior: "smooth" });
  });

  async function runPdfAction(btn, mode) {
    const route = btn.getAttribute(mode === "view" ? "data-pdf-view" : "data-pdf-download");
    if (!route) return;
    const labelEls = btn.querySelectorAll("span");
    const prev = labelEls[0]?.textContent || "";
    btn.disabled = true;
    labelEls.forEach((el) => {
      el.textContent = mode === "view" ? "Opening…" : "Preparing…";
    });
    try {
      const { viewProductPdf, downloadProductPdf } = await import("./productPdf.js");
      if (mode === "view") await viewProductPdf(route);
      else await downloadProductPdf(route);
    } catch (err) {
      console.error(err);
      alert(err.message || "Could not create PDF");
    } finally {
      btn.disabled = false;
      labelEls.forEach((el) => {
        el.textContent = prev;
      });
    }
  }

  root.querySelectorAll("[data-pdf-view]").forEach((btn) => {
    btn.addEventListener("click", () => runPdfAction(btn, "view"));
  });
  root.querySelectorAll("[data-pdf-download]").forEach((btn) => {
    btn.addEventListener("click", () => runPdfAction(btn, "download"));
  });

  root.querySelectorAll("[data-contact-form]").forEach((form) => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const note = form.querySelector("[data-form-note]");
      const submitBtn = form.querySelector('button[type="submit"]');
      const isEnquiry = Boolean(form.querySelector('[name="message"]'));

      if (!isEnquiry) {
        if (note) note.hidden = false;
        form.reset();
        return;
      }

      const prevLabel = submitBtn?.querySelector("span")?.textContent;
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.querySelectorAll("span").forEach((el) => {
          el.textContent = "Sending…";
        });
      }
      if (note) {
        note.hidden = true;
        note.classList.remove("is-error");
      }

      try {
        await sendEnquiryViaApi(form);
        form.reset();
        if (note) {
          note.hidden = false;
          note.textContent = "Your requirement has been sent to WhatsApp.";
        }
      } catch (err) {
        if (note) {
          note.hidden = false;
          note.classList.add("is-error");
          note.textContent =
            err.message?.includes("missing") || err.message?.includes("WHATSAPP_")
              ? "WhatsApp API setup pending — add credentials in .env, then restart the server."
              : `Could not send: ${err.message || "please try again"}`;
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.querySelectorAll("span").forEach((el) => {
            el.textContent = prevLabel || "Send requirement";
          });
        }
      }
    });
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
  );
  root
    .querySelectorAll(
      ".hero__inner, .hero__cards, .band__inner, .section__head, .svc-list__item, .work, .step, .bento__card, .quote, .plan, .faq__item, .post, .table-wrap, .contact-card, .info-card, .page-hero__inner, .prose-card, .login__panel, .login__side"
    )
    .forEach((el, i) => {
      el.classList.add("reveal");
      el.style.setProperty("--d", `${Math.min(i % 6, 5) * 50}ms`);
      io.observe(el);
    });
}

window.addEventListener("popstate", mount);
mount();

export { navigate };
