// Given a number N return the index value of the Fibonacci sequence, where the sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

//recursion solution
const fibonacci = function(n) {
    //checks for negative numbers
    if (Math.sign(n) == -1) {
        return 'OOPS'
        
    }
    //if n is 0 or 1, return n
    if (n <= 1) {
        return n
    } 
    //recursive lookup
    let fibonacciSequence = fibonacci(n - 1) + fibonacci (n - 2)
    return fibonacciSequence

}


module.exports = fibonacci




