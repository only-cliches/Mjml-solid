/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import type * as CSS from "csstype";
import { JSX } from "solid-js";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlImageProps {
  alt?: string;
  href?: string;
  name?: string;
  src?: string;
  srcset?: string;
  sizes?: string;
  title?: string;
  rel?: string;
  /** MJML default value: center */
  align?: "left" | "center" | "right";
  /** MJML default value: 0 */
  border?: CSS.Properties["border"];
  borderBottom?: string;
  borderLeft?: string;
  borderRight?: string;
  borderTop?: string;
  borderRadius?: CSS.Properties["borderRadius"];
  containerBackgroundColor?: string;
  fluidOnMobile?: boolean;
  /** MJML default value: 10px 25px */
  padding?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  /** MJML default value: _blank */
  target?: string;
  width?: string | number;
  /** MJML default value: auto */
  height?: string | number;
  maxHeight?: string | number;
  fontSize?: string | number;
  usemap?: string;
  class?: string;
  cssClass?: string;
  mjmlClass?: string;
}

export function MjmlImage(props: IMjmlImageProps): JSX.Element {
  const useProps = convertPropsToMjmlAttributes(props);

  return <mj-image {...useProps} />;
}
