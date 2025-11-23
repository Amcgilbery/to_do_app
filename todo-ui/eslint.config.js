import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:tailwindcss/recommended",   // <-- lint Tailwind classes
    "prettier",                         // <-- disables conflicting lint rules
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "tailwindcss"],
  rules: {
    // optionally define project-specific rules
    "tailwindcss/classnames-order": "warn",
    "tailwindcss/enforces-shorthand": "warn",
    "tailwindcss/no-custom-classname": "off"
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
