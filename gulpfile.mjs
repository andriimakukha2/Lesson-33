// Імпортуємо необхідні модулі
import gulp from 'gulp';
import dartSass from 'sass'; // Імпортуємо Dart Sass напряму
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import browserSync from 'browser-sync';

// Налаштовуємо компілятор Sass
const sass = gulpSass(dartSass);

// Шляхи до файлів
const paths = {
    scss: './src/scss/**/*.scss',  // Всі SCSS файли
    css: './dist/css',  // Куди зберігати скомпільовані CSS файли
    html: './*.html',  // HTML файли для спостереження
    js: './src/js/**/*.js', // JS файли для спостереження
};

// Задача для компіляції SCSS у CSS
function compileSCSS() {
    return gulp
        .src(paths.scss) // Звідки беремо SCSS файли
        .pipe(sass().on('error', sass.logError)) // Компілюємо SCSS у CSS і виводимо помилки
        .pipe(rename({ suffix: '.min' })) // Перейменовуємо з розширенням .min
        .pipe(gulp.dest(paths.css)) // Куди кладемо готовий CSS
        .pipe(browserSync.stream()); // Оновлюємо сторінку через BrowserSync
}

// Задача для запуску сервера і перегляду змін
function watchFiles() {
    browserSync.init({
        server: {
            baseDir: './', // Встановлюємо кореневу директорію сервера
        },
    });
    gulp.watch(paths.scss, compileSCSS); // Спостерігаємо за змінами у SCSS файлах
    gulp.watch(paths.html).on('change', browserSync.reload); // Оновлюємо сторінку при зміні HTML
    gulp.watch(paths.js).on('change', browserSync.reload); // Оновлюємо сторінку при зміні JS
}

// Оголошення задач
const compile = gulp.series(compileSCSS);
const watch = gulp.series(compileSCSS, watchFiles);

// Експортуємо за замовчуванням
export default gulp.series(compile, watch);
