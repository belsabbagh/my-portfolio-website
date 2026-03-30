<script lang="ts">
  import Word from './Word.svelte';
  import { puzzle } from '$lib/cryptogram/puzzle';
</script>

<div class="quote">
  {#each $puzzle.words as word}
    <Word {word} />
  {/each}
</div>
