
var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('server:build', callback => runSequence(
	'copy:environment',
	'Es6ToEs5:server',
	'server:restart',
	'server:reload',
	callback
));

gulp.task('app:build', callback => runSequence(
		'Es6ToEs5:app',
		'server:hotreload',
		callback
));

gulp.task('vendor:build', callback => runSequence(
	'Es6ToEs5:vendor',
	['Es6ToEs5:vendor:client', 'Es6ToEs5:vendor:client:test'],
	'server:restart',
	'server:reload',
	callback
));

gulp.task('locale:build', callback => runSequence(
	'locale',
	'server:restart',
	'server:reload',
	callback
));
