function chunkArrayInGroups(arr, size) {
  var resultArr = [];
  var resultSubArr = [];
  var flag = 0; // flag is used to 
  for (var i = 0; i < arr.length; i++){
    if (flag <= size){
      flag++;
      resultSubArr.push(arr[i]);
    }
    if (flag === size){
      resultArr.push(resultSubArr);
      resultSubArr = [];
      flag = 0;
    }
  }
  if (flag > 0){
     resultArr.push(resultSubArr);
  }
  return resultArr;
}
// Working Example
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);