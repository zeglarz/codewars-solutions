ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358];


function partsSums(ls) {
    ls.unshift(0);
    let sum = ls.reduce((p, c) => p + c, 0);
    return ls.map(v => sum = sum - v);
}

console.log(partsSums(ls));
