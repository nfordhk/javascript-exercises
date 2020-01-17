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
    const asciiString = (string.charCodeAt(0)+indexShift)
    const cipherString = String.fromCharCode(asciiString)
    return cipherString
}

caesar('A',1)

module.exports = caesar
