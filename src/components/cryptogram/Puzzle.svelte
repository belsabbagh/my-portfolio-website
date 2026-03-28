<script lang="ts">
  import Word from './Word.svelte';
  import { puzzle } from '$lib/cryptogram/puzzle';
</script>

<div class="quote">
  {#each $puzzle.words as word}
    <Word {word} />
  {/each}
</div>
<div class="author">
  {#each $puzzle.author.split('\n') as line}
    {line}<br />
  {/each}
</div>

<style>
  .author {
    padding: 0.5rem 0 0.5rem 0;
    text-align: end;
    color: rgba(255, 255, 255, 0.35);
  }
</style>
