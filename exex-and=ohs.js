let { Test } = require('./test');
/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
 */

function XO(str) {
    let obj = {};
    for (let letter of str.toLowerCase()) {
        obj[letter] = (obj[letter] || 0) + 1
    }
    if (obj['x'] !== obj['o'])  {
        return false;
    } else {
        return true;
    }
}

Test('xo',true,XO);
Test("xxOo",true,XO);
Test("xxxm",false,XO);
Test("Oo",false, XO);
Test("ooom",false, XO);