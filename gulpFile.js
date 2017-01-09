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
  gulp.src("./public/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./public/css/"));
});

//Concatenate & Minify JS
//uncomment below and delete this line on completion to for uglify, concatenate, and minify js files
//gulp.task('scripts', function() {
//  "use strict";
//  gulp.src('./public/JS/*.js')
//    .pipe(concat('all.js'))
//    .pipe(gulp.dest('./public/dist'))
//    .pipe(rename('all.min.js'))
//    .pipe(uglify())
//    .pipe(gulp.dest('./public/dist/js'));
//});

//Watch Files for Changes
gulp.task('watch', function() {
  "use strict";
//uncomment below and delete this line on completion to watch js files for uglify etc
//  gulp.watch('./public/JS/*.js', ['scripts']);
  gulp.watch("./public/sass/**/*.scss", ["styles"]);
});


gulp.task('default', ['styles',
//uncomment below and delete this line on completion to watch js files for uglify etc
//                      'scripts',
                      'watch']);
