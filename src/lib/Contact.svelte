<script lang="ts">
    export let href;
</script>

<div class="contact">
    <a {href}>
        <slot name="header" />
        <slot name="content" />
    </a>
</div>

<style>
    .contact {
        background-color: #acc0d0;
        border-radius: 1rem;
        color: black;
        max-width: fit-content;
    }
</style>
