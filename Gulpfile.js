var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify');

gulp.task('default', function() {
    return gulp.src('src/affly.js')
        .pipe(uglify())
        .pipe(rename('affly.min.js'))
        .pipe(gulp.dest('dist/'))
        .pipe(notify({ message: 'Build finalizado!' }));
});
