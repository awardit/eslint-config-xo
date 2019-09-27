/* @flow */

"use strict";

var ext = [
  "xo",
  "xo-flow",
];
var plugins = [
  "import",
  "unicorn",
  "prefer-arrow",
];
var settings = {};
var rules = {
  "ava/use-test": "off",
  "brace-style": [
    "error",
    "stroustrup",
  ],
  "capitalized-comments": "warn",
  "comma-dangle": [
    "error",
    {
      arrays: "always-multiline",
      objects: "always-multiline",
      imports: "always-multiline",
      exports: "always-multiline",
      functions: "never",
    },
  ],
  eqeqeq: [
    "error",
    "smart",
  ],
  "flowtype/array-style-complex-type": [
    "error",
    "verbose",
  ],
  "flowtype/array-style-simple-type": [
    "error",
    "verbose",
  ],
  "flowtype/delimiter-dangle": [
    "error",
    "always-multiline",
  ],
  "flowtype/newline-after-flow-annotation": [
    "error",
    "always",
  ],
  "flowtype/require-types-at-top": "warn",
  "flowtype/require-valid-file-annotation": [
    "error",
    "always",
    {
      annotationStyle: "block",
    },
  ],
  "flowtype/require-return-type": [
    "error",
    "always",
    {
      annotateUndefined: "always",
    },
  ],
  "flowtype/type-import-style": [
    "error",
    "declaration",
  ],
  "func-style": [
    "error",
    "expression",
  ],
  "import/extensions": [
    "error",
    {
      js: "never",
      json: "always",
      scss: "always",
      svg: "always",
    },
  ],
  "import/no-unassigned-import": [
    "error",
    {
      allow: [
        "**/*.css",
        "**/*.scss",
      ],
    },
  ],
  "import/no-unresolved": "off",
  "import/order": "off",
  indent: [
    "error",
    2,
    {
      SwitchCase: 1,
    },
  ],
  "lines-between-class-members": [
    "error",
    "always",
    {
      exceptAfterSingleLine: true,
    },
  ],
  "max-len": [
    "error",
    {
      code: 100,
      comments: 80,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    },
  ],
  "no-case-declarations": "off",
  "no-eq-null": "off",
  "no-negated-condition": "off",
  "no-nested-ternary": "off",
  "no-unused-vars": [
    "error",
    {
      varsIgnorePattern: "^React$",
    },
  ],
  "object-curly-spacing": [
    "error",
    "always",
  ],
  "prefer-arrow/prefer-arrow-functions": [
    "error",
    {
      disallowPrototype: false,
      singleReturnOnly: false,
      classPropertiesAllowed: true,
    },
  ],
  quotes: [
    "error",
    "double",
    {
      allowTemplateLiterals: true,
    },
  ],
  "unicorn/catch-error-name": [
    "error",
    {
      name: "e",
    },
  ],
  "unicorn/prefer-query-selector": "off",
  "valid-jsdoc": "off",
};

try {
  require.resolve("graphql");

  plugins.push("eslint-plugin-graphql");
}
catch (e) {}

try {
  require.resolve("react");

  ext.push("xo-react");

  settings = {
    ...settings,
    react: {
      version: "16.8",
    },
  };

  rules = {
    ...rules,
    "react/jsx-curly-newline": "off",
    "react/jsx-indent": [
      "error",
      2,
    ],
    "react/jsx-indent-props": [
      "error",
      2,
    ],
    "react/jsx-tag-spacing": [
      "error",
      {
        closingSlash: "never",
        beforeSelfClosing: "always",
        afterOpening: "never",
        beforeClosing: "never",
      },
    ],
    "react/prefer-read-only-props": "off",
    "react/require-default-props": "off",
  };
}
catch (e) {}

module.exports = {
  extends: ext,
  plugins: plugins,
  settings: settings,
  rules: rules,
};
