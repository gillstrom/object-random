'use strict';

module.exports = function (obj, opts) {
	opts = opts || {};

	if (typeof obj !== 'object') {
		throw new Error('Expected an object as the first argument');
	}

	var keys = Object.keys(obj);
	var ret = [];

	if (opts.count >= keys.length) {
		opts.count = keys.length;
	}

	opts.count = Number(opts.count) || 1;

	while (opts.count-- && keys.length > 0) {
		var r = Math.floor(Math.random() * keys.length);
		var key = keys[r];
		ret.push(obj[key]);
		keys.splice(r, 1);
	}

	return ret;
};
