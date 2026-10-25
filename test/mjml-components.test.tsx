import { renderToMjml } from "mjml-solid";

import {
  minifyHTML,
  mockMjmlReactTestData,
} from "./__mockData__/mockMjmlReactTestData";

/**
 * The test cases for this file are defined in mockMjmlReactTestData
 */
describe("Mjml Components", () => {
  test.each(Object.entries(mockMjmlReactTestData))("<%s />", async (_, testCases) => {
    for (const { mjmlReact, expectedMjml } of testCases) {
      expect(minifyHTML(await renderToMjml(mjmlReact))).toBe(expectedMjml);
    }
  });
});
