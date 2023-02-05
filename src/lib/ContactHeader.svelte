<script lang="ts">
</script>

<div class="contact-header">
	<div class="icon">
		<slot name="icon" />
	</div>
	<div class="name">
		<slot name="name" />
	</div>
</div>

<style>
	.contact-header {
		display: flex;
		align-items: center;
	}
	.name {
		color: black;
		text-decoration: none;
		max-width: fit-content;
		padding-right: 0.8rem;
	}
	.icon {
		max-width: fit-content;
		padding: 0.8rem;
	}
</style>
