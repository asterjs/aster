# aster
[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]

<p align="center">
  <img src="https://avatars2.githubusercontent.com/u/6579498?s=300" />
</p>

<h1 align="center">aster - AST-based code builder</h1>

## What's this

aster is reactive builder specialized for code processing. This allows you to make JavaScript code builds faster, more reliable and always supporting source maps whatever plugins you use.

Source maps are really great for being able to debug your original code on production, but using them isn't possible in any of existing build systems whenever you have at least one plugin in your build pipeline that doesn't support emitting them or even consuming from previous step; some plugins even treat code as simple strings discarding it's inner logic and structure.

Think of aster for JS as of [rework](https://github.com/reworkcss/rework) for CSS.

## Usage with generic build systems

aster doesn't try to fight with your favorite build system. It has only one specific area that it does well - and it's code processing. Everything else (CSS, images, publishing to CDN, etc.) is left for more generic builders, and you can use them together.

Currently, there is only [Grunt plugin](https://github.com/asterjs/grunt-aster) and [Gulp plugin] is coming, but you can define aster pipeline as custom task in any existing build system since aster uses [RxJS](http://reactive-extensions.github.io/RxJS/) under the hood which is completely interoperable with events, streams, promises, callbacks and other asynchronous primitives and patterns.

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
