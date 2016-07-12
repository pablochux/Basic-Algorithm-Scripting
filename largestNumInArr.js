// Find the largest num in the subarray and return an array with the largest numbers of each subarray
function largestOfFour(arr) {
	var largestNumArr = [];
	for (var i = 0; i < arr.length; i++) {
		var largestNum = 0;
		for (var j = 0; j < arr[i].length; j++) {
			largestNum = (arr[i][j] > largestNum) ? arr[i][j] : largestNum;
		}
		largestNumArr.push(largestNum);
	}
	return largestNumArr;
}