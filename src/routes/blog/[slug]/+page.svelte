<script>
  import Head from '$lib/components/Head.svelte';
  export let data;
</script>

<Head title="{data.title}" description="Read the article: {data.title}" ogImage="/20240712_145317.jpg" />

<main>
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
</main>

<style>
  main {
    max-width: 720px;
    min-height: 80vh;
  }
</style>
