//get the file systme module
var fs = require('fs');
var colors = require('colors');

console.log('Before loading');
//asynchronic file reading
var data = fs.readFileSync('./files/hello.txt','utf-8');
console.log(('File loaded : '+data).green);

console.log('After loading');