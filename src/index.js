module.exports = function reverse (n){
	n = n + "";
	return +n.split("").reverse().join("");
}
