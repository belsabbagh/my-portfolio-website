import type CharInput from './CharInput.svelte';

export function createInputManager(refs: Record<string, CharInput>) {
  function register(id: string, instance: CharInput | null) {
    if (instance) refs[id] = instance;
    else delete refs[id];
  }
  return {
    register,
    syncFocus: (targetName: string) => {
      for (const key in refs) {
        if (refs[key]?.getName() === targetName) {
          refs[key]?.focus();
        } else {
          refs[key]?.blur();
        }
      }
    },

    updateValues: (name: string, value: string) => {
      for (const key in refs) {
        if (refs[key]?.getName() === name) {
          refs[key]?.set(value);
        }
      }
    },

    getCurrentInput: () => {
      return Object.keys(refs)
        .sort()
        .map((key) => refs[key]?.getValue())
        .filter((val) => val !== undefined && val !== null)
        .join('');
    },

    finishAll: () => {
      Object.values(refs).forEach((ref) => ref?.finish());
    },

    resetAll: () => {
      Object.values(refs).forEach((ref) => ref?.reset());
    },
  };
}
