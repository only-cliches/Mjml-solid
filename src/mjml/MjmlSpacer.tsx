/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import type * as CSS from "csstype";
import { JSX } from "solid-js";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlSpacerProps {
  border?: CSS.Properties["border"];
  borderBottom?: string;
  borderLeft?: string;
  borderRight?: string;
  borderTop?: string;
  containerBackgroundColor?: string;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  padding?: string | number;
  /** MJML default value: 20px */
  height?: string | number;
  class?: string;
  cssClass?: string;
  mjmlClass?: string;
}

export function MjmlSpacer(props: IMjmlSpacerProps): JSX.Element {
  const useProps = convertPropsToMjmlAttributes(props);

  return <mj-spacer {...useProps} />;
}
