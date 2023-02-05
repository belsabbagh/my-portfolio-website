<script lang="ts">
	import Project from './Project/index.svelte';
	import projects from '$config/projects';
</script>

<div class="projects">
	{#each projects as project}
		<Project {project} />
	{/each}
</div>

<style>
	.projects {
		width: 60%;
	}
	.projects :global(.featured-project) {
		margin-bottom: 3rem;
	}
</style>
