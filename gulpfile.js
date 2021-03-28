const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const gulp = require('gulp');
const mergeStream = require('merge-stream');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

function onError(error) {
  console.log(error.message);
  this.emit('end');
}

gulp.task('css', () => {
  return mergeStream(
    gulp.src('./src/init.scss')
      .pipe(sass())
      .on('error', onError)
      .pipe(postcss([
        autoprefixer(),
        cssnano({
          preset: ['default', {
            normalizeWhitespace: true,
          }],
        })
      ]))
      .pipe(rename({
        suffix: '.min',
        extname: '.css'
      }))
      .pipe(gulp.dest('./dist')),
    gulp.src('./src/init.scss')
      .pipe(sass())
      .on('error', onError)
      .pipe(postcss([
        autoprefixer(),
        cssnano({
          preset: ['default', {
            normalizeWhitespace: false,
          }],
        })
      ]))
      .pipe(rename({
        extname: '.css'
      }))
      .pipe(gulp.dest('./dist'))
  );
});
