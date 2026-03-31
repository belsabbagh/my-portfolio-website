<script lang="ts">
  import { puzzle } from '$lib/cryptogram/puzzle';
  import { isAlpha, sanitizeInput } from '$lib/cryptogram/text';
  import CharInput from './CharInput.svelte';

  function specialCharStyle(char: string) {
    return `special-char ${[',', '.'].includes(char) ? 'low' : 'high'}`;
  }

  let refs: Record<string, CharInput> = {};

  function actionColorOthers(
    e: FocusEvent & { currentTarget: EventTarget & HTMLInputElement },
  ) {
    if ($puzzle.isFinished) return;
    const target = e.target as HTMLInputElement;
    for (const key in refs) {
      if (refs[key]?.getName() === target.name) {
        refs[key]?.focus();
      } else {
        refs[key]?.blur();
      }
    }
  }

  function updatePuzzle(
    e: Event & { currentTarget: EventTarget & HTMLInputElement },
  ) {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;
    const sanitizedValue = sanitizeInput(value);
    for (const key in refs) {
      if (refs[key]?.getName() === name) {
        refs[key]?.set(sanitizedValue);
      }
    }
    // console.debug(`${$puzzle.answerKey}\n\n${getInput()}`);
    if ($puzzle.answerKey === getInput()) {
      finishPuzzle();
    }
  }
  function finishPuzzle() {
    for (const key in refs) {
      refs[key]?.finish();
    }
    puzzle.finish();
  }

  function getInput() {
    return Object.keys(refs)
      .sort()
      .map((key) => refs[key]?.getValue())
      .filter((val) => val !== undefined && val !== null)
      .join('');
  }

  export function reset() {
    for (const i in refs) {
      refs[i]?.reset();
    }
  }
</script>

<div class="quote">
  {#each $puzzle.words as word, i}
    <span class="word">
      {#each word as char, j}
        <span class="char">
          {#if isAlpha(char)}
            {#if $puzzle.hiddenChars.includes(char)}
              <CharInput
                bind:this={
                  refs[
                    `${String(i).padStart(
                      3,
                      '0',
                    )}-${String(i).padStart(3, '0')}`
                  ]
                }
                name={$puzzle.charMap[char] ?? ''}
                onfocus={actionColorOthers}
                oninput={updatePuzzle}
              />
              <span class="key">
                {$puzzle.charMap[char]}
              </span>
            {:else}
              <div class="solved-char">
                {char}
              </div>
            {/if}
          {:else}
            <span class={specialCharStyle(char)}>
              {char}
            </span>
          {/if}
        </span>
      {/each}
      <span class="whitespace"></span>
    </span>
  {/each}
</div>

<style>
  .word {
    display: inline-block;
    vertical-align: top;
  }

  .whitespace {
    margin: 0 0.3rem 0 0.3rem;
  }

  .char {
    display: inline-block;
    vertical-align: top;
  }

  .whitespace {
    margin: 0 0.3rem 0 0.3rem;
  }

  .solved-char {
    border: none;
    border-bottom: 1px solid white;
    font-size: larger;
    text-align: center;
    width: 1.6rem;
    margin: 0 0.3rem 0 0.3rem;
    vertical-align: top;
    line-height: 1.6rem;
    padding: 0;
  }

  .key {
    display: block;
    color: rgba(255, 255, 255, 0.35);
  }

  .special-char {
    font-size: larger;
    margin: 0rem;
  }
  .low {
    margin-top: 0.5rem;
  }
  .high {
    margin-top: -0.1rem;
  }
</style>
