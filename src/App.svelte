<script lang="ts">
  import Main from '@/lib/Layout/Main.svelte';
  import MdTagFaces from 'svelte-icons/md/MdTagFaces.svelte';
  import MdCode from 'svelte-icons/md/MdCode.svelte';
  import MainSection from '@/lib/Layout/MainSection.svelte';
  import AboutMe from '@/lib/AboutMe.svelte';
  import Introduction from '@/lib/Introduction.svelte';
</script>

<Main>
  <Introduction />
  <section style="margin-bottom: 4rem;" />
  <MainSection id="about-me" title="About Me">
    <div class="section-icon" slot="icon"><MdTagFaces /></div>
    <AboutMe />
  </MainSection>
  <MainSection id="my-work" title="My Work">
    <div class="section-icon" slot="icon"><MdCode /></div>
    This is my work.
  </MainSection>
</Main>

<style>
  .section-icon {
    width: 32px;
    height: 32px;
    margin-right: 0.8rem;
    color: var(--accent);
  }
</style>
