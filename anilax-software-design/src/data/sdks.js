export const SDK_HERO = {
  eyebrow: "Developer tools · SDKs",
  title: "Official SDKs for Anilax Payments",
  subtitle:
    "Typed clients, built-in retries, webhook verification, and sandbox switching — ship UPI, AePS, wallets, and payouts without hand-rolling HTTP.",
  baseUrl: "https://api.anilaxpayments.com",
  sandboxUrl: "https://sandbox.api.anilaxpayments.com",
};

export const SDK_STATS = [
  { value: "8", label: "Official SDKs" },
  { value: "2.4.x", label: "Latest stable" },
  { value: "OpenAPI 3", label: "Spec included" },
  { value: "MIT", label: "License (client libs)" },
];

export const SDK_FEATURES = [
  {
    title: "Typed resources",
    desc: "Payments, payouts, wallets, AePS, SMS, and verification exposed as typed methods — autocomplete in VS Code and IntelliJ.",
  },
  {
    title: "Auto retries",
    desc: "Configurable exponential backoff on 429 and 5xx with idempotency key forwarding on POST.",
  },
  {
    title: "Webhook helpers",
    desc: "Verify HMAC signatures and parse event payloads with one call — no custom crypto boilerplate.",
  },
  {
    title: "Sandbox switch",
    desc: "Set environment: sandbox | production once — base URL and keys resolve automatically.",
  },
];

export const SDK_PACKAGES = [
  {
    id: "node",
    name: "Node.js",
    icon: "node",
    status: "stable",
    version: "2.4.1",
    released: "May 2026",
    registry: "npm",
    package: "@anilaxpayments/sdk",
    install: "npm install @anilaxpayments/sdk",
    minRuntime: "Node 18+",
    docsAnchor: "node",
    highlights: ["ESM + CJS", "TypeScript types", "Express webhook middleware"],
  },
  {
    id: "python",
    name: "Python",
    icon: "python",
    status: "stable",
    version: "2.4.0",
    released: "Apr 2026",
    registry: "PyPI",
    package: "anilaxpayments",
    install: "pip install anilaxpayments",
    minRuntime: "Python 3.9+",
    docsAnchor: "python",
    highlights: ["Sync + async clients", "Django webhook view", "Pydantic models"],
  },
  {
    id: "go",
    name: "Go",
    icon: "go",
    status: "stable",
    version: "1.8.2",
    released: "May 2026",
    registry: "Go modules",
    package: "github.com/anilaxpayments/anilax-go",
    install: "go get github.com/anilaxpayments/anilax-go@v1.8.2",
    minRuntime: "Go 1.21+",
    docsAnchor: "go",
    highlights: ["Context-aware", "Structured errors", "Chi/Gin examples"],
  },
  {
    id: "php",
    name: "PHP",
    icon: "php",
    status: "stable",
    version: "3.1.0",
    released: "Mar 2026",
    registry: "Packagist",
    package: "anilaxpayments/sdk",
    install: "composer require anilaxpayments/sdk",
    minRuntime: "PHP 8.1+",
    docsAnchor: "php",
    highlights: ["Laravel service provider", "Webhook controller trait", "PSR-18 HTTP"],
  },
  {
    id: "java",
    name: "Java",
    icon: "java",
    status: "stable",
    version: "2.2.0",
    released: "Feb 2026",
    registry: "Maven Central",
    package: "com.anilaxpayments:anilax-java",
    install: `<!-- Maven -->
<dependency>
  <groupId>com.anilaxpayments</groupId>
  <artifactId>anilax-java</artifactId>
  <version>2.2.0</version>
</dependency>`,
    minRuntime: "Java 11+",
    docsAnchor: "java",
    highlights: ["Spring Boot starter", "Gradle Kotlin DSL", "Android-compatible core"],
  },
  {
    id: "ruby",
    name: "Ruby",
    icon: "ruby",
    status: "stable",
    version: "1.6.4",
    released: "Jan 2026",
    registry: "RubyGems",
    package: "anilaxpayments",
    install: "gem install anilaxpayments",
    minRuntime: "Ruby 3.0+",
    docsAnchor: "ruby",
    highlights: ["Rails initializer", "Sinatra samples", "Webhook Rack middleware"],
  },
  {
    id: "android",
    name: "Android",
    icon: "android",
    status: "stable",
    version: "1.3.0",
    released: "May 2026",
    registry: "Maven",
    package: "com.anilaxpayments:anilax-android",
    install: `implementation("com.anilaxpayments:anilax-android:1.3.0")`,
    minRuntime: "API 24+",
    docsAnchor: "android",
    highlights: ["Kotlin coroutines", "UPI intent helpers", "Certificate pinning guide"],
  },
  {
    id: "ios",
    name: "iOS",
    icon: "ios",
    status: "beta",
    version: "1.0.0-beta.3",
    released: "May 2026",
    registry: "Swift PM",
    package: "AnilaxPayments",
    install: `.package(url: "https://github.com/anilaxpayments/anilax-swift", from: "1.0.0-beta.3")`,
    minRuntime: "iOS 15+",
    docsAnchor: "ios",
    highlights: ["Swift async/await", "SwiftUI checkout sheet", "Keychain key storage"],
  },
];

