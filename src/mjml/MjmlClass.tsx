/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import { JSX } from "solid-js";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlClassProps {
  name?: string;
  [prop: string]: string | undefined;
}

export function MjmlClass(props: IMjmlClassProps): JSX.Element {
  const useProps = convertPropsToMjmlAttributes(props);

  return <mj-class {...useProps} />;
}
