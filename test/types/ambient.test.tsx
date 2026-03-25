import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlSection,
  MjmlText,
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

void renderToMjml(email);

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
