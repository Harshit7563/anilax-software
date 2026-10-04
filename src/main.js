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

function closeAllModals(root = app) {
  root.querySelector("[data-consult-modal]")?.setAttribute("hidden", "");
  root.querySelector("[data-project-modal]")?.setAttribute("hidden", "");
  const consult = root.querySelector("[data-consult-modal]");
  const project = root.querySelector("[data-project-modal]");
  if (consult) consult.hidden = true;
  if (project) project.hidden = true;
  document.body.classList.remove("modal-open");
}

let dropdownPinnedId = null;
let dropdownLeaveTimer = null;

function closeAllDropdowns(root = app) {
  clearTimeout(dropdownLeaveTimer);
  dropdownLeaveTimer = null;
  dropdownPinnedId = null;
  root?.querySelectorAll("[data-panel].is-open").forEach((p) => p.classList.remove("is-open"));
  root?.querySelectorAll("[data-dd].is-open").forEach((d) => d.classList.remove("is-open"));
  root?.querySelectorAll("[data-dropdown]").forEach((b) => b.setAttribute("aria-expanded", "false"));
}

function prepModalOpen(root) {
  closeAllDropdowns(root);
  root.querySelector("[data-nav]")?.classList.remove("is-open");
  closeAllModals(root);
}

function openConsultModal(root = app) {
  const modal = root.querySelector("[data-consult-modal]");
  if (!modal) return;
  prepModalOpen(root);
  modal.hidden = false;
  document.body.classList.add("modal-open");
  window.setTimeout(() => modal.querySelector('input[name="name"]')?.focus(), 40);
}

function syncBodyModalLock(root = app) {
  const open =
    !root.querySelector("[data-consult-modal]")?.hidden ||
    !root.querySelector("[data-project-modal]")?.hidden;
  document.body.classList.toggle("modal-open", Boolean(open));
}

function closeConsultModal(root = app) {
  const modal = root.querySelector("[data-consult-modal]");
  if (!modal) return;
  modal.hidden = true;
  syncBodyModalLock(root);
}

function openProjectModal(root = app) {
  const modal = root.querySelector("[data-project-modal]");
  if (!modal) return;
  prepModalOpen(root);
  modal.hidden = false;
  document.body.classList.add("modal-open");
  window.setTimeout(() => modal.querySelector('input[name="name"]')?.focus(), 40);
}

function closeProjectModal(root = app) {
  const modal = root.querySelector("[data-project-modal]");
  if (!modal) return;
  modal.hidden = true;
  syncBodyModalLock(root);
}

function mount() {
  if (window.__anilaxRotateTimer) {
    clearInterval(window.__anilaxRotateTimer);
    window.__anilaxRotateTimer = null;
  }
  clearTimeout(dropdownLeaveTimer);
  dropdownLeaveTimer = null;
  dropdownPinnedId = null;
  const route = path();
  const forceConsult = route === "/free-consultation" || route === "/contact";
  const forceProject = route === "/start-project";
  const viewRoute = forceConsult || forceProject ? "/" : route;
  if (forceConsult || forceProject) history.replaceState({}, "", "/");
  app.innerHTML = renderShell(viewRoute, renderPage(viewRoute));
  bind(app);
  if (forceConsult || window.__anilaxOpenConsult) {
    window.__anilaxOpenConsult = false;
    openConsultModal(app);
  } else if (forceProject || window.__anilaxOpenProject) {
    window.__anilaxOpenProject = false;
    openProjectModal(app);
  }
}

