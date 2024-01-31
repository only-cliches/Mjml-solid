Fork of [mjml-react](https://www.npmjs.com/package/@faire/mjml-react) for [solid-js](https://www.npmjs.com/package/solid-js)

# mjml-solid &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/only-cliches/Mjml-solid/blob/master/LICENSE) <a href="https://www.npmjs.com/package/mjml-solid"><img src="https://img.shields.io/npm/v/mjml-solid" alt="npm version"></a> [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/only-cliches/Mjml-solid/)

<img src="https://cdn.worldvectorlogo.com/logos/mjml-by-mailjet.svg" height="64"/>

There is an awesome library [mjml](https://mjml.io/) with github repo here [https://github.com/mjmlio/mjml](https://github.com/mjmlio/mjml).

`MJML` is a markup language created by [Mailjet](https://www.mailjet.com/).
So in order to create emails on the fly we created a library with `Solid` components.

> This library depends on Solid's `renderToString` method, which is only availble in NodeJS.
> It might be possible to run this library in the browser, but it's not supported.

## Getting Started

```bash
npm install mjml-solid mjml solid-js
```

1. Wire up your render function

```tsx
import { renderToMjml, renderToMjmlAsync } from "mjml-solid/utils/renderToMjml";
import mjml2html from "mjml";
import { MJMLParseResults } from "mjml-core";
import { JSX } from "solid-js";

// sync
export function renderSolidEmail(email: JSX.Element): MJMLParseResults {
  return mjml2html(renderToMjml(email));
}

// async
export async function renderSolidEmailAsync(email: JSX.Element): Promise<MJMLParseResults> {
  const  mjmlSrc = await renderToMjmlAsync(email);
  return mjml2html(mjmlSrc);
}
```

2. And afterwards write a code like a pro:

```tsx
import {
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlPreview,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlButton,
  MjmlImage,
} from "mjml-solid";

import { renderSolidEmail } from "./renderSolidEmail";

const { html, errors } = renderSolidEmail(
  <Mjml>
    <MjmlHead>
      <MjmlTitle>Last Minute Offer</MjmlTitle>
      <MjmlPreview>Last Minute Offer...</MjmlPreview>
    </MjmlHead>
    <MjmlBody width={500}>
      <MjmlSection fullWidth backgroundColor="#efefef">
        <MjmlColumn>
          <MjmlImage src="https://static.wixstatic.com/media/5cb24728abef45dabebe7edc1d97ddd2.jpg" />
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection>
        <MjmlColumn>
          <MjmlButton
            padding="20px"
            backgroundColor="#346DB7"
            href="https://www.wix.com/"
          >
            I like it!
          </MjmlButton>
        </MjmlColumn>
      </MjmlSection>
    </MjmlBody>
  </Mjml>,
  { validationLevel: "soft" }
);
```

And as the result you will get a nice looking email HTML (works in mobile too!)

![preview](https://user-images.githubusercontent.com/10008149/41058394-59b8ce9e-69d2-11e8-9eb9-c294f35bae9f.png)

## Options

mjml-solid sets the following MJML options when rendering to HTML:

```js
{
  keepComments: false,
  beautify: false,
  minify: true,
  validationLevel: 'strict'
}
```

If you want to override these, you can pass an object to `render` as a second argument. See the [MJML docs](https://documentation.mjml.io/#inside-node-js) for the full list of options you can set.

## Extensions

```js
import {
  MjmlHtml,
  MjmlComment,
  MjmlConditionalComment
} from 'mjml-solid/extensions';

<MjmlComment comment="Built with ... at ..." />
// <!--Built with ... at ...-->

<MjmlConditionalComment comment="MSO conditionals" />
// <!--[if gte mso 9]>MSO conditionals<![endif]-->

<MjmlConditionalComment comment="MSO conditionals" condition="if IE" />
// <!--[if IE]>MSO conditionals<![endif]-->

<MjmlHtml html="<span>Hello World!</span>" />
// <span>Hello World!</span>
```

## Utils

We do have also some utils for post processing the output HTML.
Because not all mail clients do support named HTML entities, like `&apos;`.
So we need to replace them to hex.

```js
import {
  namedEntityToHexCode,
  fixConditionalComment,
} from "mjml-solid/utils";

const html = "<div>&apos;</div>";
namedEntityToHexCode(html);
// <div>&#39;</div>

fixConditionalComment(
  "<!--[if mso]><div>Hello World</div><![endif]-->",
  "Hello",
  "if IE"
);
// <!--[if IE]><div>Hello World</div><![endif]-->
```

## Limitations

Currently `mjml` and `mjml-solid` libraries are meant to be run inside a node.
