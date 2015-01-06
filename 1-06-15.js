var string1 = "dog";
var string2 = "god";

var perm = function(string1, string2) {
  a = [];
  b = [];
  for(var i=0; i<string1.length; i++) {
    for(var j=0; j<string2.length; j++) {
      if(string1[i] === string2[j]) {
        a.push(string1[i]);
        b.push(string2[j]);
        break;
      }
    }
  }
   if(string1.length === a.length && string2.length === b.length && a.length === b.length) {
      return true;
    } else {
      return false;
    }
};
console.log(perm(string1, string2));