import { getPosts } from '$lib/blog';

export const load = async () => {
  const posts = await getPosts();

  return {
    posts,
  };
};
