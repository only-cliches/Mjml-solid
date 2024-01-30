/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import type * as CSS from "csstype";
import { JSX } from "solid-js";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlSocialProps {
  /** MJML default value: center */
  align?: "left" | "right" | "center";
  borderRadius?: CSS.Properties["borderRadius"];
  containerBackgroundColor?: string;
  /** MJML default value: #333333 */
  color?: CSS.Properties["color"];
  fontFamily?: string;
  fontSize?: string | number;
  fontStyle?: string;
  fontWeight?: string;
  iconSize?: string | number;
  iconHeight?: string | number;
  iconPadding?: string | number;
  innerPadding?: string | number;
  lineHeight?: string | number;
  /** MJML default value: horizontal */
  mode?: "horizontal" | "vertical";
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  /** MJML default value: 10px 25px */
  padding?: string | number;
  tableLayout?: "auto" | "fixed";
  textPadding?: string | number;
  textDecoration?: CSS.Properties["textDecoration"];
  verticalAlign?: "top" | "bottom" | "middle";
  class?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: JSX.Element;
}

export function MjmlSocial({
  children,
  ...props
}: IMjmlSocialProps): JSX.Element {
  const useProps = convertPropsToMjmlAttributes(props);

  return <mj-social {...useProps} children={children} />;
}
