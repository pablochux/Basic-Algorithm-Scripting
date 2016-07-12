function rot13(str) { // LBH QVQ VG!
  var newArr = str.split("");
  var code;
  for (var i = 0; i < newArr.length; i++){
    code = newArr[i].charCodeAt(0);
    if (code >= 65 && code <= 90){
      if (code + 13 > 90){
        code = (12 - (90 - code)) + 65;
       }else{
        code += 13;
      }
    }
    newArr[i] = String.fromCharCode(code);
  }
  str = newArr.join("");
  return str;
}

// Working example
rot13("SERR CVMMN!")