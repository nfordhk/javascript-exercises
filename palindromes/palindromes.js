const palindromes = function(string) {
    palinString = string.toLowerCase().replace(/[^A-Za-z]/g,'')
    palinString.split('').reverse().join('')

    if (palinString === palinString) {
        return true 
    } else {
        return false
    }
}
//palindromes("Nicholas")

module.exports = palindromes
