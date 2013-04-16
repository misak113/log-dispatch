misak113. 
 you can use methods: d (debug), log, warn (wrning), error

Example:

var l = require('log-dispatch');

l.debug('some text'); // l.d('some text');

l.log('some text');

l.warn('some text'); // l.warning('some text');

l.error('some text');