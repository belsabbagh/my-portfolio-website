<script>
  // import NewQuoteForm from '../../components/cryptogram/NewQuoteForm.svelte';

  import Stopwatch from '../../components/cryptogram/Stopwatch.svelte';
  import { getRandomQuote } from '$lib/cryptogram/quotes';
  import Puzzle from '../../components/cryptogram/Puzzle.svelte';
  import { puzzle } from '$lib/cryptogram/puzzle';
  import { getALlInputs } from '$lib/cryptogram/dom';
  import { makePuzzle, PRESET_DIFFICULTIES } from '$lib/cryptogram/puzzleMaker';
  import { time } from '$lib/cryptogram/time';

  let difficulty = $state('easy');
  let quote = $state(getRandomQuote());

  function newPuzzle(quote, difficulty) {
    puzzle.set(makePuzzle(quote, difficulty));
    resetInputs();
    time.set(0);
  }

  function makePuzzleAction(_e) {
    newPuzzle(getRandomQuote(), PRESET_DIFFICULTIES[difficulty]);
  }

  function setDifficultyAction(e) {
    newPuzzle(quote, PRESET_DIFFICULTIES[e.target.value]);
  }

  function resetInputs() {
    const inputs = getALlInputs();
    for (const i of inputs) {
      i.value = '';
      i.readOnly = false;
    }
  }

  function startOverAction(e) {
    resetInputs();
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      if (!$puzzle.isFinished) return;
      document.getElementById('next').click();
    }

    if (e.keyCode >= 65 && e.keyCode <= 90) {
      if (!e.shiftKey) return;
      const key = e.key.toUpperCase();
      const inputs = document.getElementsByName(key);
      if (inputs.length === 0) return;
      inputs[0].focus();
    }

    if (![8, 9, 16, 17].includes(e.keyCode)) {
      e.preventDefault();
    }
  }

  puzzle.set(makePuzzle(quote, PRESET_DIFFICULTIES['easy']));
</script>

<main>
  <h1>Cryptogram</h1>
  <div class="timer"></div>
  <div id="status">
    <Stopwatch />
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
  <!-- <div>
        <h2>Add a quote</h2>
        <NewQuoteForm />
    </div> -->
</main>

<svelte:window onkeydown={handleKeyDown} />

<style>
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
</style>
