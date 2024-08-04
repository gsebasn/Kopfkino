// Import necessary modules
const gulp = require('gulp');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

// Define the paths to your Less files and the destination for CSS files
const paths = {
    less: {
        src: 'src/**/*.less', // source directory for Less files (recursive)
        dest: 'src/css'           // destination directory for CSS files (same structure)
    }
};

// Define the Less conversion task
function lessToCss() {
    return gulp.src(paths.less.src) // get source files
        .pipe(less())                 // compile Less to CSS
        .pipe(cleanCSS())             // minify the CSS
        .pipe(rename({
            suffix: '.min'              // add .min suffix to the output CSS files
        }))
        .pipe(gulp.dest(paths.less.dest)); // save the minified CSS files to destination
}

// Define the watch task
function watchFiles() {
    gulp.watch(paths.less.src, lessToCss); // watch for changes in Less files and run the Less conversion task
}

// Define the default task
const build = gulp.series(lessToCss, watchFiles);

// Export the tasks to be run via the CLI
exports.lessToCss = lessToCss;
exports.watch = watchFiles;
exports.default = build;