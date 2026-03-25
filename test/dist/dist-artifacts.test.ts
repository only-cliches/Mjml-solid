import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { resolve } from "node:path";

function walk(directory: string): string[] {
  return readdirSync(directory).flatMap((entry) => {
    const path = resolve(directory, entry);
    if (statSync(path).isDirectory()) {
      return walk(path);
    }
    return [path];
  });
}

describe("dist artifacts", () => {
  it("emits jsx, js, types, and ambient declarations", () => {
    const distRoot = resolve("dist");
    const indexJs = resolve(distRoot, "index.js");
    const indexDts = resolve(distRoot, "index.d.ts");
    const ambientDts = resolve(distRoot, "ambient.d.ts");

    expect(existsSync(indexJs)).toBe(true);
    expect(existsSync(indexDts)).toBe(true);
    expect(existsSync(ambientDts)).toBe(true);

    expect(readFileSync(indexDts, "utf8")).toContain('import "./ambient";');
    expect(readFileSync(ambientDts, "utf8")).toContain(
      'declare module "solid-js"'
    );

    const jsxFiles = walk(distRoot).filter((file) => file.endsWith(".jsx"));
    expect(jsxFiles.length).toBeGreaterThan(0);
    expect(jsxFiles.some((file) => file.endsWith("MjmlBody.jsx"))).toBe(true);
  });
});
