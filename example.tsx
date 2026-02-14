import mjml2html from "mjml";
import { MJMLParseResults, MJMLParsingOptions } from "mjml-core";
import { renderToMjml, renderToMjmlAsync } from "./dist/utils/renderToMjml";
import { JSX } from "solid-js";

// sync
export function renderSolidEmail(email: JSX.Element, options?: MJMLParsingOptions): MJMLParseResults {
    return mjml2html(renderToMjml(email), options);
}

// async
export async function renderSolidEmailAsync(
    email: JSX.Element
): Promise<MJMLParseResults> {
    const mjmlSrc = await renderToMjmlAsync(email);
    return mjml2html(mjmlSrc);
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
} from "./dist";

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