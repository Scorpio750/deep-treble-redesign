import gulp from 'gulp'
import nodemon from 'gulp-nodemon'
import debug from 'gulp-debug'
import webpack from 'webpack-stream'
import wpConfig from './config/webpack.config.js'
import sass from 'gulp-sass'
import livereload	from 'gulp-livereload'

const config = {
	sassPath: './public/src/scss/*.scss',
	cssPath: './public/dist/css/',
	jsPath: './public/src/js/*.js',
	bundledPath: './public/dist/js/',
	htmlPath: './public/dist/views/'
}

gulp.task('webpack', () => {
	return gulp.src(config.jsPath)
	.pipe(webpack(wpConfig))
	.pipe(gulp.dest(config.bundledPath))
	.pipe(livereload())
})

gulp.task('sass', () => {
	return gulp.src(config.sassPath)
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest(config.cssPath))
	.pipe(livereload())
})

gulp.task('server', ['webpack', 'sass'], (cb) => {
	livereload.listen()
	nodemon({
		script: 'server.js',
	tasks: ['webpack', 'sass'],
	ext: 'js html'
	})
.on('restart', () => {
	livereload.changed('server.js')
	gulp.src('server.js')
	.pipe(notify('Restarting server...'))
		})

	gulp.watch(config.sassPath, ['sass'])
	gulp.watch(config.jsPath, ['webpack'])
	})
gulp.task('default', ['server'])
