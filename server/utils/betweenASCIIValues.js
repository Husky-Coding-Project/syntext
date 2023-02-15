const toAscii = (strings) => {
    let asciiArr = []
    const temp = strings.split("")
    temp.forEach(c => asciiArr.push(c.charCodeAt()))
    return asciiArr
}

const toChar = (asciiArr) => {
    let charArr = []
    asciiArr.forEach(ascii => charArr.push(String.fromCharCode(ascii)))
    return charArr
}

module.exports = {toAscii, toChar}