'use strict';
var test = require('ava');
var objectRandom = require('./');
var obj = {
	a: 0,
	b: 1,
	c: 2,
	d: 3,
	e: 4,
	f: 5,
	g: 6,
	h: 7,
	i: 8,
	j: 9
};

test('Random', function (t) {
	t.plan(3);

	t.assert(objectRandom(obj).length === 1);
	t.assert(objectRandom(obj, 4).length === 4);
	t.assert(Array.isArray(objectRandom(obj, 8)));
});
