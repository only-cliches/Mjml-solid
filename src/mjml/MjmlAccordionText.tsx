/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import type * as CSS from "csstype";
import { JSX } from "solid-js";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlAccordionTextProps {
  backgroundColor?: CSS.Properties["backgroundColor"];
  fontSize?: string | number;
  fontFamily?: string;
  fontWeight?: string;
  letterSpacing?: string | number;
  lineHeight?: string | number;
  color?: CSS.Properties["color"];
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  /** MJML default value: 16px */
  padding?: string | number;
  class?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: JSX.Element;
}

export function MjmlAccordionText({
  children,
  ...props
}: IMjmlAccordionTextProps): JSX.Element {
  const useProps = convertPropsToMjmlAttributes(props);

  return <mj-accordion-text {...useProps} children={children} />;
}
