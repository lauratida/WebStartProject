var gulp = require('gulp');
const { series, parallel } = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var uglifyjs = require('uglify-js'); 
var composer = require('gulp-uglify/composer');
var pump = require('pump');
var minify = composer(uglifyjs, console);
var rename = require("gulp-rename");
var tinypng = require('gulp-tinypng-compress');

gulp.task('default', defaultTask)
  function defaultTask(cb) {
    cb();
}

gulp.task('minify-css', function(cb) {
  return gulp.src('src/css/*.css')
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('dist/css/'))
  cb();
})

gulp.task('minifyHtml', (cb) => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist/'));
  cb();
});

 
gulp.task('minifyJs', function (cb) {
  // the same options as described above
  var options = {};
  pump([
      gulp.src(['src/js/*.js', '!src/js/*min.js']),
      minify(options),
      rename({suffix: '.min'}),
      gulp.dest('dist/js'),
      
    ],
    cb
  );
  gulp.src('src/js/*min.js')
  .pipe(gulp.dest('dist/js/'))
  cb();
});

gulp.task('fonts', function(cb) {
  return gulp.src('src/fonts/**/*')
  .pipe(gulp.dest('dist/fonts/'))
  cb();
});

gulp.task('tinypng', function (cb) {
    gulp.src('src/img/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'n4rqh4VKdVrXB6G0nyQlFnfH08zMclZS'
        }))
        .pipe(gulp.dest('dist/img'));
    cb();
});

gulp.task('movephp', function(cb) {
  return gulp.src(['src/**/*.php', 'src/**/*.md', 'src/**/*.dist'])
  .pipe(gulp.dest('dist/'))
  
  cb();
});

// exports.build = series(gulp, minify-css, minifyHtml, minifyJs, fonts, tinypng, movephp);

gulp.task('default', gulp.parallel('minify-css', 'minifyHtml', 'minifyJs', 'fonts', 'tinypng', 'movephp', function(cb) {
  cb();
}))