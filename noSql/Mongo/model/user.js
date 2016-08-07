var mongoose = require('mongoose');
//get the Scheme Class
var Schema = mongoose.Schema;

var userScm = new Schema({
    name: String,
    email: String,
    pass: String,
    age: Number,
    birthDate: Date
});

module.exports = mongoose.model('User',userScm);
