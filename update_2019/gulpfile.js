// be sure to update your gulp-cli first
// npm install gulp-cli -g

const { watch, series, src, dest } = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

// browser-sync functions
function reload(done) {
  browserSync.reload();
  done();
}

function serve(done) {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });
  done();
}

// CSS processing using Sass, postCSS and autoprefixer
function css() {
	return src('src/sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(postcss([
			autoprefixer({
				browsers: ['last 4 versions']
			})
		]))
        .pipe(sourcemaps.write('./maps'))
		.pipe(dest('dist/css'))
		.pipe(browserSync.stream())
}

// image processing
function images() {
	return src('src/images/*')
		.pipe(imagemin())
		.pipe(dest('dist/images'))
}

// simple copy task
function copy() {
	return src('src/**/*.+(html|js)')
		.pipe(dest('dist'))
		.pipe(browserSync.stream())
}

// here I create a simple watchFiles function for exporting
// the ignoreInitial option runs the functions right at the start
// the series() function executes functions in order
// you could also import and use parallel() which runs tasks concurrently
function watchFiles() {
	watch('src/sass/**/*.scss', { ignoreInitial: false }, series(css, reload));
	watch('src/**/*.+(html|js)', { ignoreInitial: false }, series(copy, reload));
}

// Gulp 4's task functions can be nested
// here I use the series function to run "serve" and then the watch tasks
exports.watch = series(serve, watchFiles);

// here I just export the images function so it can be run separately
exports.images = series(images);
