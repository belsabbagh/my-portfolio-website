<script lang="ts">
  export let items: string[] = [];
</script>

<ul class="project-tags">
  {#each items as item}
    <li class="project-tag">{item}</li>
  {/each}
</ul>

<style>
  .project-tags {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: var(--code-font);
    font-size: 0.75rem;
    color: var(--primary-text);
  }
  .project-tag {
    text-align: center;
  }
</style>
