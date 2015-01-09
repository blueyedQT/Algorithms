// Create a function to find the index of the first unique character in a string.
// Example: "mom" o is the first unique, and it is at index 1.
var x = "mom";

function indentifier(string) {
	var obj = {};

	for(var i=0; i<string.length; i++){
		if(!obj[string[i]]) {
			obj[string[i]] = 1;
		} else {
			obj[string[i]] += 1;
		}
	}
  var count = 0;
  for(var key in obj) {
    if(obj[key] === 1) {
      return count;
    }
    count++;
  }
  return 'No unique characters';
}
console.log(indentifier(x));