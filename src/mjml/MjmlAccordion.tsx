/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import type * as CSS from "csstype";
import { JSX } from "solid-js";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlAccordionProps {
  containerBackgroundColor?: string;
  /** MJML default value: 2px solid black */
  border?: CSS.Properties["border"];
  fontFamily?: string;
  iconAlign?: "top" | "middle" | "bottom";
  iconWidth?: string | number;
  iconHeight?: string | number;
  iconWrappedUrl?: string;
  iconWrappedAlt?: string;
  iconUnwrappedUrl?: string;
  iconUnwrappedAlt?: string;
  iconPosition?: "left" | "right";
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  /** MJML default value: 10px 25px */
  padding?: string | number;
  class?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: JSX.Element;
}

export function MjmlAccordion({
  children,
  ...props
}: IMjmlAccordionProps): JSX.Element {
  const useProps = convertPropsToMjmlAttributes(props);

  return <mj-accordion {...useProps} children={children} />;
}
