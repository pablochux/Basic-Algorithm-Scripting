// Find the longest word in a string
function findLongestWord(str) {
  var longestWord = "";
  var strArr = str.split(" ");
  for(var i = 0; i < strArr.length; i++){
    longestWord = (longestWord.length < strArr[i].length) ? strArr[i] : longestWord;
  }
  return longestWord.length;
}