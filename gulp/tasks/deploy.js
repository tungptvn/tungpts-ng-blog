import gulp from 'gulp';
var ghPages = require('gulp-gh-pages')
gulp.task('deploy', ['prod'], function () {
  return gulp.src('./build/**/*')
    .pipe(ghPages());
});
