var cookieParser = require('cookie-parser');
var session = require('express-session');
var express = require('express');

//run the factory

var app = express();
app.use(session({
	secret: 'A secret key [super private!]'
}));
app.use(cookieParser());
app.use(express.static('public'));

app.get('/',function(req,res){
	var cookieVal="Hello cookie";
	res.cookie("cookieName",cookieVal);
	//var cookie=req.cookies;
	var sessionObj = req.session;
	sessionObj.userAuthenticate = 'admin';
	res.send(cookieVal);
});
app.get('/checksession',function(req,res){
	var sessionObj = req.session;
	res.send(sessionObj.userAuthenticate);
});


var server = app.listen(8080,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("server is running under "+host+":"+port);
});
