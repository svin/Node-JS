var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/demo', function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('connection success');
    }

});

//get model instance
var User = require('./model/user.js');
var myUser = new User({
    name: "Kipi",
    email: "Kipi@gmail.com",
    pass: "4321",
    age: 11,
    birthDate: new Date()
});

//insert / update
myUser.save(function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('save success');
    }
    User.find({} /*select all*/ , function(err, usersCollection) {
        if (err) {
            console.log(err);
        } else {
            console.log(usersCollection);
        }
    });
});









//
