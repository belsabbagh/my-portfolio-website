<script>
  import NavItem from './NavItem.svelte';
  let { items = [] } = $props();
</script>

<nav class="nav">
  {#each items as i}
    <NavItem class="nav-item" href={i.href}>{i.text}</NavItem>
  {/each}
</nav>

<style>
  nav {
    font-size: 18px;
  }
  nav :global(.nav-item) {
    padding: 0.75rem;
  }
</style>
