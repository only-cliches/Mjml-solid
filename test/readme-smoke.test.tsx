import {
  Mjml,
  MjmlBody,
  MjmlButton,
  MjmlColumn,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlTitle,
  MjmlComment,
  MjmlConditionalComment,
  MjmlHtml,
  MjmlTrackingPixel,
  namedEntityToHexCode,
  render,
  renderToMjml,
  renderToMjmlAsync,
} from "mjml-solid";

describe("README examples", () => {
  it("renders the getting started example with the package root exports", async () => {
    const email = (
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
      </Mjml>
    );

    const mjml = renderToMjml(email);
    const asyncMjml = await renderToMjmlAsync(email);
    const { html } = render(email, { validationLevel: "soft" });

    expect(mjml).toContain("<mjml");
    expect(mjml).toContain("<mj-title >Last Minute Offer</mj-title>");
    expect(asyncMjml).toBe(mjml);
    expect(html).toContain("<title>Last Minute Offer</title>");
    expect(html).toContain("I like it!");
  });

  it("renders the extension examples", () => {
    expect(renderToMjml(<MjmlComment comment="Built with Solid." />)).toBe(
      "<mj-raw><!--Built with Solid.--></mj-raw>"
    );

    expect(
      renderToMjml(
        <MjmlConditionalComment comment="MSO conditionals" condition="if IE" />
      )
    ).toBe(
      "<mj-raw><!--[if IE]>MSO conditionals<![endif]--></mj-raw>"
    );

    expect(renderToMjml(<MjmlHtml html="<span>Hello World!</span>" />)).toBe(
      "<mj-raw><span>Hello World!</span></mj-raw>"
    );

    expect(
      renderToMjml(<MjmlTrackingPixel src="tracking-pixel" />)
    ).toContain('src="tracking-pixel"');
  });

  it("renders the named entity helper example", () => {
    expect(namedEntityToHexCode("<div>&apos;</div>")).toBe("<div>&#39;</div>");
  });
});
