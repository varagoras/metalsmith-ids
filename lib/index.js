'use strict'

module.exports = function (options) {
  options = options || {};
  options.sortBy = options.sortBy || 'date';

  return function (files, metalsmith, done) {
    var id = 0;
    var fs = Object.keys(files)
      .filter(function(a){
        return files[a][options.sortBy];
      })
      .sort(function(a, b){
        return (
          files[a][options.sortBy] > files[b][options.sortBy] ? 1 :
            (files[a][options.sortBy] < files[b][options.sortBy] ? -1 : 0)
        );
      });

    if (options.reverse) {
      fs.reverse();
    }

    for (var i = 0; i < fs.length; i++) {
      files[fs[i]].id = ++id;
    };
    done();
  }
}
