'use strict';
import test from 'ava';
import m from './';

const obj = {
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

test(t => {
	t.is(m(obj).length, 1);
	t.is(m(obj, {count: 4}).length, 4);
	t.is(m(obj, {count: 24}).length, 10);
	t.true(Array.isArray(m(obj, {count: 8})));
});
