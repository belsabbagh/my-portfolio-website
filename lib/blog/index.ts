import { glob } from 'svelte-spa-links';
import { read } from 'svelte-spa-links';

/**
 * Loads metadata and content for all markdown files in the blog directory.
 * @returns {Promise<{path: string, title: string, content: string}[]>} An array of blog post objects.
 */
export async function fetchMarkdownPosts(): Promise<{path: string, title: string, content: string}[]> {
  // Use glob to find all markdown files
  const files = await glob('src/lib/blog/**/*.md');
  
  const posts = [];
  for (const file of files) {
    // Read the content of each markdown file
    const content = await read(file);
    
    // Simple extraction of title (assuming the first line is the title)
    const title = content.split('\n')[0].replace('# ', '');

    posts.push({
      path: file,
      title: title,
      content: content,
    });
  }
  return posts;
}