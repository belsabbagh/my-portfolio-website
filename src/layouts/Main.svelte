<script>
  import Header from "./Header/Header.svelte";
  import Footer from "./Footer.svelte";
  import Logo from "../components/Logo.svelte";
  import ContactsNav from "../components/ContactsNav.svelte";
</script>

<main class={$$props.class}>
  <Header>
    <Logo slot="logo" />
  </Header>
  <div class="body">
    <div class="left-bar">
      <ContactsNav />
      <div class="line" />
    </div>
    <div class="middle-part">
      <slot />
    </div>
    <div class="right-bar" />
  </div>
  <Footer />
</main>

<style>

  main :global(section) {
    margin-bottom: 4rem;
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
    padding: 1rem;
    max-width: 850px;
  }

  .line {
    width: 1px;
    height: 2rem;
    background-color: var(--primary-text);
    margin: 0.5rem 0rem 0rem 0rem;
  }
</style>
