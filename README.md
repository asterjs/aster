# aster
[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]

<p align="center">
  <img src="https://avatars2.githubusercontent.com/u/6579498?s=300" />
</p>

<h1 align="center">aster - AST-based code builder</h1>

## API

aster is centralized API for core parts which are published as separate modules (check out their documentations for details):

* [aster.src](https://github.com/asterjs/aster-src) - Single-pass source files reader.
* [aster.watch](https://github.com/asterjs/aster-watch) - Continuous source files reader.
* [aster.dest](https://github.com/asterjs/aster-dest) - File writer.
* [aster.runner](https://github.com/asterjs/aster-runner) - Build pipeline runner with built-in logger.

## Usage

First, install `aster` as a development dependency:

```shell
npm install --save-dev aster
```

Then, create build script and use it:

```javascript
var aster = require('aster');

aster.src('src/**/*.js')
.map(plugin1(/* ... */))
.map(plugin2(/* ... */))
// ...
.map(aster.dest('dist'))
.subscribe(aster.runner);
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/aster
[npm-image]: https://badge.fury.io/js/aster.png

[travis-url]: http://travis-ci.org/asterjs/aster
[travis-image]: https://secure.travis-ci.org/asterjs/aster.png?branch=master
