import { writable } from 'svelte/store';
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
  isFinished: boolean;
  charMap: Record<string, string>;
}

export function makePuzzle(
  text: string,
  difficultyPercent: number = 0.7,
): Puzzle {
  text = text.toUpperCase();
  let uniqueChars = [...new Set<string>(text)]
    .filter((char: string) => char !== ' ' && isAlpha(char))
    .join('');
  const hiddenChars = _hideChars(uniqueChars, difficultyPercent);
  return {
    hiddenChars,
    answerKey: _makeAnswerKey(text, hiddenChars),
    words: text.split(' '),
    charMap: _createCharMap(uniqueChars),
    isFinished: false,
  };
}

export const PRESET_DIFFICULTIES: Record<string, number> = {
  easy: 0.5,
  normal: 0.65,
  hard: 0.8,
  legendary: 1,
};
const DEFAULT_PUZZLE: Puzzle = {
  hiddenChars: '',
  answerKey: '',
  words: [],
  charMap: {},
  isFinished: false,
};

export function createPuzzleGame() {
  const { subscribe, set, update } = writable<Puzzle>(
    structuredClone(DEFAULT_PUZZLE),
  );

  function clear() {
    set(structuredClone(DEFAULT_PUZZLE));
  }

  function make(text: string, difficulty: number) {
    set(makePuzzle(text, difficulty));
  }

  function finish() {
    update((p: Puzzle) => ({ ...p, isFinished: true }));
  }

  return {
    subscribe,
    clear,
    make,
    finish,
  };
}

export const puzzle = createPuzzleGame();
