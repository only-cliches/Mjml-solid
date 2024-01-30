/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import { JSX } from "solid-js";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlStyleProps {
  inline?: boolean;
  innerHTML?: string;
  textContent?: string;
}

export function MjmlStyle(props: IMjmlStyleProps): JSX.Element {
  const useProps = convertPropsToMjmlAttributes(props);

  return <mj-style {...useProps} />;
}
