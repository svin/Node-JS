//import the built in http module
var http = require('http');
var color = require('colors');

//create a web server
var server = http.createServer(function(req,res){
        //log the request url
       console.log(('received request: '+req.url).blue);

        //write a simple string response to the browser
       res.writeHead(200,{'Content-type':'text/plain'});
       res.end('hello server');
})

//have the server listen to a given port
server.listen(8080,'localhost',function(){
    console.log('server is listening on localhost | 8080'.green);
});
