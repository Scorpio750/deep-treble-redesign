const 	gulp 		= require('gulp'),
		browserSync = require('browser-sync').create(),
		reload		= browserSync.reload,
		debug		= require('gulp-debug'),
		webpack		= require('webpack-stream');
	
const config = {
	
}

/*gulp.task('serve', [], function() {
	browserSync.init({
		server: { },
		startPath: 'dist/views/index.html',
		ghostMode: { scroll: false }
	});
});*/

gulp.task('server', function (cb) {
	  exec('node lib/app.js', function (err, stdout, stderr) {

		      console.log(stdout);
			      console.log(stderr);
				      cb(err);
					    });
	  });

gulp.task('ghostMode');
gulp.task('default', ['server']);
