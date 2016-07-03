//get the file systme module
var fs = require('fs');
var colors = require('colors');

console.log('the current file is: '+ __filename);
console.log('the current dir is: '+ __dirname);
console.log('full path is: \n'+(__dirname+'/files').rainbow)
//asynchronic file reading
fs.readdir(__dirname+'/files',function(err,filesArr){
	if(err){
		console.log(err);
	
	}
	else{
		for(var i in filesArr){
			console.log(i+" "+filesArr[i]);
		};
	}
});
console.log('After loading');