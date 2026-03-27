import { writable } from 'svelte/store';

function createTimer() {
  const { subscribe, update, set } = writable(0);
  let intervalId: number = 0;

  return {
    subscribe,
    start: () => {
      if (intervalId) return;
      intervalId = setInterval(() => {
        update((n) => n + 1);
      }, 1000);
    },
    pause: () => {
      clearInterval(intervalId);
      intervalId = 0;
    },
    reset: () => {
      set(0);
    },
  };
}

export const time = createTimer();
