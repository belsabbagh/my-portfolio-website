<script lang="ts">
  import Project from './Project/index.svelte';
  import projects from '$config/projects';
</script>

<div class="projects">
  {#each projects as project}
    <Project class="project" {project} />
  {/each}
</div>

<style>
  .projects {
    width: 100%;
  }
  .projects :global(.project) {
    margin-bottom: 3rem;
  }
</style>
