import { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { adminCheckSession, adminLogin } from "../../lib/adminApi";
import "../../styles/admin.css";

export function AdminLoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from ?? "/admin";

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [alreadyAuthed, setAlreadyAuthed] = useState(null);

  useEffect(() => {
    adminCheckSession().then(setAlreadyAuthed);
  }, []);

  if (alreadyAuthed === true) {
    return <Navigate to={from} replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await adminLogin(password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message === "SESSION_EXPIRED" ? "Invalid password" : err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login">
      <div className="admin-login__card">
        <Link to="/" className="admin-login__back">
          ← Back to site
        </Link>
        <p className="admin-login__eyebrow">Anilax Software</p>
        <h1>Admin</h1>
        <p className="admin-login__sub">Sign in to view contact leads and partner signups.</p>

        <form onSubmit={handleSubmit}>
          <label className="admin-field">
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              autoFocus
            />
          </label>
          {error && (
            <p className="admin-login__error" role="alert">
              {error}
            </p>
          )}
          <button type="submit" className="btn btn--gradient admin-login__submit" disabled={loading}>
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
