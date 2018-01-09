var express = require('express');
var app = express();
var path = require('path');

//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname));

var port = 3000

app.listen(port);
console.log("server running" + port);


