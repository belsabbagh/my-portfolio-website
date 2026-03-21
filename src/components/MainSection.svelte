<script>
  let { ...props } = $props();
</script>

<section id={props.id} class={props.class}>
  <div class="header">
    {@render props.icon?.()}
    <h2>{props.title}</h2>
  </div>

  {@render props.children?.()}
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 0rem 0rem 1rem 0rem;
  }

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 100%;
    margin-bottom: 1rem;
    font-weight: 600;
    color: var(--primary);
  }
</style>
