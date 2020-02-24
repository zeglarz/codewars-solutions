let { Test } = require('./test');

/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example:

 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number
 */

function persistence(num) {
    let arr = num.toString().split('');
    let count = 0;

    while (arr.length !== 1) {
        let newArr = arr.reduce((a, b) => a*b).toString().split('');
        count++;
        arr = newArr;
    }
    return count;
}

Test(39 ,3, persistence);
Test(4,0, persistence);
Test(25 ,2, persistence);
Test(999 ,4, persistence);
