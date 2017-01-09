//Gulp
var gulp = require("gulp");

//Plugins
var sass = require('gulp-sass');
//var concat = require('gulp-concat');
//var uglify = require('gulp-uglify');
//var rename = require('gulp-rename');

//Compile Sass
gulp.task("styles", function() {
  "use strict";
  gulp.src("sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("css/"));
});

//Concatenate & Minify JS
//gulp.task('scripts', function() {
//  "use strict";
//  gulp.src('./JS/*.js')
//    .pipe(concat('all.js'))
//    .pipe(gulp.dest('./dist'))
//    .pipe(rename('all.min.js'))
//    .pipe(uglify())
//    .pipe(gulp.dest('./dist/js'));
//});

//Watch Files for Changes
gulp.task('watch', function() {
  "use strict";
//  gulp.watch('./JS/*.js', ['scripts']);
  gulp.watch("sass/**/*.scss", ["styles"]);
});


gulp.task('default', ['styles',
//                      'scripts',
                      'watch']);
