//get the file systme module
var fs = require('fs');
var colors = require('colors');

console.log('Before loading');
//asynchronic file reading
fs.readFile('./files/hello.txt','utf-8',function(err,data){
	if(err){
		console.log(err);
		//show error message
		console.log(('Error reading the file: '+err.msg).red);
	}
	else{
		console.log(('File loaded : '+data).green);
	}
});
console.log('After loading');