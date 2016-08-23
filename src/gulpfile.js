var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cssnano     = require('gulp-cssnano');

/**
 * Launch the Server
 */
gulp.task('browser-sync', ['sass'], function() {
  browserSync.init({
    // Change as required
    proxy: 'localhost:4567',
    socket: {
      // For local development only use the default BrowserSync local URL.
      domain: 'localhost:3000'
      // For external development (e.g on a mobile or tablet) use an external URL.
      // You will need to update this to whatever BS tells you is the external URL when you run Gulp.
      //domain: '192.168.1.81:3000'
    }
  });
});

/**
 * Compile files from scss
 */
gulp.task('sass', function () {
  return gulp.src('styles.scss')
  .pipe(sass({
    includePaths: ['scss'],
    onError: browserSync.notify
  }))
  .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
  .pipe(gulp.dest('../public/'))
  .pipe(browserSync.reload({stream:true}))
});

gulp.task('sass-prod', function () {
  return gulp.src('styles.scss')
  .pipe(sass({
    includePaths: ['scss'],
    onError: browserSync.notify
  }))
  .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
  .pipe(cssnano())
  .pipe(gulp.dest('../public/'))
  .pipe(browserSync.reload({stream:true}))
});

/**
 * Reload page when markup changes
 */
gulp.task('markup', function () {
  browserSync.reload();
});

/**
 * Watch scss files for changes & recompile
 * Watch markup files, reload BrowserSync
 */
gulp.task('watch', function () {
  gulp.watch(['*.scss'], ['sass']);
  gulp.watch(['../public/index.html', '../views/*.erb'], ['markup']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the scripts, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
gulp.task('build', ['sass-prod']);
