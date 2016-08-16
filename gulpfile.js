var gulp = require('gulp');
var path = require('path');

gulp.task('images', function() {
  return gulp.src(path.join(__dirname, 'images', '**', '*'))
    .pipe(gulp.dest(path.join(__dirname, 'output')));
});