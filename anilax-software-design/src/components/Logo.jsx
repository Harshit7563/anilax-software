import { Link } from "react-router-dom";

export function Logo({ showText = true, className = "" }) {
  return (
    <Link to="/" className={`logo ${className}`}>
      {showText && <span>Anilax Software</span>}
    </Link>
  );
}
