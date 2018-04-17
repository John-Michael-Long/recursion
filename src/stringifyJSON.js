// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  var resultString = "";

  if (typeof obj === 'undefined' || typeof obj === 'function'){
    return undefined;
  }else if(obj === null){
  	return "null"
  }else if(typeof obj === 'number' || typeof obj === 'boolean'){
    return obj.toString();
  }else if(typeof obj === 'string') {
    return '"' + obj + '"';
  }else if(Array.isArray(obj)) {
    return '[' + obj.map(function(element) {
      return stringifyJSON(element);
    }) + ']';
  }
  if(typeof obj === 'object'){
	  var i = Object.keys(obj).length;
	  for (var key in obj) {
	    if (typeof obj[key] === 'undefined' || typeof obj[key] === 'function') {
	      i--;
	    }else if(i > 1){
		    resultString += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
		    i--;
		} else {
      		resultString += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
      	}
      }
	  
	}
	return '{' + resultString + '}';
};	