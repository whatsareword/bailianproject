const gulp = require("gulp");//加载gulp模块;
const connect = require("gulp-connect");//加载 gulp-connect 插件;
const babel = require("gulp-babel");//加载gulp-babel 插件；
const sass = require("gulp-sass-china");




gulp.task("html",()=>{
	return gulp
				.src(["*.html"])
			 	.pipe(gulp.dest("dist"))
			 	.pipe(connect.reload())//自动刷新;
})

gulp.task("images",()=>{
	return gulp
				
				.src(["images/**/*"])
			 	.pipe(gulp.dest("dist/images/"))
			 	
})
gulp.task("font",()=>{
	return gulp
				
				.src(["font/**/*"])
			 	.pipe(gulp.dest("dist/font/"))
			 	
})


gulp.task("script",()=>{
	return gulp
				.src(["src/*.js","model/*.js","libs/**/*"])
				.pipe(gulp.dest("dist/scripts"))
})

gulp.task("watch",()=>{
	gulp.watch(["**/*.html","!module/**/*"],["html"]);
	gulp.watch(["*/*.js","!module/**/*","libs/**/*","!es6/*"],["script"]);
	gulp.watch(["es6/*.js","!module/**/*","libs/**/*"],["es6"]);
	gulp.watch(["images/**/*"],["images"]);
	gulp.watch(["scss/*.scss"],["sass"]);
})
gulp.task('server',function(){
    connect.server({
        root:'dist',  //以谁为服务器根目录
        port:82,  // 端口号 
        livereload:true //开启自动刷新;
    });
})
gulp.task('es6',() =>{
	   return gulp.src('src/*.js')
	        .pipe(babel({
	            presets: ['env']
	        }))
	        .pipe(gulp.dest('dist/scripts/'))
})

gulp.task("sass",()=>{
	 return gulp.src('scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
})

gulp.task("default",["watch","server"])
