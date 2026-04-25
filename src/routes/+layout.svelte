<script>
  import '../global.css';
  import '../code.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Logo from '$lib/components/Logo.svelte';
  import ContactsNav from '$lib/components/ContactsNav.svelte';
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props & { [key: string]: any }} */
  const { ...props } = $props();
</script>

<Header>
  {#snippet logo()}
    <Logo />
  {/snippet}
</Header>
<div class="root-container">
  <div class="body">
    <div class="left-bar">
      <ContactsNav />
      <div class="line"></div>
    </div>
    <div class="middle-part">
      {@render props.children()}
    </div>
    <div class="right-bar"></div>
  </div>
  <Footer />
</div>

<style>
  .body {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    width: 100%;
  }
  .left-bar {
    position: fixed;
    bottom: 0rem;
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
  }

  .line {
    width: 1px;
    height: 2rem;
    background-color: var(--primary-text);
    margin: 0.5rem 0rem 0rem 0rem;
  }
</style>
