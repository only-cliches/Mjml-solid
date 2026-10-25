import type { JSX } from "solid-js";
import { renderToStringAsync } from "solid-js/web";

export async function renderToMjml(email: JSX.Element): Promise<string> {
  if (typeof email == "undefined" || email == null) return "";
  return renderToStringAsync(() => email, {});
}
