import  gulp 		from 'gulp'
import	nodemon		from 'gulp-nodemon'
import	debug		from 'gulp-debug'
import	webpack		from 'webpack-stream'
import	wpConfig	from './webpack.config.js'

const config = {

}

gulp.task('webpack', () => {
	return gulp.src('public/src/*.js')
				.pipe(webpack(wpConfig))
				.pipe(gulp.dest('public/dist/js'))
})

gulp.task('server', () => {
	nodemon({
		script: 'server.js',
		ext: 'js html'
	})
	.on('restart', () => {
		console.log('Restarting server...')
	})
})

gulp.task('default', ['server'])
