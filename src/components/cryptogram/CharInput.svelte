<script lang="ts">
  import { sanitizeInput } from '$lib/cryptogram/text';
  import { colorOthers, getAllInputs } from '$lib/cryptogram/dom';
  import { puzzle } from '$lib/cryptogram/puzzle';

  function actionColorOthers(
    e: FocusEvent & { currentTarget: EventTarget & HTMLInputElement },
  ) {
    if ($puzzle.isFinished) return;
    const target = e.target as HTMLInputElement;
    colorOthers(target.name);
  }

  function updatePuzzle(
    e: Event & { currentTarget: EventTarget & HTMLInputElement },
  ) {
    const target = e.target as HTMLInputElement;
    const { name, id, value } = target;
    const sanitizedValue = sanitizeInput(value);
    const inputs = getAllInputs();
    inputs.forEach((i) => {
      if (i.name === name) {
        i.value = sanitizedValue;
      }
    });
    if (getInput() === $puzzle.answerKey) {
      finishPuzzle(inputs);
      return;
    }
  }

  function finishPuzzle(inputs: NodeListOf<HTMLInputElement>) {
    inputs.forEach(
      (i: {
        readOnly: boolean;
        style: { color: string; borderBottom: string };
      }) => {
        i.readOnly = true;
        i.style.color = 'white';
        i.style.borderBottom = '1px solid white';
      },
    );
    puzzle.finish();
  }

  function getInput() {
    const inputs = getAllInputs();
    let answer = '';
    inputs.forEach((i) => {
      answer += i.value;
    });
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
