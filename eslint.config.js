import globals from "globals";
import javascript from "@eslint/js";
import typescript from "typescript-eslint";
import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier/recommended";
import unusedImports from "eslint-plugin-unused-imports";
import reactHooks from "eslint-plugin-react-hooks";
import perfectionist from "eslint-plugin-perfectionist";

export default typescript.config(
  {
    ignores: ["**/*.config.*", "build/"],
  },

  {
    extends: [
      javascript.configs.recommended,
      typescript.configs.stylisticTypeChecked,
      perfectionist.configs["recommended-natural"],
      prettier,
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      "no-console": ["error", { allow: ["error"] }],
      "unused-imports/no-unused-imports": "error",
      "@typescript-eslint/array-type": ["error", { default: "generic" }],
    },
  },

  {
    files: ["app/**/*.tsx"],
    extends: [react.configs.flat["jsx-runtime"]],
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react/jsx-curly-brace-presence": ["warn", "never"],
      "perfectionist/sort-jsx-props": "off",
      "react/jsx-sort-props": [
        "warn",
        {
          callbacksLast: true,
          shorthandFirst: true,
          reservedFirst: true,
        },
      ],
    },
  },
);
