<script lang="ts">
  import TextLink from '@/components/TextLink.svelte';
  import TechStack from './TechStack.svelte';

  export let title: string = '';
  export let description: string = '';
  export let tags: string[] = [];
  export let href: string = '';
</script>

<div class={$$props.class}>
  <TextLink {href}><h3 class="project-title">{title}</h3></TextLink>
  <p>{description}</p>
  <TechStack items={tags} />
</div>

<style>
  .project-title {
    font-size: 1.5rem;
    margin: 0.5rem 0 0.5rem 0;
  }
</style>
