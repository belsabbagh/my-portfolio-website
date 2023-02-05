<script lang="ts">
	import Main from '$lib/Layout/Main.svelte';
	import MdTagFaces from 'svelte-icons/md/MdTagFaces.svelte';
	import MdContentPaste from 'svelte-icons/md/MdContentPaste.svelte';
	import MdCode from 'svelte-icons/md/MdCode.svelte';
	import MainSection from '$lib/Layout/MainSection.svelte';
	import AboutMe from '$lib/sections/About/index.svelte';
	import Introduction from '$lib/sections/Introduction/index.svelte';
	import Work from '$lib/sections/Work/index.svelte';
</script>

<Main>
	<section><Introduction /></section>
	<MainSection id="about" title="About Me">
		<div class="section-icon" slot="icon"><MdTagFaces /></div>
		<AboutMe />
	</MainSection>
	<MainSection id="experience" title="My Experience">
		<div class="section-icon" slot="icon"><MdContentPaste /></div>
		This is my experience.
	</MainSection>
	<MainSection id="work" title="Things I've Built">
		<div class="section-icon" slot="icon"><MdCode /></div>
		<Work />
	</MainSection>
	<section id="contact" class="contact">
		<h1>Want to get in touch?</h1>
		<p>Feel free to send me a message about anything.</p>
	</section>
</Main>

<style>
	.section-icon {
		width: 32px;
		height: 32px;
		margin-right: 0.8rem;
		color: var(--accent);
	}

	.contact {
		text-align: center;
	}
</style>
