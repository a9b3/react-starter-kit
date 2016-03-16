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
    .pipe($.gitmodified(['added']))
    .pipe($.eslint(require('../.eslintrc.js')))
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError())
  })

  gulp.task('lint:scss', () => {
    return gulp.src([
      `${config.src}/**/*.scss`,
      `!node_modules/**/*`,
      `!dist/**/*`,
    ])
    .pipe($.gitmodified(['added']))
    .pipe($.scssLint({
      config: '../scss-lint.yml',
    }))
    .pipe($.scssLint.failReporter('E'))
  })
}
