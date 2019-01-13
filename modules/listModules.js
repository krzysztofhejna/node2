var fs = require('fs');
var colors = require ('colors');

function listModules() {
  fs.readdir('./modules', function(err, files) {
    fs.writeFile('./modules.txt', files, function (err) {
      if (err) throw err;
      console.log('Lista modułów została zapisana w pliku modules.txt.'.cyan);
    });
  });
};

exports.print = listModules;