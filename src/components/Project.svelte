<script>
  import TextLink from './TextLink.svelte';
  let { ...props } = $props();
</script>

<div class={props.class}>
  {#if props.project.tag}
    <code>{props.project.tag}</code><br />
  {/if}
  <TextLink href={props.project.href}><h3>{props.project.title}</h3></TextLink>
  <p>{props.project.description}</p>
  <ul class="project-tags">
    {#each props.project.stack as item}
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
