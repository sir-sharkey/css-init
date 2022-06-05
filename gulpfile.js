const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));

function onError(error) {
  console.log(error.message);
  this.emit('end');
}

function minified() {
  return gulp.src('./src/init.scss')
    .pipe(sass())
    .on('error', onError)
    .pipe(postcss([
      autoprefixer(),
      cssnano({
        preset: ['default', {
          normalizeWhitespace: true,
        }],
      }),
    ]))
    .pipe(rename({
      suffix: '.min',
      extname: '.css',
    }))
    .pipe(gulp.dest('./dist'));
}

function expanded() {
  return gulp.src('./src/init.scss')
    .pipe(sass())
    .on('error', onError)
    .pipe(postcss([
      autoprefixer(),
      cssnano({
        preset: ['default', {
          normalizeWhitespace: false,
        }],
      }),
    ]))
    .pipe(rename({
      extname: '.css',
    }))
    .pipe(gulp.dest('./dist'));
}

const compile = gulp.parallel(minified, expanded);

exports.default = compile;
