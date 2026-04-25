import { fetchMarkdownPosts } from '$lib/blog';

interface PostMetadata {
  slug: string;
  lastmod: string;
  title: string;
  content: string;
}

/**
 * Fetches metadata (slug, title, and last modified date) for all markdown posts from the blog directory.
 * @returns {Promise<PostMetadata[]>} An array of post metadata entries.
 */
async function fetchBlogPostsMetadata(): Promise<PostMetadata[]> {
  const posts = await fetchMarkdownPosts();
  const entries: PostMetadata[] = posts.map((post) => {
    const slug = post.path
      .substring(post.path.lastIndexOf('/') + 1)
      .replace('.md', '');

    const lastmod = new Date().toISOString();
    return {
      slug: slug,
      lastmod: lastmod,
      meta: post.meta,
      content: post.content || 'No content available',
    };
  });

  return entries;
}

/**
 * Generates the RSS XML content from a list of post metadata.
 * @param {PostMetadata[]} entries - List of post metadata.
 * @returns {string} The XML RSS feed string.
 */
const generateRss = (entries: PostMetadata[]): string => {
  const items = entries
    .map(
      (item) => `
    <item>
      <title>${item.meta.title}</title>
      <link>${'https://belsabbagh.me/' + item.slug}</link>
      <description>${item.meta.subtitle}</description>
      <pubDate>${item.lastmod}</pubDate>
    </item>
  `,
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Belal Elsabbagh Blog</title>
    <link>https://belsabbagh.me/</link>
    <description>A feed of posts from the Belal Elsabbagh blog.</description>
    <language>en</language>
    <pubDate>${new Date().toUTCString()}</pubDate>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`;
};

/** @type {import('./$types').RequestHandler} */
export async function GET() {
  const postMetadata = await fetchBlogPostsMetadata();
  const body = generateRss(postMetadata);
  const response = new Response(body);
  response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
  response.headers.set('Content-Type', 'application/rss+xml');
  return response;
}

