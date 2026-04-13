import { fetchMarkdownPosts } from '$lib/blog';

export const load = async () => {
  const allPosts = await fetchMarkdownPosts();

  const sortedPosts = allPosts
    .filter((i) => i.meta.draft === false)
    .sort((a, b) => {
      return +new Date(b.meta.date) - +new Date(a.meta.date);
    });

  return {
    posts: sortedPosts,
  };
};
