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
    sassPath: './src/scss/**/*.scss',
    cssPath: './public/css/',
    frontendPath: './src/**/*.*',
    bundledPath: './public/',
    htmlPath: './public/views/'
}

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

gulp.task('frontend-build', () => {
	return gulp.src(config.frontendPath)
		.pipe(webpack(wpConfig['frontendConfig']))
		.pipe(gulp.dest(config.bundledPath))
		.pipe(livereload())
})

gulp.task('backend-build', () => {
    return gulp.src('./')
        .pipe(webpack(wpConfig['backendConfig']))
        .pipe(gulp.dest('./'))
        .pipe(livereload())
})

gulp.task('webpack', ['frontend-build', 'backend-build'])

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
    gulp.watch(config.frontendPath, ['frontend-build'])
	gulp.watch('./server.js', ['backend-build'])
	gulp.watch('./config/*.js', ['webpack'])
})
gulp.task('default', ['server'])
