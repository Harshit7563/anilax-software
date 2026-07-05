import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import AdminApp from "./AdminApp.jsx";
import { initNativeShell } from "./native/initNative.js";

const isAdminApp = import.meta.env.VITE_ADMIN_APP === "true";

initNativeShell();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {isAdminApp ? <AdminApp /> : <App />}
    </BrowserRouter>
  </StrictMode>
);
