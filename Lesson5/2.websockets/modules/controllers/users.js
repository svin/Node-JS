var con=GLOBAL.con;

console.log(ADMIN_PASS);
var tester= require('../tester')
tester.log();

module.exports.get = function(req, res) {
    console.log(req.params);
    con.query("SELECT * FROM employees", function(err, rows) {
        if (err) {
            throw err;
        }
        //send reponse of the results
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(rows));
    });
}
