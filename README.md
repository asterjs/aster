# aster
[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]

<p align="center">
  <img src="https://avatars2.githubusercontent.com/u/6579498?s=300" />
</p>

<h1 align="center">aster - AST-based code builder</h1>

## What's that

aster is reactive builder specialized for code processing and transformations. It's built with debugging in mind and makes building JavaScript code more reliable and faster.

## Why one more

Source maps are a great invention that is meant to simplify life by allowing developers to debug the original code (the one that they actually write, whatever language it is) on production.

However, using them is pretty hard in any of existing build systems whenever you have at least one plugin in your build pipeline - and you most likely do - that doesn't support emitting them or even consuming from previous step; some plugins even treat code as simple strings discarding all it's inner logic and structure.

Your code isn't just a string. It has a soul and rich inner world and aster is built to treat it like that. As result, it provides complex yet easy and fast transformations that are transparent for browser debugger out of the box.

You can think of aster for JS as of [rework](https://github.com/reworkcss/rework) for CSS.

## But I like X builder! Should I throw it out?

Definitely no! aster doesn't try to fight your favorite build system. It has only one specific area that it's exceptionally good at - code processing. Everything else (CSS, images, publishing to CDN, etc.) is left for generic builders, and you can use them together.

Currently there are following bindings:

 * [grunt-aster](https://github.com/asterjs/grunt-aster) - binding for [Grunt](http://gruntjs.com/) JavaScript Task Runner.
 * [gulp-aster](https://github.com/asterjs/gulp-aster) - binding for [Gulp](http://gulpjs.com/) streaming build system.
 * ...more to come!

If you wish, you can define aster pipeline as custom task in any existing build system on your own since aster uses [RxJS](http://reactive-extensions.github.io/RxJS/) under the hood, which is interoperable with events, streams, promises, callbacks and any other asynchronous primitives and patterns out of the box.

## API

aster is completely modular and main package is just a centralized API wrapper for core parts published as separate modules (check out their documentations for details):

* [aster.src](https://github.com/asterjs/aster-src) - Single-pass source files reader.
* [aster.watch](https://github.com/asterjs/aster-watch) - Continuous source files reader.
* [aster.dest](https://github.com/asterjs/aster-dest) - File writer.
* [aster.runner](https://github.com/asterjs/aster-runner) - Build pipeline runner with built-in logger.

## Usage

First, install `aster` as a development dependency:

```shell
npm install --save-dev aster
```

Then, create build script and use it. Example (`require`s omitted):

```javascript
aster.watch(['src/**/*.js', 'src/**/*.coffee', 'src/**/*.jsx'])
.throttle(500)
.map(changed(function (src) {
  return src.map(equery({
    'if ($cond) return $expr1; else return $expr2;':
      'return <%= cond %> ? <%= expr1 %> : <%= expr2 %>'
  }));
}))
.map(concat('built.js'))
.map(umd({exports: 'superLib'}))
.map(aster.dest('dist', {sourceMap: true}))
.subscribe(aster.runner);
```

aster doesn't provide task runner - npm is already good one, and we don't want to reinvent the wheel. You can simply define every needed task as separate script, or use aster as part of existing builder as mentioned before.

## Creating plugins

Check out aster's [Yeoman generator](https://github.com/asterjs/generator-aster).

It automizes the process of creating basic skeleton and Github repo for your plugin in few easy steps. When created, you just need to modify [`index.js`](https://github.com/asterjs/generator-aster/blob/master/app/templates/index.js) and [`test.js`](https://github.com/asterjs/generator-aster/blob/master/app/templates/test/test.js) files to reflect your intended plugin's functionality (detailed hints included right in code).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/aster
[npm-image]: https://badge.fury.io/js/aster.png

[travis-url]: http://travis-ci.org/asterjs/aster
[travis-image]: https://secure.travis-ci.org/asterjs/aster.png?branch=master
