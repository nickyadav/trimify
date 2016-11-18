# trimify
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