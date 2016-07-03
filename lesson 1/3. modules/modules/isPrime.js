function isPrimePrivate(n){
	var to = Math.sqrt(n);
	for(var i=2;i<to;i++){
		if(n%i==0){
			return false;
		}
	}
	return true;
}

//module.exports.[export key name] = [function to export] 
// DO NOT ADD BRACKETS TO THE FUNCTION NAME!! 
// module.exports.isPrime = isPrimePrivate() 	WRONG
// module.exports.isPrime = isPrimePrivate 		RIGHT
module.exports.isPrime = isPrimePrivate;

/* behind the scene explanation */
// var x = require('./modules/isPrime.js');

/*
(function(module.exports){
	function isPrimePrivate(n){
		var to = Math.sqrt(n);
		for(var i=2;i<to;i++){
			if(n%i==0){
				return false;
			}
		}
		return true;
	}
	module.exports.isPrime = isPrimePrivate;
})(module.exports);
*/

// x.isPrime(10);