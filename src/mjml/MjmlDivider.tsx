/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import type * as CSS from "csstype";
import { JSX } from "solid-js";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlDividerProps {
  borderColor?: CSS.Properties["borderColor"];
  borderStyle?: CSS.Properties["borderStyle"];
  borderWidth?: string | number;
  containerBackgroundColor?: string;
  /** MJML default value: 10px 25px */
  padding?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  /** MJML default value: 100% */
  width?: string | number;
  /** MJML default value: center */
  align?: "left" | "center" | "right";
  class?: string;
  cssClass?: string;
  mjmlClass?: string;
}

export function MjmlDivider(props: IMjmlDividerProps): JSX.Element {
  const useProps = convertPropsToMjmlAttributes(props);

  return <mj-divider {...useProps} />;
}
