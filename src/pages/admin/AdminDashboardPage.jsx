import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  adminLogout,
  fetchAdminStats,
  fetchContactLeads,
  fetchPartnerSignups,
  updateLeadStatus,
} from "../../lib/adminApi";
import "../../styles/admin.css";

const LEAD_STATUSES = [
  { value: "all", label: "All" },
  { value: "new", label: "New" },
  { value: "contacted", label: "Contacted" },
  { value: "qualified", label: "Qualified" },
  { value: "closed", label: "Closed" },
];

const STATUS_OPTIONS = ["new", "contacted", "qualified", "closed"];

function formatDate(iso) {
  if (!iso) return "—";
  return new Date(iso).toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export function AdminDashboardPage() {
  const [tab, setTab] = useState("leads");
  const [stats, setStats] = useState(null);
  const [leadFilter, setLeadFilter] = useState("all");
  const [leads, setLeads] = useState({ items: [], total: 0 });
  const [signups, setSignups] = useState({ items: [], total: 0 });
  const [selectedLead, setSelectedLead] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const [s, l, p] = await Promise.all([
        fetchAdminStats(),
        fetchContactLeads({ status: leadFilter }),
        fetchPartnerSignups(),
      ]);
      setStats(s);
      setLeads(l);
      setSignups(p);
    } catch (err) {
      setError(err.message ?? "Failed to load data");
    } finally {
      setLoading(false);
    }
  }, [leadFilter]);

  useEffect(() => {
    load();
  }, [load]);

  const handleStatusChange = async (id, status) => {
    try {
      await updateLeadStatus(id, status);
      setLeads((prev) => ({
        ...prev,
        items: prev.items.map((row) => (row.id === id ? { ...row, status } : row)),
      }));
      if (selectedLead?.id === id) setSelectedLead((l) => ({ ...l, status }));
      const s = await fetchAdminStats();
      setStats(s);
    } catch (err) {
      setError(err.message ?? "Update failed");
    }
  };

  const logout = () => {
    adminLogout();
    window.location.href = "/admin/login";
  };

  return (
    <div className="admin-shell">
      <header className="admin-header">
        <div className="admin-header__brand">
          <Link to="/">Anilax</Link>
          <span>Admin</span>
        </div>
        <div className="admin-header__actions">
          <button type="button" className="btn btn--outline btn--sm" onClick={load} disabled={loading}>
            Refresh
          </button>
          <button type="button" className="btn btn--ghost btn--sm" onClick={logout}>
            Log out
          </button>
        </div>
      </header>

      <main className="admin-main">
        {error && (
          <p className="admin-banner admin-banner--error" role="alert">
            {error}
          </p>
        )}

        <div className="admin-stats">
          <article className="admin-stat">
            <strong>{stats?.contact_new ?? "—"}</strong>
            <span>New leads</span>
          </article>
          <article className="admin-stat">
            <strong>{stats?.contact_total ?? "—"}</strong>
            <span>Total leads</span>
          </article>
          <article className="admin-stat">
            <strong>{stats?.signup_total ?? "—"}</strong>
            <span>Signups / logins</span>
          </article>
          <article className="admin-stat">
            <strong>{stats?.signup_week ?? "—"}</strong>
            <span>Last 7 days</span>
          </article>
        </div>

        <div className="admin-tabs" role="tablist">
          <button
            type="button"
            role="tab"
            className={tab === "leads" ? "admin-tabs__btn--active" : ""}
            onClick={() => setTab("leads")}
          >
            Contact leads ({leads.total})
          </button>
          <button
            type="button"
            role="tab"
            className={tab === "signups" ? "admin-tabs__btn--active" : ""}
            onClick={() => setTab("signups")}
          >
            Partner signups ({signups.total})
          </button>
        </div>

        {tab === "leads" && (
          <section className="admin-panel">
            <div className="admin-panel__toolbar">
              <label className="admin-filter">
                <span>Status</span>
                <select value={leadFilter} onChange={(e) => setLeadFilter(e.target.value)}>
                  {LEAD_STATUSES.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Industry</th>
                    <th>Status</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {loading && !leads.items.length ? (
                    <tr>
                      <td colSpan={6} className="admin-table__empty">
                        Loading…
                      </td>
                    </tr>
                  ) : leads.items.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="admin-table__empty">
                        No leads yet
                      </td>
                    </tr>
                  ) : (
                    leads.items.map((row) => (
                      <tr key={row.id}>
                        <td data-label="Date">{formatDate(row.created_at)}</td>
                        <td data-label="Name">{row.name}</td>
                        <td data-label="Email">
                          <a href={`mailto:${row.email}`}>{row.email}</a>
                        </td>
                        <td data-label="Industry">{row.industry}</td>
                        <td data-label="Status">
                          <select
                            className={`admin-status admin-status--${row.status}`}
                            value={row.status}
                            onChange={(e) => handleStatusChange(row.id, e.target.value)}
                          >
                            {STATUS_OPTIONS.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td data-label="">
                          <button
                            type="button"
                            className="admin-link-btn"
                            onClick={() => setSelectedLead(row)}
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {tab === "signups" && (
          <section className="admin-panel">
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Mode</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Company</th>
                    <th>Phone</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {loading && !signups.items.length ? (
                    <tr>
                      <td colSpan={7} className="admin-table__empty">
                        Loading…
                      </td>
                    </tr>
                  ) : signups.items.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="admin-table__empty">
                        No signups yet
                      </td>
                    </tr>
                  ) : (
                    signups.items.map((row) => (
                      <tr key={row.id}>
                        <td data-label="Date">{formatDate(row.created_at)}</td>
                        <td data-label="Mode">
                          <span className={`admin-pill admin-pill--${row.mode}`}>{row.mode}</span>
                        </td>
                        <td data-label="Name">{row.name || "—"}</td>
                        <td data-label="Email">
                          <a href={`mailto:${row.email}`}>{row.email}</a>
                        </td>
                        <td data-label="Company">{row.company || "—"}</td>
                        <td data-label="Phone">
                          {row.phone ? <a href={`tel:${row.phone}`}>{row.phone}</a> : "—"}
                        </td>
                        <td data-label="Role">{row.role || "—"}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </main>

      {selectedLead && (
        <div className="admin-drawer" role="dialog" aria-modal="true" aria-label="Lead details">
          <button
            type="button"
            className="admin-drawer__backdrop"
            aria-label="Close"
            onClick={() => setSelectedLead(null)}
          />
          <div className="admin-drawer__panel">
            <header className="admin-drawer__head">
              <h2>{selectedLead.name}</h2>
              <button type="button" className="admin-drawer__close" onClick={() => setSelectedLead(null)}>
                ×
              </button>
            </header>
            <dl className="admin-detail">
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${selectedLead.email}`}>{selectedLead.email}</a>
              </dd>
              <dt>Industry</dt>
              <dd>{selectedLead.industry}</dd>
              <dt>Status</dt>
              <dd>
                <select
                  className={`admin-status admin-status--${selectedLead.status}`}
                  value={selectedLead.status}
                  onChange={(e) => handleStatusChange(selectedLead.id, e.target.value)}
                >
                  {STATUS_OPTIONS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </dd>
              {selectedLead.api_name && (
                <>
                  <dt>API</dt>
                  <dd>
                    {selectedLead.api_name}
                    {selectedLead.category_title ? ` · ${selectedLead.category_title}` : ""}
                  </dd>
                </>
              )}
              {selectedLead.source_page && (
                <>
                  <dt>Source page</dt>
                  <dd>{selectedLead.source_page}</dd>
                </>
              )}
              <dt>Submitted</dt>
              <dd>{formatDate(selectedLead.created_at)}</dd>
              <dt>Requirement</dt>
              <dd className="admin-detail__requirement">{selectedLead.requirement}</dd>
            </dl>
          </div>
        </div>
      )}
    </div>
  );
}
