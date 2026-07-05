import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import "./styles/admin.css";
import { AdminLoginPage } from "./pages/admin/AdminLoginPage";
import { AdminDashboardPage } from "./pages/admin/AdminDashboardPage";
import { AdminGuard } from "./components/admin/AdminGuard";

/** Admin-only shell for the Android APK (no public marketing site). */
export default function AdminApp() {
  return (
    <div className="app app--admin">
      <main className="main--admin">
        <Routes>
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route
            path="/admin"
            element={
              <AdminGuard>
                <AdminDashboardPage />
              </AdminGuard>
            }
          />
          <Route path="*" element={<Navigate to="/admin/login" replace />} />
        </Routes>
      </main>
    </div>
  );
}
