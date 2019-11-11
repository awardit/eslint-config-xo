# Crossroads Loyalty Solutions JavaScript Code Style

[![Greenkeeper badge](https://badges.greenkeeper.io/crossroads-loyalty-solutions/eslint-config-xo.svg)](https://greenkeeper.io/)

## Installation

```bash
npm i -DE xo @crossroads-loyalty-solutions/eslint-config-xo
```

Add the following to your `package.json`:

```
{
  "scripts": {
    "test:xo": "xo"
  },
  "xo": {
    "extends": [
      "@crossroads-loyalty-solutions/eslint-config-xo"
    ]
  }
}
```

## React and GraphQL lints

React and GraphQL will only their lints if `react` and `graphql` modules are
installed, respectively. This will avoid unnecessary depenencies or errors.
