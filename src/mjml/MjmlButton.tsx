/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import type * as CSS from "csstype";
import { JSX } from "solid-js";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlButtonProps {
  /** MJML default value: center */
  align?: "left" | "center" | "right";
  backgroundColor?: CSS.Properties["backgroundColor"];
  borderBottom?: string;
  borderLeft?: string;
  borderRadius?: CSS.Properties["borderRadius"];
  borderRight?: string;
  borderTop?: string;
  /** MJML default value: none */
  border?: CSS.Properties["border"];
  /** MJML default value: #ffffff */
  color?: CSS.Properties["color"];
  containerBackgroundColor?: string;
  fontFamily?: string;
  fontSize?: string | number;
  fontStyle?: string;
  fontWeight?: string;
  height?: string | number;
  href?: string;
  name?: string;
  title?: string;
  innerPadding?: string | number;
  letterSpacing?: string | number;
  lineHeight?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  /** MJML default value: 10px 25px */
  padding?: string | number;
  rel?: string;
  /** MJML default value: _blank */
  target?: string;
  textDecoration?: CSS.Properties["textDecoration"];
  textTransform?: CSS.Properties["textTransform"];
  verticalAlign?: "top" | "bottom" | "middle";
  textAlign?: "left" | "right" | "center";
  width?: string | number;
  class?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: JSX.Element;
}

export function MjmlButton({
  children,
  ...props
}: IMjmlButtonProps): JSX.Element {
  const useProps = convertPropsToMjmlAttributes(props);

  return <mj-button {...useProps} children={children} />;
}
