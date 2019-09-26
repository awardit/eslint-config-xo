"use strict";

module.exports = {
  extends: [
    "xo",
    "xo-flow",
    "xo-react",
  ],
  plugins: [
    "prefer-arrow",
  ],
  rules: {
    "brace-style": [
      "error",
      "stroustrup",
    ],
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never",
      }
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
      "only-multiline",
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
        SwitchCase: 0,
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
      },
    ],
    "no-case-declarations": "off",
    "no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^React$",
      },
    ],
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "prefer-arrow/prefer-arrow-functions": [
      "error",
      {
        disallowPrototype: false,
        singleReturnOnly: false,
        classPropertiesAllowed: true,
      }
    ],
    quotes: [
      "error",
      "double",
      {
        allowTemplateLiterals: true,
      },
    ],
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
    "unicorn/catch-error-name": [
      "error",
      {
        name: "e",
      },
    ],
    "unicorn/prefer-query-selector": "off"
    "valid-jsdoc": "off",
  },
};
