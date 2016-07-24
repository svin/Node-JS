var express = require('express');
var app = express();
var expWs = require('express-ws')(app);

var router = express.Router();
module.exports = router;

//listen to ws requests
router.ws('/ws', function(ws, req) {
    console.log('con arrived');
    ws.on('message', function(msg) {
        ws.send(msg);
    })
});
// serve the chat file to logged in users
// /chat/chat.html
router.get('/chat.html', function(req, res) {
    if (!req.session.userData) {
        res.json({
            success: false,
            error: 'not logged in'
        });
    } else {
        res.sendFile(BASE_PATH + '/private/chat.html');
    }
});
