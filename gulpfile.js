'use strict';

/**
 * LOAD PLUGINS
 */

const {
  series,
  parallel,
  src,
  dest,
  watch
} = require('gulp'),
  imagemin = require('gulp-imagemin');

/**
 * PATHS OBJECT
 *
 * Contains all the relevant paths for gulp tasks
 */
const paths = {
  images: {
    src: './static/img/**/*{gif,png,jpg,JPG}'
  }
}


/**
 * IMAGES TASK
 *
 * Uses imagemin to optimize images
 */

function images(done) {
  src(paths.images.src)
    .pipe(imagemin([
      imagemin.gifsicle({
        interlaced: true
      }),
      imagemin.jpegtran({
        progressive: true
      }),
      imagemin.optipng({
        optimizationLevel: 5
      }),
      imagemin.svgo({
        plugins: [{
            removeViewBox: true
          },
          {
            cleanupIDs: false
          }
        ]
      })
    ], {
      verbose: true
    }))
    .pipe(dest(paths.images.src));
    done();
}
/**
 * TODO:
 * finish watchImages function
 * add npm-run-all to npm scripts
 *
 * https://gist.github.com/jeromecoupe/0b807b0c1050647eb340360902c3203a
 */
// Watch Images
// function watchImages() {
//   gulp.watch("./assets/img/**/*", images);
// }

exports.images = imagemin;
