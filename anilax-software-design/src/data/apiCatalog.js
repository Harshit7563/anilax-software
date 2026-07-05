import { COMPANY_API_V1 } from "./company";

export const API_HERO = {
  eyebrow: "Anilax Software · APIs",
  title: "Every fintech API your product needs",
  subtitle:
    "RESTful APIs for B2B, B2C, payments, SMS, verification, BBPS, and custom integrations — sandbox free, production-ready, webhook-driven.",
};

export const API_STATS = [
  { value: "99.99%", label: "API uptime SLA" },
  { value: "<50ms", label: "Median latency" },
  { value: "Free", label: "Sandbox access" },
];

export const API_FEATURES = [
  { title: "REST + Webhooks", desc: "JSON APIs with signed webhooks for every lifecycle event." },
  { title: "Idempotent", desc: "Safe retries with idempotency keys on payment & payout calls." },
  { title: "SDKs", desc: "Node.js, Python, Go, PHP — plus OpenAPI 3 spec." },
  { title: "PCI-aware", desc: "Tokenization patterns and secure credential handling." },
];

export const API_CATEGORIES = [
  {
    id: "b2b",
    icon: "◇",
    title: "B2B APIs",
    tagline: "Enterprise payouts, AePS & correspondent banking",
    desc: "AePS, MATM, DMT, BBPS, payouts, UPI collect, virtual accounts, KYC, and webhooks for BC networks and distributors.",
    apis: [],
  },
  {
    id: "b2c",
    icon: "○",
    title: "B2C APIs",
    tagline: "Payouts, collections, validation & webhooks",
    desc: "Payout, refund, settlement, UPI, wallet, QR, mandates, and real-time webhooks for consumer apps and platforms.",
    apis: [],
  },
  {
    id: "payment",
    icon: "💳",
    title: "Payment APIs",
    tagline: "Gateway, UPI, cards, refunds & settlement",
    desc: "Create payments, UPI collect & intent, QR, cards, netbanking, wallets, refunds, splits, and webhooks.",
    apis: [],
  },
  {
    id: "sms",
    icon: "✉",
    title: "SMS APIs",
    tagline: "OTP, bulk, DLT & WhatsApp",
    desc: "Send SMS, OTP, bulk campaigns, Unicode, DLT templates, delivery reports, voice OTP, and WhatsApp.",
    apis: [],
  },
  {
    id: "verification",
    icon: "✓",
    title: "Verification APIs",
    tagline: "KYC, identity, bank & document checks",
    desc: "PAN, Aadhaar, bank, UPI, GST, documents, face match, OCR, CKYC, and email/mobile intelligence.",
    apis: [],
  },
  {
    id: "bbps",
    icon: "📄",
    title: "BBPS APIs",
    tagline: "Bharat Bill Payment System",
    desc: "Fetch and pay bills, recharge, complaints, and webhooks across utility and telecom categories.",
    apis: [],
  },
  {
    id: "custom",
    icon: "⚙",
    title: "Custom APIs",
    tagline: "White-label, webhooks & bespoke rails",
    desc: "Need something unique? Custom endpoints, private routing, and dedicated environments.",
    apis: [
      {
        name: "Webhook Configure",
        method: "POST",
        path: "/v1/webhooks",
        desc: "Subscribe to events — payment, payout, KYC, settlement.",
      },
      {
        name: "Ledger Entry",
        method: "POST",
        path: "/v1/ledger/entries",
        desc: "Double-entry ledger posts for custom products.",
      },
      {
        name: "Custom Route",
        method: "POST",
        path: "/v1/custom/*",
        desc: "Bespoke payment rails built for your workflow.",
      },
      {
        name: "API Key Rotate",
        method: "POST",
        path: "/v1/keys/rotate",
        desc: "Rotate live/test keys without downtime.",
      },
      {
        name: "Sandbox Seed",
        method: "POST",
        path: "/v1/sandbox/seed",
        desc: "Test data seeding for QA and CI pipelines.",
      },
    ],
  },
];

/** Payment gateway APIs — type and use case */
export const PAYMENT_API_CATALOG = [
  { type: "Payment Create API", useCase: "Payment initiate" },
  { type: "Order API", useCase: "Order generate" },
  { type: "UPI Collect API", useCase: "UPI request" },
  { type: "Intent API", useCase: "Open GPay/PhonePe" },
  { type: "Dynamic QR API", useCase: "QR generate" },
  { type: "Static QR API", useCase: "Fixed QR" },
  { type: "Card Payment API", useCase: "Credit/debit card" },
  { type: "Netbanking API", useCase: "Bank payment" },
  { type: "Wallet API", useCase: "Wallet payment" },
  { type: "Payment Status API", useCase: "Status check" },
  { type: "Refund API", useCase: "Refund" },
  { type: "Settlement API", useCase: "Settlement reports" },
  { type: "Webhook API", useCase: "Real-time callback" },
  { type: "Subscription API", useCase: "Auto debit" },
  { type: "Route/Split API", useCase: "Marketplace split" },
  { type: "Virtual Account API", useCase: "Auto reconciliation" },
  { type: "Tokenization API", useCase: "Saved cards" },
  { type: "TPV API", useCase: "Account validation payment" },
];

