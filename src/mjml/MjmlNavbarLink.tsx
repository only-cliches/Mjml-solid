/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import type * as CSS from "csstype";
import { JSX } from "solid-js";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlNavbarLinkProps {
  /** MJML default value: #000000 */
  color?: CSS.Properties["color"];
  fontFamily?: string;
  fontSize?: string | number;
  fontStyle?: string;
  fontWeight?: string;
  href?: string;
  name?: string;
  /** MJML default value: _blank */
  target?: string;
  rel?: string;
  letterSpacing?: string | number;
  lineHeight?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  /** MJML default value: 15px 10px */
  padding?: string | number;
  textDecoration?: CSS.Properties["textDecoration"];
  textTransform?: CSS.Properties["textTransform"];
  class?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: JSX.Element;
}

export function MjmlNavbarLink({
  children,
  ...props
}: IMjmlNavbarLinkProps): JSX.Element {
  const useProps = convertPropsToMjmlAttributes(props);

  return <mj-navbar-link {...useProps} children={children} />;
}
