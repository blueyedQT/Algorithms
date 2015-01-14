//// JS, will pass in an array of intergers
// Write the selection sort algorithm
// Look through list for the min value and swap that with the front.

var x = [3,-1,7,2,5];

function SelectionSort(array) {
	/// For Development ///
	var swaps = 0;
	var compares = 0;
	///////////////////////

	var min = array[0];
	var minplace = 0;
	var runner = 0;
	var temp;
	for(var i=0; i<array.length; i++){
		for(var j=runner; j<array.length; j++){
			/// For Development ///
			compares++;
			///////////////////////
			if(array[j]<min) {
				min = array[j];
				minplace = j;
			}
		}
		if(min !== array[runner]){
			/// For Development ///
			swaps++;
			///////////////////////
		  	temp = array[runner];
		    array[runner] = array[minplace];
		    array[minplace] = temp;
		}
		runner++;
		min = array[runner];
	}
	/// For Development ///
	console.log('Number of compares: ' + compares);
  	console.log('Number of swaps: ' + swaps);
	///////////////////////
	return array;
}
console.log(SelectionSort(x));


// Write the insertion sort algorithm
