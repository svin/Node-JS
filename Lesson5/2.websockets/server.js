var express = require('express');
//run the factory
var app = express();
var bodyParser = require('body-parser')

require('./constants');

//load websocket
var myWS = require('./modules/myWS')

app.use(bodyParser.json());
app.use(express.static('public'));


var server = app.listen(8080, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("server is running under " + host + ":" + port);
})
