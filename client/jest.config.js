const path = require('path');

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['./test/setup-env.js'],
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, 'src'),
    path.join(__dirname, 'test'),
  ],
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js'),
    "\\.(jpe?g|png|gif|woff|woff2|ttf|eot)$": "./jest/file-mock.js",
    "\\.(svg)$": "<rootDir>/jest/svg-mock.js"
  },
  collectCoverageFrom: ['**/src/**/*.js'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
