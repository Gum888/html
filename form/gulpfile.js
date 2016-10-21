var gulp = require('gulp'),
    less = require('gulp-less'),
    minifycss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    watch = require('gulp-watch');

gulp.task('style', function() {
    return gulp.src('less/main.less', { style: 'expanded' })
        .pipe(less({includePaths: ['less/**']}))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('css/'))
        .pipe(notify({ message: 'Style task complete' }));
});

gulp.task('default', function() {
        gulp.watch('less/**/*.less', ['style']);
});