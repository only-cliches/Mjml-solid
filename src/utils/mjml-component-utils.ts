import kebabCase from "lodash.kebabcase";

// const DANGEROUSLY_SET_INNER_HTML = "dangerouslySetInnerHTML";

export function convertPropsToMjmlAttributes<P>(props: {
  [K in keyof P]: unknown;
}) {
  const mjmlProps = Object.entries(props).reduce((mjmlProps, [prop, value]) => {
    const mjmlProp =
      ["innerHTML", "textContent"].indexOf(prop) !== -1
        ? prop
        : kebabCase(prop);
    const mjmlValue =
      ["innerHTML", "textContent"].indexOf(prop) !== -1
        ? value
        : convertPropValueToMjml(mjmlProp, value);

    if (mjmlValue === undefined || prop === "className") {
      return mjmlProps;
    }
    if (prop === "mjmlClass") {
      mjmlProps["mj-class"] = mjmlValue as any;
    } else {
      mjmlProps[mjmlProp] = mjmlValue as any;
    }
    return mjmlProps;
  }, {} as Record<string, string | object>);

  // className is a special prop used extensively in react in place of the html class attribute.
  // mjml uses a different name (css-class) for the same thing.
  const className = (props as any).class;
  if (typeof className === "string") {
    mjmlProps["css-class"] =
      typeof mjmlProps["css-class"] === "string"
        ? joinClassNames(mjmlProps["css-class"], className)
        : className;
  }

  return mjmlProps;
}

const booleanToString = ["inline", "full-width"];
const numberToPixel = [
  "width",
  "height",
  "border-radius",
  "border-width",
  "background-size",
  "padding",
  "padding-top",
  "padding-right",
  "padding-bottom",
  "padding-left",
  "font-size",
  "letter-spacing",
  "line-height",
  "icon-padding",
  "text-padding",
];

function convertPropValueToMjml(
  name: string,
  value: unknown
): string | object | undefined {
  // This assumes that all numbers will be pixels which might not always be the case
  if (typeof value === "number" && numberToPixel.includes(name)) {
    return `${value}px`;
  }
  if (typeof value === "boolean" && booleanToString.includes(name)) {
    return name;
  }
  if (typeof value === "object" && value !== null) {
    return value;
  }
  if (typeof value === "string") {
    return value;
  }
  return;
}

function joinClassNames(...classNames: string[]) {
  return classNames.join(" ").trim();
}
