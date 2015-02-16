// Partition Array
// This was the function Martin gave us today.  It does
// partition differently than yesterday's but still is 
// The same concept
function partition(array){
	if(array.length<=1){
		return array
	}
	var lessThan = []; //Creating arrays for less than values and greater than values
	var greaterThan = [];
	var piviot = array[0]; // Store the piviot value
	for(var i = 1; i<array.length; i++){
		if(array[i]<piviot){
			lessThan.push(array[i]); // If it is less than, push into lessThan array
		} else {
			greaterThan.push(array[i]); // If greater than, push into greaterThan array
		}
	}
	lessThan.push(piviot); // Push the piviot value onto the end of the lessThan array
	return lessThan.concat(greaterThan); // Join the two arrays into one
}
// This array is sorted by less than and greater than, but is not yet totally sorted....


// Here is the callback function, it is the same, but with only small changes...
function partition(array){
	if(array.length<=1){
		return array
	}
	var lessThan = [];
	var greaterThan = [];
	var piviot = array[0];
	for(var i = 1; i<array.length; i++){
		if(array[i]<piviot){
			lessThan.push(array[i]);
		} else {
			greaterThan.push(array[i]);
		}
	}
	var sortedLessThan = partition(lessThan); // Call partition function on the lessThan and store returned in an newly created value
	var sortedGreaterThan = partition(greaterThan); // Same for greater than
	sortedLessThan.push(piviot); // Push the piviot value onto the end of the sortLessThan
	return sortedLessThan.concat(sortedGreaterThan); // Join both sorted arrays together!
}