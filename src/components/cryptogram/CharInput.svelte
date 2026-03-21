<script>
  import { sanitizeInput } from '$lib/cryptogram/text';
  import { colorOthers, getALlInputs } from '$lib/cryptogram/dom';
  import { puzzle } from '$lib/cryptogram/puzzle';

  function actionColorOthers(e) {
    if ($puzzle.isFinished) return;
    colorOthers(e.target.name);
  }

  function updatePuzzle(e) {
    e.target.value = sanitizeInput(e.target.value);
    const inputs = getALlInputs();
    for (const i of inputs) {
      if (i.name === e.target.name) {
        i.value = e.target.value;
      }
    }
    if (getInput() === $puzzle.answerKey) {
      finishPuzzle(inputs);
      return;
    }
    let found = false;
    for (const i of inputs) {
      if (i.id === e.target.id) {
        found = true;
      }
      if (found && i.readOnly === false) {
        i.focus();
        break;
      }
    }
  }

  function finishPuzzle(inputs) {
    inputs.forEach((i) => {
      i.readOnly = true;
      i.style.color = 'white';
      i.style.borderBottom = '1px solid white';
    });
    $puzzle.isFinished = true;
  }

  function getInput() {
    const inputs = getALlInputs();
    let answer = '';
    for (const i of inputs) {
      answer += i.value;
    }
    return answer;
  }

  let { name } = $props();
</script>

<input
  {name}
  id={name + Math.random()}
  type="text"
  oninput={updatePuzzle}
  onfocus={actionColorOthers}
  maxlength="1"
  autocomplete="off"
  autocorrect="off"
  autocapitalize="on"
  spellcheck="false"
/>

<style>
  input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    font-size: larger;
    text-align: center;
    width: 1.6rem;
    margin: 0 0.3rem 0 0.3rem;
    display: inline-block;
    vertical-align: top;
    line-height: 1.6rem;
    padding: 0;
  }

  input:focus {
    outline: none;
    border-bottom: 1px solid #aa0000;
  }
</style>
