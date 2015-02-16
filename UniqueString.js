// Create a method that will determine if a string has all unique characters.
// Do not create an data structure to do this.

var string = 'ccatt';

function unique(string) {
  var letter = string[0];
  for(var i = 1; i< string.length; i++) {
    if(letter == string[i]) {
      return false;
    }
    letter = string[i];
  }
  return true;
}

console.log(unique(string));