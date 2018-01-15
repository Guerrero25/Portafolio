const gulp = require('gulp');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const imagemin = require('gulp-imagemin');

const paths = {
    styles: ['src/sass/**/*.scss'],
    images: 'src/img/**/*'
};

gulp.task('clean', function () {
    return del(['build']);
});

gulp.task('styles', ['clean'], function () {
    return gulp.src(paths.styles)
        .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(cssmin())
            .pipe(concat('styles.min.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.stream());
});

gulp.task('images', ['clean'], function () {
    return gulp.src(paths.images)
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest('build/img'))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['styles', 'images'], function () {
    browserSync.init({
        server: './'
    })
    
    gulp.watch(paths.styles, ['styles', 'images'], browserSync.reload);
    gulp.watch('./index.html', ['styles', 'images']).on('change', browserSync.reload);
    gulp.watch(paths.images, ['styles', 'images'], browserSync.reload);
});

gulp.task('default', ['serve']);