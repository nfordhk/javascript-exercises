function add (num1, num2) {
	return num1+num2
}

function subtract (num1, num2) {
	return num1 - num2
}

function sum(array) {
	return array.reduce((totalValue, currentValue) => totalValue + currentValue,0)
}	

function multiply (array) {
	return array.reduce((totalValue, currentValue) => totalValue * currentValue)
}

function power(num1, num2) {
	return num1 ** num2
}

function factorial(num) {
	let count = num

	if (count === 0){
		return 1
	}
	else {
		for (let i = 1; i < count; i++) {
			num = num * i
		}
	}
	return num
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}