import { writable } from 'svelte/store';
import type { Puzzle } from './puzzleMaker';

export const puzzle = writable<Puzzle>({
  hiddenChars: '',
  answerKey: '',
  words: [],
  charMap: {},
  author: '',
  isFinished: false,
});
