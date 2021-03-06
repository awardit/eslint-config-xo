# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.3.0 - 2020-02-05]
### Changed
- Package name changed from `@crossroads-loyalty-solutions/eslint-config-xo` to `@awardit/eslint-config-xo`.
- Updated `eslint-config-xo-react` to 0.22.0
- Updated `eslint-plugin-flowtype` to 4.6.0
- Updated `eslint-plugin-graphql` to 3.1.1
- Updated `eslint-plugin-prefer-arrow` to 1.1.7
- Updated `eslint-plugin-react` to 7.18.3
- Updated `eslint-plugin-react-hooks` to 2.3.0

## [0.2.8] - 2019-09-27
### Changed
- Set ignoreRestSiblings on no-unused-vars

## [0.2.7] - 2019-09-27
### Removed
- `no-nested-ternary`

## [0.2.6] - 2019-09-27
### Removed
- `no-negated-condition`

## [0.2.5] - 2019-09-26
### Added
- The lint will now autodetect if `react` and `graphql` are installed and load
  their lints.
### Changed
- Changed `eqeqeq` and `no-eq-null` to allow comparisons with `null`. Flow should
  catch any faulty comparisons.

## [0.2.4] - 2019-09-26
### Changed
- Changed `max-len` rule to allow long strings, template literals and `RegExp`s.

## [0.2.3] - 2019-09-26
### Removed
- Disabled `react/require-default-props` rule.

## [0.2.2] - 2019-09-26
### Added
- `import/extensions` rule forbidding extensions for JavaScript files.

## [0.2.1] - 2019-09-26
### Fixed
- Parse error

## [0.2.0] - 2019-09-26
### Added
- Added GraphQL lints.

### Changed
- Enforce dangling commas in Flowtypes.
- Warn on non-capitalized comments, likely code
- Moved back to XO standard of indenting `case` inside `switch`.

### Removed
- Relaxed some JSX lints.
- Removed `ava/use-test`
