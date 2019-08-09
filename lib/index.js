'use strict';

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    './rules/strict.js',
    './rules/stylistic-issues.js',
    'plugin:prettier/recommended',
  ],
};
