import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlHero,
  MjmlSection,
  MjmlText,
  render,
  renderToMjml,
} from "../../dist/index.js";

const email = (
  <Mjml>
    <mj-body>
      <mj-section>
        <mj-column>
          <mj-text>Hello from ambient types</mj-text>
        </mj-column>
      </mj-section>
    </mj-body>
  </Mjml>
);

const mjmlPromise: Promise<string> = renderToMjml(email);
void mjmlPromise;

const wrappedEmail = (
  <Mjml>
    <MjmlBody>
      <MjmlSection>
        <MjmlColumn>
          <MjmlText>Hello from components</MjmlText>
        </MjmlColumn>
      </MjmlSection>
    </MjmlBody>
  </Mjml>
);

void renderToMjml(wrappedEmail);

void render(wrappedEmail, {
  minify: true,
  sanitizeStyles: true,
  allowMixedSyntax: true,
  templateSyntax: [{ prefix: "{{", suffix: "}}" }],
}).then(({ html, json, errors }) => {
  void html;
  void json;
  void errors;
});

void (
  <MjmlHero
    // @ts-expect-error Removed from mj-hero in MJML 5.
    containerBackgroundColor="#fff"
  />
);
