<script lang="ts">
  import Introduction from '@/lib/Introduction.svelte';
  import MdTagFaces from 'svelte-icons/md/MdTagFaces.svelte'
  import MdCode from 'svelte-icons/md/MdCode.svelte'
  import ContactsNav from '@/lib/ContactsNav.svelte';
  import Footer from '@/lib/Footer.svelte';
  import MainSection from '@/lib/MainSection.svelte';
  import Logo from '@/lib/Logo.svelte';
</script>

<main>
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
      <section style="margin-bottom: 4rem;">
        <Introduction />
      </section>
      <MainSection id="about-me" title="About Me">
        <div class="section-icon" slot="icon">
          <MdTagFaces />
        </div>
        This is me.
      </MainSection>
      <MainSection id="my-work" title="My Work">
        <div class="section-icon" slot="icon">
          <MdCode />
        </div>
        This is my work.
      </MainSection>
      <section class="main-section">
        <Footer />
      </section>
    </div>
    <div class="right-bar"></div>
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem 1rem 1rem 1rem;
  }
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

  .section-icon {
    width: 32px;
    height: 32px;
    margin-right: 0.8rem;
    color: var(--accent);
  }
</style>
