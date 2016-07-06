var con = require(BASE_PATH + '/modules/db');
var express = require('express');
var router = express.Router();
module.exports = router;

router.use(function(req, res, next) {
        console.log("this run before any method");
        //send reponse of the results
        res.setHeader('Content-Type', 'application/json');
        //if user have been logged in through `POST /auth/login`
        if (req.session.loggedIn) {
            //forward the request to the next middleware
            next();
        } else {
            res.send(JSON.stringify({
                error: 1,
                msg: "you are not logged in"
            }));
        }
    })
    //  --> GET /users/
    //  --> GET /users/34
router.get('/:id?', function(req, res) {
        if (req.params.id) {
            con.query("SELECT * FROM users WHERE id=?", req.params.id, function(err, rows) {
                if (err)
                    throw err;
                res.send(JSON.stringify(rows));
            });
        } else {
            con.query("SELECT * FROM users", function(err, rows) {
                if (err)
                    throw err;
                res.send(JSON.stringify(rows));
            });
        }
    })
    //  --> POST /users/
    .post('/', function(req, res) {
        // req.body is a JSON object that will be populated into the insert
        con.query("INSERT INTO users SET ?", req.body, function(err, result) {
            if (err) {
                throw err;
            }
            res.send(JSON.stringify(result.insertId));
        });
    }).put('/:id', function(req, res) {
        var params = [req.body, req.params.id];
        // the params array will be auto populated into the query,
        // the first param in the array will be populated into the first question mark,
        // the Nth params will be popyulated into the Nth question mark
        con.query("UPDATE users SET ? WHERE id=?", params, function(err, result) {
            if (err) {
                throw err;
            }
            res.send(JSON.stringify(result.insertId));
        });
    });
