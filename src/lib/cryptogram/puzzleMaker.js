import { isAlpha } from "./text";

function _createCharMap(uniqueChars) {
    const allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const puzzleChars = allChars.split("").filter((i) => uniqueChars.indexOf(i) === -1);
    if (puzzleChars.length < uniqueChars.length) {
        const extra = uniqueChars.length - puzzleChars.length;
        for (let i = 0; i < extra; i++) {
            puzzleChars.push(uniqueChars[i]);
        }
    }
    let charMap = {};
    uniqueChars.forEach((element, index) => {
        let k = puzzleChars[index];
        charMap[element] = k;
    });
    return charMap;
}
function _hideChars(uniqueChars, difficultyPercent) {
    let chars = []
    for (const i of uniqueChars) {
        if (Math.random() < difficultyPercent) {
            chars.push(i)
        }
    }
    return chars
}
function _makeAnswerKey(text, hiddenChars) {
    let key = ""
    for (const i of text) {
        if (hiddenChars.indexOf(i) !== -1) {
            key += i
        }
    }
    return key
}

export function makePuzzle(quote, difficultyPercent = 0.7) {
    let text = quote.text.toUpperCase()
    let uniqueChars = text.split("").filter((i, index, self) => self.indexOf(i) === index && i !== " " && isAlpha(i))
    const hiddenChars = _hideChars(uniqueChars, difficultyPercent);
    return {
        hiddenChars,
        answerKey: _makeAnswerKey(text, hiddenChars),
        words: text.split(" "),
        charMap: _createCharMap(uniqueChars),
        author: quote.author,
        isFinished: false
    }
}

export const PRESET_DIFFICULTIES = {
    easy: 0.5,
    normal: 0.65,
    hard: 0.8,
    legendary: 1,
};