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
const browserify = require('browserify')
const gutil = require('gulp-util')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')

const hbsfy = require('hbsfy')

const path = {
  less: ['./node_modules/font-awesome/css/font-awesome.css', './src/less/*.less'],
  img: './src/img/*',
  js: './src/js/*.js',
  html: './src/index.html',
  fonts: './node_modules/font-awesome/fonts/*',
  hbs: './src/hbs/*',
  data: './src/data/*',
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
  var b = browserify({
    entries: './src/js/app.js',
    debug: true
  })
  return b.transform(hbsfy).bundle()
    .pipe(source("main.min.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(uglify())
    .on('error', gutil.log)
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./dist/js"))
})

gulp.task('data', () =>
  gulp.src(path.data)
  .pipe(gulp.dest('./dist/data'))
)

gulp.task('server', ['html', 'fonts', 'less', 'img', 'js', 'data'], () => {
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

  gulp.watch([path.html, path.less, path.js, path.hbs, path.data]).on('change', () => {
    browserSync.reload()
  })
})
