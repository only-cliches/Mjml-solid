/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import React from "react";

import {
  convertPropsToMjmlAttributes,
  Matrix,
  Pixel,
  Percentage,
} from "../utils";

export interface IMjmlSocialElementProps {
  align?: "left" | "center" | "right";
  backgroundColor?: React.CSSProperties["backgroundColor"];
  color?: React.CSSProperties["color"];
  borderRadius?: React.CSSProperties["borderRadius"];
  fontFamily?: string;
  fontSize?: Pixel;
  fontStyle?: string;
  fontWeight?: string;
  href?: string;
  iconSize?: Pixel | Percentage;
  iconHeight?: Pixel | Percentage;
  iconPadding?: Matrix<Pixel | Percentage>;
  lineHeight?: Pixel | Percentage;
  name?: string;
  paddingBottom?: Pixel | Percentage;
  paddingLeft?: Pixel | Percentage;
  paddingRight?: Pixel | Percentage;
  paddingTop?: Pixel | Percentage;
  padding?: Matrix<Pixel | Percentage>;
  textPadding?: Matrix<Pixel | Percentage>;
  rel?: string;
  src?: string;
  srcset?: string;
  sizes?: string;
  alt?: string;
  title?: string;
  target?: string;
  textDecoration?: React.CSSProperties["textDecoration"];
  verticalAlign?: React.CSSProperties["verticalAlign"];
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
}

export function MjmlSocialElement({
  children,
  ...props
}: IMjmlSocialElementProps): JSX.Element {
  return React.createElement(
    "mj-social-element",
    convertPropsToMjmlAttributes(props),
    children
  );
}