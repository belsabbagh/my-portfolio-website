<script lang="ts">
  import Header from './Header/Header.svelte';
  import Footer from './Footer.svelte';
  import Logo from '@/lib/Logo.svelte';
  import ContactsNav from '@/lib/ContactsNav.svelte';
</script>

<main>
  <Header>
    <Logo slot="logo" />
  </Header>
  <div class="body">
    <div class="left-bar"><ContactsNav /></div>
    <div class="middle-part">
      <slot />
    </div>
    <div class="right-bar" />
  </div>
  <Footer />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0rem 1rem 0rem 1rem;
    padding-bottom: 1.5rem;
  }
  .body {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    width: 100%;
    padding-left: 5px;
  }
  .left-bar {
    position: fixed;
    bottom: 1rem;
    left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .middle-part {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: auto;
    padding: 1rem;
    max-width: 850px;
  }
</style>
