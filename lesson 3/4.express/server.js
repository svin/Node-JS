var express = require('express');
//run the factory
var app = express();

app.use(express.static('public'));

app.get('/',function(req,res){
	res.send("Hello world");
});
//users
app.get('/users',function(req,res){
	res.send("Hello world");
});
app.post('/users',function(req,res){
	res.send("Hello world");
});
app.put('/users',function(req,res){
	res.send("Hello world");
});
app.delete('/users',function(req,res){
	res.send("Hello world");
});

var server = app.listen(8080,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("server is running under "+host+":"+port);
});