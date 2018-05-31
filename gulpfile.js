var gulp = require('gulp');
var pug = require('gulp-pug');
var stylus = require('gulp-stylus');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();
var del = require('del');
var notify = require("gulp-notify");
var concat = require('gulp-concat');

var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

var processors = [
	autoprefixer({browsers: ['last 2 version']})
];

const ignorePug = [
	'!src/layouts/**',
	'!src/blocks/**',
	'!src/globals/**'
];

gulp.task('html', function(){
	return gulp.src(['src/**/*.pug', ...ignorePug])
		.pipe(pug())
		.pipe(gulp.dest('build'))
});



gulp.task('collect-js', function(){
	return gulp.src(['src/blocks/**/*.js'])
		.pipe(concat('blocks.js'))
		.pipe(gulp.dest('build/assets'))
});

gulp.task('bundle-js', function () {
    return browserify({
        entries: [
            'src/assets/main.js'
        ],
        debug: true
    })
        .bundle()
        .on('error', errorAlert)
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('build/assets'));
});



gulp.task('css', function(){
	return gulp.src('src/assets/*.styl')
		.pipe(stylus({
            'include css': true
        }))
        .on('error', notify.onError())
		.pipe(postcss(processors))
		.pipe(gulp.dest('build/assets'))
		.pipe(browserSync.stream())
});


gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
});

var reload = function(done){
	browserSync.reload();
	done();
}

gulp.task('copy', function(){
	return gulp.src([
			'src/assets/**/*.{jpg,png,jpeg,svg,gif,mp4,json}'
		])
	.pipe(gulp.dest('build/assets'))
});

gulp.task('copy-fonts', function(){
	return gulp.src([
			'src/assets/fonts/**/*'
		])
	.pipe(gulp.dest('build/assets/fonts'))
});

gulp.task('clean', function() {
	return del('build');
});


gulp.task('watch', function() {
    gulp.watch('src/**/*.pug', gulp.series('html', reload));
    gulp.watch('src/**/*.styl', gulp.series('css'));
    gulp.watch('src/blocks/**/*.js', gulp.series('collect-js', reload));
    gulp.watch('src/assets/*.js', gulp.series('bundle-js', reload));
});
gulp.task('build', gulp.parallel('html', 'css', 'collect-js', 'bundle-js', 'copy', 'copy-fonts'));
gulp.task('start', gulp.parallel('watch', 'serve'));

gulp.task('default', gulp.series('clean', 'build', 'start'));


// handle errors
function errorAlert(error) {
    notify.onError({
        title: 'Error in Gulp Tasks',
        message: 'Check your terminal.',
        sound: 'Sosumi'
    })(error);
    console.log(error.toString());
    this.emit('end');
}
