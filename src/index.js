var rev_num = 0;
var base_pos = 1;
module.exports = function reverse(n)
{
    if(n > 0)
    {
        reverse(Math.floor(n/10));
        rev_num += (n%10)*base_pos;
        base_pos *= 10;
    }
    return rev_num;
};
