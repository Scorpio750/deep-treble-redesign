const 	gulp 		= require('gulp'),
		exec		= require('gulp-exec'),
		nodemon		= require('gulp-nodemon'),
		debug		= require('gulp-debug'),
		webpack		= require('webpack-stream');

const config = {

}

gulp.task('server', function () {
	nodemon({
		script: 'server.js',
		ext: 'js html'
	})
	.on('restart', function() {
		console.log('Restarting server...');
	});
});

gulp.task('default', ['server']);
