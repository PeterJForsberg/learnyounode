var fs = require('fs')
var dataNeeded = process.argv[2]

fs.readFile(dataNeeded, function (err, data) {
  var stringText = data.toString()
  var readableText = stringText.split('\n')
  var linesCount = readableText.length - 1
  console.log(linesCount)
})