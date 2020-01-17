const palindromes = function(string) {
    const regexString = string.toLowerCase().replace(/[\W_]/g,'')
    const palinString = regexString.split('').reverse().join('')

    if (palinString === regexString) {
        return true 
    } else {
        return false
    }
}

module.exports = palindromes
