//get current folder as root
global.BASE_PATH = __dirname;

var express = require('express');
//run the factory
var app = express();
var bodyParser = require('body-parser');
//get connection, set into global so all the controllers would be able to use it
GLOBAL.con = require('./modules/db.js');
var session = require('express-session');

// expose the static content folder
app.use(express.static('public'));
// this middleware parse a json string into object and populate it into  req.body
app.use(bodyParser.json());


app.use(session({
    secret: 'A secret key [super private!]',
    resave: false, //do not save the session if user did not make changed
    saveUninitialized: false //do not save session on Uninitialized
}));

//any url that starts with '/auth' should been managed by this controller
// for example: '/auth/login','/auth/register'
var auth = require('./modules/controllers/auth');
app.use('/auth', auth);

//this controller handle chat
app.use('/chat', require('./modules/controllers/chat'));


//start listening to network
var server = app.listen(8080, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("server is running under " + host + ":" + port);
})
