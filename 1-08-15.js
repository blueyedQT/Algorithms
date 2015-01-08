// Create a function for an array in which it would be sorted baised on
// a value.  All numbers greater than the given value to the right and 
// all smaller to the left.  

var x = [3,5,1,8,2,3];
var value = 3;

function arrange_array(array, value) {
	var y=[];
	var z=[];
	var count = 0;
	for(i=array.length; i>=0; i--) {
		if(array[i]<value) {
			y.push(x[i]);
			array.pop();
		} else if(array[i] > value) {
			z.push(array[i]);
			array.pop();
		} else if(x[i]==value) {
	      	count++;
	      	array.pop();
	    }
	}
	for(var i=0; i<y.length; i++) {
	  	array.push(y[i]);
	}
	for(var j=0; j<count; j++) {
	  	array.push(value);
	}
	for(var k=0; k<z.length; k++) {
	  	array.push(z[k]);
	}
	return(array); 
}
console.log(arrange_array(x, value));
