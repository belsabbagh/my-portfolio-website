<script>
  import NavItem from './NavItem.svelte';
  let { items = [] } = $props();
</script>

<nav class="nav">
  {#each items as i}
    <NavItem href={i.href}>{i.text}</NavItem>
  {/each}
</nav>

<style>
  nav {
    font-size: 18px;
    display: flex;
    justify-content: space-around;
    gap: 0.5rem;
    min-width: 30%;
    max-width: 80%;
  }
  @media only screen and (max-width: 720px) {
    nav {
      font-size: 14px;
    }
  }
</style>
