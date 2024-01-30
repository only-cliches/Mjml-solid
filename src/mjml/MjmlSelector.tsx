/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import { JSX } from "solid-js";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlSelectorProps {
  children?: JSX.Element;
  path?: string;
}

export function MjmlSelector({
  children,
  ...props
}: IMjmlSelectorProps): JSX.Element {
  const useProps = convertPropsToMjmlAttributes(props);

  return <mj-selector {...useProps} children={children} />;
}
