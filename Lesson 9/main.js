//load the module
var nodemailer = require('nodemailer');
//create the transport
var transport = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'alonerloler@gmail.com',
		pass: 'freakingawesome'
	}
});

//mail options
var options={
	from: "alonerloler@gmail.com",
	to: "user@example.com",
	subject: "This is hello world message",
	text: "this is plain text body",
	html: "<div>\n\
				<h1>this is SPARTA!!!!</h1><br/>bla bla bla\n\
			</div>"
}


transport.sendMail(options,function(err,info){
		if(err){
			console.log(err);
		}
		else{
			console.log(info);
		}
})

//create the transport
/*
var transport = nodemailer.createTransport({
	host: 'myemail.provider.com',
	port: 25,
	auth: {
		user: 'alon',
		pass: 'Pass'
	}
});
*/