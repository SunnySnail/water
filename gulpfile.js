var gulp = require('gulp'),
    gulpwebpack = require('webpack-stream'),
    webpackConfig = require('./webpack.config.js'),
    webpack = require('webpack'),
    replace = require('gulp-replace'),
    outputPath = '../water-static/',
    absolutePath = '//tx.cdn.water.icampus.us/water/';

gulp.task('webpack',function() {
    gulp.src('./src/js/*.js')
        .pipe(gulpwebpack(webpackConfig))
        .pipe(gulp.dest(outputPath))
})

gulp.task('lib', function() {
    gulp.src('./src/lib/**')
        .pipe(gulp.dest(outputPath+'js'))
})

gulp.task('css', function() {
    gulp.src('./src/css/**')
        .pipe(gulp.dest(outputPath+'css'));
})

gulp.task('html',function(){
    gulp.src(outputPath+'html/*.html')
        .pipe(replace(/\.\.\/css\/(\S+)\.css/g, absolutePath+'css/$1.css'))
        .pipe(replace(/\.\.\/lib\/(\S+)\.js/g, absolutePath+'js/$1.js'))
        .pipe(gulp.dest(outputPath+'html'));
})

gulp.task('images',function(){
    gulp.src('./src/images/**')
        .pipe(gulp.dest(outputPath+'images'));
})

gulp.task('default', ['webpack','css','images','lib']);

