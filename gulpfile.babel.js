import gulp from 'gulp'
import autoprefixer from 'gulp-autoprefixer'
import nodemon from 'gulp-nodemon'
import debug from 'gulp-debug'
import webpack from 'webpack-stream'
import wpConfig from './config/webpack.config.js'
import sass from 'gulp-sass'
import livereload from 'gulp-livereload'
import fs from 'fs'

const config = {
    sassPath: './src/scss/*.scss',
    cssPath: './public/css/',
    jsPath: './src/js/*.js',
    bundledPath: './public/js/',
    htmlPath: './public/views/'
}

gulp.task('initial-build', () => {
    return gulp.src(config.jsPath)
        .pipe(webpack(wpConfig['initialConfig']))
        .pipe(gulp.dest(config.bundledPath))
        .pipe(livereload())
})

gulp.task('angular-build', () => {
	return gulp.src(config.jsPath)
		.pipe(webpack(wpConfig['angularConfig']))
		.pipe(gulp.dest(config.bundledPath))
		.pipe(livereload())
})

gulp.task('frontend-build', ['initial-build', 'angular-build'])


gulp.task('backend-build', () => {
    return gulp.src(config.jsPath)
        .pipe(webpack(wpConfig['backendConfig']))
        .pipe(gulp.dest('./'))
        .pipe(livereload())
})

gulp.task('webpack', ['frontend-build', 'backend-build'])

gulp.task('sass', () => {
    return gulp.src(config.sassPath)
        .pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
      		browsers: ['last 2 versions'],
      		cascade: false
    		}))
        .pipe(gulp.dest(config.cssPath))
        .pipe(livereload())
})

gulp.task('server', ['webpack', 'sass'], (cb) => {
    let called = false
    livereload.listen()
    nodemon({
            script: 'server.bundle.js',
            ext: 'js html'
        })
        .on('start', () => {
			// prevents nodemon from starting multiple times
            if (!called) {
                cb()
                called = true
            }
        })
        .on('restart', () => {
			gulp.src('./server.bundle.js')
				.pipe(livereload())
        })

    gulp.watch(config.sassPath, ['sass'])
    gulp.watch(config.jsPath, ['frontend-build'])
	gulp.watch('./*.js', ['backend-build'])
})
gulp.task('default', ['server'])
