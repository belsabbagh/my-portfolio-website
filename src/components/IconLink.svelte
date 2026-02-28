<script>
  let { href = '', 'aria-label': ariaLabel = '', children, ...rest } = $props();
</script>

<a {href} aria-label={ariaLabel} class={rest.class} {...rest}>
  {@render children?.()}
</a>

<style>
  a {
    position: relative;
    top: 0;
    transition:
      top 0.1s ease-in-out,
      color 0.1s ease-in-out;
    color: var(--primary);
  }
  a:hover {
    top: -6px;
    color: var(--accent);
  }
</style>
