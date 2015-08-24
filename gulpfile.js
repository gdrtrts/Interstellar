var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('default', function () {

	return gulp.src('js/*.js')

	//combine all js files into one
	.pipe(concat('bundle.min.js'))

	//minify js files
	.pipe(uglify())
	.pipe(gulp.dest('dist'));

});