/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import type * as CSS from "csstype";
import { JSX } from "solid-js";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlTableProps {
  /** MJML default value: left */
  align?: "left" | "right" | "center";
  /** MJML default value: none */
  border?: CSS.Properties["border"];
  /** MJML default value: 0 */
  cellpadding?: string;
  /** MJML default value: 0 */
  cellspacing?: string;
  containerBackgroundColor?: string;
  /** MJML default value: #000000 */
  color?: CSS.Properties["color"];
  fontFamily?: string;
  fontSize?: string | number;
  fontWeight?: string;
  lineHeight?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  /** MJML default value: 10px 25px */
  padding?: string | number;
  role?: "none" | "presentation";
  tableLayout?: "auto" | "fixed" | "initial" | "inherit";
  verticalAlign?: "top" | "bottom" | "middle";
  /** MJML default value: 100% */
  width?: string | number;
  class?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: JSX.Element;
}

export function MjmlTable({
  children,
  ...props
}: IMjmlTableProps): JSX.Element {
  const useProps = convertPropsToMjmlAttributes(props);

  return <mj-table {...useProps} children={children} />;
}
