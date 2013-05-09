
var clc = require('cli-color');

exports.log = function (m, code, data) {
	console.log(clc.blue('LOG')+': '+m);
};

exports.info = function (m, code, data) {
	console.info(clc.green('INFO')+': '+m);
};

exports.error = function (m, code, data) {
	console.error(clc.red('ERROR')+': '+m);
};

exports.warning = 
exports.warn = function (m, code, data) {
	console.error(clc.yellow('WARNING')+': '+m);
};

exports.d = 
exports.debug = function (m, code, data) {
	console.log(clc.yellowBright('DEBUG')+': '+m);
};

exports.crlf = function () {
	console.log('');
};