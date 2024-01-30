/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import { JSX } from "solid-js";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlTitleProps {
  class?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: JSX.Element;
}

export function MjmlTitle({
  children,
  ...props
}: IMjmlTitleProps): JSX.Element {
  const useProps = convertPropsToMjmlAttributes(props);

  return <mj-title {...useProps} children={children} />;
}
