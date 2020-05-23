//Testing jasmine sumAll.spec.js
//Spec1 (completed) - expect(sumAll(1, 4)).toEqual(10); 
//Spec2 (completed) - expect(sumAll(1, 4000)).toEqual(8002000);
//Spec3 (completed) - expect(sumAll(123, 1)).toEqual(7626);
//Spec4 (completed) - expect(sumAll(-10, 4)).toEqual('ERROR');
//Spec5 (incomplete)- expect(sumAll(10, "90")).toEqual('ERROR');
//Spec6 (completed) - expect(sumAll(10, [90, 1])).toEqual('ERROR');

//Sn=n/2(a1+an)

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

sumAll(1, 4)

module.exports = sumAll
