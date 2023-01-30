<script lang="ts">
  import Introduction from '@/lib/Introduction.svelte';

  import ContactsNav from '@/lib/ContactsNav.svelte';
  import Footer from '@/lib/Footer.svelte';
  import MainSection from './lib/MainSection.svelte';
</script>

<main>
  <header>
    This will be the header
  </header>
  <div class="body">
    <div class="left-bar"><ContactsNav /></div>
    <div class="middle-part">
      <section style="margin-bottom: 4rem;">
        <Introduction />
      </section>
      <MainSection title="About Me">

      </MainSection>
      <MainSection title="My Work">

      </MainSection>
      <section class="main-section">
        <Footer />
      </section>
    </div>
    <div class="right-bar" />
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  header {
    margin-bottom: 5rem;
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
    position: sticky;
    border: 1px solid var(--accent);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 0;
    position: sticky;
    position: -webkit-sticky;

  }
  .middle-part {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
  }
</style>
