<script lang="ts">
  import Skill from './Skill.svelte';

  export let title: string;
  export let items: string[] = [];
</script>

<div class="skills">
  <h3 class="tech-header">{title}</h3>
  <ul>
    {#each items as item}
      <Skill class="skill" title={item} />
    {/each}
  </ul>
</div>

<style>
  ul {
    list-style: none;
    text-align: start;
    padding: 0 0 0 1rem;
    margin: 0;
    line-height: 75%;
  }
  .tech-header {
    padding: 0 0 0 0;
    margin: 1rem 0 0.75rem 0;
    text-align: start;
    font-weight: 600;
    color: var(--primary);
  }
  .skills {
    padding: 0 1rem 1rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin: 0 0.5rem 0rem 00rem;
  }
  ul :global(.skill) {
    margin: 0.5rem 0;
  }
</style>
