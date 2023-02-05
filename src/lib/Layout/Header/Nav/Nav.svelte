<script lang="ts">
	import NavItem from './NavItem.svelte';
	export let items: { href: string; text: string }[] = [];
</script>

<nav class="nav">
	{#each items as i}
		<NavItem class="nav-item" href={i.href}>{i.text}</NavItem>
	{/each}
</nav>

<style>
	nav {
		font-size: 18px;
	}
	nav :global(.nav-item) {
		padding: 0.75rem;
	}
</style>
