import mjml2html from "mjml";
import type { MJMLParseResults, MJMLParsingOptions } from "mjml-core";
import { renderToMjml } from "./dist/index.js";
import type { JSX } from "solid-js";

export const renderSolidEmail = async (email: JSX.Element, options?: MJMLParsingOptions): Promise<MJMLParseResults> => {
    const mjmlSrc = await renderToMjml(email);
    return mjml2html(mjmlSrc, options);
}

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
} from "./dist/index.js";

renderSolidEmail(
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
).then(({ html, json, errors }) => {
    console.log(html, json, errors);
}).catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
});
