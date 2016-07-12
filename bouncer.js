function bouncer(arr) {
  return arr.filter(function (value){
    // !value checks for all falsy values like: null, 0, Nan, undefined, ""
    return value;
  });
}
// Working example
bouncer([false, null, 0, NaN, undefined, ""])