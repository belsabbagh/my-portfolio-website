<script lang="ts">
  import { getRandomQuote, type Quote } from '$lib/cryptogram/quotes';
  import Puzzle from '$lib/components/cryptogram/Puzzle.svelte';
  import { puzzle, PRESET_DIFFICULTIES } from '$lib/cryptogram/puzzle';
  import { time } from '$lib/cryptogram/time';
  import { isAlpha, secondsToTime } from '$lib/cryptogram/text';
  import { onMount } from 'svelte';

  const DEFAULT_DIFFICULTY = 0.3;

  let difficulty = $state('easy');
  let quote = $state<Quote>({} as Quote);
  let puzzleComponent: Puzzle | null = null;

  async function newPuzzle(quote: Quote, difficulty: number) {
    await puzzle.make(quote.text, difficulty);
    resetInputs();
  }

  async function makePuzzleAction() {
    quote = await getRandomQuote();
    await newPuzzle(
      quote,
      PRESET_DIFFICULTIES[difficulty] ?? DEFAULT_DIFFICULTY,
    );
  }

  async function setDifficultyAction(
    e: Event & { currentTarget: EventTarget & HTMLSelectElement },
  ) {
    const target = e.target as HTMLSelectElement;
    await newPuzzle(
      quote,
      PRESET_DIFFICULTIES[target.value] ?? DEFAULT_DIFFICULTY,
    );
  }

  function resetInputs() {
    puzzleComponent?.reset();
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      if (!$puzzle.isFinished) return;
      const nextButton = document.getElementById('next') as HTMLButtonElement;
      nextButton.click();
      return;
    }

    if (e.shiftKey && isAlpha(e.key)) {
      const key = e.key.toUpperCase();
      const inputs = document.getElementsByName(key);
      if (inputs.length === 0) return;
      inputs[0]?.focus();
      e.preventDefault();
      return;
    }
  }

  onMount(async () => {
    quote = await getRandomQuote();
    newPuzzle(quote, PRESET_DIFFICULTIES[difficulty] ?? 0.3);
  });
</script>

<main>
  <h1>Cryptogram</h1>
  <div class="timer"></div>
  <div id="status">
    <div id="stopwatch">{secondsToTime($time)}</div>
    {#if $puzzle.isFinished}
      You solved it!
    {:else}
      Solve the puzzle!
    {/if}
  </div>
  <div class="difficulty">
    Difficulty:
    <select onchange={setDifficultyAction} bind:value={difficulty}>
      <option value="easy">Easy</option>
      <option value="normal">Normal</option>
      <option value="hard">Hard</option>
      <option value="legendary">Legendary</option>
    </select>
  </div>

  <div class="card">
    <Puzzle bind:this={puzzleComponent} />
    <div class="author">
      {#each quote.author?.split('\n') as line}
        {line}<br />
      {/each}
    </div>
  </div>
  <div class="controls">
    <button onclick={resetInputs}>Clear</button>
    <button
      id="next"
      class="next"
      onclick={makePuzzleAction}
      disabled={!$puzzle.isFinished}>Next</button
    >
  </div>
  <div class="guide">
    <h2>Shortcuts</h2>
    <p>
      <strong><kbd>Enter</kbd></strong> - Next puzzle
    </p>
    <p>
      <strong><kbd>Shift</kbd> + <kbd>Letter</kbd> </strong> - Focus on the input
      for that letter
    </p>
  </div>
</main>

<svelte:window onkeydown={handleKeyDown} />

<style>
  main {
    max-width: 980px;
  }

  #status {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 2rem;
  }

  select {
    margin-left: 0.35rem;
    padding-left: 0.2rem;
  }

  #stopwatch {
    display: inline-block;
    vertical-align: top;
    color: rgba(255, 255, 255, 0.35);
    padding: 0;
    font-size: x-large;
  }
  .author {
    padding: 0.5rem 0 0.5rem 0;
    text-align: end;
    color: rgba(255, 255, 255, 0.35);
  }
</style>
