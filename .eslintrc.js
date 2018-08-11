module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended"
  ],
  plugins: ["react"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  env: {
    node: true,
    browser: true
  },
  rules: {
    "no-console": 0
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "typescript-eslint-parser",
      plugins: ["typescript"],
      rules: {
        "no-undef": 0,
        "no-unused-vars": 0,
        "react/prop-types": 0
      }
    }
  ]
};
