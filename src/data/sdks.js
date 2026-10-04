/** Official SDKs page content */

export const sdksPageData = {
  eyebrow: "DEVELOPER TOOLS · SDKS",
  title: "Ship faster with official SDKs",
  sub: "Typed clients, built-in retries, webhook verification, and sandbox switching — ship UPI, AePS, wallets, and payouts without hand-rolling HTTP.",
  productionUrl: "https://anilaxsoftware.com/api/v1",
  sandboxUrl: "https://anilaxsoftware.com/api/sandbox/v1",
  stats: [
    { n: "8", l: "Official SDKs" },
    { n: "2.4.x", l: "Latest stable line" },
    { n: "OpenAPI 3", l: "Spec included" },
    { n: "MIT", l: "Client library license" },
  ],
  features: [
    {
      title: "Typed resources",
      body: "Payments, payouts, wallets, AePS, SMS, and verification as typed methods — autocomplete in VS Code and IntelliJ.",
    },
    {
      title: "Auto retries",
      body: "Configurable exponential backoff on 429 and 5xx, with idempotency key forwarding on POST.",
    },
    {
      title: "Webhook helpers",
      body: "Verify HMAC signatures and parse event payloads in one call — no custom crypto boilerplate.",
    },
    {
      title: "Sandbox switch",
      body: "Set environment: sandbox | production once — base URL and keys resolve automatically.",
    },
  ],
  quickstarts: [
    {
      id: "node",
      label: "Node.js",
      install: "npm install @anilaxpayments/sdk",
      code: `import { Anilax } from '@anilaxpayments/sdk';

const anilax = new Anilax({
  apiKey: process.env.ANILAX_SECRET_KEY,
  environment: 'sandbox', // sandbox | production
});

const payment = await anilax.payments.create({
  amount: 50000,
  currency: 'INR',
  method: 'upi',
  customer_id: 'cus_8f2a',
  metadata: { order_id: 'ORD-991' },
});

console.log(payment.id, payment.status);`,
    },
    {
      id: "python",
      label: "Python",
      install: "pip install anilaxpayments",
      code: `import os
from anilaxpayments import Anilax

client = Anilax(
    api_key=os.environ["ANILAX_SECRET_KEY"],
    environment="sandbox",
)

payment = client.payments.create(
    amount=50000,
    currency="INR",
    method="upi",
    customer_id="cus_8f2a",
    metadata={"order_id": "ORD-991"},
)

print(payment.id, payment.status)`,
    },
    {
      id: "go",
      label: "Go",
      install: "go get github.com/anilaxpayments/anilax-go@v1.8.2",
      code: `client := anilax.NewClient(anilax.Config{
  APIKey:      os.Getenv("ANILAX_SECRET_KEY"),
  Environment: anilax.Sandbox,
})

payment, err := client.Payments.Create(ctx, &anilax.PaymentCreate{
  Amount:     50000,
  Currency:   "INR",
  Method:     "upi",
  CustomerID: "cus_8f2a",
})`,
    },
    {
      id: "php",
      label: "PHP",
      install: "composer require anilaxpayments/sdk",
      code: `$anilax = new \\AnilaxPayments\\Client([
  'api_key' => getenv('ANILAX_SECRET_KEY'),
  'environment' => 'sandbox',
]);

$payment = $anilax->payments->create([
  'amount' => 50000,
  'currency' => 'INR',
  'method' => 'upi',
  'customer_id' => 'cus_8f2a',
]);`,
    },
  ],
  packages: [
    {
      lang: "Node.js",
      pkg: "@anilaxpayments/sdk",
      status: "STABLE",
      version: "v2.4.1 · npm",
      runtime: "Node 18+",
      released: "May 2026",
      install: "npm install @anilaxpayments/sdk",
      highlights: ["ESM + CJS", "TypeScript types", "Express webhook middleware"],
    },
    {
      lang: "Python",
      pkg: "anilaxpayments",
      status: "STABLE",
      version: "v2.4.0 · PyPI",
      runtime: "Python 3.9+",
      released: "Apr 2026",
      install: "pip install anilaxpayments",
      highlights: ["Sync + async clients", "Django webhook view", "Pydantic models"],
    },
    {
      lang: "Go",
      pkg: "github.com/anilaxpayments/anilax-go",
      status: "STABLE",
      version: "v1.8.2 · Go modules",
      runtime: "Go 1.21+",
      released: "May 2026",
      install: "go get github.com/anilaxpayments/anilax-go@v1.8.2",
      highlights: ["Context-aware", "Structured errors", "Chi/Gin examples"],
    },
    {
      lang: "PHP",
      pkg: "anilaxpayments/sdk",
      status: "STABLE",
      version: "v3.1.0 · Packagist",
      runtime: "PHP 8.1+",
      released: "Mar 2026",
      install: "composer require anilaxpayments/sdk",
      highlights: ["Laravel service provider", "Webhook controller trait", "PSR-18 HTTP"],
    },
    {
      lang: "Java",
      pkg: "com.anilaxpayments:anilax-java",
      status: "STABLE",
      version: "v2.2.0 · Maven Central",
      runtime: "Java 11+",
      released: "Feb 2026",
      install: "implementation 'com.anilaxpayments:anilax-java:2.2.0'",
      highlights: ["Spring Boot starter", "Gradle Kotlin DSL", "Android-compatible core"],
    },
    {
      lang: "Ruby",
      pkg: "anilaxpayments",
      status: "STABLE",
      version: "v1.6.4 · RubyGems",
      runtime: "Ruby 3.0+",
      released: "Jan 2026",
      install: "gem install anilaxpayments",
      highlights: ["Rails initializer", "Sinatra samples", "Webhook Rack middleware"],
    },
    {
      lang: "Android",
      pkg: "com.anilaxpayments:anilax-android",
      status: "STABLE",
      version: "v1.3.0 · Maven",
      runtime: "API 24+",
      released: "May 2026",
      install: 'implementation("com.anilaxpayments:anilax-android:1.3.0")',
      highlights: ["Kotlin coroutines", "UPI intent helpers", "Certificate pinning guide"],
    },
    {
      lang: "iOS",
      pkg: "AnilaxPayments",
      status: "BETA",
      version: "v1.0.0-beta.3 · Swift PM",
      runtime: "iOS 15+",
      released: "May 2026",
      install: '.package(url: "https://github.com/anilaxpayments/anilax-swift", from: "1.0.0-beta.3")',
      highlights: ["Swift async/await", "SwiftUI checkout sheet", "Keychain key storage"],
    },
  ],
  webhook: {
    title: "Webhook verification built in",
    body: "Every server SDK includes helpers to validate anilax-signature headers and deserialize events — so you only write business logic for payment.succeeded, payout.failed, and more.",
    points: [
      "Clock-skew tolerant HMAC-SHA256",
      "Raw body parsing for Express, FastAPI, Laravel",
      "Typed event payloads per API version",
      "Safe retries with delivery logs in the developer hub",
    ],
    code: `import { Anilax } from '@anilaxpayments/sdk';

const event = anilax.webhooks.constructEvent(
  request.rawBody,
  request.headers['anilax-signature'],
  process.env.ANILAX_WEBHOOK_SECRET,
);

if (event.type === 'payment.succeeded') {
  await fulfillOrder(event.data.object);
}`,
  },
  matrix: [
    { capability: "Payments create / status", node: true, python: true, go: true, php: true, java: true, ruby: true, android: true, ios: true },
    { capability: "Payouts & bulk payouts", node: true, python: true, go: true, php: true, java: true, ruby: true, android: false, ios: false },
    { capability: "AePS / B2B rails", node: true, python: true, go: true, php: true, java: true, ruby: false, android: false, ios: false },
    { capability: "Webhook verify helper", node: true, python: true, go: true, php: true, java: true, ruby: true, android: false, ios: false },
    { capability: "Idempotency key support", node: true, python: true, go: true, php: true, java: true, ruby: true, android: true, ios: true },
    { capability: "Sandbox / prod switch", node: true, python: true, go: true, php: true, java: true, ruby: true, android: true, ios: true },
    { capability: "UPI intent helpers", node: false, python: false, go: false, php: false, java: false, ruby: false, android: true, ios: true },
    { capability: "OpenAPI types / models", node: true, python: true, go: true, php: true, java: true, ruby: true, android: true, ios: true },
  ],
  matrixCols: [
    { id: "node", label: "Node" },
    { id: "python", label: "Py" },
    { id: "go", label: "Go" },
    { id: "php", label: "PHP" },
    { id: "java", label: "Java" },
    { id: "ruby", label: "Ruby" },
    { id: "android", label: "And" },
    { id: "ios", label: "iOS" },
  ],
  resources: [
    { title: "API reference", sub: "Full endpoint catalog & guides", href: "/docs" },
    { title: "Sandbox keys", sub: "Sign in to the developer hub", href: "/login" },
    { title: "Changelog", sub: "SDK and API release notes", href: "/changelog" },
    { title: "Platform status", sub: "Sandbox & docs health", href: "/status" },
    { title: "Technology", sub: "How we choose stacks", href: "/technology" },
    { title: "Contact", sub: "Production rails & support", href: "/contact" },
  ],
  note: "Pin a version in production. We ship semver — breaking changes only on major bumps. Client libraries are MIT-licensed; API usage is governed by your partner agreement.",
};
