function getIndexToIns(arr, num) {
  // 1 -> Sort the array
  arr = arr.sort(function(a, b){
     return a - b;
  });
  // 2 -> Find the position (divide and conquer)
  var i = -1;
  var found = false;
  var position;
  while ((!found) && (i < arr.length)){
    i++;
    if (arr[i] < num){
      // Last element
      if (i === arr.length){
        position = i;
        found = true;
      }
     }
    else if (arr[i] === num){
      position = i;
      found = true;
    }else{ // Is >
      position = i;
      found = true;
    }
  }
  return position;
}
// Working example
getIndexToIns([5, 3, 20, 3], 5);