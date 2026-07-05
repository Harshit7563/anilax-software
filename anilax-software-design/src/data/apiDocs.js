import {
  API_CATEGORIES,
  API_WEBHOOKS,
  API_STATS,
  API_FEATURES,
  PAYMENT_API_CATALOG,
  SMS_API_CATALOG,
  VERIFICATION_API_CATALOG,
  BBPS_API_CATALOG,
} from "./apiCatalog";
import { B2B_API_CATALOG } from "./b2bAeps";
import { B2C_API_CATALOG } from "./b2cApps";
import { ANILAX_AUTH_URL } from "../lib/anilaxAuth";
import { COMPANY_API_SANDBOX, COMPANY_API_V1 } from "./company";

export const DOCS_META = {
  title: "Developer Platform",
  productName: "Anilax Payments API",
  version: "2.0",
  description:
    "REST fintech APIs for B2B AePS, B2C payouts, payment gateway, SMS, KYC verification, BBPS, and custom rails — sandbox-first, webhook-driven, production-ready.",
  authUrl: ANILAX_AUTH_URL,
  baseUrl: COMPANY_API_V1,
  sandboxUrl: COMPANY_API_SANDBOX,
};

const CATALOG_BY_CATEGORY = {
  b2b: B2B_API_CATALOG,
  b2c: B2C_API_CATALOG,
  payment: PAYMENT_API_CATALOG,
  sms: SMS_API_CATALOG,
  verification: VERIFICATION_API_CATALOG,
  bbps: BBPS_API_CATALOG,
};

export const DOCS_QUICKSTART = [
  {
    step: "01",
    title: "Authenticate",
    desc: "Sign in, create sandbox keys, and store them server-side only.",
  },
  {
    step: "02",
    title: "Choose your rail",
    desc: "Pick Payments, AePS, SMS, Verification, or BBPS from the product sidebar.",
  },
  {
    step: "03",
    title: "Integrate in sandbox",
    desc: "Copy cURL or Node samples — every test call uses the sandbox base URL.",
  },
  {
    step: "04",
    title: "Webhooks & go live",
    desc: "Subscribe to events, pass UAT, switch to live keys, and reconcile settlements.",
  },
];

export const DOCS_SDK_LINKS = [
  { label: "Node.js SDK", href: "/sdks", desc: "npm install" },
  { label: "Python SDK", href: "/sdks", desc: "pip install" },
  { label: "API catalog", href: "/api", desc: "All products" },
  { label: "Get API keys", href: "/signup", desc: "Free sandbox" },
];

export function operationId(method, path) {
  return `${method.toLowerCase()}-${path.replace(/^\//, "").replace(/\//g, "-").replace(/[{}]/g, "")}`;
}

const SAMPLE_BODY = {
  amount: 50000,
  currency: "INR",
  customer_id: "cus_8f2a",
  metadata: { order_id: "ORD-991" },
};

const SAMPLE_RESPONSE = {
  id: "pay_7xk2m9",
  object: "payment",
  status: "succeeded",
  amount: 50000,
  currency: "INR",
  created_at: "2026-05-22T10:15:00Z",
};

function buildParams(api) {
  const pathParams = (api.path.match(/\{([^}]+)\}/g) || []).map((p) => ({
    name: p.slice(1, -1),
    in: "path",
    required: true,
    type: "string",
    description: `Unique ${p.slice(1, -1)} identifier`,
  }));

  const headers = [
    {
      name: "Authorization",
      in: "header",
      required: true,
      type: "string",
      description: "Bearer token — `Bearer sk_live_xxxx` or `sk_test_xxxx`",
    },
    {
      name: "Content-Type",
      in: "header",
      required: api.method !== "GET",
      type: "string",
      description: "application/json",
    },
  ];

  if (api.method === "POST" || api.method === "PUT") {
    headers.push({
      name: "Idempotency-Key",
      in: "header",
      required: false,
      type: "string",
      description: "Unique key for safe retries on payment and payout calls",
    });
  }

  const query =
    api.method === "GET"
      ? [
          {
            name: "limit",
            in: "query",
            required: false,
            type: "integer",
            description: "Max records per page (default 20, max 100)",
          },
          {
            name: "cursor",
            in: "query",
            required: false,
            type: "string",
            description: "Pagination cursor from previous response",
          },
        ]
      : [];

  return { pathParams, headers, query };
}

