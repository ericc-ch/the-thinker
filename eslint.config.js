import globals from "globals";
import javascript from "@eslint/js";
import typescript from "typescript-eslint";
import react from "eslint-plugin-react";

export default typescript.config(
  {
    ignores: ["*.config.*"],
  },

  {
    extends: [
      javascript.configs.recommended,
      typescript.configs.stylisticTypeChecked,
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
