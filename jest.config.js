/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  preset: "ts-jest",
  moduleNameMapper: {
    "solid-js/web": "<rootDir>/node_modules/solid-js/web/dist/server.cjs",
    "solid-js": "<rootDir>/node_modules/solid-js/dist/server.cjs",
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
      babelConfig: {
        presets: [
          ["babel-preset-solid", { generate: "ssr" }],
          "@babel/preset-env",
        ],
      },
    },
  },
  testEnvironment: "node",
  transform: {
    "^.+\\.ts?$": "ts-jest",
    "^.+\\.js?$": "ts-jest",
  },
};