export const SDK_CODE_SAMPLES = {
  node: `import { Anilax } from '@anilaxpayments/sdk';

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
  python: `from anilaxpayments import Anilax

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
  go: `package main

import (
  "context"
  "github.com/anilaxpayments/anilax-go/v2/anilax"
)

func main() {
  client := anilax.NewClient(os.Getenv("ANILAX_SECRET_KEY"),
    anilax.WithEnvironment(anilax.Sandbox),
  )
  payment, err := client.Payments.Create(context.Background(), &anilax.PaymentParams{
    Amount: 50000, Currency: "INR", Method: "upi",
    CustomerID: "cus_8f2a",
  })
}`,
  php: `<?php
use AnilaxPayments\\Anilax;

$anilax = new Anilax([
  'api_key' => getenv('ANILAX_SECRET_KEY'),
  'environment' => 'sandbox',
]);

$payment = $anilax->payments->create([
  'amount' => 50000,
  'currency' => 'INR',
  'method' => 'upi',
  'customer_id' => 'cus_8f2a',
]);`,
};

export const SDK_WEBHOOK_SAMPLE = `// Node.js — verify incoming webhook
import { constructEvent } from '@anilaxpayments/sdk/webhooks';

const event = constructEvent(req.body, req.headers['anilax-signature'], process.env.WEBHOOK_SECRET);

if (event.type === 'payment.succeeded') {
  await fulfillOrder(event.data.object.metadata.order_id);
}`;

export const SDK_COMPAT = [
  { feature: "Payments & refunds", node: true, python: true, go: true, php: true, java: true, mobile: true },
  { feature: "B2B AePS", node: true, python: true, go: true, php: true, java: true, mobile: false },
  { feature: "B2C wallets & UPI", node: true, python: true, go: true, php: true, java: true, mobile: true },
  { feature: "Webhook verification", node: true, python: true, go: true, php: true, java: true, mobile: false },
  { feature: "Idempotency keys", node: true, python: true, go: true, php: true, java: true, mobile: true },
  { feature: "BBPS & SMS", node: true, python: true, go: true, php: true, java: "beta", mobile: false },
];

export const SDK_RESOURCES = [
  { label: "API reference", href: "/docs", desc: "Interactive docs with live sandbox examples" },
  { label: "OpenAPI 3.1 spec", href: "/docs", desc: "Download YAML — generate clients in any language" },
  { label: "Postman collection", href: "/docs", desc: "Pre-built requests for every endpoint" },
  { label: "Changelog", href: "/docs", desc: "Breaking changes and migration guides per SDK" },
];
