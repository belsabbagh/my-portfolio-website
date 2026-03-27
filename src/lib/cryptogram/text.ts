export function isAlpha(input: string) {
  return /^[a-zA-Z]+$/.test(input);
}

export function sanitizeInput(val) {
  if (!isAlpha(val)) {
    return '';
  }
  return (val > 1 ? val[0] : val).toUpperCase();
}

const formatter = new Intl.DurationFormat('en-US', {
  style: 'digital',
  hoursDisplay: 'auto',
  minutesDisplay: 'always',
  secondsDisplay: 'always',
});

export function secondsToTime(seconds: number) {
  // DurationFormat takes a duration object
  return formatter.format({
    hours: Math.floor(seconds / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60,
  });
}
