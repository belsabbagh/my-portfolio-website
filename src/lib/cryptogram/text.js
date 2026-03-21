export function isAlpha(input) {
    return /^[a-zA-Z]+$/.test(input);
}

export function sanitizeInput(val) {
    if (!isAlpha(val)) {
        return "";
    }
    return (val > 1 ? val[0] : val).toUpperCase();
}

export function secondsToTime(seconds) {
    const r = seconds % 60;
    return `${Math.floor(seconds / 60)}:${r < 10 ? "0" : ""}${r}`;
}