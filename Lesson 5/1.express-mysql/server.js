var express = require('express');
//run the factory
var app = express();
var bodyParser = require('body-parser')

require('./constants');
var session=require('express-session');
var myWS = require('./modules/myWS')
var users = require('./modules/controllers/users');
var auth = require('./modules/controllers/auth');


app.use(bodyParser.json());
app.use(session({
	secret: 'A secret key [super private!]',
	resave: false,//do not save the session if user did not make changed
	saveUninitialized: false //do not save session on Uninitialized
}));

app.use(express.static('public'));

//app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.send("Hello world");
})
//usesrs
app.use('/users',users);
//authenticate
app.use('/auth',auth);







var server = app.listen(8080, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("server is running under " + host + ":" + port);
})
