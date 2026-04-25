import type { Component } from 'svelte';

export interface PostMetadata {
  title: string;
  date: string;
  subtitle: string;
  draft: boolean;
  description?: string;
  categories?: string[];
  published?: boolean;
}

interface MarkdownModule {
  metadata: PostMetadata;
  default: Component;
}

export interface Post {
  meta: PostMetadata;
  path: string;
  content: string;
}

export async function fetchMarkdownPosts(): Promise<Post[]> {
  const allPostFiles = import.meta.glob<MarkdownModule>('$lib/blog/*.md');
  const iterablePostFiles = Object.entries(allPostFiles);
  return Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = path.slice(9, -3);
      return {
        meta: metadata,
        path: postPath,
        content: '',
      };
    }),
  );
}

export async function getPosts(): Promise<Post[]> {
  return (await fetchMarkdownPosts())
    .filter((i) => i.meta.draft === false)
    .sort((a, b) => {
      return +new Date(b.meta.date) - +new Date(a.meta.date);
    });
}
