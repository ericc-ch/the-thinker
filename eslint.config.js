import globals from "globals";
import javascript from "@eslint/js";
import typescript from "typescript-eslint";
import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier/recommended";

export default typescript.config(
  {
    ignores: ["*.config.*"],
  },

  {
    extends: [
      javascript.configs.recommended,
      typescript.configs.stylisticTypeChecked,
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
  },

  {
    files: ["*.tsx"],
    extends: [react.configs.recommended],
  },
);
