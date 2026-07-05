import {
  buildShreeContents,
  buildShreeSystemPrompt,
  generateGeminiText,
} from "./geminiGenerate.js";

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
    });
    req.on("end", () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch {
        reject(new Error("Invalid JSON body"));
      }
    });
    req.on("error", reject);
  });
}

/** Local dev: POST /api/shree/chat → Gemini (avoids browser CORS) */
export function shreeGeminiDevPlugin(env) {
  return {
    name: "shree-gemini-dev-proxy",
    enforce: "pre",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const path = req.url?.split("?")[0];
        if (path !== "/api/shree/chat" || req.method !== "POST") {
          next();
          return;
        }

        const apiKey = env.VITE_GEMINI_API_KEY || env.GEMINI_API_KEY;
        if (!apiKey) {
          res.statusCode = 503;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Add VITE_GEMINI_API_KEY to .env and restart npm run dev" }));
          return;
        }

        try {
          const body = await readJsonBody(req);
          const { query, lang, pathname, history = [], context = {} } = body;
          if (!query?.trim()) {
            res.statusCode = 400;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ error: "query required" }));
            return;
          }

          const result = await generateGeminiText({
            apiKey,
            model: env.VITE_GEMINI_MODEL || env.GEMINI_MODEL || "gemini-2.0-flash",
            systemInstruction: buildShreeSystemPrompt({ lang, pathname, context }),
            contents: buildShreeContents(history, query),
          });

          res.setHeader("Content-Type", "application/json");
          if (!result.ok) {
            res.statusCode = result.status || 502;
            res.end(JSON.stringify({ error: result.error }));
            console.warn("[Shree/Gemini]", result.error);
            return;
          }

          res.statusCode = 200;
          res.end(JSON.stringify({ text: result.text }));
        } catch (err) {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: err.message ?? "Shree chat failed" }));
        }
      });
    },
  };
}
