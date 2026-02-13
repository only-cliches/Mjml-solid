/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import type * as CSS from "csstype";
import { JSX } from "solid-js";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlCarouselProps {
  /** MJML default value: center */
  align?: "left" | "center" | "right";
  borderRadius?: CSS.Properties["borderRadius"];
  containerBackgroundColor?: string;
  iconWidth?: string | number;
  leftIcon?: string;
  padding?: string | number;
  paddingTop?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  rightIcon?: string;
  /** MJML default value: visible */
  thumbnails?: "visible" | "hidden" | "supported";
  tbBorder?: string;
  tbBorderRadius?: string | number;
  tbHoverBorderColor?: string;
  tbSelectedBorderColor?: string;
  tbWidth?: string | number;
  class?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: JSX.Element;
}

export function MjmlCarousel({
  children,
  ...props
}: IMjmlCarouselProps): JSX.Element {
  const useProps = convertPropsToMjmlAttributes(props);

  return <mj-carousel {...useProps} children={children} />;
}
