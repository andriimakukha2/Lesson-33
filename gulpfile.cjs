const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

const paths = {
    scss: {
        src: './src/scss/**/*.scss',
        dest: './src/css'
    }
};

function compileSCSS() {
    return gulp.src(paths.scss.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.scss.dest))
        .pipe(browserSync.stream());
}

function watchFiles() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch(paths.scss.src, compileSCSS);
    gulp.watch('./*.html').on('change', browserSync.reload);
}

exports.compile = compileSCSS;
exports.watch = gulp.series(compileSCSS, watchFiles);
