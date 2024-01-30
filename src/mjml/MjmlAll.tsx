/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import { JSX } from "solid-js";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlAllProps {
  class?: string;
  cssClass?: string;
  mjmlClass?: string;
  [prop: string]: string | undefined;
}

export function MjmlAll(props: IMjmlAllProps): JSX.Element {
  const useProps = convertPropsToMjmlAttributes(props);

  return <mj-all {...useProps} />;
}
