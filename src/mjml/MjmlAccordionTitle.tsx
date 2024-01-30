/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import type * as CSS from "csstype";
import { JSX } from "solid-js";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlAccordionTitleProps {
  backgroundColor?: CSS.Properties["backgroundColor"];
  color?: CSS.Properties["color"];
  fontSize?: string | number;
  fontFamily?: string;
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

export function MjmlAccordionTitle({
  children,
  ...props
}: IMjmlAccordionTitleProps): JSX.Element {
  const useProps = convertPropsToMjmlAttributes(props);

  return <mj-accordion-title {...useProps} children={children} />;
}
