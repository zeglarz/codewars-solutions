function solution(number){
    var sum = 0;

    for(var i = 1;i< number; i++){
        if(i % 3 == 0 || i % 5 == 0){
            sum += i
        }
    }
    return sum;
}

function test(n, expected) {
    let actual = solution(n)
    console.log(actual, expected, `Expected ${expected}, got ${actual}`)
}

test(10,23);

