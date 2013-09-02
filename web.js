var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');
var buffer = fs.readFileSync("index.html");
// var out_string = buffer.toString('utf-8');

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
  response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
