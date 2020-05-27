//Solution 1, using Gauss formula 
function sumAll(num1, num2){
    let totalSum = 0;
    if (typeof num1 != 'number' || typeof num2 != 'number'){
        return 'ERROR'
    } else if (num1 < 0 || num2 < 0) {
        return 'ERROR'
    } else if (num1 < num2) {
        return totalSum = (num2/2)*(num1+num2)
    } else if (num1 > num2) {
        return totalSum = (num1/2)*(num2+num1)
    } else {
        return 'ERROR'
    }
}

//Solution 2, for loop, incrementing min
/*
function sumAll (min,max){
    let totalSum = 0;
    for (let i = min; i < max + 1; i++) {
      totalSum = totalSum + i;
    }
    console.log (totalSum) ;
}*/

sumAll(1, 4)

module.exports = sumAll
