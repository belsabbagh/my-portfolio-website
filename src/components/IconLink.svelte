<!-- @migration-task Error while migrating Svelte code: $$props is used together with named props in a way that cannot be automatically migrated. -->
<script>
  export let href = '';
</script>

<a class={$$props.class} {href}><slot /></a>

<style>
  a {
    position: relative;
    top: 0;
    transition: top 0.1s ease-in-out, color 0.1s ease-in-out;
    color: var(--primary);
  }
  a:hover {
    top: -6px;
    color: var(--accent);
  }
</style>
