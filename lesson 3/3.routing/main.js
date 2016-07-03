//import the built in http module
var http = require('http');
var color = require('colors');
var url = require('url');

//create a web server
var server = http.createServer(function(req,res){
		var parsedUrl = url.parse(req.url,true);
		//populate ther url into array "/user/login" -> ['','user','login']
		var router= parsedUrl.pathname.split('/');
		var controllerName = router[1];
		var method = router[2];
		//load the controller
		try{
			var controller = require('./controllers/'+controllerName);
		}catch(err){
			if(err.code=='MODULE_NOT_FOUND'){
				_res404(res);
			}
		}
		if(typeof controller[method]==='function'){
			 //write a simple string response to the browser
			res.writeHead(200,{'Content-type':'text/html'});
			//execute the method inside the controller
			controller[method](req,res);
		}else{
			_res404(res);
		}
})

//have the server listen to a given port
server.listen(8080,'localhost',function(){
    console.log('server is listening on localhost | 8080'.green);
});


function _res404(res){
	res.writeHead(404,{'Content-type':'text/html'});
	res.end("NOT FOUND");
}