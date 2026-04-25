<script lang="ts">
  import Head from '$lib/components/Head.svelte';

  function formatDate(date: Date) {
    return date.toLocaleDateString('en-us', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }
  let { data } = $props();
</script>

<Head
  title="Blog"
  description="Latest articles and insights from Belal Elsabbagh."
  ogImage="/20240712_145317.jpg"
/>

<h1>Blog</h1>

<div class="blog-container">
  <h1 class="page-title">Blog</h1>
  <div class="card-grid">
    {#each data.posts as post}
      <div class="blog-card">
        <h2 class="card-title">
          <a href={post.path}>{post.meta.title}</a>
        </h2>
        <p class="card-date">
          {formatDate(new Date(post.meta.date))}
        </p>
      </div>
    {/each}
  </div>
</div>

<style>
  .blog-container {
    padding: 2rem;
  }
  .page-title {
    margin-bottom: 2rem;
    font-size: 2.5em;
    color: var(--primary, #333);
  }
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  .blog-card {
    border: 1px solid var(--border-color, #eee);
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    transition:
      transform 0.2s,
      box-shadow 0.2s;
  }
  .blog-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  .card-title a {
    text-decoration: none;
    color: var(--primary, #333);
    font-size: 1.5em;
    display: block;
    margin-bottom: 0.5rem;
  }
  .card-title a:hover {
    color: var(--accent, #007bff);
  }
  .card-date {
    color: var(--secondary, #666);
    font-size: 0.9em;
    margin-top: 0.5rem;
  }
</style>
