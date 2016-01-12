import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import sass from 'gulp-ruby-sass';

gulp.task('default', ['browserify', 'sass', 'watch']);

gulp.task('browserify', () => {
  return browserify('src/js/app.js')
    .transform('babelify')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', () => {
  return sass('src/css/site.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('src/js/*.js', ['browserify']);
    gulp.watch('src/css/*.scss', ['sass']);
});

