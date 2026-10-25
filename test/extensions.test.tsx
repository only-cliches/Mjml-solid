import {
  Mjml,
  MjmlBody,
  MjmlComment,
  MjmlConditionalComment,
  MjmlYahooStyle,
  MjmlTrackingPixel,
  MjmlHtml,
  renderToMjml,
} from "mjml-solid";

import { minifyHTML } from "./__mockData__/mockMjmlReactTestData";

describe("extensions", () => {
  describe("simple comment", () => {
    it("should render", async () => {
      const comment = (
        <MjmlComment comment="First, solve the problem. Then, write the code."></MjmlComment>
      );
      expect(minifyHTML(await renderToMjml(comment))).toBe(
        "<mj-raw><!--First, solve the problem. Then, write the code.--></mj-raw>"
      );
    });
    it("should not render if comment is empty", async () => {
      expect(minifyHTML(await renderToMjml(<MjmlComment />))).toBe("");
      expect(minifyHTML(await renderToMjml(<MjmlComment></MjmlComment>))).toBe("");
      expect(minifyHTML(await renderToMjml(<MjmlComment></MjmlComment>))).toBe("");
    });

    it("should render inside a full MJML tree", async () => {
      const email = (
        <Mjml>
          <MjmlBody>
            <MjmlComment comment="Comment tree" />
          </MjmlBody>
        </Mjml>
      );

      expect(minifyHTML(await renderToMjml(email))).toContain(
        "<mj-raw><!--Comment tree--></mj-raw>"
      );
    });
  });

  describe("conditional comment", () => {
    it("should render", async () => {
      const comment = (
        <MjmlConditionalComment comment="First, solve the problem. Then, write the code." />
      );
      expect(minifyHTML(await renderToMjml(comment))).toBe(
        "<mj-raw><!--[if gte mso 9]>First, solve the problem. Then, write the code.<![endif]--></mj-raw>"
      );
    });
    it("should allow changing condition", async () => {
      const comment = (
        <MjmlConditionalComment
          comment="First, solve the problem. Then, write the code."
          condition="if IE"
        />
      );
      expect(minifyHTML(await renderToMjml(comment))).toBe(
        "<mj-raw><!--[if IE]>First, solve the problem. Then, write the code.<![endif]--></mj-raw>"
      );
    });
    it("should not render if comment is empty", async () => {
      expect(minifyHTML(await renderToMjml(<MjmlConditionalComment />))).toBe("");
    });
  });

  describe("yahoo style", () => {
    it("should render", async () => {
      expect(
        minifyHTML(
          await renderToMjml(<MjmlYahooStyle>{`a { color: blue; }`}</MjmlYahooStyle>)
        )
      ).toBe(
        "<mj-raw><style>@media screen yahoo {a { color: blue; }}</style></mj-raw>"
      );
    });
  });

  describe("tracking pixel", () => {
    it("should render 1x1 raw image with provided src", async () => {
      expect(
        minifyHTML(await renderToMjml(<MjmlTrackingPixel src={"tracking-pixel"} />))
      ).toBe(
        '<mj-raw><img src="tracking-pixel" style="display: table;height: 1px!important;width: 1px!important;border: 0!important;margin: 0!important;padding: 0!important" width="1" height="1" /></mj-raw>'
      );
    });
  });

  describe("html", () => {
    it("should allow rendering given HTML using mj-raw tag by default", async () => {
      expect(
        minifyHTML(await renderToMjml(<MjmlHtml html="<div>hello World</div>" />))
      ).toBe("<mj-raw><div>hello World</div></mj-raw>");
    });
    // it("should allow rendering given HTML using specified tag", () => {
    //   expect(
    //     renderToMjml(<MjmlHtml tag="span" html="<div>hello World</div>" />)
    //   ).toBe("<span><div>hello World</div></span>");
    // });
  });
});
