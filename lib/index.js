'use strict';

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:node/recommended-script',
    './rules/strict-mode.js',
    './rules/stylistic-issues.js',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2015,
  },
};
