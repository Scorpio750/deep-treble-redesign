import gulp from 'gulp'
import autoprefixer from 'gulp-autoprefixer'
import nodemon from 'gulp-nodemon'
import debug from 'gulp-debug'
import webpack from 'webpack-stream'
import wpConfig from './config/webpack.config.js'
import sass from 'gulp-sass'
import babel from 'gulp-babel'
import fs from 'fs'
import rimraf from 'rimraf'

const config = {
    sassPath: './src/scss/**/*.scss',
    cssPath: './public/css/',
    frontendPath: './src/app/**/*.*',
    initialPath: './src/initial/*.js',
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
})

gulp.task('frontend-build', () => {
	return gulp.src(config.frontendPath)
		.pipe(webpack(wpConfig['frontendConfig']))
		.pipe(gulp.dest(config.bundledPath))
})

gulp.task('babelify', ['frontend-build'], () => {
    return gulp.src(config.bundledPath + 'app.bundle.js')
        .pipe(babel({
            presets: 'es2015'
        }))
        .pipe(gulp.dest(config.bundledPath))
})

gulp.task('backend-build', () => {
    return gulp.src('./')
        .pipe(webpack(wpConfig['backendConfig']))
        .pipe(gulp.dest('./'))
})

gulp.task('build', ['babelify', 'backend-build'])

gulp.task('serve', (cb) => {
    let called = false
    nodemon({
            script: 'server.bundle.js',
            ext: 'js html'
        })
        .on('start', () => {
			// prevents nodemon from starting multiple times
            // if (!called) {
            //     cb()
            //     called = true
            // }
        })
        .on('restart', () => {
			gulp.src('./server.bundle.js')
        })

    gulp.watch(config.sassPath, ['sass'])
    gulp.watch(config.frontendPath, ['babelify'])
    gulp.watch(config.initialPath, ['babelify'])
	gulp.watch('./server.js', ['backend-build'])
	gulp.watch('./config/*.js', ['build'])
    gulp.watch('*.js', ['serve'])
})

gulp.task('clean', (cb) => {
    rimraf('public/*.bundle.*', cb)
    rimraf('public/*.html', cb)
})

gulp.task('default', ['build', 'serve'])
