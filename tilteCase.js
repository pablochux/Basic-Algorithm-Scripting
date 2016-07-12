// Convert all the first letters of the words of the string into Mayus letters
function titleCase(str) {
	str = str.toLowerCase();
	var strArr = str.split(" ");
	for (var i = 0; i < strArr.length; i++) {
		strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
	}
	str = strArr.join(" ");
	return str;
}