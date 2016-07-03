
function run(currentIndex){
	if(currentIndex==Number.MAX_VALUE){
		return;
	}
	if(isPrime(currentIndex)){
		postMessage(currentIndex);
	}
	run(++currentIndex);
}
//start the recursion
run(2);


function isPrime(n){
	var to = Math.sqrt(n);
	for(var i=2;i<to;i++){
		if(n%i==0){
			return false;
		}
	}
	return true;
}