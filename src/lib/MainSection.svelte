<script lang="ts">
  export let title: string;
</script>

<section id={$$props.id} class={$$props.class}>
  <div class="header">
    <slot name="icon" />
    <h2>{title}</h2>
  </div>

  <slot />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0rem 0rem 1rem 0rem;
    margin-bottom: 4rem;
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
    color: var(--accent);
  }
</style>
