var con = require(BASE_PATH + '/modules/db');
var express = require('express');
var router = express.Router();
module.exports = router;

router.post('/login', function(req, res) {
    if (req.body.email == "alon@jb.com") {
        req.session.loggedIn = true;
        res.send(JSON.stringify(true));
    } else {
        res.send(JSON.stringify(false));
    }
})
