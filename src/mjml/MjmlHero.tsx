/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import type * as CSS from "csstype";
import { JSX } from "solid-js";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlHeroProps {
  /** MJML default value: fixed-height */
  mode?: string;
  /** MJML default value: 0px */
  height?: string | number;
  backgroundUrl?: string;
  backgroundWidth?: string | number;
  backgroundHeight?: string | number;
  backgroundPosition?: CSS.Properties["backgroundPosition"];
  borderRadius?: CSS.Properties["borderRadius"];
  containerBackgroundColor?: string;
  innerBackgroundColor?: string;
  innerPadding?: string | number;
  innerPaddingTop?: string | number;
  innerPaddingLeft?: string | number;
  innerPaddingRight?: string | number;
  innerPaddingBottom?: string | number;
  /** MJML default value: 0px */
  padding?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  backgroundColor?: CSS.Properties["backgroundColor"];
  verticalAlign?: "top" | "bottom" | "middle";
  class?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: JSX.Element;
}

export function MjmlHero({ children, ...props }: IMjmlHeroProps): JSX.Element {
  const useProps = convertPropsToMjmlAttributes(props);

  return <mj-hero {...useProps} children={children} />;
}
