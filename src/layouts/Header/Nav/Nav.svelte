<script>
import NavItem from "./NavItem.svelte";
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
    padding:0.5rem;
    margin-right:1rem;
  }
  nav :global(.nav-item) {
    padding: 0.75rem;
  }
  @media only screen and (max-width:720px) {
    nav {
      font-size: 14px;
    }
  }
</style>
