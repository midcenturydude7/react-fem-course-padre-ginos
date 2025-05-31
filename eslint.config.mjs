import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  {
    ...reactPlugin.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  reactPlugin.configs.flat["jsx-runtime"],
  // Custom configuration for React projects
  {
    files: ["**/*.js", "**/*.jsx"],
    plugins: {
      react: reactPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        React: "readonly",
        ReactDOM: "readonly",
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // React recommended rules
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/no-deprecated": "error",
      "react/no-direct-mutation-state": "error",
      "react/no-find-dom-node": "error",
      "react/no-is-mounted": "error",
      "react/no-unknown-property": "error",
      "react/react-in-jsx-scope": "error",
      "react/require-render-return": "error",
      "react/no-unescaped-entities": "off",
      "react/prop-types": "off",
    },
  },
  prettier,
];
