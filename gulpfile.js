var gulp    = require('gulp'),
concat      = require('gulp-concat'),
minifyCSS   = require('gulp-minify-css'),
uglify      = require('gulp-uglify'),
rename      = require("gulp-rename"),
htmlreplace = require('gulp-html-replace'),
minifyHTML  = require('gulp-minify-html'),
		compass = require('gulp-compass'),
webserver   = require('gulp-webserver');

gulp.task('webserver', function() {
	gulp.src('../templated-theory')
	.pipe(webserver({
		port:1234,
		livereload: true,
		directoryListing: false,
		open: true,
		fallback: 'index.html'
	}));
});


// gulp.task('compass',function(){
//     return gulp.src('./style/scss/*.scss')
//         .pipe(compass({
//             sourcemap: true,
//             time: true,
//       css: './style/css/',
//       sass: './style/scss/',
//       style: 'compact' //nested, expanded, compact, compressed
//         }))
//         .pipe(gulp.dest('./style/css/'));
// }); 


// gulp.task('minify-css', ['concat'], function() {
//   return gulp.src('./build/css/all.css')
//     .pipe(minifyCSS({
//       keepBreaks: true,
//     }))
//     .pipe(rename(function(path) {
//       path.basename += ".min";
//       path.extname = ".css";
//     }))
//     .pipe(gulp.dest('./build/css/'));
// });

gulp.task('watch',function(){
    gulp.watch('./style//scss/*.scss',['compass']);
});


gulp.task('uglify', function() {
	return gulp.src('../templated-theory/app.js')
	.pipe(uglify())
	.pipe(rename(function(path) {
		path.basename += ".min";
		path.extname = ".js";
	}))
	.pipe(gulp.dest('../templated-theory/build/js/'));
});


gulp.task('html-replace',function() {
  var opts = {comments:false,spare:false,quotes:true};
  return gulp.src('*.html')
    .pipe(htmlreplace({
        // 'css': 'css/all.min.css',
        'js': '../build/app.min.js'
    }))  
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./build/'));
});

// gulp.task('default',['compass','watch']);
gulp.task('default',['html-replace','webserver','uglify']);