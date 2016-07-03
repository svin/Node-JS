//get the file systme module
var fs = require('fs');
var colors = require('colors');

console.log('Before loading');
//asynchronic file reading
fs.writeFile(
				'./files/hello.txt',
				'Add this line: '+ +new Date() +'\n',
				{
					encoding: "utf-8",
					flag: 'a' //append
				},
				function(err){
					if(err){
						//show error message
						console.log(('Error writing the file: '+err.message).red);
					}
					else{
						console.log(('data been strod').green);
					}
				});
console.log('After loading');