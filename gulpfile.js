var gulp = require('gulp');
var concat = require('gulp-concat');
var inject = require('gulp-inject');
var rename = require('gulp-rename');

gulp.task('crea-route', function(){
    gulp.src('./views/*NEW.pug')
    .pipe(concat('*NEW.js'))
    .pipe(gulp.dest('./routes/'));

});

// npm i -g gulp
// npm i --save-dev gulp 
// npm i --save-dev gulp-inject
// npm i --save-dev gulp-concat
//sudo gulp crea-route