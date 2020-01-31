/*
Hints
Hint 1
Use String.charCodeAt() to convert the English character to ASCII.

Hint 2
Use String.fromCharCode() to convert ASCII to English character.

Hint 3
Leave anything that doesn’t come between A-Z as it is.
*/

/*const caesar = function(string,indexShift) {
    const asciiString = (string.charCodeAt(0)+indexShift)
    //const asciiString = (string.charCodeAt(string.length)+indexShift)
    console.log ('Console Log asciiString: ',asciiString)
    const cipherString = String.fromCharCode(asciiString)
    console.log(cipherString)
    return cipherString
}*/

const caesar = function(string,indexShift) {
    let cipherString = '';
    for (i = 0; i < string.length; i++){  //convert string to ascii characters
        const asciiNumber = (string[i].charCodeAt())
        cipherString = cipherString + String.fromCharCode(asciiNumber + indexShift)
    }
    console.log (cipherString)
    return cipherString
}

/*const caesar = function(string,indexShift) {
    let cipherString = '';
    for (i = 0; i < string.length; i++){ //convert string to ascii characters
        const asciiNumber = (string[i].charCodeAt())
        if (asciiNumber >= 65 && asciiNumber <= 90 || asciiNumber >=97 && asciiNumber <=122) {
            cipherString = cipherString + String.fromCharCode(asciiNumber + indexShift)
        } else {
            cipherString += string[i]
        }
    }
    console.log (cipherString)
    return cipherString
}*/

caesar('Hello',5)

module.exports = caesar
