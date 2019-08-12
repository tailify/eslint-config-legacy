'use strict';

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:node/recommended-script',
    './rules/stylistic-issues.js',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 5,
    sourceType: 'script',
  },
};
