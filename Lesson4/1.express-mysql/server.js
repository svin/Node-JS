var express = require('express');
//run the factory
var app = express();
var bodyParser = require('body-parser')
//init + get instance
var con = require('./modules/db.js');
var myWS = require('./modules/myWS')

app.use(bodyParser.json());
app.use(express.static('public'));

//app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res) {
        con.query("SELECT * FROM employees", function(err, rows) {
            if (err) {
                throw err;
            }
						//send reponse of the results
						res.setHeader('Content-Type', 'application/json');
						res.send(JSON.stringify(rows));
        });
    })
    //usesrs
app.get('/users', function(req, res) {
    res.send("Hello world");
})
app.post('/users', function(req, res) {
    res.send(req.body);
})
app.put('/users', function(req, res) {
    res.send("Hello world");
})
app.delete('/users', function(req, res) {
    res.send("Hello world");
})

var server = app.listen(8080, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("server is running under " + host + ":" + port);
})
