const atEndOfLine = (wIndex, cLine) => {
    console.log('wIndex.current: ', wIndex.current,'cline.length', cLine)
    return wIndex.current  === cLine.current.length - 1;
}

const atEndOfWord = (cWord, uInput) => cWord.length === uInput.length;

const currWordHasMistake = (cWord, uInput) => {
    let res = false;
    uInput.split('').forEach( (c, i) => res = (res) || (cWord[i] !== c));
    return res;
}

const allowedToOverflow = (cWord, uInput) => cWord.length + 6 > uInput.length;

const atEndOfGame = (lineIndex, lines) => {
    return (lines.length === lineIndex + 1);
}

module.exports = {
    atEndOfLine,
    atEndOfWord,
    currWordHasMistake,
    allowedToOverflow,
    atEndOfGame
}