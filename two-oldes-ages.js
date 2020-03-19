let { Test } = require('./test');

/*
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items.

For example:

twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]
 */
const people = [1, 2, 10, 8, 6, 7];

const twoOldestAges = ages => ages.sort((num1, num2) => num1 - num2).slice(-2);

console.log(twoOldestAges(people));

Test(( [1, 2, 10, 8] ), [8,10], twoOldestAges);
