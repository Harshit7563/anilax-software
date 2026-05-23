import { API_CATEGORIES, API_WEBHOOKS } from "./apiCatalog";
import { ANILAX_AUTH_URL } from "../lib/anilaxAuth";

export const DOCS_META = {
  title: "Anilax Payments API",
  version: "1.0.0",
  description:
    "RESTful fintech APIs for B2B, B2C, payments, SMS, verification, BBPS, and custom integrations. JSON over HTTPS with signed webhooks.",
  authUrl: ANILAX_AUTH_URL,
  baseUrl: "https://api.anilaxpayments.com",
  sandboxUrl: "https://sandbox.api.anilaxpayments.com",
};

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
  ...API_CATEGORIES.map((cat) => ({
    id: cat.id,
    title: cat.title.replace(" APIs", ""),
    items: cat.apis.map((api) => ({
      id: operationId(api.method, api.path),
      type: "operation",
      title: api.name,
      method: api.method,
      path: api.path,
      desc: api.desc,
      tag: cat.title,
      ...buildParams(api),
      requestBody:
        api.method === "POST" || api.method === "PUT"
          ? { required: true, schema: SAMPLE_BODY }
          : null,
      responses: [
        { status: 200, desc: "Success", example: SAMPLE_RESPONSE },
        { status: 400, desc: "Invalid request", example: { error: { code: "invalid_request", message: "..." } } },
        { status: 401, desc: "Unauthorized", example: { error: { code: "unauthorized", message: "Invalid API key" } } },
      ],
    })),
  })),
];

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
