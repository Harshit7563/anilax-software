import { describe, expect, it } from "vitest";
import { FOOTER_ROUTES } from "../data/footerLinks.js";
import {
  getAllSoftwareProductIds,
  getSoftwareProduct,
} from "../data/softwareProductDetail.js";
import { CHANGELOG_ENTRIES } from "../data/changelog.js";
import { STATUS_SERVICES } from "../data/statusPage.js";
import { COMPANY_AUTH_PATH } from "../data/company.js";

describe("footer routes", () => {
  it("points Status and Changelog to dedicated pages", () => {
    expect(FOOTER_ROUTES.Status).toBe("/status");
    expect(FOOTER_ROUTES.Changelog).toBe("/changelog");
  });
});

describe("auth portal path", () => {
  it("uses /auth on the same site", () => {
    expect(COMPANY_AUTH_PATH).toBe("/auth");
  });
});

describe("software product catalog", () => {
  it("returns rich detail for every catalog product", () => {
    const ids = getAllSoftwareProductIds();
    expect(ids.length).toBeGreaterThanOrEqual(68);

    for (const id of ids) {
      const product = getSoftwareProduct(id);
      expect(product, id).toBeTruthy();
      expect(product.highlights.length).toBeGreaterThan(0);
      expect(product.useCases.length).toBeGreaterThanOrEqual(3);
      expect(product.faq.length).toBeGreaterThanOrEqual(5);
      const introText = product.safeIntro.paragraphs.join(" ");
      expect(introText).toMatch(new RegExp(product.title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    }
  });
});

describe("platform pages data", () => {
  it("has status services and changelog entries", () => {
    expect(STATUS_SERVICES.length).toBeGreaterThanOrEqual(4);
    expect(CHANGELOG_ENTRIES.length).toBeGreaterThanOrEqual(3);
    expect(CHANGELOG_ENTRIES[0].highlights.length).toBeGreaterThan(0);
  });
});
