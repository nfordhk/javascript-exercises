const palindromes = function(string) {
    const splitString = string.split('')
    const reverseString = splitString.reverse() 
    const joinString = reverseString.join('')
    if (joinString === string) {
        return true 
    }
}

//palindromes("racecar!")

module.exports = palindromes
