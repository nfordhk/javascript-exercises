/*
*Jasmine is a testing framework for Javascript. 
*Type jasmine -v to check for it. If you need to install it, type npm install -g jasmine to do so.
*To complete the exercise go to the exercise directory in a terminal and run jasmine filename.spec.js. 
*This should find and run the test file and show you the output.
*/

/* const removeFromArray = function() {

}*/

function removeFromArray () {
    //array for test
    const numbers = [0, 1, 2, 3, 4]

    //splice create a new array, assign to "remove"
    remove = numbers.splice(2,1)

    //return array with removed index
    return numbers
    
}//end removeFromArray()

console.log (removeFromArray())

module.exports = removeFromArray
