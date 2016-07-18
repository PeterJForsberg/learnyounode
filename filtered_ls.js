var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var filter = ".".concat(process.argv[3]);


fs.readdir(dir, function (err, list) {
  if(err){
    throw err
  }
  list.forEach(function(name){
  	if (filter === path.extname(name)) {
  		console.log(name);
  	}
  });
});




