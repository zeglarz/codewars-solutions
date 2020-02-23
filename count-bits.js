let {Test} = require('./test');

/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
 */

function countBits(n) {
    return n.toString(2).split('0').join('').length;
};

Test(0, 0, countBits);
Test(4, 1, countBits);
Test(7, 3, countBits);
Test(9, 2, countBits);
Test(10, 2, countBits);