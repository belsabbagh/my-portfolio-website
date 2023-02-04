<script lang="ts">
  export let title: string;
</script>

<li class={$$props.class}>{title}</li>

<style>
  li::before {
    content: '#'; /* Add content: \2022 is the CSS Code/unicode for a bullet */
    color: var(--accent); /* Change the color */
    display: inline-block; /* Needed to add space between the bullet and the text */
    width: 1em; /* Also needed for space (tweak if needed) */
    margin-left: -1em; /* Also needed for space (tweak if needed) */
  }
</style>
