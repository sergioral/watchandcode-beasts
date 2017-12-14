function runWithDebugger(callback, optionalArgs) {
  debugger;
  if (optionalArgs) {
    return callback.call(null, optionalArgs);
  } else {
    return callback();
  }
}



// Example function 
function sayHi(arr) {
	if (Array.isArray(arr)) {
		var str = '';	
		arr.forEach(function(elem) {
			str += (elem + ' ');
		});
	} else {
		str = arr;
	}
	console.log(str);
}

// Test
runWithDebugger(sayHi, ['sergio', 'leite']) // Output: 'sergio leite'