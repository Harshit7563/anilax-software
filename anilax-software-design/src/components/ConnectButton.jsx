import { useContactModal } from "../context/ContactModalContext";

export function ConnectButton({ className = "", children = "Connect With Us", showDot = true }) {
  const { openContact } = useContactModal();

  return (
    <button type="button" className={className} onClick={openContact}>
      {children}
      {showDot && <span className="connect-dot" aria-hidden="true" />}
    </button>
  );
}
