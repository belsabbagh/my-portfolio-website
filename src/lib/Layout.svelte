<script lang="ts">
  import Header from '@/lib/Header.svelte';
  import Footer from '@/lib/Footer.svelte';
  import ContactsNav from '@/lib/ContactsNav.svelte';
</script>

<Header />
<div class="body">
  <div class="left-bar"><ContactsNav /></div>
  <div class="middle-part">
    <slot />
  </div>
  <div class="right-bar" />
</div>
<Footer />
<style>
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
