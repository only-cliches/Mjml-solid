import * as mjmlComponents from "mjml-solid";
import { renderToMjml } from "mjml-solid";

import { minifyHTML } from "./__mockData__/mockMjmlReactTestData";

/**
 * Test focused on prop values. The component used for testing the prop
 * is arbitrary.
 */
describe("mjml components prop values", () => {
  it("should render component with dangerouslySetInnerHTML prop", async () => {
    expect(
      minifyHTML(
        await renderToMjml(
          <mjmlComponents.MjmlRaw
            // eslint-disable-next-line react/no-danger
            innerHTML="<div>hello World</div>"
          />
        )
      )
    ).toBe(`<mj-raw><div>hello World</div></mj-raw>`);
  });

  it("incorrect prop value should throw TS error", async () => {
    expect(
      minifyHTML(
        await renderToMjml(
          <mjmlComponents.MjmlRaw
            // @ts-expect-error prop should be invalid for test purposes
            iAmNotAProp="random"
          />
        )
      )
    ).toBe(`<mj-raw i-am-not-a-prop="random"></mj-raw>`);
  });

  it("fullWidth and inline props convert to string", async () => {
    expect(
      minifyHTML(await renderToMjml(<mjmlComponents.MjmlSection fullWidth />))
    ).toBe(`<mj-section full-width="full-width"></mj-section>`);
    expect(minifyHTML(await renderToMjml(<mjmlComponents.MjmlStyle inline />))).toBe(
      `<mj-style inline="inline"></mj-style>`
    );
  });

  it("supports attributes added in MJML 5", async () => {
    expect(
      minifyHTML(await renderToMjml(<mjmlComponents.Mjml dir="rtl" />))
    ).toBe('<mjml dir="rtl"></mjml>');
    expect(
      minifyHTML(
        await renderToMjml(<mjmlComponents.MjmlWrapper gutter={8} />)
      )
    ).toBe('<mj-wrapper gutter="8px"></mj-wrapper>');

    expect(
      minifyHTML(
        await renderToMjml(
          <mjmlComponents.MjmlBody id="message-body">
            <mjmlComponents.MjmlSection gutter={12}>
              <mjmlComponents.MjmlSocial border="1px solid #000">
                <mjmlComponents.MjmlSocialElement border="0" />
              </mjmlComponents.MjmlSocial>
            </mjmlComponents.MjmlSection>
          </mjmlComponents.MjmlBody>
        )
      )
    ).toBe(
      '<mj-body id="message-body"><mj-section gutter="12px"><mj-social border="1px solid #000"><mj-social-element border="0"></mj-social-element></mj-social></mj-section></mj-body>'
    );
  });

  it("merges cssClass and class into css-class and maps mjmlClass", async () => {
    expect(
      minifyHTML(
        await renderToMjml(
          <mjmlComponents.MjmlSection
            class="from-class"
            cssClass="from-css"
            mjmlClass="from-mjml"
          />
        )
      )
    ).toBe(
      '<mj-section css-class="from-css from-class" mj-class="from-mjml"></mj-section>'
    );
  });

  it("enum prop type accepts all enum values", async () => {
    const { MjmlTable } = mjmlComponents;
    expect(minifyHTML(await renderToMjml(<MjmlTable align="left" />))).toBe(
      `<mj-table align="left"></mj-table>`
    );
    expect(minifyHTML(await renderToMjml(<MjmlTable align="right" />))).toBe(
      `<mj-table align="right"></mj-table>`
    );
    expect(minifyHTML(await renderToMjml(<MjmlTable align="center" />))).toBe(
      `<mj-table align="center"></mj-table>`
    );

    // Test with invalid props. Code should still render but typescript should
    // throw an error
    // @ts-expect-error invalid align prop for test purposes
    expect(minifyHTML(await renderToMjml(<MjmlTable align="unknown" />))).toBe(
      `<mj-table align="unknown"></mj-table>`
    );
  });

  it("padding accepts px, percent, and ephemeral units", async () => {
    const { MjmlButton } = mjmlComponents;
    const buttonNoUnit = <MjmlButton padding="0">No unit</MjmlButton>;
    const buttonPx = <MjmlButton letterSpacing="1px">Px</MjmlButton>;
    const buttonPercentage = <MjmlButton height="2%">Percent</MjmlButton>;
    const buttonEm = <MjmlButton letterSpacing="3em">Em</MjmlButton>;

    expect(minifyHTML(await renderToMjml(buttonNoUnit))).toBe(
      '<mj-button padding="0">No unit</mj-button>'
    );
    expect(minifyHTML(await renderToMjml(buttonPx))).toBe(
      '<mj-button letter-spacing="1px">Px</mj-button>'
    );
    expect(minifyHTML(await renderToMjml(buttonPercentage))).toBe(
      '<mj-button height="2%">Percent</mj-button>'
    );
    expect(minifyHTML(await renderToMjml(buttonEm))).toBe(
      '<mj-button letter-spacing="3em">Em</mj-button>'
    );
  });

  it("padding and other props convert number type props to pixel values", async () => {
    const { MjmlButton } = mjmlComponents;
    const button = (
      <MjmlButton padding={16} width={300} height={56}>
        Single num
      </MjmlButton>
    );
    expect(minifyHTML(await renderToMjml(button))).toBe(
      '<mj-button padding="16px" width="300px" height="56px">Single num</mj-button>'
    );
  });

  it("padding can accept matrix of props", async () => {
    const { MjmlButton } = mjmlComponents;
    expect(
      minifyHTML(await renderToMjml(<MjmlButton padding="0">Button1</MjmlButton>))
    ).toBe('<mj-button padding="0">Button1</mj-button>');
    expect(
      minifyHTML(await renderToMjml(<MjmlButton padding="0 1px">Button2</MjmlButton>))
    ).toBe('<mj-button padding="0 1px">Button2</mj-button>');
    expect(
      minifyHTML(
        await renderToMjml(<MjmlButton padding="0 1px 2%">Button3</MjmlButton>)
      )
    ).toBe('<mj-button padding="0 1px 2%">Button3</mj-button>');
    expect(
      minifyHTML(
        await renderToMjml(<MjmlButton padding="0 1px 2% 0px">Button4</MjmlButton>)
      )
    ).toBe('<mj-button padding="0 1px 2% 0px">Button4</mj-button>');
  });

  it("accepts correct property types for React.CSSProperties", async () => {
    const { MjmlColumn } = mjmlComponents;
    expect(
      minifyHTML(
        await renderToMjml(
          <MjmlColumn borderRadius="5px dashed blue">Column1</MjmlColumn>
        )
      )
    ).toBe('<mj-column border-radius="5px dashed blue">Column1</mj-column>');
  });

  it("object prop value type does make it to the component", async () => {
    const { MjmlSpacer } = mjmlComponents;
    expect(
      minifyHTML(
        await renderToMjml(
          // @ts-expect-error invalid prop value type of object on height
          <MjmlSpacer height={{ toString: () => "10px" }} />
        )
      )
    ).toBe('<mj-spacer height="10px"></mj-spacer>');
  });

  it("null prop value does not make it to the component", async () => {
    const { MjmlSpacer } = mjmlComponents;
    expect(
      minifyHTML(
        await renderToMjml(
          // @ts-expect-error invalid prop value type of object on height
          <MjmlSpacer height={null} />
        )
      )
    ).toBe("<mj-spacer></mj-spacer>");
  });
});
