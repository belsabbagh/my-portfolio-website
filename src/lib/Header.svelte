<script lang="ts">
  import Logo from '@/lib/Logo.svelte';
</script>

<header>
  <a href="/" class="pulse"><Logo /></a>
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
  .pulse:hover,
  .pulse:focus {
    animation: pulse 1s;
    text-shadow: 0 0 2em transparent;
  }

  @keyframes pulse {
    0% {
      text-shadow: 0 0 0 var(--primary);
    }
  }
</style>
