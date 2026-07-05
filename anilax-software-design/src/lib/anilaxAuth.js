import {
  COMPANY_AUTH_PATH,
  COMPANY_AUTH_URL,
  COMPANY_SITE_HOST,
} from "../data/company";

export const ANILAX_AUTH_URL = COMPANY_AUTH_URL;

function resolveAuthUrl() {
  if (typeof window === "undefined") return COMPANY_AUTH_URL;
  const host = window.location.hostname.toLowerCase();
  if (host === COMPANY_SITE_HOST || host === `www.${COMPANY_SITE_HOST}` || host === "localhost" || host === "127.0.0.1") {
    return new URL(COMPANY_AUTH_PATH, window.location.origin).toString();
  }
  return COMPANY_AUTH_URL;
}

const PROTECTED_API_HOSTS = new Set([COMPANY_SITE_HOST, `www.${COMPANY_SITE_HOST}`]);

export function isProtectedApiUrl(url) {
  try {
    const parsed = new URL(url, window.location.origin);
    const host = parsed.hostname.toLowerCase();
    if (!PROTECTED_API_HOSTS.has(host)) return false;
    return parsed.pathname.startsWith("/api/");
  } catch {
    return false;
  }
}

/** Send user to Anilax auth before any live API usage. */
export function redirectToAnilaxAuth(params = {}) {
  const url = new URL(resolveAuthUrl());
  const returnTo =
    params.returnTo ??
    `${window.location.origin}${window.location.pathname}${window.location.hash}`;

  url.searchParams.set("returnTo", returnTo);

  Object.entries(params).forEach(([key, value]) => {
    if (key === "returnTo" || value == null || value === "") return;
    url.searchParams.set(key, String(value));
  });

  window.location.assign(url.toString());
}

/** Block in-browser API calls from docs and route to auth. */
export function installDocsAuthGuard() {
  const nativeFetch = window.fetch.bind(window);

  window.fetch = (input, init) => {
    const reqUrl =
      typeof input === "string"
        ? input
        : input instanceof Request
          ? input.url
          : String(input);

    if (isProtectedApiUrl(reqUrl)) {
      redirectToAnilaxAuth({
        source: "docs",
        blocked: reqUrl,
        method: init?.method ?? (input instanceof Request ? input.method : "GET"),
      });
      return Promise.reject(new DOMException("Authentication required", "AbortError"));
    }

    return nativeFetch(input, init);
  };

  const onClick = (event) => {
    const anchor = event.target.closest?.("a[href]");
    if (!anchor || !anchor.href || !isProtectedApiUrl(anchor.href)) return;
    event.preventDefault();
    redirectToAnilaxAuth({ source: "docs", blocked: anchor.href });
  };

  const shell = document.querySelector(".docs-shell");
  shell?.addEventListener("click", onClick);

  return () => {
    window.fetch = nativeFetch;
    shell?.removeEventListener("click", onClick);
  };
}

export function authUrlWithContext({ source = "site", endpoint, method } = {}) {
  const url = new URL(resolveAuthUrl());
  url.searchParams.set("source", source);
  if (endpoint) url.searchParams.set("endpoint", endpoint);
  if (method) url.searchParams.set("method", method);
  return url.toString();
}
