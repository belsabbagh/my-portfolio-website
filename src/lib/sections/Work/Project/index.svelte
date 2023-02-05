<script lang="ts">
  import TextLink from '$components/TextLink.svelte';
  import type { Project } from '$types';
  import TechStack from './TechStack.svelte';

  export let project: Project;
</script>

<div class={$$props.class}>
  {#if project.tag}
    <code>{project.tag}</code><br />
  {/if}
  <TextLink href={project.href}><h3>{project.title}</h3></TextLink>
  <div>{@html project.description}</div>
  <TechStack stack={project.stack} />
</div>

<style>
  h3 {
    font-size: 1.2em;
    color: var(--primary);
    margin: 0.5rem 0 0.5rem 0;
  }
  code {
    font-size: 0.75rem;
  }
</style>
