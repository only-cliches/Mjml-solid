/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import { JSX } from "solid-js";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlHeadProps {
  class?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: JSX.Element;
}

export function MjmlHead({ children, ...props }: IMjmlHeadProps): JSX.Element {
  const useProps = convertPropsToMjmlAttributes(props);

  return <mj-head {...useProps} children={children} />;
}
