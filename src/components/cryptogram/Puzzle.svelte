<script>
  import Word from './Word.svelte';
  import { puzzle } from '$lib/cryptogram/puzzle';
  function formatAuthor(name) {
    return name.replace(/\n/g, '<br>');
  }
</script>

<div class="quote">
  {#each $puzzle.words as word}
    <Word {word} />
  {/each}
</div>
<div class="author">{@html formatAuthor($puzzle.author)}</div>

<style>
  .author {
    padding: 0.5rem 0 0.5rem 0;
    text-align: end;
    color: rgba(255, 255, 255, 0.35);
  }
</style>
