var express = require('express');
//run the factory
var app = express();
var bodyParser = require('body-parser');
//get connection
var con = require('./modules/db.js');
var session = require('express-session');

// expose the static content folder
app.use(express.static('public'));
// this middleware parse a json string into object and populate it into  req.body
app.use(bodyParser.json());


app.use(session({
    secret: 'A secret key [super private!]',
    resave: false, //do not save the session if user did not make changed
    saveUninitialized: false //do not save session on Uninitialized
}));

app.post('/auth/register', function(req, res) {
    res.type('application/json; charset=UTF-8');
    // req.body is a JSON object that will be populated into the insert
    con.query("INSERT INTO users SET ?", req.body, function(err, result) {
        // should be translated to:
        // INSERT INTO users SET name="demo",email="demo@domain.com",password="1234"
        if (err) {
            throw err;
        }
        res.send(JSON.stringify({
            id: result.insertId
        }));
    });
});

app.post('/auth/check', function(req, res) {
    res.type('application/json; charset=UTF-8');
    res.send(JSON.stringify({
        success: typeof req.session.userData === 'Object'
    }));
});


app.post('/auth/login', function(req, res) {
    res.type('application/json; charset=UTF-8');
    //for convenient
    var data = req.body;
    con.query("SELECT * FROM users WHERE email=? AND pass=?", [data.email, data.pass], function(err, result) {
        // should be translated to:
        // INSERT INTO users SET name="demo",email="demo@domain.com",password="1234"
        if (err) {
            throw err;
        }
        var answer = false;
        //record had returned - so user is logged in
        if (result.length > 0) {
            answer = true;
            //create the property userData in the session and store the user object into it
            req.session.userData = result[0]; //get the first user record
        } else { // login failed
            answer = false;
        }
        res.send(JSON.stringify({
            success: answer
        }));
    });
});

//start listening to network
var server = app.listen(8080, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("server is running under " + host + ":" + port);
})