function bind(root) {
  root.querySelectorAll("a[data-link]").forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
      if (href.startsWith("#")) return;
      if (href === "/free-consultation" || href === "/contact") {
        e.preventDefault();
        openConsultModal(root);
        return;
      }
      if (href === "/start-project") {
        e.preventDefault();
        openProjectModal(root);
        return;
      }
      e.preventDefault();
      navigate(href);
    });
  });

  root.querySelectorAll("[data-consult-open]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      openConsultModal(root);
    });
  });

  root.querySelectorAll("[data-consult-close]").forEach((el) => {
    el.addEventListener("click", () => closeConsultModal(root));
  });

  root.querySelectorAll("[data-project-open]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      openProjectModal(root);
    });
  });

  root.querySelectorAll("[data-project-close]").forEach((el) => {
    el.addEventListener("click", () => closeProjectModal(root));
  });

  root.querySelector("[data-consult-modal]")?.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeConsultModal(root);
  });

  root.querySelector("[data-project-modal]")?.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeProjectModal(root);
  });

  root.querySelectorAll("[data-menu-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      root.querySelector("[data-nav]")?.classList.toggle("is-open");
    });
  });

  function canHoverDropdowns() {
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  }

  function openDropdown(id) {
    root.querySelectorAll("[data-panel]").forEach((p) => {
      const on = p.getAttribute("data-panel") === id;
      p.classList.toggle("is-open", on);
    });
    root.querySelectorAll("[data-dd]").forEach((d) => {
      const btn = d.querySelector("[data-dropdown]");
      const on = btn?.getAttribute("data-dropdown") === id;
      d.classList.toggle("is-open", on);
      btn?.setAttribute("aria-expanded", on ? "true" : "false");
    });
  }

  function scheduleDropdownClose() {
    clearTimeout(dropdownLeaveTimer);
    dropdownLeaveTimer = window.setTimeout(() => {
      if (dropdownPinnedId) {
        openDropdown(dropdownPinnedId);
        return;
      }
      closeAllDropdowns(root);
    }, 220);
  }

  function cancelDropdownClose() {
    clearTimeout(dropdownLeaveTimer);
    dropdownLeaveTimer = null;
  }

  root.querySelectorAll("[data-dropdown]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.getAttribute("data-dropdown");
      const panel = root.querySelector(`[data-panel="${id}"]`);
      const isOpen = panel?.classList.contains("is-open");
      if (isOpen && dropdownPinnedId === id) {
        closeAllDropdowns(root);
        return;
      }
      dropdownPinnedId = id;
      openDropdown(id);
    });
  });

  root.querySelectorAll("[data-dd]").forEach((dd) => {
    const id = dd.querySelector("[data-dropdown]")?.getAttribute("data-dropdown");
    const panel = dd.querySelector("[data-panel]");

    const onEnter = () => {
      if (!canHoverDropdowns() || !id) return;
      cancelDropdownClose();
      openDropdown(id);
    };

    const onLeave = () => {
      if (!canHoverDropdowns()) return;
      scheduleDropdownClose();
    };

    dd.addEventListener("mouseenter", onEnter);
    dd.addEventListener("mouseleave", onLeave);
    // fixed mega panel is outside the nav button box — track it too
    panel?.addEventListener("mouseenter", onEnter);
    panel?.addEventListener("mouseleave", onLeave);
  });

  if (window.__anilaxDdClose) document.removeEventListener("click", window.__anilaxDdClose);
  window.__anilaxDdClose = (e) => {
    if (e.target.closest?.("[data-dd]") || e.target.closest?.("[data-panel]")) return;
    closeAllDropdowns(root);
  };
  document.addEventListener("click", window.__anilaxDdClose);

  if (window.__anilaxDdEsc) document.removeEventListener("keydown", window.__anilaxDdEsc);
  window.__anilaxDdEsc = (e) => {
    if (e.key === "Escape") closeAllDropdowns(root);
  };
  document.addEventListener("keydown", window.__anilaxDdEsc);

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
        const kind = form.getAttribute("data-form-kind");
        if (note) {
          note.hidden = false;
          note.textContent =
            kind === "consult"
              ? "Consultation request sent — we’ll call you soon."
              : "Project brief sent — we’ll reply with next steps.";
        }
        if (form.closest("[data-consult-modal]")) {
          window.setTimeout(() => closeConsultModal(root), 1600);
        }
        if (form.closest("[data-project-modal]")) {
          window.setTimeout(() => closeProjectModal(root), 1600);
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

  const rotate = root.querySelector("[data-rotate]");
  if (rotate) {
    const words = (rotate.getAttribute("data-rotate") || "").split("|").filter(Boolean);
    const wordEl = rotate.querySelector("[data-rotate-word]");
    let idx = 0;
    if (words.length > 1 && wordEl) {
      window.__anilaxRotateTimer = window.setInterval(() => {
        idx = (idx + 1) % words.length;
        wordEl.classList.add("is-out");
        window.setTimeout(() => {
          wordEl.textContent = words[idx];
          wordEl.classList.remove("is-out");
          wordEl.classList.add("is-in");
          window.setTimeout(() => wordEl.classList.remove("is-in"), 350);
        }, 220);
      }, 2600);
    }
  }

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
      ".hero__copy, .hero__visual, .tech-row, .show, .about__copy, .about__stat, .section__head, .svc, .ind, .case, .steps li, .price, .post, .folio, .cta-panel, .contact-card, .side-panel, .page-hero__inner, .prose-split, .form-layout"
    )
    .forEach((el, i) => {
      el.classList.add("reveal");
      el.style.setProperty("--d", `${Math.min(i % 6, 5) * 50}ms`);
      io.observe(el);
    });
}

function bindNavScroll() {
  const onScroll = () => {
    document.querySelector("[data-nav]")?.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

window.addEventListener("popstate", mount);
mount();
bindNavScroll();

export { navigate };
