<script lang="ts">
  import TextLink from '$components/TextLink.svelte';
  import type { Project } from '#types';
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
  code {
    font-size: 0.75rem;
  }
</style>
