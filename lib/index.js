'use strict';

const { configs: jestConfig } = require('eslint-plugin-jest');

module.exports = {
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:node/recommended', 'plugin:prettier/recommended'],
  overrides: [
    {
      files: ['**/__{mocks,tests}__/**', '**/*.{mock,test}.js'],
      ...jestConfig.recommended,
      env: {
        jest: true,
      },
    },
  ],
  plugins: ['node'],
  rules: {
    // enforce consistent linebreak style
    'linebreak-style': 'error',

    // require object keys to be sorted
    'sort-keys': 'error',

    // require or disallow strict mode directives
    strict: 'error',
  },
};
