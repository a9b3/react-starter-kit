const $ = require('gulp-load-plugins')()
const gulp = require('gulp')

module.exports = function lint(config) {
  gulp.task('lint:js', () => {
    return gulp.src([
      `gulpfile.js`,
      `${config.src}/**/*.js`,
      `!node_modules/**/*`,
      `!dist/**/*`,
    ])
    .pipe($.gitmodified([ 'added' ]))
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError())
  })
}
