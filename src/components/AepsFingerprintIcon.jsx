/**
 * Fingerprint icon from Flaticon (free license — attribution required).
 * https://www.flaticon.com/free-icon/fingerprint_565512
 */
const FLATICON_FINGERPRINT = "/icons/fingerprint-flaticon.png";

export function AepsFingerprintIcon({
  size = 48,
  className = "",
  variant = "brand",
}) {
  const v = variant === "light" ? "light" : "brand";

  return (
    <span
      className={`aeps-fingerprint-img aeps-fingerprint-img--${v} ${className}`.trim()}
      style={{ width: size, height: size }}
      role="img"
      aria-label="Fingerprint"
    >
      <img src={FLATICON_FINGERPRINT} alt="" width={size} height={size} decoding="async" />
    </span>
  );
}
