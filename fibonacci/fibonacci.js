const fibonacci = function(n) {
    return fibonacci(n-1) + fibonacci(n-2)
}

fibonacci(4)

module.exports = fibonacci


/*
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89

The Rule is: f(n) = f(n-1) + f(n-2)

f(3) = f(3-1) + f(3-2) = f(2), f(1) = 1 + 1 = 2

where:
xn is term number "n"
xn-1 is the previous term (n-1)
xn-2 is the term before that (n-2)
*/