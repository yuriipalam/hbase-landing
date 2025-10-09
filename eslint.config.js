import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";

export default defineConfig([
  globalIgnores([
    "node_modules",
    "build",
    "dist",
    "tsconfig.json",
    "postcss.config.js",
    "tailwind.config.ts",
    "prettier.config.cjs",
  ]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      prettier,
      "jsx-a11y": jsxA11y,
      import: importPlugin,
    },
    settings: {
      // so import/no-unresolved understands TS paths and "@/*"
      "import/resolver": {
        typescript: {
          project: ['./tsconfig.app.json', './tsconfig.node.json'],
        },
      },
    },
    rules: {
      ...jsxA11y.configs.recommended.rules,

      "import/no-unresolved": "error",
      "import/no-duplicates": "warn",

      "no-implicit-globals": "off",

      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-explicit-any": "off",

      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/no-unescaped-entities": "off",

      "prettier/prettier": "warn",
    },
  },
]);
