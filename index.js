'use strict';

module.exports = function (obj, n) {
	if (typeof obj !== 'object') {
		throw new Error('Expected an object as the first argument');
	}

	if (n >= Object.keys(obj).length) {
		throw new Error('Second argument must be lower than the number of keys')
	}

	var keys = Object.keys(obj);
	var n = Number(n) || 1;
	var ret = [];

	while (n-- && keys.length > 0) {
		var r = Math.floor(Math.random() * keys.length);
		var key = keys[r];
		ret.push(obj[key]);
		keys.splice(r, 1);
	}

	return ret;
};
