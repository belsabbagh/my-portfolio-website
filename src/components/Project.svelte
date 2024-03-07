<script>
  import TextLink from './TextLink.svelte';
  export let project;
</script>

<div class={$$props.class}>
  {#if project.tag}
    <code>{project.tag}</code><br />
  {/if}
  <TextLink href={project.href}><h3>{project.title}</h3></TextLink>
  <div>{@html project.description}</div>
  <ul class="project-tags">
    {#each project.stack as item}
      <li class="project-tag"><code>{item}</code></li>
    {/each}
  </ul>
  </div>

<style>
  code {
    font-size: 0.75rem;
  }
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
