//Testing jasmine sumAll.spec.js
//Spec1 (completed) - expect(sumAll(1, 4)).toEqual(10); 
//Spec2 (completed) - expect(sumAll(1, 4000)).toEqual(8002000);
//Spec3 (completed) - expect(sumAll(123, 1)).toEqual(7626);
//Spec4 (completed) - expect(sumAll(-10, 4)).toEqual('ERROR');
//Spec5 (incomplete)- expect(sumAll(10, "90")).toEqual('ERROR');
//Spec6 (completed) - expect(sumAll(10, [90, 1])).toEqual('ERROR');

//consider x = n+1 * (n/2)

function sumAll (num1, num2) {
    if (num1 < 0 || num2 < 0 ) {
        return 'ERROR'
    } else if (isNaN(num1) || (isNaN(num2))) {
        return 'ERROR'
    } else if (typeof num1 == "string" || typeof num2 == "string") {
        return 'ERROR'
    } else if (num2 < num1) {
        const finalSum = ((num1 + 1) * (num1 / 2))
        return finalSum
    } else if (num1 < num2) {
        const finalSum = ((num2 + 1) * (num2 / 2))
        return finalSum
    } 
}

console.log (sumAll())

module.exports = sumAll
