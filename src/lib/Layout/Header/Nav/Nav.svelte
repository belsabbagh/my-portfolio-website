<script lang="ts">
  import NavItem from './NavItem.svelte';
  export let items: { href: string; text: string }[] = [];
</script>

<nav class="nav">
  {#each items as i}
    <NavItem href={i.href}>{i.text}</NavItem>
  {/each}
</nav>

<style>
</style>
