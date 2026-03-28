import type { Quote } from './quotes';
import { isAlpha } from './text';

function _createCharMap(uniqueCharacters: string) {
  const allChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const puzzleChars = allChars
    .split('')
    .filter((i) => uniqueCharacters.indexOf(i) === -1);
  if (puzzleChars.length < uniqueCharacters.length) {
    const extra = uniqueCharacters.length - puzzleChars.length;
    for (let i = 0; i < extra; i++) {
      const c = uniqueCharacters[i];
      if (c === undefined) {
        continue;
      }
      puzzleChars.push(c);
    }
  }
  let charMap: Record<string, string> = {};
  [...uniqueCharacters].forEach((element: string, index: number) => {
    let k = puzzleChars[index];
    if (k === undefined) {
      return;
    }
    charMap[element] = k;
  });
  return charMap;
}

function _hideChars(uniqueChars: string, difficultyPercent: number): string {
  return [...uniqueChars]
    .filter(() => Math.random() < difficultyPercent)
    .join('');
}

function _makeAnswerKey(text: string, hiddenChars: string): string {
  let key = '';
  for (const i of text) {
    if (hiddenChars.indexOf(i) !== -1) {
      key += i;
    }
  }
  return key;
}

export interface Puzzle {
  hiddenChars: string;
  answerKey: string;
  words: string[];
  author: string;
  isFinished: boolean;
  charMap: Record<string, string>;
}

export function makePuzzle(
  quote: Quote,
  difficultyPercent: number = 0.7,
): Puzzle {
  let text = quote.text.toUpperCase();
  let uniqueChars = [...new Set<string>(text)]
    .filter((char: string) => char !== ' ' && isAlpha(char))
    .join('');
  const hiddenChars = _hideChars(uniqueChars, difficultyPercent);
  return {
    hiddenChars,
    answerKey: _makeAnswerKey(text, hiddenChars),
    words: text.split(' '),
    charMap: _createCharMap(uniqueChars),
    author: quote.author,
    isFinished: false,
  };
}

export const PRESET_DIFFICULTIES: Record<string, number> = {
  easy: 0.5,
  normal: 0.65,
  hard: 0.8,
  legendary: 1,
};
