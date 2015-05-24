# object-random [![Build Status](https://travis-ci.org/gillstrom/object-random.svg?branch=master)](https://travis-ci.org/gillstrom/object-random)

> Get random values from an object


## Install

```
$ npm install --save object-random
```


## Usage

```js
var objectRandom = require('object-random');
var obj = {
	a: 0,
	b: 1,
	c: 2,
	d: 3,
	e: 4
};

objectRandom(obj);
//=> [4]

objectRandom(obj, 3);
//=> [0, 3, 2]
```


### objectRandom(object, quantity)

Returns an `array`.

#### object

*Required*  
Type: `object`

Object to pick from.

#### quantity

Type: `number`  
Default: `1`

Quantity of returned values.

*Must be lower than the amount of keys*


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
