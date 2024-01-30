/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import { JSX } from "solid-js";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlIncludeProps {
  path?: string;
}

export function MjmlInclude(props: IMjmlIncludeProps): JSX.Element {
  const useProps = convertPropsToMjmlAttributes(props);

  return <mj-include {...useProps} />;
}
