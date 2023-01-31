<script lang="ts">
  import ContactsNav from '@/lib/ContactsNav.svelte';
  import Logo from '@/lib/Logo.svelte';
</script>

<header>
  <Logo />
  <nav class="nav">
    <a href="#about-me">About Me</a>
    <a href="#my-work">My Work</a>
  </nav>
</header>
<div class="body">
  <div class="left-bar"><ContactsNav /></div>
  <div class="middle-part">
    <slot />
  </div>
  <div class="right-bar" />
</div>

<style>
  header {
    margin-bottom: 5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-left: 5px;
    padding-right: 5px;
  }
  .left-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .middle-part {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
  }
</style>
