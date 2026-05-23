const CATEGORY_INDUSTRY = {
  b2b: "B2B / AePS & Payments",
  b2c: "B2C / Consumer Apps",
  payment: "Fintech & Banking",
  sms: "Fintech & Banking",
  verification: "Fintech & Banking",
  bbps: "Fintech & Banking",
  custom: "Enterprise / SaaS",
};

export function buildApiAccessRequirement({
  apiName,
  categoryTitle,
  categoryId,
  path,
  method,
}) {
  const lines = [
    `API requested: ${apiName}`,
    categoryTitle ? `Category: ${categoryTitle}` : null,
    path ? `Endpoint: ${method ?? "POST"} ${path}` : null,
    "",
    "Please share sandbox access, pricing, integration docs, and go-live timeline.",
  ].filter((line) => line !== null);

  return lines.join("\n");
}

export function getIndustryForApiCategory(categoryId) {
  if (!categoryId) return "";
  return CATEGORY_INDUSTRY[categoryId] ?? "Fintech & Banking";
}

export function formStateFromPrefill(prefill) {
  if (!prefill?.apiName) {
    return { name: "", email: "", industry: "", requirement: "" };
  }

  return {
    name: "",
    email: "",
    industry: getIndustryForApiCategory(prefill.categoryId),
    requirement: buildApiAccessRequirement(prefill),
  };
}
