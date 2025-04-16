/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [require.resolve('@repo/eslint-config/next.js')],
  parserOptions: {
    project: './tsconfig.json',
  },
};