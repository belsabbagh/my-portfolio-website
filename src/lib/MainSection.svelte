<script lang="ts">
    export let title: string;
</script>

<section class={$$props.class}>
    <h1>{title}</h1>
    <slot />
</section>

<style>
    h1 {
        font-size: 2rem;
        font-weight: 600;
        color: var(--accent);
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        padding: 1rem;
        border: 1px solid var(--accent);
        border-radius: 1rem;
        margin-bottom: 4rem;
    }
</style>