let {Test} = require('./test');
/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
 */

function pigIt(str){
    return str
        .split(' ')
        .map(e => {
            if (/[A-z]/g.test(e)) return e.substr(1) + e[0] + 'ay';
            return e
        })
        .join(' ');
}

Test('Pig latin is cool','igPay atinlay siay oolcay', pigIt);
Test('This is my string','hisTay siay ymay tringsay', pigIt);

console.log("".length);