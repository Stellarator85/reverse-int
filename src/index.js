module.exports = function reverse (n){
	n = n.toString();
	if (n == 0) return 0;
	if (n > 0)
	return n.split("").reverse().join("");
	if (n < 0)
	return ('-' + n.split("").reverse().slice(0, -1).join(""));
}
