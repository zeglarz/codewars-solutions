function filter_list(l) {
    let res =[];
    let filteredList = l.filter((element) => {
        if (typeof element === 'number') {
            return res.push(element)

        }
    })
    return filteredList;
}

function test(n, expected) {
    let actual = filter_list(n)
    console.log(actual, expected, `Expected ${expected}, got ${actual}`)
}

test(filter_list([1,2,'a','b']),[1,2]);
test(filter_list([1,'a','b',0,15]),[1,0,15]);
test(filter_list([1,2,'aasf','1','123',123]),[1,2,123]);

