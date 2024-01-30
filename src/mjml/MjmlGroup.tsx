/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import type * as CSS from "csstype";
import { JSX } from "solid-js";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlGroupProps {
  backgroundColor?: CSS.Properties["backgroundColor"];
  /** MJML default value: ltr */
  direction?: "ltr" | "rtl";
  verticalAlign?: "top" | "bottom" | "middle";
  width?: string | number;
  class?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: JSX.Element;
}

export function MjmlGroup({
  children,
  ...props
}: IMjmlGroupProps): JSX.Element {
  const useProps = convertPropsToMjmlAttributes(props);

  return <mj-group {...useProps} children={children} />;
}
