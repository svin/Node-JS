var express = require('express');
//run the factory
var app = express();
var bodyParser = require('body-parser');

require('./modules/constants');

//init + get instance
GLOBAL.con = require('./modules/db.js');
var myWS = require('./modules/myWS');
var users = require('./modules/controllers/users');


app.use(bodyParser.json());
app.use(express.static('public'));

//app.use(bodyParser.urlencoded({extended: true}));


//usesrs
app.get('/', function(req, res) {
    res.send("Hello");
});

app.get('/users/:id', users.get); 


app.post('/users', function(req, res) {
    res.send(req.body);
});
app.put('/users', function(req, res) {
    res.send("Hello world");
});
app.delete('/users', function(req, res) {
    res.send("Hello world");
});

var server = app.listen(8080, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("server is running under " + host + ":" + port);
});
