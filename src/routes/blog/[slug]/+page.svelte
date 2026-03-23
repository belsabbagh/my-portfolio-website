<script>
  export let data;
</script>

<article>
  <h1>{data.title}</h1>
  <p>
    Published: {new Date(data.date).toLocaleDateString('en-us', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })}
  </p>
  <svelte:component this={data.content} />
</article>
