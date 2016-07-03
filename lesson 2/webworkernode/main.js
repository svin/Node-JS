var Worker = require('webworker');
var w = new Worker('worker1.js');
w.onmessage = function(e){
	console.log("message" + e.data);
	w.terminate();
}
w.postMessage("Hello worker!");