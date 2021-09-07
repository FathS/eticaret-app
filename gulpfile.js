'use strict';

const gulp = require('gulp');
var sass = require('gulp-sass')(require('node-sass'));
var concat = require('gulp-concat');
sass.compiler = require('node-sass');

gulp.task('css', async () => {
    return gulp.src('src/assets/css/*.scss') //Assets Css klasörünün altındaki *(tüm) .scss dosyalarını kapsar anlamına gelir.
        .pipe(sass().on('error', sass.logError)) //Sass kullanımı için
        .pipe(concat('style.min.css')) // Yazılan tüm sass yada css dosyalarını birleştireceğim dosya adı.
        .pipe(gulp.dest('dist/css')) //Üst satırdaki oluşacak css dosyasının yolunu belirtmek için.
});

//gulp watch diyerek yukarıdaki css fonksiyonunu sürekli izlemesini sağlar.
gulp.task("watch", async () => {
    gulp.watch('src/assets/css/*.scss', gulp.series('css')); //gulp series içerisinde yazan 'css' gulp.task içerisinde yazan css ile aynı olmalıdır!
});