<script lang="ts">
  export let title: string;
</script>

<li>{title}</li>

<style>
  li {
    margin: 0.5rem 0;
  }

  li::before {
    content: '|'; /* Add content: \2022 is the CSS Code/unicode for a bullet */
    color: var(--accent); /* Change the color */
    font-weight: bold; /* If you want it to be bold */
    display: inline-block; /* Needed to add space between the bullet and the text */
    width: 1em; /* Also needed for space (tweak if needed) */
    margin-left: -1em; /* Also needed for space (tweak if needed) */
  }
</style>
