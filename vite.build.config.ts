import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [solid({ ssr: true })],
  build: {
    ssr: "src/index.ts",
    outDir: "dist",
    emptyOutDir: false,
    target: "node20",
    rolldownOptions: {
      transform: { jsx: "preserve" },
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].js",
      },
    },
  },
});
