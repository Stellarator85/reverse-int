module.exports = function reverse (n) {
        let rev_n = 0;
        while(n > 0)
        {
            rev_n = rev_n * 10 + n % 10;
            n = Math.floor(n / 10);
        }
        return rev_n;
    }




