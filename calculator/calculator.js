function add (num1, num2) {
	const totalNumber = num1+num2
	return totalNumber
}

function subtract (num1,num2) {
	const totalNumber = num1 - num2
	return totalNumber
}

//https://codeburst.io/javascript-arrays-finding-the-minimum-maximum-sum-average-values-f02f1b0ce332
function sum (array) {
	return array.reduce(function(a,b){
		return a + b
	}, 0); //computes the sum of an empty array, sets inital value if none is found
}

function multiply (array) {
	// a = accumulator
	// b = currentValue
	return array.reduce(function(a,b){
		return a * b
	})
}

function power(num1, num2) {
	return totalNumber = num1**num2
}

function factorial(num) {
	if (num === 0 ) {
		return 1;
	} else {
		return (num * factorial(num -1))
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}