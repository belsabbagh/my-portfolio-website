<script lang="ts">
  import Layout from '@/lib/Layout.svelte';

  import Introduction from '@/lib/Introduction.svelte';
  import MdTagFaces from 'svelte-icons/md/MdTagFaces.svelte';
  import MdCode from 'svelte-icons/md/MdCode.svelte';
  import ContactsNav from '@/lib/ContactsNav.svelte';
  import Footer from '@/lib/Footer.svelte';
  import MainSection from '@/lib/MainSection.svelte';
  import Logo from '@/lib/Logo.svelte';
</script>

<main>
  <Layout>
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
  </Layout>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem 1rem 1rem 1rem;
  }
  .section-icon {
    width: 32px;
    height: 32px;
    margin-right: 0.8rem;
    color: var(--accent);
  }
</style>
