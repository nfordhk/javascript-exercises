/*function repeatString() {
    let randomString = "hey"
    return randomString.repeat(3)
}
  console.log (repeatString())*/

  function repeatString(word, times) {
    let randomString = ''

    //returns ERROR with negative numbers
    if (times < 0) {
        return 'ERROR'
    }

    //repeats the string
    for (i = 0; i < times; i++) {
        //randomString = randomString + word
        randomString += word
    }
    return randomString
    
} //end repeatString

  module.exports = repeatString