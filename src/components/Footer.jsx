import { Link } from "react-router-dom";
import { ConnectButton } from "./ConnectButton";
import { COMPANY_LEGAL, COMPANY_PHONE, COMPANY_PHONE_TEL } from "../data/company";
import { FOOTER_ROUTES, FOOTER_LINK_GROUPS } from "../data/footerLinks";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__cta">
          <h2>
            Ready to <span className="gradient">move business</span>?
          </h2>
          <ConnectButton className="btn btn--gradient btn--connect" />
        </div>
        <div className="footer__grid">
          {Object.entries(FOOTER_LINK_GROUPS).map(([heading, items]) => (
            <div key={heading} className="footer__col">
              <h4>{heading}</h4>
              {items.map((item) => (
                <Link key={item} to={FOOTER_ROUTES[item] ?? "/"}>
                  {item}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom-left">
            <Link to="/" className="logo footer__brand">
              ANILAX SOFTWARE PRIVATE LIMITED
            </Link>
            <div className="footer__office">
              <h4>Office</h4>
              <address>
                OFFICE NO 728, SEVENTH, Mall of Jaipur,
                <br />
                Gandhi Path Rd, Vaishali Nagar,
                <br />
                Jaipur, Rajasthan 302021
              </address>
              <p className="footer__phone">
                <a href={`tel:${COMPANY_PHONE_TEL}`}>{COMPANY_PHONE}</a>
              </p>
            </div>
          </div>
          <div className="footer__bottom-right">
            <div className="footer__ids">
              <p>
                <span className="footer__id-label">CIN</span>
                {COMPANY_LEGAL.cin}
              </p>
              <p>
                <span className="footer__id-label">GSTIN</span>
                {COMPANY_LEGAL.gstin}
              </p>
            </div>
            <div className="footer__links">
              <Link to="/privacy">Privacy</Link>
              <Link to="/terms">Terms</Link>
              <Link to="/compliance">Compliance</Link>
              <Link to="/grievance">Grievance</Link>
              <Link to="/cookies">Cookies</Link>
            </div>
            <span className="footer__copy">
              Developed and driven with © 2026 Anilax Software
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
