<script lang="ts">
  import Introduction from '@/lib/Introduction.svelte';

  import ContactsNav from '@/lib/ContactsNav.svelte';
</script>

<main>
  <header />
  <div class="body">
    <div class="left-bar"><ContactsNav /></div>
    <div class="middle-part">
      <Introduction />
    </div>
    <div class="right-bar" />
  </div>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    padding-left: 5px;
    padding-right: 5px;
  }
  .left-bar {
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    border: 1px solid var(--accent);
    border-radius: 1rem;
  }
  .middle-part {
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid var(--accent);
    border-radius: 1rem;
    padding: 1rem;
  }
</style>
