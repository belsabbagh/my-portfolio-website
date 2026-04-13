import type { Component } from 'svelte';

interface BlogPostModule {
  default: Component;
  metadata: {
    title: string;
    date: string | Date;
  };
}

export async function load({ params }: { params: { slug: string } }) {
  const posts = import.meta.glob<BlogPostModule>('$lib/blog/*.md');
  const path = `/src/lib/blog/${params.slug}.md`;
  if (!posts[path]) {
    return { status: 404, error: 'Post not found' };
  }
  const post = await posts[path]();
  const { title, date } = post.metadata;

  return {
    content: post.default,
    title,
    date,
  };
}
