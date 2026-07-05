import { Link } from "react-router-dom";
import { COMPANY_LEGAL } from "../data/company";

export function Logo({ className = "", variant = "default" }) {
  return (
    <Link
      to="/"
      className={`logo logo--${variant} ${className}`.trim()}
      aria-label={`${COMPANY_LEGAL.brand} home`}
    >
      {COMPANY_LEGAL.brand}
    </Link>
  );
}
