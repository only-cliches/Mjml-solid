/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import { JSX } from "solid-js";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlRawProps {
  position?: "file-start";
  class?: string;
  cssClass?: string;
  mjmlClass?: string;
  innerHTML?: string;
  textContent?: string;
}

export function MjmlRaw(props: IMjmlRawProps): JSX.Element {
  const useProps = convertPropsToMjmlAttributes(props);

  return <mj-raw {...useProps} />;
}
