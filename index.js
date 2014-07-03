'use strict';

['src', 'watch', 'dest', 'runner'].forEach(function (key) {
	exports[key] = require('aster-' + key);
});
