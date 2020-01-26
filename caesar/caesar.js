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
    for (i = 0; i < string.length; i++){ //convert string to ascii characters
        const splitString = string.split('')
        console.log ('Console Log splieString:',splitString)
        const asciiString = ((splitString.charCodeAt(i)+indexShift))
        console.log ('Console Log asciiString:',asciiString)

        //const cipherString = String.fromCharCode(asciiString) //convert ascii back to string after indexShift
        //console.log ('Console Log cipherString:',cipherString)
    }
}

caesar('Aaa',1)

module.exports = caesar
