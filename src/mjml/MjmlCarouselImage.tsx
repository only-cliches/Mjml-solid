/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import type * as CSS from "csstype";
import { JSX } from "solid-js";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlCarouselImageProps {
  alt?: string;
  href?: string;
  rel?: string;
  /** MJML default value: _blank */
  target?: string;
  title?: string;
  src?: string;
  thumbnailsSrc?: string;
  borderRadius?: CSS.Properties["borderRadius"];
  tbBorder?: string;
  tbBorderRadius?: string | number;
  class?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: JSX.Element;
}

export function MjmlCarouselImage({
  children,
  ...props
}: IMjmlCarouselImageProps): JSX.Element {
  const useProps = convertPropsToMjmlAttributes(props);

  return <mj-carousel-image {...useProps} children={children} />;
}
