<script lang="ts">
  import { createInputManager } from '$lib/cryptogram/inputManager';
  import { puzzle } from '$lib/cryptogram/puzzle';
  import { isAlpha, sanitizeInput } from '$lib/cryptogram/text';
  import CharInput from './CharInput.svelte';
  const refs: Record<string, CharInput> = {};
  const inputManager = createInputManager(refs);
  function specialCharStyle(char: string) {
    return `special-char ${[',', '.'].includes(char) ? 'low' : 'high'}`;
  }

  function actionColorOthers(
    e: FocusEvent & { currentTarget: EventTarget & HTMLInputElement },
  ) {
    if ($puzzle.isFinished) return;
    const target = e.target as HTMLInputElement;
    inputManager.syncFocus(target.name);
  }

  async function updatePuzzle(
    e: Event & { currentTarget: EventTarget & HTMLInputElement },
  ) {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;
    const sanitizedValue = sanitizeInput(value);
    inputManager.updateValues(name, sanitizedValue);
    if (await puzzle.solved(inputManager.getCurrentInput())) {
      finishPuzzle();
    }
  }
  function finishPuzzle() {
    inputManager.finishAll();
    puzzle.finish();
  }

  function makeRefId(i: number, j: number) {
    return `${String(i).padStart(3, '0')}-${String(j).padStart(3, '0')}`;
  }

  export function reset() {
    inputManager.resetAll();
  }
</script>

<div class="puzzle">
  {#each $puzzle.words as word, i}
    <span class="word">
      {#each word as char, j}
        <span class="char">
          {#if isAlpha(char)}
            {#if $puzzle.hiddenChars.includes(char)}
              <CharInput
                bind:this={refs[makeRefId(i, j)]}
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
    margin: 0 0.5rem 0 0.5rem;
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
    text-align: center;
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
