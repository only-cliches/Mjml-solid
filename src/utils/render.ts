import mjml2html from "mjml";
import type { MJMLParseResults, MJMLParsingOptions } from "mjml-core";
import type { JSX } from "solid-js";

import { renderToMjml } from "./renderToMjml";

export interface RenderOptions extends MJMLParsingOptions {
  /** Sanitize template variables before MJML 5 processes CSS. */
  sanitizeStyles?: boolean;
  /** Allow block and CSS template syntaxes in the same document. */
  allowMixedSyntax?: boolean;
  /** Template delimiters recognized when sanitizeStyles is enabled. */
  templateSyntax?: Array<{ prefix: string; suffix: string }>;
}

export async function render(
  email: JSX.Element,
  options: RenderOptions = {}
): Promise<MJMLParseResults> {
  const defaults: RenderOptions = {
    keepComments: false,
    beautify: false,
    validationLevel: "strict",
  };

  return mjml2html(await renderToMjml(email), {
    ...defaults,
    ...options,
  });
}
