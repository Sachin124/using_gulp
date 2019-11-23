const {src, dest, parallel} = require('gulp');
// const scss = require('gulp-scss');
// const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
// const iconfont = require('gulp-iconfont');
// var runTimestamp = Math.round(Date.now()/1000);
const gulpFont = require('gulp-font');

// const f = require('./node_modules/font-awesome/css/font-awesome.min.css')
function minifyGulpJs(){
  return src(['./dist/crud/*.js',
  './dist/crud/*.js'
], {sourcemaps: true})
    .pipe(concat('app.min.js'))
    .pipe(dest('gulpbuild', {sourcemaps:true}))
}

function minifyGulpCSS(){
  return src(['./dist/crud/*.css',
  './dist/crud/*.js'
], {sourcemaps: true})
    .pipe(concat('styles.min.css'))
    .pipe(dest('gulpbuild', {sourcemaps:true}))
}

function font() {
  return src('./dist/crud/*.{ttf,otf}', { read: false })
      .pipe(gulpFont({
          ext: '.css',
          fontface: 'src/assets/fonts',
          relative: 'gulpbuild',
          dest: 'gulpbuild',
          embed: ['woff'],
          collate: false
      }))
      .pipe(dest('gulpbuild'));
}

exports.minifyGulpJs = minifyGulpJs;
// exports.minifyIcons = minifyIcons;

exports.minifyall = parallel(minifyGulpJs,minifyGulpCSS);