function slugFromLabel(label) {
  return label
    .toLowerCase()
    .replace(/\s+api$/i, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function inferMethod(label, explicit) {
  if (explicit) return explicit;
  const n = label.toLowerCase();
  if (
    n.includes("status") ||
    n.includes("fetch") ||
    n.includes("list") ||
    n.includes("enquiry") ||
    n.includes("statement")
  ) {
    return "GET";
  }
  return "POST";
}

function buildOperation(cat, item) {
  const title = item.type || item.name;
  const method = inferMethod(title, item.method);
  const path = item.path || `/v1/${cat.id}/${slugFromLabel(title)}`;
  const op = {
    method,
    path,
  };

  return {
    id: operationId(method, path),
    type: "operation",
    title,
    method,
    path,
    desc: item.useCase || item.desc || cat.tagline,
    tag: cat.title,
    ...buildParams(op),
    requestBody:
      method !== "GET"
        ? { required: true, schema: SAMPLE_BODY }
        : null,
    responses: [
      { status: 200, desc: "Success", example: SAMPLE_RESPONSE },
      {
        status: 400,
        desc: "Invalid request",
        example: { error: { code: "invalid_request", message: "..." } },
      },
      {
        status: 401,
        desc: "Unauthorized",
        example: { error: { code: "unauthorized", message: "Invalid API key" } },
      },
    ],
  };
}

export const DOCS_PRODUCTS = API_CATEGORIES.map((cat) => ({
  id: cat.id,
  icon: cat.icon,
  title: cat.title.replace(" APIs", ""),
  tagline: cat.tagline,
  desc: cat.desc,
  endpointCount:
    cat.id === "custom"
      ? cat.apis.length
      : (CATALOG_BY_CATEGORY[cat.id]?.length ?? 0),
}));

export const DOCS_PAGES = {
  overview: {
    id: "overview",
    title: "Overview",
    editor: {
      filename: "overview.md",
      lines: [
        { num: 1, parts: [{ t: "comment", v: "/**" }, { t: "title", v: " Anilax Payments API " }, { t: "comment", v: "*/" }] },
        { num: 2, parts: [] },
        {
          num: 3,
          parts: [
            { t: "muted", v: "* " },
            { t: "text", v: "REST resources with predictable URLs and JSON request bodies." },
          ],
        },
        {
          num: 4,
          parts: [
            { t: "muted", v: "* " },
            { t: "text", v: "Standard HTTP verbs: GET, POST, PUT, DELETE." },
          ],
        },
        { num: 5, parts: [] },
        {
          num: 6,
          parts: [
            { t: "keyword", v: "const " },
            { t: "name", v: "sandbox" },
            { t: "plain", v: " = " },
            { t: "bool", v: "true" },
            { t: "comment", v: "  // use sandbox base URL for integration tests" },
          ],
        },
        {
          num: 7,
          parts: [
            { t: "keyword", v: "const " },
            { t: "name", v: "production" },
            { t: "plain", v: " = " },
            { t: "bool", v: "false" },
            { t: "comment", v: "  // live keys activate settlement rails" },
          ],
        },
        { num: 8, parts: [] },
        {
          num: 9,
          parts: [
            { t: "keyword", v: "const " },
            { t: "name", v: "timestamps" },
            { t: "plain", v: " = " },
            { t: "string", v: '"ISO 8601 UTC"' },
          ],
        },
        {
          num: 10,
          parts: [
            { t: "keyword", v: "const " },
            { t: "name", v: "amounts" },
            { t: "plain", v: " = " },
            { t: "string", v: '"smallest currency unit (paise for INR)"' },
          ],
        },
      ],
      terminal: [
        { prompt: "$", cmd: "open " + DOCS_META.authUrl, output: DOCS_META.authUrl },
        { prompt: "$", cmd: "# sign in before any API request" },
        { prompt: "$", cmd: "export ANILAX_ENV=sandbox" },
        { prompt: "$", cmd: "echo $ANILAX_BASE_URL", output: DOCS_META.sandboxUrl },
        { prompt: "$", cmd: "export ANILAX_ENV=production" },
        { prompt: "$", cmd: "echo $ANILAX_BASE_URL", output: DOCS_META.baseUrl },
      ],
    },
  },
  authentication: {
    id: "authentication",
    title: "Authentication",
    content: [
      "Authenticate with a secret API key in the Authorization header. Never expose live keys in client-side code.",
      "Rotate keys from the dashboard or via the API Key Rotate endpoint without downtime.",
    ],
    example: `curl ${DOCS_META.sandboxUrl}/v1/payments \\
  -H "Authorization: Bearer sk_test_xxxx"`,
  },
  errors: {
    id: "errors",
    title: "Errors",
    content: [
      "Anilax uses conventional HTTP status codes. Errors return a JSON object with type, code, and message.",
    ],
    codes: [
      { status: 400, code: "invalid_request", desc: "Missing or invalid parameters" },
      { status: 401, code: "unauthorized", desc: "Invalid or missing API key" },
      { status: 403, code: "forbidden", desc: "Key lacks permission for this resource" },
      { status: 404, code: "not_found", desc: "Resource does not exist" },
      { status: 429, code: "rate_limited", desc: "Too many requests — back off and retry" },
      { status: 500, code: "api_error", desc: "Server error — retry with idempotency key" },
    ],
  },
  webhooks: {
    id: "webhooks",
    title: "Webhooks",
    content: [
      "Configure HTTPS endpoints to receive signed event payloads. Verify signatures with your webhook secret.",
    ],
    events: API_WEBHOOKS,
  },
};

export const DOCS_NAV = [
  {
    id: "getting-started",
    title: "Getting Started",
    items: [
      { id: "overview", type: "page", title: "Overview" },
      { id: "authentication", type: "page", title: "Authentication" },
      { id: "errors", type: "page", title: "Errors" },
      { id: "webhooks", type: "page", title: "Webhooks" },
    ],
  },
  ...API_CATEGORIES.map((cat) => {
    const items =
      cat.id === "custom"
        ? cat.apis.map((api) => buildOperation(cat, api))
        : (CATALOG_BY_CATEGORY[cat.id] || []).map((item) => buildOperation(cat, item));

    return {
      id: cat.id,
      title: cat.title.replace(" APIs", ""),
      items,
    };
  }).filter((group) => group.items.length > 0),
];

export function getFirstDocIdInGroup(groupId) {
  const group = DOCS_NAV.find((g) => g.id === groupId);
  return group?.items[0]?.id ?? null;
}

export { API_STATS, API_FEATURES };

export function findDocItem(id) {
  for (const group of DOCS_NAV) {
    const item = group.items.find((i) => i.id === id);
    if (item) return { group, item };
  }
  return null;
}

export function buildCurl(op) {
  const url = `${DOCS_META.sandboxUrl}${op.path.replace(/\{[^}]+\}/g, "example_id")}`;
  const lines = [
    `# Authenticate first: ${DOCS_META.authUrl}`,
    `curl -X ${op.method} ${url}`,
    `  -H "Authorization: Bearer sk_test_xxxx"`,
  ];
  if (op.method !== "GET") {
    lines.push(`  -H "Content-Type: application/json"`);
    lines.push(`  -H "Idempotency-Key: req_${Date.now()}"`);
    if (op.requestBody) {
      lines.push(`  -d '${JSON.stringify(op.requestBody.schema, null, 2)}'`);
    }
  }
  return lines.join(" \\\n");
}

export function buildNodeSample(op) {
  const path = op.path.replace(/\{([^}]+)\}/g, "${$1}");
  const authNote = `// Authenticate first: ${DOCS_META.authUrl}\n`;
  if (op.method === "GET") {
    return `${authNote}const res = await fetch(\`${DOCS_META.sandboxUrl}${path}\`, {
  headers: { Authorization: "Bearer sk_test_xxxx" },
});
const data = await res.json();`;
  }
  return `${authNote}const res = await fetch(\`${DOCS_META.sandboxUrl}${path}\`, {
  method: "${op.method}",
  headers: {
    Authorization: "Bearer sk_test_xxxx",
    "Content-Type": "application/json",
    "Idempotency-Key": "req_unique",
  },
  body: JSON.stringify(${JSON.stringify(op.requestBody?.schema ?? {}, null, 2)}),
});
const data = await res.json();`;
}

export const ALL_DOC_IDS = [
  "overview",
  ...DOCS_NAV.flatMap((g) => g.items.map((i) => i.id)),
];
