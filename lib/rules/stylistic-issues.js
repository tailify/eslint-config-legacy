'use strict';

module.exports = {
  rules: {
    // enforce consistent linebreak style
    'linebreak-style': ['error', 'unix'],

    // require object keys to be sorted
    'sort-keys': ['error', 'asc', { caseSensitive: false, natural: true }],
  },
};
