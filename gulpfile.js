/*
 * @Author: funlee 
 * @Email: i@funlee.cn 
 * @Date: 2017-12-18 08:12:38 
 * @Last Modified time:   2017-12-18 08:12:38 
 * @Description: gulpfile.js
 */

const gulp = require('gulp')
const concat = require('gulp-concat')
const less = require('gulp-less')
const cleanCSS = require('gulp-clean-css')
const autoprefixer = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')
const browserSync = require('browser-sync')
const opn = require('opn')

const path = {
  less: ['./node_modules/font-awesome/css/font-awesome.css','./src/less/*.less'],
  img: './src/img/*',
  js: './src/js/*.js',
  html: './src/index.html',
  fonts:'./node_modules/font-awesome/fonts/*',
  src: './'
}

gulp.task('html', () => {
  gulp.src(path.html)
    .pipe(gulp.dest('./dist'))
})

gulp.task('fonts', () => {
  gulp.src(path.fonts)
    .pipe(gulp.dest('./dist/fonts'))
})

gulp.task('less', () => {
  gulp.src(path.less)
    .pipe(less())
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(concat('main.min.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css'))
})

gulp.task('img', () =>
  gulp.src(path.img)
  .pipe(imagemin())
  .pipe(gulp.dest('./dist/img'))
)

gulp.task('js', () => {
  return gulp.src(path.js)
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/js'))
})

gulp.task('server', ['html', 'fonts','less', 'img', 'js'], () => {
  browserSync.init({
    server: './dist/',
    port: 8080,
    open: false
  }, () => {
    var homepage = 'http://localhost:8080/'
    opn(homepage)
  })

  gulp.watch(path.html, ['html'])
  gulp.watch(path.less, ['less'])
  gulp.watch(path.js, ['js'])

  gulp.watch([path.html, path.less, path.js]).on('change', () => {
    browserSync.reload()
  })
})