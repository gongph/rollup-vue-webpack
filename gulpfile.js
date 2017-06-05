(function(){
  'use strict'

  var gulp = require('gulp'),
      header = require('gulp-header'),
      uglify = require('gulp-uglify'),
      sourcemaps = require('gulp-sourcemaps'),
      rollup = require('rollup-stream'),
      buble = require('rollup-plugin-buble'),
      vue = require('rollup-plugin-vue2'),
      source = require('vinyl-source-stream'),
      buffer = require('vinyl-buffer'),
      rename = require('gulp-rename'),
      pkg = require('./package.json'),
      banner = [
        '/**',
        ' * Rollup vue demo <%= pkg.version %>',
        ' * <%= pkg.description %>',
        ' * ',
        ' * Copyright <%= date.year %>, <%= pkg.author %>',
        ' * ',
        ' */',
        ' '].join('\n')

    gulp.task('dist', function (cb) {
      rollup({
        entry: './src/rollup-vue.js',
        plugins: [vue(), buble()],
        format: 'umd',
        moduleName: 'RollupVue',
        useStrict: false,
        sourceMap: true
      })
      .pipe(source('rollup-vue.js', './src'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(header(banner, {
        pkg: pkg,
        date: (function(){
        	return {
        	  year: new Date().getFullYear()
        	}
        })()
      }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/'))
      .on('end', function () {
        gulp.src('./dist/rollup-vue.js')
            .pipe(sourcemaps.init())
            .pipe(uglify())
            .pipe(header(banner, {
              pkg: pkg,
              date: (function(){
              	return {
              	  year: new Date().getFullYear()
              	}
              })()
            }))
            .pipe(rename('rollup-vue.min.js'))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./dist/'))
            .on('end', function () {
              cb()
            })
      })
    })
})()