const {src, dest, parallel} = require('gulp');
const concat = require('gulp-concat');


function minifyGulpJs(){
  return src(['./dist/crud/*.js',
  './dist/crud/assets/js/*.js',
  './dist/crud/assets/js/boot/*.js',
  './dist/crud/assets/js/bootstrap/*.js'
], {sourcemaps: true})
    .pipe(concat('app.min.js'))
    .pipe(dest('gulpbuild', {sourcemaps:true}))
}

function minifyGulpCSS(){
  return src(['./dist/crud/*.css',
  './dist/crud/assets/css/*.css',
  './dist/crud/assets/css/bootstrap/*.css'
], {sourcemaps: true})
    .pipe(concat('app.min.css'))
    .pipe(dest('gulpbuild', {sourcemaps:true}))
}

exports.minifyall = parallel(minifyGulpJs,minifyGulpCSS);

