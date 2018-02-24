[![Build Status][travis-svg]][travis-url]
[![Dependency Status][david-deps-svg]][david-deps-url]
[![Dev dependency Status][david-devdeps-svg]][david-devdeps-url]

# spritefont-loader
Loads sprite fonts into the browser that were generated with the [sprite font generator](https://github.com/andormade/spritefont).

## Installation
This module is distributed via npm:
```
npm install spritefont-loader
```

## Usage
```
import SpritefontLoader from 'spritefont-loader';

const options = { rows: 8, cols: 4, colors: [#ffffff, #00000]};
const spriteFont = SpritefontLoader.load('spritefont.png', options);
```

This code is released under the MIT license, feel free to do whatever you want with it.

[travis-svg]: https://travis-ci.org/andormade/spritefont-loader.svg?branch=master
[travis-url]: https://travis-ci.org/andormade/spritefont-loader
[david-deps-svg]: https://david-dm.org/andormade/spritefont-loader.svg
[david-deps-url]: https://david-dm.org/andormade/spritefont-loader
[david-devdeps-svg]: https://david-dm.org/andormade/spritefont-loader/dev-status.svg
[david-devdeps-url]: https://david-dm.org/andormade/spritefont-loader#info=devDependencies
