/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import type * as CSS from "csstype";
import { JSX } from "solid-js";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlColumnProps {
  backgroundColor?: CSS.Properties["backgroundColor"];
  border?: CSS.Properties["border"];
  borderBottom?: string;
  borderLeft?: string;
  borderRadius?: CSS.Properties["borderRadius"];
  borderRight?: string;
  borderTop?: string;
  /** MJML default value: ltr */
  direction?: "ltr" | "rtl";
  innerBackgroundColor?: string;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  innerBorder?: string;
  innerBorderBottom?: string;
  innerBorderLeft?: string;
  innerBorderRadius?: string | number;
  innerBorderRight?: string;
  innerBorderTop?: string;
  padding?: string | number;
  verticalAlign?: "top" | "bottom" | "middle";
  width?: string | number;
  class?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: JSX.Element;
}

export function MjmlColumn({
  children,
  ...props
}: IMjmlColumnProps): JSX.Element {
  const useProps = convertPropsToMjmlAttributes(props);

  return <mj-column {...useProps} children={children} />;
}
