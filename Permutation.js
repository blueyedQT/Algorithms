string1 = 'llowye';
string2 = 'yellow';

function permutation(string1, string2) {
  var array = [];
  if(string1.length !== string2.length) {
    return false;
  }
  for (var i = 0; i<string1.length; i++) {
    for (var j = 0;j<string2.length; j++) {
      if (string1[i] == string2[j]) {
        array.push(string1[i]);
        break;
      }
    }
  }
  if (string1.length == array.length) {
    return true;
  }
  return false;
}

console.log(permutation(string1, string2));