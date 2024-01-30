/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import { JSX } from "solid-js";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlProps {
  children?: JSX.Element;
  owa?: string;
  lang?: string;
}

export function Mjml({ children, ...props }: IMjmlProps): JSX.Element {
  const useProps = convertPropsToMjmlAttributes(props);

  return <mjml {...useProps} children={children} />;
}
