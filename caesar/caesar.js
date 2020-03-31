/*
Hints
Hint 1
Use String.charCodeAt() to convert the English character to ASCII.

Hint 2
Use String.fromCharCode() to convert ASCII to English character.

Hint 3
Leave anything that doesn’t come between A-Z as it is.
*/

const caesar = function(string,indexShift) {
    let cipherString = '';
    for (let i = 0; i < string.length; i++){  //convert string to ascii characters
        //check for regEx a-zA-Z
        const asciiNumber = (string[i].charCodeAt())
        cipherString = cipherString + String.fromCharCode(asciiNumber + indexShift)
    }
    console.log (cipherString)
    return cipherString
}


caesar('Hello World!',5)

module.exports = caesar
