onmessage=function(e){
	postMessage(e.data+" (Worker answer)");
}
onclose=function(){
	console.log("I am dead!");
}