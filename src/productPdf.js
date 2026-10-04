import { jsPDF } from "jspdf";
import { brand, getPdfSpec } from "./pdfSpec.js";

function drawWrapped(doc, text, x, y, maxWidth, lineHeight) {
  const lines = doc.splitTextToSize(String(text || ""), maxWidth);
  doc.text(lines, x, y);
  return y + lines.length * lineHeight;
}

function drawFooter(doc, pageW, pageH, margin, page, total, shortTitle) {
  doc.setDrawColor(230, 230, 235);
  doc.setLineWidth(0.5);
  doc.line(margin, pageH - 36, pageW - margin, pageH - 36);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(140, 140, 150);
  const left = `${brand.name} · ${String(shortTitle || "Product brief").slice(0, 42)}`;
  doc.text(left, margin, pageH - 22);
  doc.text(`Page ${page} / ${total}`, pageW - margin, pageH - 22, { align: "right" });
}

function newContentPage(doc, margin) {
  doc.addPage();
  return margin;
}

export async function buildProductPdf(route) {
  const spec = getPdfSpec(route);
  if (!spec?.chapters?.length) throw new Error("No PDF available for this page");

  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 52;
  const maxW = pageW - margin * 2;
  const bottom = pageH - 52;
  let y = margin;

  const ensure = (need) => {
    if (y + need > bottom) y = newContentPage(doc, margin);
  };

  const writeParas = (paras = []) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10.5);
    doc.setTextColor(45, 45, 55);
    for (const p of paras.filter(Boolean)) {
      ensure(48);
      y = drawWrapped(doc, p, margin, y, maxW, 15);
      y += 10;
    }
  };

  const writeBullets = (bullets = []) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10.5);
    doc.setTextColor(45, 45, 55);
    for (const b of bullets.filter(Boolean)) {
      ensure(36);
      const wrapped = doc.splitTextToSize(`•  ${b}`, maxW);
      doc.text(wrapped, margin, y);
      y += wrapped.length * 14 + 4;
    }
  };

  const writeHeading = (title) => {
    ensure(70);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(18, 18, 24);
    y = drawWrapped(doc, title, margin, y, maxW, 20);
    y += 8;
    doc.setDrawColor(46, 81, 255);
    doc.setLineWidth(1.5);
    doc.line(margin, y, margin + 48, y);
    y += 18;
  };

  for (let i = 0; i < spec.chapters.length; i++) {
    const ch = spec.chapters[i];
    if (i > 0) y = newContentPage(doc, margin);

    if (ch.type === "cover") {
      doc.setFillColor(5, 5, 5);
      doc.rect(0, 0, pageW, pageH, "F");
      doc.setFillColor(46, 81, 255);
      doc.rect(0, 0, 10, pageH, "F");

      doc.setTextColor(160, 165, 180);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.text(brand.name.toUpperCase(), margin + 12, 72);
      doc.setFontSize(10);
      doc.text(String(ch.eyebrow || "PRODUCT BRIEF").toUpperCase(), margin + 12, 92);

      doc.setTextColor(255, 255, 255);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(28);
      y = drawWrapped(doc, ch.title, margin + 12, 150, maxW - 12, 34);

      if (ch.sub) {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(13);
        doc.setTextColor(190, 195, 210);
        y += 16;
        y = drawWrapped(doc, ch.sub, margin + 12, y, maxW - 12, 18);
      }

      doc.setFontSize(10);
      doc.setTextColor(140, 145, 160);
      let metaY = pageH - 120;
      for (const m of ch.meta || []) {
        doc.text(m, margin + 12, metaY);
        metaY += 16;
      }
      doc.setTextColor(46, 81, 255);
      doc.text("10+ page client detailing brief", margin + 12, pageH - 56);
      continue;
    }

    if (ch.type === "toc") {
      writeHeading(ch.title);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      doc.setTextColor(35, 35, 45);
      for (const item of ch.items || []) {
        ensure(28);
        doc.text(item, margin, y);
        y += 22;
      }
      y += 20;
      writeParas([
        "This document is prepared for evaluation purposes. Final scope, commercials, and timelines are confirmed after discovery.",
      ]);
      continue;
    }

    if (ch.type === "closing") {
      writeHeading(ch.title);
      writeParas(ch.paras);
      y += 6;
      writeBullets(ch.bullets);

      ensure(100);
      y += 16;
      doc.setFillColor(17, 17, 19);
      doc.roundedRect(margin, y, maxW, 88, 8, 8, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(13);
      doc.text("Talk to Anilax Software", margin + 18, y + 28);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(200, 200, 210);
      doc.text(brand.email, margin + 18, y + 48);
      doc.text(`${brand.phone}  ·  ${brand.hq}`, margin + 18, y + 66);
      continue;
    }

    // standard section / qa
    writeHeading(ch.title);
    writeParas(ch.paras);
    if (ch.bullets?.length) {
      y += 4;
      writeBullets(ch.bullets);
    }
    if (ch.qa?.length) {
      y += 8;
      for (const f of ch.qa) {
        ensure(56);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10.5);
        doc.setTextColor(25, 25, 35);
        y = drawWrapped(doc, `Q: ${f.q}`, margin, y, maxW, 14);
        y += 4;
        doc.setFont("helvetica", "normal");
        doc.setTextColor(55, 55, 65);
        y = drawWrapped(doc, `A: ${f.a}`, margin, y, maxW, 14);
        y += 12;
      }
    }
  }

  // Guarantee at least 10 pages with appendix if somehow short
  while (doc.getNumberOfPages() < 10) {
    y = newContentPage(doc, margin);
    writeHeading("Appendix — Delivery standards");
    writeParas([
      `Additional standards Anilax applies when delivering ${spec.title}.`,
      "We document decisions, keep staging environments current, and hand over repositories that your team can run without us.",
    ]);
    writeBullets([
      "Weekly demos with written progress notes",
      "Staging URL access for stakeholders",
      "Issue tracker shared with your team",
      "Definition of done per milestone",
      "Security checklist before production",
      "Runbooks for common operational tasks",
      "Knowledge transfer sessions recorded when requested",
      "Post-launch hypercare window available",
    ]);
  }

  const total = doc.getNumberOfPages();
  for (let i = 1; i <= total; i++) {
    doc.setPage(i);
    // skip heavy footer on cover
    if (i === 1) continue;
    drawFooter(doc, pageW, pageH, margin, i, total, spec.title);
  }

  return { doc, filename: spec.filename, title: spec.title, pages: total };
}

export async function viewProductPdf(route) {
  const { doc, title, filename } = await buildProductPdf(route);
  const blob = doc.output("blob");
  const url = URL.createObjectURL(blob);
  const win = window.open(url, "_blank", "noopener,noreferrer");
  if (!win) {
    doc.save(filename);
  } else {
    try {
      win.document.title = title;
    } catch {
      /* ignore */
    }
    setTimeout(() => URL.revokeObjectURL(url), 120_000);
  }
}

export async function downloadProductPdf(route) {
  const { doc, filename } = await buildProductPdf(route);
  doc.save(filename);
}
