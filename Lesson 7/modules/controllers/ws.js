var http = require('http');
var htmlencode = require('htmlencode');
var rndClr = require('just.randomcolor');

//configure empty http server
var httpServer = http.createServer(function(rq, rs) {});
httpServer.listen(1337, function() {
    console.log('server started on 1337');
});

//configure the WS server to attach itself into the http server
var webSocketServer = require('websocket').server;
var ws = new webSocketServer({
    "httpServer": httpServer
});

var clients = [];
ws.on('request', function(req) {
    //this hold the client connection
    var connection = req.accept(null, req.origin);
    var userCon ={
      con: connection,
      color: new rndClr().toHex().value,
    };
    //store the connection into clients array
    clients.push(userCon);
    //send response
    connection.sendUTF("Conn established");
    //take care on clients messages
    connection.on('message', function(msg) {
        // sanitize the message from XSS
        var msgObj = {
          text: htmlencode.htmlEncode(msg.utf8Data),
          color: userCon.color
        }
        var msgText = JSON.stringify(msgObj);
        for (var i = 0; i < clients.length; i++) {
            //get one of the clients connecion
            var usercon = clients[i].con;
            usercon.sendUTF(msgText);
        }
    })

})