/** SMS & messaging APIs — type and use case */
export const SMS_API_CATALOG = [
  { type: "Send SMS API", useCase: "Normal SMS send" },
  { type: "OTP API", useCase: "OTP generation/send" },
  { type: "Verify OTP API", useCase: "OTP validation" },
  { type: "Bulk SMS API", useCase: "Marketing SMS" },
  { type: "Unicode SMS API", useCase: "Hindi/local language SMS" },
  { type: "DLT Template API", useCase: "DLT registered SMS" },
  { type: "Delivery Report API", useCase: "SMS status" },
  { type: "Number Lookup API", useCase: "Mobile validation" },
  { type: "Voice OTP API", useCase: "Call OTP" },
  { type: "WhatsApp API", useCase: "WhatsApp messaging" },
];

/** Verification & KYC APIs — type and use case */
export const VERIFICATION_API_CATALOG = [
  { type: "PAN Verify API", useCase: "PAN validation" },
  { type: "Aadhaar Verify API", useCase: "Aadhaar check" },
  { type: "OTP Aadhaar API", useCase: "OTP-based verification" },
  { type: "Bank Account Verify API", useCase: "Account + IFSC verify" },
  { type: "Penny Drop API", useCase: "Account holder name match" },
  { type: "UPI Verify API", useCase: "UPI ID validation" },
  { type: "GST Verify API", useCase: "GSTIN details" },
  { type: "CIN/Company Verify API", useCase: "MCA company lookup" },
  { type: "Driving License API", useCase: "DL verification" },
  { type: "RC Verify API", useCase: "Vehicle details" },
  { type: "Face Match API", useCase: "Selfie verification" },
  { type: "OCR API", useCase: "Document text extraction" },
  { type: "CKYC API", useCase: "CKYC lookup" },
  { type: "Voter ID API", useCase: "EPIC verification" },
  { type: "Passport Verify API", useCase: "Passport validation" },
  { type: "Mobile Intelligence API", useCase: "SIM/operator details" },
  { type: "Email Verify API", useCase: "Email validation" },
];

export const BBPS_CATEGORIES = [
  "Electricity",
  "Water",
  "Gas",
  "Broadband",
  "Landline",
  "Mobile Postpaid",
  "DTH",
  "FASTag",
  "Insurance",
  "Loan EMI",
  "Credit Card Bills",
  "Municipal Taxes",
  "Cable TV",
];

/** BBPS APIs — type and use case */
export const BBPS_API_CATALOG = [
  { type: "Fetch Bill API", useCase: "Customer bill details" },
  { type: "Pay Bill API", useCase: "Bill payment" },
  { type: "Biller Validation API", useCase: "Consumer validation" },
  { type: "BBPS Status API", useCase: "Transaction status" },
  { type: "Complaint API", useCase: "Raise complaint" },
  { type: "Complaint Status API", useCase: "Complaint tracking" },
  { type: "Operator List API", useCase: "Available billers/operators" },
  { type: "Circle Fetch API", useCase: "Telecom circle detection" },
  { type: "Recharge API", useCase: "Mobile/DTH recharge" },
  { type: "FASTag Recharge API", useCase: "FASTag payments" },
  { type: "Credit Card Bill API", useCase: "CC bill payments" },
  { type: "Loan Repayment API", useCase: "EMI payment" },
  { type: "Insurance Premium API", useCase: "Insurance payment" },
  { type: "Webhook API", useCase: "Live transaction updates" },
];

export const API_WEBHOOKS = [
  "payment.succeeded",
  "payment.failed",
  "payout.completed",
  "refund.processed",
  "mandate.approved",
  "kyc.verified",
  "bbps.bill_paid",
  "settlement.credited",
];

export const API_CODE_SAMPLE = `curl -X POST ${COMPANY_API_V1}/payments \\
  -H "Authorization: Bearer sk_live_xxxx" \\
  -H "Idempotency-Key: ord_991_unique" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 50000,
    "currency": "INR",
    "method": "upi",
    "customer_id": "cus_8f2a",
    "metadata": { "order_id": "ORD-991" }
  }'`;
