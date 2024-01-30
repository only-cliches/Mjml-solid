/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import type * as CSS from "csstype";
import { JSX } from "solid-js";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlSectionProps {
  backgroundColor?: CSS.Properties["backgroundColor"];
  backgroundUrl?: string;
  backgroundRepeat?: "repeat" | "no-repeat";
  backgroundSize?: CSS.Properties["backgroundSize"];
  backgroundPosition?: CSS.Properties["backgroundPosition"];
  backgroundPositionX?: string;
  backgroundPositionY?: string;
  border?: CSS.Properties["border"];
  borderBottom?: string;
  borderLeft?: string;
  borderRadius?: CSS.Properties["borderRadius"];
  borderRight?: string;
  borderTop?: string;
  /** MJML default value: ltr */
  direction?: "ltr" | "rtl";
  fullWidth?: boolean;
  /** MJML default value: 20px 0 */
  padding?: string | number;
  paddingTop?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  textAlign?: "left" | "center" | "right";
  textPadding?: string | number;
  class?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: JSX.Element;
}

export function MjmlSection({
  children,
  ...props
}: IMjmlSectionProps): JSX.Element {
  const useProps = convertPropsToMjmlAttributes(props);

  return <mj-section {...useProps} children={children} />;
}
