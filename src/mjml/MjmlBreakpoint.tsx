/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import { JSX } from "solid-js";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlBreakpointProps {
  width?: string;
}

export function MjmlBreakpoint(props: IMjmlBreakpointProps): JSX.Element {
  const useProps = convertPropsToMjmlAttributes(props);

  return <mj-breakpoint {...useProps} />;
}
