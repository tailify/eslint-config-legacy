'use strict';

const { configs: jestConfig } = require('eslint-plugin-jest');

module.exports = {
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:node/recommended', 'plugin:prettier/recommended'],
  plugins: ['node'],
  overrides: [
    {
      files: ['**/__{mocks,tests}__/**', '**/*.{mock,test}.js'],
      ...jestConfig.recommended,
      env: {
        jest: true,
      },
    },
  ],
};
