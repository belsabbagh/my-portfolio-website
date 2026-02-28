<script>
  import Nav from './Nav/Nav.svelte';
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [logo]
   */

  /** @type {Props} */
  let { logo } = $props();
  const navItems = [
    { href: '#about', text: 'About' },
    { href: '#experience', text: 'Experience' },
    { href: '#work', text: 'Projects' },
    { href: '/blog', text: 'Blog' },
  ];
</script>

<header>
  <a href="/" class="pulse">{@render logo?.()}</a>
  <Nav items={navItems} />
</header>

<style>
  header {
    position: sticky;
    top: 0;
    margin-bottom: 4rem;
    filter: none !important;
    background: var(--background-header);
    backdrop-filter: blur(10px);
    width: 100%;
    z-index: 1000;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
