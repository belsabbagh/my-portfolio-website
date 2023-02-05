<script lang="ts">
	import SkillsCard from './SkillsCard.svelte';
	import technologies from '$config/technologies';
</script>

<div class="skillset">
	{#each technologies as tech}
		<SkillsCard class="skill-card" title={tech.title} items={tech.technologies} />
	{/each}
</div>

<style>
	.skillset {
		font-family: var(--code-font);
		font-size: 0.75rem;
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
