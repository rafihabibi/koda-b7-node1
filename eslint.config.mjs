import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.js"], 
  languageOptions: { globals: globals.browser },
  ignores: ["node_modules"],
  rules: {
      "no-unused-vars": "error",         
      "eqeqeq": "error",
      "semi": ["error", "always"],
      "quotes": ["error", "single"],
      "curly": "error",
      "no-const-assign": "error"
    }
  },

]);
