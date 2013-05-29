
var clc = require('cli-color');

var colors = {
	'DEFAULT': clc.white,
	'LOG': clc.blue,
	'INFO': clc.green,
	'ERROR': clc.red,
	'WARNING': clc.yellow,
	'DEBUG': clc.yellowBright
};

var labels = {
	'DEFAULT': 'MESSAGE',
	'LOG': 'LOG',
	'INFO': 'INFO',
	'ERROR': 'ERROR',
	'WARNING': 'WARNING',
	'DEBUG': 'DEBUG'
};

exports.log = function (m, code, data) {
	log('LOG', m, code, data);
};

exports.info = function (m, code, data) {
	log('INFO', m, code, data);
};

exports.error = function (m, code, data) {
	log('ERROR', m, code, data);
};

exports.warning = 
exports.warn = function (m, code, data) {
	log('WARNING', m, code, data);
};

exports.d = 
exports.debug = function (m, code, data) {
	log('DEBUG', m, code, data);
};

var log = function (type, m, code, data) {
	var colorFn = colors[type] || colors['DEFAULT'];
	var label = labels[type] || labels['DEFAULT'];

	process.stdout.write(colorFn(label)+(typeof code === 'number' ?clc.blackBright(' ('+code+')') :'')+': ');
	console.log(m);
	if (typeof code === 'object') data = code;
	data && console.log(data);
};