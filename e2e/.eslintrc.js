module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['eslint-plugin-cypress'],
  extends: ['eslint:recommended', 'eslint-config-prettier'],
  rules: {
    strict: ['error', 'never'],
  },
  env: {
    es6: true,
    node: true,
    'cypress/globals': true,
  },
};
