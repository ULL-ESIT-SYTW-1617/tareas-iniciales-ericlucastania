//GULP
var gulp  = require('gulp');
var shell = require('gulp-shell');
 
 
var paths = {
  
   scripts: [
     './scripts.js/**'
   ],
   
   
   html: [
   './gh-pages/index.html'
   ],
   
   book: [
   './txt/*.md'
   ]
   
};
gulp.task('deploy',shell.task([
  'npm run deploy'
]));

gulp.task('watch', function(){
   gulp.watch(paths.book,['deploy']);
  
});

gulp.task('default', ['watch']);