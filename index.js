'use strict';

module.exports = function (obj, n) {
	if (typeof obj !== 'object') {
		throw new Error('Expected an object as the first argument');
	}

	var keys = Object.keys(obj);
	var ret = [];

	if (n >= keys.length) {
		n = keys.length;
	}

	n = Number(n) || 1;

	while (n-- && keys.length > 0) {
		var r = Math.floor(Math.random() * keys.length);
		var key = keys[r];
		ret.push(obj[key]);
		keys.splice(r, 1);
	}

	return ret;
};
