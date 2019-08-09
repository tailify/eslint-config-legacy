'use strict';

module.exports = {
  extends: ['./lib/index.js'],
  overrides: [
    {
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      files: ['**/*.test.js'],
    }
  ],
  root: true,
};
