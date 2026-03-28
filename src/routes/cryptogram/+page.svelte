<script lang="ts">
  import { getRandomQuote, type Quote } from '$lib/cryptogram/quotes';
  import Puzzle from '../../components/cryptogram/Puzzle.svelte';
  import { puzzle } from '$lib/cryptogram/puzzle';
  import { getALlInputs } from '$lib/cryptogram/dom';
  import { makePuzzle, PRESET_DIFFICULTIES } from '$lib/cryptogram/puzzleMaker';
  import { time } from '$lib/cryptogram/time';
  import { secondsToTime } from '$lib/cryptogram/text';

  let difficulty = $state('easy');
  let quote = $state(getRandomQuote());

  function newPuzzle(quote: Quote, difficulty: number) {
    puzzle.set(makePuzzle(quote, difficulty));
    resetInputs();
    time.start();
  }

  function makePuzzleAction() {
    newPuzzle(getRandomQuote(), PRESET_DIFFICULTIES[difficulty] ?? 0.3);
  }

  function setDifficultyAction(
    e: Event & { currentTarget: EventTarget & HTMLSelectElement },
  ) {
    const target = e.target as HTMLSelectElement;
    newPuzzle(quote, PRESET_DIFFICULTIES[target.value] ?? 0.3);
  }

  function resetInputs() {
    const inputs = getALlInputs();
    inputs.forEach((i) => {
      i.value = '';
      i.readOnly = false;
    });
  }

  function startOverAction() {
    resetInputs();
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      if (!$puzzle.isFinished) return;
      const nextButton = document.getElementById('next') as HTMLButtonElement;
      nextButton.click();
    }

    if (e.shiftKey && /^[a-zA-Z]$/.test(e.key)) {
      if (!e.shiftKey) return;
      const key = e.key.toUpperCase();
      const inputs = document.getElementsByName(key);
      if (inputs.length === 0) return;
      inputs[0]?.focus();
    }

    const navigationKeys = ['Backspace', 'Tab', 'Shift', 'Control', 'Alt'];
    if (!navigationKeys.includes(e.key)) {
      e.preventDefault();
    }
  }

  puzzle.set(makePuzzle(quote, PRESET_DIFFICULTIES['easy']));
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
    <Puzzle />
  </div>
  <div class="controls">
    <button onclick={startOverAction}>Clear</button>
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
</style>
