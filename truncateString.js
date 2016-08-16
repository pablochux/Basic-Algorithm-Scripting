function truncateString(str, num) {
    var newStr;
    if (str.length > num){
      if (num <= 3){
        newStr = str.slice(0, num) + "...";
      }else{
        newStr = str.slice(0, num-3) + "...";
      }
    } else{
      newStr = str;
    }
    return newStr;
}
