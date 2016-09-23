import gulp from 'gulp'
import nodemon from 'gulp-nodemon'
import notify from 'gulp-notify'
import debug from 'gulp-debug'
import webpack from 'webpack-stream'
import wpConfig from './config/webpack.config.js'
import sass from 'gulp-sass'
import livereload from 'gulp-livereload'

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
    let called = false
    livereload.listen()
    nodemon({
            script: 'server.js',
            ext: 'js html'
        })
        .on('start', () => {
            if (!called) {
                cb()
                called = true
            }
        })
        .on('restart', () => {
            setTimeout(() => {
                livereload.changed('server.js')
                gulp.src('server.js')
					.pipe(notify('Restarting server...'))
            }, 1000)
        })

    gulp.watch(config.sassPath, ['sass'])
    gulp.watch(config.jsPath, ['webpack'])
})
gulp.task('default', ['server'])
