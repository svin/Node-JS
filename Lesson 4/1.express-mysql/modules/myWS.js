var http = require('http');

var httpServer = http.createServer(function(rq, rs) {});
httpServer.listen(1337, function() {
    console.log('server started on 1337');
})

var webSocketServer = require('websocket').server;
var ws = new webSocketServer({
    "httpServer": httpServer
});

var clients = [];
ws.on('request', function(req) {
    //this hold the client connection
    var connection = req.accept(null, req.origin);
    //store the connection into clients array
    clients.push(connection);
    //send response
    connection.sendUTF("Conn established");
    setTimeOut(function() {
        connection.sendUTF("server is still up");
    }, 1000);
    connection.onmessage(function(msg){

    });
})
