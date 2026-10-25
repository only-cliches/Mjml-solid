import { copyFileSync, existsSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const dist = resolve("dist");
const index = join(dist, "index.d.ts");

copyFileSync("src/ambient.d.ts", join(dist, "ambient.d.ts"));
writeFileSync(index, `import "./ambient";\n${readFileSync(index, "utf8")}`);

function declarations(directory) {
  return readdirSync(directory).flatMap((entry) => {
    const path = join(directory, entry);
    return statSync(path).isDirectory() ? declarations(path) : path.endsWith(".d.ts") ? [path] : [];
  });
}

for (const file of declarations(dist)) {
  const contents = readFileSync(file, "utf8");
  const updated = contents.replace(/(["'])(\.{1,2}\/[^"']+)\1/g, (match, quote, specifier) => {
    if (specifier.endsWith(".js")) return match;

    const base = resolve(dirname(file), specifier);
    const target = existsSync(`${base}.d.ts`) ? `${specifier}.js` :
      existsSync(join(base, "index.d.ts")) ? `${specifier}/index.js` : null;

    if (!target) throw new Error(`No declaration for ${specifier} in ${file}`);
    return `${quote}${target}${quote}`;
  });
  writeFileSync(file, updated);
}
