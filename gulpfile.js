let gulp = require('gulp')
let webpack = require('webpack-stream')
let eslint = require('gulp-eslint')
let exec = require('child_process').exec

const paths = {
  allSrc: 'app/**/*.js,.vue',
  appDir: 'app',
  gulpFile: 'gulpfile.js'
}

gulp.task('lint', () => {
  return gulp.src([
    paths.allSrc,
    paths.gulpFile
  ])
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
})

gulp.task('build', ['lint'], () => {
  return gulp.src('app/**/*')
      .pipe(webpack(require('./webpack.config.js')))
      .pipe(gulp.dest('dist/'))
})

gulp.task('dev', ['build'], () => {
  exec('electron main.js')
})
