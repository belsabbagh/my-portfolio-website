import { writable } from 'svelte/store';

const time = writable(0, (set) => {
    const interval = setInterval(() => {
        time.update((t) => t + 1);
    }, 1000);
    return () => clearInterval(interval);
});
time.pause = () => {
    time.update((t) => t);
};
export { time };