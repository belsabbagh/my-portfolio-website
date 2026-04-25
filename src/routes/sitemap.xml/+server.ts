import { getPosts } from '$lib/blog';

const site = 'https://belsabbagh.me';

interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

/**
 * Fetches metadata (slug and last modified date) for all markdown posts from the blog directory.
 * @returns {Promise<SitemapEntry[]>} An array of sitemap entries for posts.
 */
async function fetchBlogSitemapEntries(): Promise<SitemapEntry[]> {
  const posts = await getPosts();
  const entries: SitemapEntry[] = [];

  for (const post of posts) {
    const slug = post.path
      .substring(post.path.lastIndexOf('/') + 1)
      .replace('.md', '');

    const lastmod = new Date().toISOString();

    entries.push({
      loc: `blog/${slug}`,
      lastmod: lastmod,
      changefreq: 'daily',
      priority: '0.5',
    });
  }
  return entries;
}

/**
 * Generates the sitemap XML content from a list of entries.
 * @param {SitemapEntry[]} entries - List of sitemap entries.
 * @returns {string} The XML sitemap string.
 */
const sitemap = (entries: SitemapEntry[]): string => {
  // Combine page slugs and post metadata for the final list
  const allUrls: SitemapEntry[] = [
    {
      loc: '',
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: '1.0',
    }, // Root page
  ].concat(entries);

  return `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  ${allUrls
    .map(
      (item) => `
  <url>
    <loc>${site}/${item.loc}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>
  `,
    )
    .join('')}
</urlset>`;
};

/** @type {import('./$types').RequestHandler} */
export async function GET() {
  const postMetadata = await fetchBlogSitemapEntries();
  const body = sitemap(postMetadata);
  const response = new Response(body);
  response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
  response.headers.set('Content-Type', 'application/xml');
  return response;
}
