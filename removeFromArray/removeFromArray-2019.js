/*
*Jasmine is a testing framework for Javascript. 
*Type jasmine -v to check for it. If you need to install it, type npm install -g jasmine to do so.
*To complete the exercise go to the exercise directory in a terminal and run jasmine filename.spec.js. 
*This should find and run the test file and show you the output.
*spec 1 - expect(removeFromArray([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
*spec 2 - expect(removeFromArray([1, 2, 3, 4], 3, 2)).toEqual([1, 4]);
*/

function removeFromArray (...args) {
     let argsArray = args[0]
     let newArray = []

    return newArray; 

}//end removeFromArray()

console.log (removeFromArray([1, 2, 3, 4], 3, 2))
module.exports = removeFromArray



// Passes Spec1, not viable for Spec2
/*
function removeFromArray (array, value) {

    let findValueIndex = array.indexOf(value)
    array.splice(findValueIndex, 1)

    return array
}//end removeFromArray()

console.log (removeFromArray([1,2,3,4],3))
*/

//
//
//

// Testing Solution, local defined variables 
/*function removeFromArray () {
    
    let array = [1, 2, 3, 4]
    let splicedArray = array.splice(2,1)
    return array

}//end removeFromArray()*/ 