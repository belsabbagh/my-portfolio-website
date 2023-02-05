<script lang="ts">
  export let stack: string[] = [];
</script>

<ul class="project-tags">
  {#each stack as item}
    <li class="project-tag"><code>{item}</code></li>
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
  code {
    color: var(--primary-text);
  }
</style>
