var express = require('express');
var toDoApp = express();

toDoApp.use(express.static('public'))

toDoApp.get('/', function (req, res) {
  res.send('Hello World!')
})

toDoApp.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
