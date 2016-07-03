//import the built in http module
var http = require('http');
var color = require('colors');
var url = require('url');

//create a web server
var server = http.createServer(function(req,res){
		var parsedUrl = url.parse(req.url,true);
        //log the request url
		var queryObj=parsedUrl.query;

        //write a simple string response to the browser
		res.writeHead(200,{'Content-type':'text/html'});
		var i=1;
		for(key in queryObj){
			res.write(i++ +")"+key+" - " +queryObj[key]+" Rocks!<br/>" );
		}
		res.end();
});

//have the server listen to a given port
server.listen(8080,'localhost',function(){
    console.log('server is listening on localhost | 8080'.green);
});
