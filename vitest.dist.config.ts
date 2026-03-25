import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { defineConfig } from "vitest/config";
import solid from "vite-plugin-solid";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [solid({ ssr: true })],
  test: {
    include: ["test/**/*.test.ts", "test/**/*.test.tsx"],
    environment: "node",
    globals: true,
    exclude: ["test/types/**"],
    alias: {
      "mjml-solid": resolve(__dirname, "dist/index.js"),
    },
  },
});
