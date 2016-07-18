var fs = require('fs')

var bufferToRead = fs.readFileSync(process.argv[2]);

var stringText = bufferToRead.toString();

var readableText = stringText.split('\n');

var linesCount = readableText.length - 1
 
console.log(linesCount);
