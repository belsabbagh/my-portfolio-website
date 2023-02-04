<script lang="ts">
  export let href: string = '';
</script>

<a style={$$props.style} class={$$props.class} {href}><slot /></a>

<style>
  a {
    position: relative;
    width: 2rem;
    height: 2rem;
    top: 0;
    color: var(--primary);
    transition: top 0.1s ease-in-out, color 0.1s ease-in-out;
  }
  a:hover {
    top: -6px;
    color: var(--accent);
  }
</style>
