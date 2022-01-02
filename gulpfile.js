const {src, dest, watch, parallel} = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

function browsersync() {
    browserSync.init({
        server: {
            baseDir: './'
        },
        browser: 'google chrome'
    });
}

function styles() {
    return src('scss/style.scss')
        .pipe(scss({outputStyle: 'expanded'}))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true
        }))
        .pipe(dest('css'))
        .pipe(browserSync.stream())
}

function watching() {
    watch(['scss/*.scss'], styles);
    watch(['js/*.js']);
    watch(['*.html']).on('change', browserSync.reload);
}

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;

exports.default = parallel(browsersync, watching); 