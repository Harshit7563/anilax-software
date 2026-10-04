import { defineConfig, loadEnv } from "vite";
import { createContactApiMiddleware } from "./server/sendWhatsApp.js";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const contactPlugin = {
    name: "anilax-contact-whatsapp-api",
    configureServer(server) {
      server.middlewares.use(createContactApiMiddleware(env));
    },
    configurePreviewServer(server) {
      server.middlewares.use(createContactApiMiddleware(env));
    },
  };

  return {
    appType: "spa",
    server: {
      port: 5174,
      host: "127.0.0.1",
    },
    plugins: [contactPlugin],
  };
});
