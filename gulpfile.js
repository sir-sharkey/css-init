import gulp from 'gulp';


gulp.task('css', () => {
  const plugins = [
    autoprefixer({browsers: ['last 1 version']}),
    cssnano()
  ];
  return gulp.src('./src/init.scss')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./dist'));
});
