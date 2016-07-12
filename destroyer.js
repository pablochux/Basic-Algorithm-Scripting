function destroyer(arr) {
  // Created an array with the search problems because I have so much troubles with arguments[]
  var searchValues = [];
  for (var i = 1; i < arguments.length; i++){
      searchValues.push(arguments[i]);
  }
  // Filter only the elements in the array (first parameter)
  return arguments[0].filter(function (value){
    var keepElement = true;
    for (var i = 0; i < searchValues.length; i++){
      // Search for the element
      if (searchValues[i] == value){
        keepElement = false;
        break;
      }
    }
    return keepElement;
  });
}
// Working example
destroyer([1, 2, 3, 1, 2, 3], 2, 3);