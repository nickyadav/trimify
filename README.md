# trimify
[![npm](https://img.shields.io/npm/v/trimify.svg?style=flat-square)](https://www.npmjs.com/package/trimify)
[![npm](https://img.shields.io/npm/dm/trimify.svg?style=flat-square)](https://www.npmjs.com/package/trimify)
[![Travis Build](https://img.shields.io/travis/rust-lang/rust.svg?style=flat-square)](https://travis-ci.org/amandeepmittal/trimify)
[![Codcov.io Coverage](https://img.shields.io/codecov/c/github/amandeepmittal/trimify.svg?style=flat-square)](https://codecov.io/gh/amandeepmittal/trimify)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)]()

To remove lead and trail whitespace(s) from a JavaScript String [without using RegExp]

#### The problem
If in some abstracted app, to trim whitespace off a string only either at the beginning or the end of the string?

#### The solution
`trimify` allows an additional functionality over JavaScript native String method `trim()` such that you can trim whitespace(s) either in the beginning or the end of string and you don't have to use Regular Expressions.

## Installation
This module is distributed via npm which is bundled with node and should be installed as one of your project's `dependencies`

`$ npm install trimify --save`

## Usage
To remove lead and trail whitespace(s) from a JavaScript String [without using RegExp].

```javaScript
const trimify = require('trimify');

trimify('\t  This is a string.  \t');
//=>This is a string.

trimify.lead('\t  This is a string.  \t');
//=>This is a string.  \t

trimify.trail('\t  This is a string.  \t');
//=>\t  This is a string.
```

**trimify(string)**

Returns a string without any leading or trailing whitespace(s).

**trimify.lead(string)**

Returns a string without any leading whitespace(s).

**trimify.trail(string)**

Returns a string without any trailing whitespace(s).

### Contributions
Contributions of any kind welcome!

#### License
MIT