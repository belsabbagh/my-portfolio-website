import { writable } from "svelte/store";

export const puzzle = writable({
    hiddenChars: [],
    answerKey: "",
    words: [],
    charMap: {},
    author: "",
    isFinished: false
})