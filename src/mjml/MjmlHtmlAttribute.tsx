/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import { JSX } from "solid-js";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlHtmlAttributeProps {
  children?: JSX.Element;
  name?: string;
}

export function MjmlHtmlAttribute({
  children,
  ...props
}: IMjmlHtmlAttributeProps): JSX.Element {
  const useProps = convertPropsToMjmlAttributes(props);

  return <mj-html-attribute {...useProps} children={children} />;
}
