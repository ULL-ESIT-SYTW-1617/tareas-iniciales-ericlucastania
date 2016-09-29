//GULP
var gulp  = require('gulp');
var shell = require('gulp-shell');
 
gulp.task('deploy', function () {
  return gulp.src('scripts/*')
    .pipe(shell([
      'npm run build && npm run deploy-gitbook && npm run deploy-wiki'
    ]
    ));
})


gulp.watch('gh-pages', ['deploy']);