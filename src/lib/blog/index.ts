export async function fetchMarkdownPosts() {
  const allPostFiles = import.meta.glob('$lib/blog/*.md');
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = path.slice(9, -3);

      return {
        meta: metadata,
        path: postPath,
      };
    }),
  );

  return allPosts;
}
