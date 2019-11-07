/* const reverseString = function() {

}*/

function reverseString (string) {
    const splitString = string.split('')
    const reverseString = splitString.reverse() 
    const joinString = reverseString.join('')

    return joinString
}


module.exports = reverseString
