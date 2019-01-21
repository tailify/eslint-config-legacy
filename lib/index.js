'use strict';

const { configs: jestConfig } = require('eslint-plugin-jest');

module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    './rules/strict.js',
    './rules/stylistic-issues.js',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['**/*.{spec,test}.js', '**/src/setupTests.js'],
      ...jestConfig.recommended,
      env: {
        jest: true,
      },
    },
  ],
};
