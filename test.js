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

test(function (t) {
	t.plan(4);

	t.assert(objectRandom(obj).length === 1);
	t.assert(objectRandom(obj, {count: 4}).length === 4);
	t.assert(objectRandom(obj, {count: 24}).length === 10);
	t.assert(Array.isArray(objectRandom(obj, {count: 8})));
});
