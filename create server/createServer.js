var http = require("http");

var port = 3000;

var server = http.createServer(function (request, response) {
    
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");\
    console.log(response.url);
});

server.listen(port, "localhost", function(){
    console.log("Server running at port" , port);
});

