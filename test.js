 function Test(n, expected, funcName) {
    let actual = funcName(n);
    console.log(actual, expected, `Expected ${expected}, got ${actual}`)
}

module.exports = { Test };