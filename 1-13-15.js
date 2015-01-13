// Create a function where you are passed two arrays of numbers of equal length,
// as well as given three numbers to mulitipy with.  Array one must be multiplied 
// by number 1, Array 2 by number two.  Then add the two arrays and multiply the
// new array by the third number.  Return the final array.

var x = [-1,2,3,-4,5];
var y = [1,0,0,2,0];
var mult1 = 2;
var mult2 = 3;
var mult3 = 5;

function mathStuff(array1, mult1, array2, mult2, finalMult) {
  for(var i=0; i<array1.length; i++) {
    array1[i] = array1[i] * mult1;
    array2[i] = array2[i] * mult2;
  }
  for(var j=0; j<array1.length; j++) {
    array1[j] = (array1[j] + array2[j]) * finalMult;
  }
  return array1;
}

console.log(mathStuff(x,mult1,y, mult2,mult3));