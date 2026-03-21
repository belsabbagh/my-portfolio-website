<script>
    import Char from "./Char.svelte";
    let { word } = $props();
</script>

<span class="word">
    {#each word as char}
        <Char {char} />
    {/each}
    <span class="whitespace"></span>
</span>

<style>
    span {
        display: inline-block;
        vertical-align: top;
    }
    .whitespace {
        margin: 0 0.3rem 0 0.3rem;
    }
</style>
