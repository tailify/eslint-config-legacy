# @tailify/eslint-config-legacy

[![Build status][build-status-image]][build-status-url]
[![Greenkeeper][greenkeeper-image]][greenkeeper-url]
[![Version][version-image]][version-url]

> Tailify's very own opinionated ESLint configuration for ES5 projects.

## Installation

```
$ npm install --save-dev @tailify/eslint-config-legacy
```

## Usage

To get started, add this to your `.eslintrc.js` file:

```js
module.exports = {
  extends: ['@tailify/legacy']
};
```

*Note: We can omit the `/eslint-config` suffix since it is automatically assumed by ESLint.*

[build-status-image]: https://travis-ci.com/tailify/eslint-config-legacy.svg?branch=master
[build-status-url]: https://travis-ci.com/tailify/eslint-config-legacy

[greenkeeper-image]: https://badges.greenkeeper.io/tailify/eslint-config-legacy.svg
[greenkeeper-url]: https://greenkeeper.io

[version-image]: https://img.shields.io/npm/v/@tailify/eslint-config-legacy.svg
[version-url]: https://www.npmjs.com/package/@tailify/eslint-config-legacy
