import gulp from 'gulp'
import nodemon from 'gulp-nodemon'
import debug from 'gulp-debug'
import webpack from 'webpack-stream'
import wpConfig from './config/webpack.config.js'
import sass from 'gulp-sass'
import browserSync from 'browser-sync'

const config = {
    sassPath: './public/src/scss/',
    cssPath: './public/dist/css/',
    jsPath: './public/src/js/',
    bundledPath: './public/dist/js/',
    htmlPath: './public/dist/views/'
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

gulp.task('server', ['webpack', 'sass'], (cb) => {
    // flag to prevent nodemon from starting multiple times
    let start = false

    nodemon({
            script: 'server.js',
            ext: 'js html'
        })
        .on('start', () => {
            if (!started) {
                cb()
                console.log('Starting server...')
                browserSync.init({
                    startPath: config.htmlPath + 'index.html',
                    ghostMode: {
                        scroll: false
                    }
                })
                start = true
            }
        })
    gulp.watch([
            config.htmlPath + '*.html',
            config.cssPath + '*.css',
            config.jsPath + '*.js'
        ],
        browserSync.reload())
})
gulp.task('default', ['server'])
