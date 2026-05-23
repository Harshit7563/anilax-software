import { useContactModal } from "../context/ContactModalContext";

export function CatalogApiCard({ apiName, useCase, categoryId, categoryTitle }) {
  const { openContact } = useContactModal();

  const requestAccess = () => {
    openContact({ apiName, categoryId, categoryTitle });
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      requestAccess();
    }
  };

  return (
    <article
      className={`api-endpoint-card api-endpoint-card--catalog api-endpoint-card--clickable api-endpoint-card--${categoryId}`}
      onClick={requestAccess}
      onKeyDown={onKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Request access for ${apiName}`}
    >
      <span className="api-endpoint-card__badge">API</span>
      <h3>{apiName}</h3>
      <p>{useCase}</p>
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
    </article>
  );
}
