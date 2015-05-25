'use strict';

module.exports = function (obj, opts) {
	if (typeof obj !== 'object') {
		throw new Error('Expected an object as the first argument');
	}

	if (!opts) {
		opts = {};
	}

	var keys = Object.keys(obj);
	var ret = [];

	if (opts.n >= keys.length) {
		opts.n = keys.length;
	}

	opts.n = Number(opts.n) || 1;

	while (opts.n-- && keys.length > 0) {
		var r = Math.floor(Math.random() * keys.length);
		var key = keys[r];
		ret.push(obj[key]);
		keys.splice(r, 1);
	}

	return ret;
};
