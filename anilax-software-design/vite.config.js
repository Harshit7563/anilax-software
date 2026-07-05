import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { shreeGeminiDevPlugin } from "./server/vite-shree-plugin.js";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const isAdminApp = env.VITE_ADMIN_APP === "true";

  return {
    plugins: [react(), shreeGeminiDevPlugin(env)],
    base: isAdminApp ? "./" : "/",
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:3001",
          changeOrigin: true,
          bypass(req) {
            if (req.url?.startsWith("/api/shree/chat")) {
              return false;
            }
          },
        },
      },
    },
  };
});
