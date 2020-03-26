const palindromes = function(string) {
    const newString = string.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"")
    const palindromeString = newString.split('').reverse().join('')

    //console.log ('This is the original string:',string)
    //console.log ('This is the newstring:',newString)
    //console.log ('This is the palidromeString:',palindromeString)

    return palindromeString == newString
}

palindromes('A car, a man, a maraca.')

module.exports = palindromes

