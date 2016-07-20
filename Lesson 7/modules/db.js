// npm install mysql
var mysqlModule = require('mysql');

//configure the connection
var _con = mysqlModule.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'company'
});
//actual connect
_con.connect();
//expose mysql
module.exports = _con;
