<!-- @migration-task Error while migrating Svelte code: $$props is used together with named props in a way that cannot be automatically migrated. -->
<script>
  export let href;
  export let target = '_self';
  export let rel = '';
</script>

<a {target} {rel} class={$$props.class} {href}><slot /></a>

<style>
  a {
    display: inline-block;
    position: relative;
  }

  a::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--accent);
    transform-origin: bottom right;
    transition: transform 0.2s ease-out;
  }

  a:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
</style>
