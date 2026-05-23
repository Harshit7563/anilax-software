import { useEffect } from "react";
import { ApiDocumentation } from "../components/docs/ApiDocumentation";
import { installDocsAuthGuard } from "../lib/anilaxAuth";

export function DocsPage() {
  useEffect(() => installDocsAuthGuard(), []);
  return <ApiDocumentation />;
}
