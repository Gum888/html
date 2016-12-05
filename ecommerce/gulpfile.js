var gulp = require('gulp'),
    minify = require('gulp-clean-css'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;
    
gulp.task('default', ['browsersync', 'watch']);

gulp.task('browsersync', function () {
    browserSync({
        server: {
            baseDir: "./"
        },
        port: 8080,
        open: true,
        notify: false
    });

});

gulp.task('style', function() {
    return gulp.src('src/sass/main.scss', {style : 'expended'})
            .pipe(sass({includePaths: ['src/sass/**']}))
            .pipe(rename({suffix: '.min'}))
            .pipe(minify())
            .pipe(gulp.dest('css/'))
            .pipe(notify({message: 'Style task is finished'}))
            .pipe(reload({stream: true}));;
});

gulp.task('script', function() {
    return gulp.src('src/js/script.js')
            .pipe(rename({suffix: '.min'}))
            .pipe(uglify())
            .pipe(gulp.dest('js/'))
            .pipe(notify({message: 'Script task is finished'}))
            .pipe(reload({stream: true}));
});

gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.scss', ['style']);
    gulp.watch('src/js/script.js', ['script']);
});