
module.exports = function reverse (n)
    {
        let str
            = n.toString().split("").reverse().join("");
         
        n = parseInt(str);
 
        return str;
    }
