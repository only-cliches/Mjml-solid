/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import type * as CSS from "csstype";
import { JSX } from "solid-js";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlTextProps {
  /** MJML default value: left */
  align?: "left" | "right" | "center" | "justify";
  backgroundColor?: CSS.Properties["backgroundColor"];
  /** MJML default value: #000000 */
  color?: CSS.Properties["color"];
  containerBackgroundColor?: string;
  fontFamily?: string;
  fontSize?: string | number;
  fontStyle?: string;
  fontWeight?: string;
  height?: string | number;
  letterSpacing?: string | number;
  lineHeight?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  /** MJML default value: 10px 25px */
  padding?: string | number;
  textDecoration?: CSS.Properties["textDecoration"];
  textTransform?: CSS.Properties["textTransform"];
  verticalAlign?: "top" | "bottom" | "middle";
  class?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: JSX.Element;
}

export function MjmlText({ children, ...props }: IMjmlTextProps): JSX.Element {
  const useProps = convertPropsToMjmlAttributes(props);

  return <mj-text {...useProps} children={children} />;
}
