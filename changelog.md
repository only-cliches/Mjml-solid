# Changelog

This changelog is a best-effort summary built from git history and the current uncommitted working tree.
Some release commits are sparse, so a few entries are inferred from the commits immediately preceding each release marker.

## 1.3.0 - 2026-03-25

- Removed fork-era React tooling and docs that were still lingering in the repo.
- Replaced the Jest/Babel test harness with Vitest and Solid SSR configuration.
- Simplified the package surface so the root export provides components, utils, and extensions directly.
- Tightened the build and TypeScript configs around the actual library sources.
- Cleaned up extension helpers so comment-like raw HTML renders correctly in SSR tests.
- Replaced `lodash.kebabcase` with a local helper.

## 1.2.6 - 2026-02-13

- Refreshed the README and example usage.
- Minor package metadata cleanup.

## 1.2.3 - 2026-02-13

- Small maintenance release.
- No major API changes were recorded in the release commit.

## 1.2.2 - 2026-02-13

- Follow-up fixes after the 1.2.0 line.
- Mostly maintenance and compatibility cleanup.

## 1.2.0 - 2026-02-13

- Added support for `MjmlSelector` and `MjmlHtmlAttribute`.
- Enabled direct imports from the `extensions` and `utils` folders.
- Added `MjmlHtml` as an extension component.
- Improved render/minification behavior.
- Allowed object props to make it through to components.
- Converted imports to ESM.
- Updated the MJML dependency.
- Added the render helper to the getting started docs.

## 1.0.0 - 2024-01-31

- First public release of `mjml-solid`.
- Solid component bindings for the core MJML elements.
- Utilities for rendering Solid JSX to MJML and for post-processing HTML output.
- Extension components for comments, conditional comments, Yahoo style wrappers, and tracking pixels.
- TypeScript support, tests, linting, and CI/release automation.

## Pre-1.0

- Initial porting work from the upstream `mjml-react` project.
- Added and iterated on individual MJML components such as buttons, dividers, images, spacer, text, and wrapper.
- Built out the component prop typing, tests, and README examples.
- Added MJML head/body components, attributes helpers, social and accordion support, and early extension support.
- Introduced build tooling and packaging for the published library.
