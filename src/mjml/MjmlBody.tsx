/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import type * as CSS from "csstype";
import { JSX } from "solid-js";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlBodyProps {
  /** MJML default value: 600px */
  width?: string | number;
  backgroundColor?: CSS.Properties["backgroundColor"];
  class?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: JSX.Element;
}

export function MjmlBody({ children, ...props }: IMjmlBodyProps): JSX.Element {
  const useProps = convertPropsToMjmlAttributes(props);

  return <mj-body {...useProps} children={children} />;
}
