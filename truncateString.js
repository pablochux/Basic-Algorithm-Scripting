function truncateString(str, num) {
    if (str.length > num){
      if (num <= 3){
          var newStr = str.slice(0, num) + "...";
      }else{
          var newStr = str.slice(0, num-3) + "...";
      }
    } else{
      newStr = str;
    }
    return newStr;
}