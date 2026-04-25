const site = 'https://belsabbagh.me';
/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
  const allPosts = await fetchAllPostSlugs();
  const pages = ['/', 'blog', ...allPosts];
  const body = sitemap(pages);
  const response = new Response(body);
  response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
  response.headers.set('Content-Type', 'application/xml');
  return response;
}

/**
 * Fetches all slugs for markdown posts from the blog directory.
 * @returns {Promise<string[]>} An array of post slugs.
 */
async function fetchAllPostSlugs(): Promise<string[]> {
  const allPostFiles = import.meta.glob<any>('$lib/blog/*.md');
  const slugs: string[] = [];
  for (const [path, resolver] of Object.entries(allPostFiles)) {
    // Extract slug from the file path (e.g., $lib/blog/my-post.md -> my-post)
    const slug = path.substring(path.lastIndexOf('/') + 1).replace('.md', '');
    slugs.push(slug);
  }
  return slugs;
}

const sitemap = (pages: string[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${site}/${page}</loc>
    <changefreq>daily</changefreq>
    <priority>0.5</priority>
  </url>
  `,
    )
    .join('')}
</urlset>`;
