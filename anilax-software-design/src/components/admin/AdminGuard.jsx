import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { adminCheckSession } from "../../lib/adminApi";

export function AdminGuard({ children }) {
  const location = useLocation();
  const [state, setState] = useState("loading");

  useEffect(() => {
    let cancelled = false;
    adminCheckSession()
      .then((ok) => {
        if (!cancelled) setState(ok ? "authed" : "guest");
      })
      .catch(() => {
        if (!cancelled) setState("guest");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (state === "loading") {
    return (
      <div className="admin-loading">
        <span className="admin-loading__spinner" aria-hidden="true" />
        <p>Loading admin…</p>
      </div>
    );
  }

  if (state === "guest") {
    return <Navigate to="/admin/login" replace state={{ from: location.pathname }} />;
  }

  return children;
}
