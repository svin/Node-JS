var express = require('express');

var router = express.Router();
// serve the chat file to logged in users
// /chat/chat.html
router.get('/chat.html', function(req, res) {
    //if the user is not logged in do not serve the file
    if (!req.session.userData && false) {
        res.json({
            success: false,
            error: 'not logged in'
        });
    } else {
        res.sendFile(BASE_PATH + '/private/chat.html');
    }
});

module.exports = router;
