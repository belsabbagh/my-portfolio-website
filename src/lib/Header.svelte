<script lang="ts">
  import Logo from '@/lib/Logo.svelte';
</script>

<header>
  <Logo />
  <nav class="nav">
    <a class="text-link" href="#about-me">About Me</a>
    <a class="text-link" href="#my-work">My Work</a>
  </nav>
</header>

<style>
  header {
    margin-bottom: 5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
