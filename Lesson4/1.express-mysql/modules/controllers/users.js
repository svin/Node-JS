var con = GLOBAL.con;



modules.exports.get =  function (req, res) {
    console.log(req.param);
    con.query("SELECT * FROM employees", function(err, rows) {
        if (err) {
            throw err;
        }
        //send reponse of the results
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(rows));
    });  
};