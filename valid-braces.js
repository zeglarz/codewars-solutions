let { Test } = require('./test');
    /*
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
 */

function validBraces(braces){
    let tracer = [];
    for(let i=0;i < braces.length; i++) {
        if ( braces[i] === "(" || braces[i] === "{" || braces[i] === "["){
            tracer.push(braces[i])
        } else {
            if(tracer.length === 0) return false
            let lastValue = tracer[tracer.length-1]
            if( (braces[i] === ']' && lastValue === '[') || (braces[i] === '}' && lastValue === '{') || (braces[i] === ')' && lastValue === '('))
            {
                tracer.pop()
            } else {
                break;
            }
        }
    }
    return tracer.length === 0
}

Test(( "()" ), true, validBraces);
Test(( "())" ), false, validBraces);