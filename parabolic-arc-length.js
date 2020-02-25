let { Test } = require('./test');

/*
We want to approximate the length of a curve representing a function y = f(x) with a<= x <= b. First, we split the interval [a, b] into n sub-intervals with widths h1, h2, ... , hn by defining points x1, x2 , ... , xn-1 between a and b. This defines points P0, P1, P2, ... , Pn on the curve whose x-coordinates are a, x1, x2 , ... , xn-1, b and y-coordinates f(a), f(x1), ..., f(xn-1), f(b) . By connecting these points, we obtain a polygonal path approximating the curve.

Our task is to approximate the length of a parabolic arc representing the curve y = x * x with x in the interval [0, 1]. We will take a common step h between the points xi: h1, h2, ... , hn = h = 1/n and we will consider the points P0, P1, P2, ... , Pn on the curve. The coordinates of each Pi are (xi, yi = xi * xi).

The function len_curve (or similar in other languages) takes n as parameter (number of sub-intervals) and returns the length of the curve. You can truncate it to 9 decimal places.

alternative text
 */

function lenCurve(n) {
    function seglg() {
        return Math.sqrt(Math.pow(n, 2) + 4 * Math.pow(k, 2) + 4 * k + 1) / Math.pow(n, 2);
    }
    var s = 0;
    for (var k = 0; k < n; k++) {
        s += seglg();
    }
    return Math.floor(s * 1e9) / 1e9;
}

Test(1, 1.414213562, lenCurve);
Test(10, 1.478197397, lenCurve);