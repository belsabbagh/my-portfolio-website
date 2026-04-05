import { get, writable } from 'svelte/store';
import { isAlpha } from './text';

async function _hash(text: string): Promise<string> {
  const msgUint8 = new TextEncoder().encode(text.trim().toUpperCase());
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

function _createCharMap(uniqueCharacters: string) {
  const allChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const unusedChars = allChars
    .split('')
    .filter((i) => uniqueCharacters.indexOf(i) === -1);
  const extra = uniqueCharacters.length - unusedChars.length;
  if (extra > 0) {
    for (let i = 0; i < extra; i++) {
      const c = uniqueCharacters[i];
      if (c === undefined) {
        continue;
      }
      unusedChars.push(c);
    }
  }
  let charMap: Record<string, string> = {};
  [...uniqueCharacters].forEach((i: string, index: number) => {
    let k = unusedChars[index];
    if (k === undefined) {
      return;
    }
    charMap[i] = k;
  });
  return charMap;
}

function _hideChars(uniqueChars: string, difficultyPercent: number): string {
  return [...uniqueChars]
    .filter(() => Math.random() < difficultyPercent)
    .join('');
}

async function _makeAnswerKey(
  text: string,
  hiddenChars: string,
): Promise<string> {
  let key = '';
  for (const i of text) {
    if (hiddenChars.indexOf(i) !== -1) {
      key += i;
    }
  }
  return await _hash(key);
}

export interface Puzzle {
  hiddenChars: string;
  answerKey: string;
  words: string[];
  isFinished: boolean;
  charMap: Record<string, string>;
}

export async function makePuzzle(
  text: string,
  difficultyPercent: number = 0.7,
): Promise<Puzzle> {
  text = text.toUpperCase();
  let uniqueChars = [...new Set<string>(text)]
    .filter((char: string) => char !== ' ' && isAlpha(char))
    .join('');
  const hiddenChars = _hideChars(uniqueChars, difficultyPercent);
  return {
    hiddenChars,
    answerKey: await _makeAnswerKey(text, hiddenChars),
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

  async function make(text: string, difficulty: number) {
    set(await makePuzzle(text, difficulty));
  }

  function finish() {
    update((p: Puzzle) => ({ ...p, isFinished: true }));
  }

  async function solved(input: string): Promise<boolean> {
    const currentState = get({ subscribe });
    const hashedInput = await _hash(input);
    return currentState.answerKey === hashedInput;
  }

  return {
    subscribe,
    clear,
    make,
    solved,
    finish,
  };
}

export const puzzle = createPuzzleGame();
