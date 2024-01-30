import { JSX } from "solid-js";
import { renderToStringAsync, renderToString } from "solid-js/web";

export function renderToMjml(email: JSX.Element): string {
  if (typeof email == "undefined" || email == null) return "";
  return renderToString(() => email, {});
}

export async function renderToMjmlAsync(email: JSX.Element): Promise<string> {
  if (typeof email == "undefined" || email == null) return "";
  return await renderToStringAsync(() => email, {});
}
