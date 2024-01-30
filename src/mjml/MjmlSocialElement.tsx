/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import type * as CSS from "csstype";
import { JSX } from "solid-js";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlSocialElementProps {
  /** MJML default value: left */
  align?: "left" | "center" | "right";
  backgroundColor?: CSS.Properties["backgroundColor"];
  /** MJML default value: #000 */
  color?: CSS.Properties["color"];
  borderRadius?: CSS.Properties["borderRadius"];
  fontFamily?: string;
  fontSize?: string | number;
  fontStyle?: string;
  fontWeight?: string;
  href?: string;
  iconSize?: string | number;
  iconHeight?: string | number;
  iconPadding?: string | number;
  lineHeight?: string | number;
  name?: string;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  /** MJML default value: 4px */
  padding?: string | number;
  textPadding?: string | number;
  rel?: string;
  src?: string;
  srcset?: string;
  sizes?: string;
  alt?: string;
  title?: string;
  /** MJML default value: _blank */
  target?: string;
  textDecoration?: CSS.Properties["textDecoration"];
  verticalAlign?: "top" | "middle" | "bottom";
  class?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: JSX.Element;
}

export function MjmlSocialElement({
  children,
  ...props
}: IMjmlSocialElementProps): JSX.Element {
  const useProps = convertPropsToMjmlAttributes(props);

  return <mj-social-element {...useProps} children={children} />;
}
