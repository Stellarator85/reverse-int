module.exports = function reverse (n){
	n = n.toString();
	return n.split("").reverse().join("");
}
