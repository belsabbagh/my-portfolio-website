<script lang="ts">
	import CoverName from './CoverName.svelte';
	import TextLink from '$components/TextLink.svelte';
</script>

<div class="intro">
	<code class="greeting">Nice to meet you. My name is</code>
	<CoverName>Belal Elsabbagh.</CoverName>
	<div class="description">
		<p>
			I'm a software developer devoted to building/designing digital solutions. I'm currently
			studying for my bachelor's degree in computer science at
			<TextLink target="_blank" rel="noreferrer noopener" href="http://www.miuegypt.edu.eg/">
				MIU, Egypt
			</TextLink>.
		</p>
	</div>
</div>

<style>
	.intro {
		text-align: start;
		display: flex;
		flex-direction: column;
		max-width: fit-content;
		margin-left: -5rem;
	}
	.description {
		max-width: 60%;
	}
	p {
		width: 100%;
	}
</style>
