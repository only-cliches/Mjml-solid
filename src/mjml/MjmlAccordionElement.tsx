/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import type * as CSS from "csstype";
import { JSX } from "solid-js";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlAccordionElementProps {
  backgroundColor?: CSS.Properties["backgroundColor"];
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
  class?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: JSX.Element;
}

export function MjmlAccordionElement({
  children,
  ...props
}: IMjmlAccordionElementProps): JSX.Element {
  const useProps = convertPropsToMjmlAttributes(props);

  return <mj-accordion-element {...useProps} children={children} />;
}
