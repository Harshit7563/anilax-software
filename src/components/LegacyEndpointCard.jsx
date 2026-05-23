import { useContactModal } from "../context/ContactModalContext";
export function LegacyEndpointCard({ api, categoryId, categoryTitle }) {
  const { openContact } = useContactModal();

  const requestAccess = () => {
    openContact({
      apiName: api.name,
      categoryId,
      categoryTitle,
      path: api.path,
      method: api.method,
    });
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      requestAccess();
    }
  };

  return (
    <div
      className="api-endpoint-card api-endpoint-card--clickable"
      onClick={requestAccess}
      onKeyDown={onKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Request access for ${api.name}`}
    >
      <div className="api-endpoint-card__top">
        <span className={`api-method api-method--${api.method.toLowerCase()}`}>{api.method}</span>
        <code className="api-endpoint-card__path">{api.path}</code>
      </div>
      <h3>{api.name}</h3>
      <p>{api.desc}</p>
      <button
        type="button"
        className="api-endpoint-card__access btn btn--gradient btn--sm"
        onClick={(e) => {
          e.stopPropagation();
          requestAccess();
        }}
      >
        Get API Access
      </button>
    </div>
  );
}
