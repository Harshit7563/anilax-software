import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PillarIcon } from "./PillarIcon";

const PILLARS = [
  {
    id: "fintech",
    icon: "fintech",
    title: "Fintech",
    tag: "Core platform",
    text: "Ledgers, compliance, KYC, and real-time settlement for regulated financial products.",
    href: "#fintech",
  },
  {
    id: "b2b",
    icon: "b2b",
    title: "B2B",
    tag: "AePS · B2B",
    text: "AePS software & API — cash withdrawal, deposit, Aadhaar Pay, micro ATM with real-time settlement.",
    route: "/b2b",
  },
  {
    id: "b2c",
    icon: "b2c",
    title: "B2C",
    tag: "Consumer apps",
    text: "Wallets, cards, UPI, and seamless checkout experiences your users love.",
    route: "/b2c",
  },
  {
    id: "api",
    icon: "api",
    title: "API",
    tag: "Developers",
    text: "B2B, B2C, payment, SMS, verification, BBPS & custom APIs — REST, webhooks, sandbox.",
    route: "/api",
  },
  {
    id: "software",
    icon: "software",
    title: "Software Development",
    tag: "Custom build",
    text: "Web, mobile, and enterprise apps — from fintech portals to full-stack product engineering.",
    route: "/software",
  },
  {
    id: "technology",
    icon: "technology",
    title: "Technology",
    tag: "Stack & design",
    text: "React, Node.js, Python, mobile, cloud, Figma — full-stack development and UI/UX design.",
    route: "/technology",
  },
  {
    id: "company",
    icon: "company",
    title: "Company",
    tag: "About us",
    text: "ANILAX SOFTWARE PRIVATE LIMITED — Jaipur-based fintech & software company since 2021.",
    route: "/company",
  },
  {
    id: "stories",
    icon: "stories",
    title: "Our Stories",
    tag: "Success stories",
    text: "Partner journeys — AePS rollouts, API integrations, wallets, and software builds that scaled with real outcomes.",
    route: "/stories",
  },
];

export function Pillars() {
  const [active, setActive] = useState("fintech");
  const navigate = useNavigate();

  const goTo = (p) => {
    setActive(p.id);
    if (p.route) {
      navigate(p.route);
      return;
    }
    if (p.href) {
      document.querySelector(p.href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pillars" id="fintech">
      <div className="pillars__inner">
        <p className="section-label">One platform</p>
        <h2 className="section-title">Built for every side of money</h2>
        <p className="section-sub">
          Whether you run a bank, a marketplace, or need custom software — Anilax connects
          fintech, business, retail, APIs, software, and modern technology on one partner.
        </p>
        <div className="pillars__grid">
          {PILLARS.map((p) => (
            <article
              key={p.id}
              role="button"
              tabIndex={0}
              className={`pillar-card ${active === p.id ? "pillar-card--active" : ""}`}
              onMouseEnter={() => setActive(p.id)}
              onClick={() => goTo(p)}
              onKeyDown={(e) => e.key === "Enter" && goTo(p)}
            >
              <PillarIcon name={p.icon} />
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <span className="pillar-card__tag">{p.tag}</span>
              {p.route && (
                <span className="pillar-card__link">
                  {p.id === "b2b"
                    ? "View B2B page →"
                    : p.id === "b2c"
                      ? "View B2C page →"
                      : p.id === "api"
                      ? "View API catalog →"
                      : p.id === "technology"
                        ? "View tech stack →"
                        : p.id === "company"
                          ? "About company →"
                          : p.id === "stories"
                            ? "View our stories →"
                            : "View solutions →"}
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
