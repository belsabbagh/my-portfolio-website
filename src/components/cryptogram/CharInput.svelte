<script lang="ts">
  let { name, oninput, onfocus } = $props();
  let inputEl: HTMLInputElement;
  const focusColor = '#ff0000';
  const blurColor = '#ffffff';

  export function focus() {
    inputEl.style.color = focusColor;
    inputEl.style.borderBottom = `1px solid ${focusColor}`;
  }

  export function blur() {
    inputEl.style.color = blurColor;
    inputEl.style.borderBottom = `1px solid ${blurColor}`;
  }

  export function set(value: string) {
    inputEl.value = value;
  }

  export function getName(): string {
    return name;
  }

  export function finish() {
    inputEl.readOnly = true;
    inputEl.style.color = 'white';
    inputEl.style.borderBottom = '1px solid white';
  }

  export function getValue(): string {
    return inputEl.value;
  }

  export function reset() {
    inputEl.value = '';
    inputEl.readOnly = false;
  }
</script>

<input
  {name}
  bind:this={inputEl}
  id={name + Math.random()}
  type="text"
  {oninput}
  {onfocus}
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
    border-radius: 0;
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
