function repeatString(str, value) {
    let repeatString = ''
    if (value >= 0){
        return repeatString = str.repeat(value)
    } else {
        return 'ERROR'
    }

}

module.exports = repeatString

repeatString('hey',3)