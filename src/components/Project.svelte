<script>
  import TextLink from './TextLink.svelte';
  import ThinkingListItem from './ThinkingListItem.svelte';
  let { ...props } = $props();
</script>

<div class={props.class}>
  {#if props.project.tag}
    <span class="monospace">{props.project.tag}</span><br />
  {/if}
  <TextLink href={props.project.href} aria-label={props.project.title}
    ><h3>{props.project.title}</h3></TextLink
  >
  <p>{props.project.description}</p>
  <ul class="project-tags">
    {#each props.project.stack as item}
      <ThinkingListItem content={item.opinion}><span
      class="monospace">{item.name}</span ></ThinkingListItem>
    {/each}
  </ul>
</div>

<style>
  .monospace {
    color: var(--accent);
    font-size: 0.75rem;
    font-family: var(--code-font);
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
  @media only screen and (max-width: 720px) {
    .project-tags {
      padding: 0 2rem;
    }
  }
</style>
