import  gulp 		from 'gulp'
import	nodemon		from 'gulp-nodemon'
import	debug		from 'gulp-debug'
import	webpack		from 'webpack-stream'
import	wpConfig	from './webpack.config.js'
import	sass		from 'gulp-sass'

const config = {
	sassPath:	'./public/src/scss/',
	cssPath:	'./public/dist/css/',
	jsPath:		'./public/src/js/',
	bundledPath:'./public/dist/js/'
}

gulp.task('webpack', () => {
	return gulp.src(config.jsPath)
				.pipe(webpack(wpConfig))
				.pipe(gulp.dest(config.bundledPath))
})

gulp.task('sass', () => {
	return gulp.src(config.sassPath + '*.scss')
				.pipe(sass().on('error', sass.logError))
				.pipe(gulp.dest(config.cssPath))
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

gulp.task('default', ['webpack', 'sass', 'server'])
