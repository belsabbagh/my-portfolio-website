<script>
  let { data } = $props();
</script>

<h1>Blog</h1>

<ul>
  {#each data.posts as post}
    <li>
      <h2>
        <a href={post.path}>
          {post.meta.title}
        </a>
      </h2>
      {new Date(post.meta.date).toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })}
    </li>
  {/each}
</ul>
