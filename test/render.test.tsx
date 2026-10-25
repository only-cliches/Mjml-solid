import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlRaw,
  MjmlSection,
  MjmlSocial,
  MjmlSocialElement,
  MjmlTitle,
  render,
} from "mjml-solid";

describe("render()", () => {
  it("should render the HTML with MJML's async compiler", async () => {
    const email = (
      <Mjml>
        <MjmlHead>
          <MjmlTitle>Title</MjmlTitle>
        </MjmlHead>
        <MjmlBody>
          <MjmlRaw innerHTML="<p>Paragraph</p>"></MjmlRaw>
        </MjmlBody>
      </Mjml>
    );
    const result = render(email, { minify: true });
    expect(result).toBeInstanceOf(Promise);

    const { html, json, errors } = await result;
    expect(html).toBeDefined();
    expect(html).toContain("<!doctype html>");
    expect(html).toContain("<title>Title</title>");
    expect(html).toContain("<p>Paragraph</p>");
    expect(json.tagName).toBe("mjml");
    expect(errors).toEqual([]);
  });

  it("should throw an error if invalid markup is given", async () => {
    const email = (
      <Mjml>
        <MjmlBody>
          <div>Ooops!</div>
        </MjmlBody>
      </Mjml>
    );
    await expect(render(email)).rejects.toThrow(
      "Element div doesn't exist or is not registered"
    );
  });

  it("should not throw an error if soft validation level is passed", async () => {
    const email = (
      <Mjml>
        <MjmlBody>
          <div>Ooops!</div>
        </MjmlBody>
      </Mjml>
    );
    const { errors } = await render(email, {
      validationLevel: "soft",
      minify: false,
    });
    expect(errors).toHaveLength(1);
    expect(errors![0]!.message).toContain(
      "Element div doesn't exist or is not registered"
    );
  });

  it("should compile attributes added in MJML 5", async () => {
    const { html, errors } = await render(
      <Mjml dir="rtl">
        <MjmlBody id="message-body">
          <MjmlSection gutter={12}>
            <MjmlColumn>
              <MjmlSocial border="1px solid #000">
                <MjmlSocialElement border="0">Social</MjmlSocialElement>
              </MjmlSocial>
            </MjmlColumn>
          </MjmlSection>
        </MjmlBody>
      </Mjml>
    );

    expect(errors).toEqual([]);
    expect(html).toContain('<html lang="und" dir="rtl"');
    expect(html).toMatch(/<body\s+id="message-body"/);
  });
});
