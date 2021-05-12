/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */

import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

interface IProps {
  alt?: string;
  href?: string;
  name?: string;
  src?: string;
  srcset?: string;
  sizes?: string;
  title?: string;
  rel?: string;
  align?: string;
  border?: React.CSSProperties["border"];
  borderBottom?: string;
  borderLeft?: string;
  borderRight?: string;
  borderTop?: string;
  borderRadius?: React.CSSProperties["borderRadius"];
  containerBackgroundColor?: string;
  fluidOnMobile?: boolean;
  padding?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  target?: string;
  width?: string | number;
  height?: string | number;
  maxHeight?: string | number;
  fontSize?: string | number;
  usemap?: string;
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
}

export const MjmlImage: React.FC<IProps> = ({ children, ...props }) => {
  return React.createElement(
    "mj-image",
    convertPropsToMjmlAttributes(props),
    children
  );
};
