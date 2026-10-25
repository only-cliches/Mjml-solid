import { execFileSync } from "node:child_process";
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
  it("emits Node-compatible ESM, types, and ambient declarations", () => {
    const distRoot = resolve("dist");
    const indexJs = resolve(distRoot, "index.js");
    const indexDts = resolve(distRoot, "index.d.ts");
    const ambientDts = resolve(distRoot, "ambient.d.ts");

    expect(existsSync(indexJs)).toBe(true);
    expect(existsSync(indexDts)).toBe(true);
    expect(existsSync(ambientDts)).toBe(true);

    expect(readFileSync(indexDts, "utf8")).toContain('import "./ambient.js";');
    expect(readFileSync(ambientDts, "utf8")).toContain(
      'declare module "solid-js"'
    );

    const jsFiles = walk(distRoot).filter((file) => file.endsWith(".js"));
    expect(jsFiles.some((file) => file.endsWith("MjmlBody.js"))).toBe(true);
    expect(jsFiles.some((file) => file.endsWith("renderToMjml.js"))).toBe(true);
    expect(walk(distRoot).some((file) => file.endsWith(".jsx"))).toBe(false);

    const exports = execFileSync(
      process.execPath,
      [
        "--input-type=module",
        "-e",
        'const { MjmlBody, render } = await import("./dist/index.js"); console.log(typeof MjmlBody, typeof render);',
      ],
      { encoding: "utf8" }
    );
    expect(exports.trim()).toBe("function function");
  });
});
