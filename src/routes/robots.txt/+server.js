const site = 'https://belsabbagh.me'; // change this to reflect your domain
const pages = ['blog']; // populate this with all the slugs you wish to include

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
  const body = sitemap(pages);
  const response = new Response(body);
  response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
  response.headers.set('Content-Type', 'application/xml');
  return response;
}

const sitemap = (pages) => `User-agent: *
Allow: /$
Disallow: /`;
