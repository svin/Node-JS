//get the file systme module
var fs = require('fs');
var colors = require('colors');

console.log('Before loading');
try{
	//asynchronic file reading
	fs.writeFileSync('./files/hello.txt1','Add this line: '+ +new Date() +'\n',
				{
					encoding: "utf-8",
					flag: 'a' //append
				});
}catch(e){
	console.log(e);
}
console.log('After loading');