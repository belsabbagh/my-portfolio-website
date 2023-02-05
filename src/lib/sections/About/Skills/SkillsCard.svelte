<script lang="ts">
	import Skill from './Skill.svelte';

	export let title: string;
	export let items: string[] = [];
</script>

<div class={$$props.class}>
	<h3 class="tech-header">{title}</h3>
	<ul>
		{#each items as item}
			<Skill class="skill" title={item} />
		{/each}
	</ul>
</div>

<style>
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		text-align: start;
		line-height: 75%;
	}
	.tech-header {
		margin: 0 0 0.75rem 0;
		text-align: start;
		font-weight: 600;
		color: var(--primary);
	}
	ul :global(.skill) {
		margin: 0.5rem 0;
	}
</style>
