<script lang="ts">
  import FeaturedProject from './FeaturedProject/index.svelte';
  import featuredProjects from '@/config/featuredProjects';
</script>

<div class="featured-projects">
  {#each featuredProjects as project}
    <FeaturedProject
      class="featured-project"
      title={project.title}
      description={project.description}
      tags={project.tags}
    />
  {/each}
</div>

<style>
  .featured-projects :global(.featured-project) {
    margin-bottom: 3rem;
  }
</style>
