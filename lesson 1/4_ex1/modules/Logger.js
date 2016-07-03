var fs = require('fs');

function _write(fileName,txt){
	var PATH = './logs/';
	var data = +new Date() + ': '+txt+'\n';
	fs.writeFile(PATH + fileName,data,{flag:'a'},function(err){
		if(err){
			console.log(err);
		}
	})
}

module.exports.write = _write;