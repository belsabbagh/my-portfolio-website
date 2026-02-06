import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { mdToHtml } from '../../lib/mdToHtml';

export const prerender = true;

const website = 'https://www.belsabbagh.me"
const feedTitle = 'Belal Elsabbagh - Blog';
const feedDescription = 'Random thoughts and opinions about software and the industry.';
const feedLink = 'https://www.belsabbagh.me';
// Feed is rendered at build time
const feedUpdated = new Date();

export const xml = (posts) => `<?xml version="1.0" encoding="utf-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom">
    <title>${feedTitle}</title>
    <link href="${feedLink}/rss.xml" rel="self"/>
    <link href="${feedLink}"/>
    <id>${feedLink}/</id>
    <updated>${feedUpdated.toISOString()}</updated>
    <author>
      <name>Adam Sanderson</name>
    </author>
    <subtitle>${feedDescription}</subtitle>
    <generator>JavaScript</generator>
${posts
  .map(
    (post) => `    <entry>
        <title>${post.title}</title>
        <link href="${website}/blog/${post.slug}/"/>
        <id>${website}/blog/${post.slug}/</id>
        <updated>${new Date(post.publishDate).toISOString()}</updated>
        <published>${new Date(post.publishDate).toISOString()}</published>
        <content type="html"><![CDATA[${post.content}]]></content>
      </entry>`,
  )
  .join('\n')}
  </feed>`;

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function GET() {
  const fileNames = await fs.promises.readdir('src/posts');

  const posts = (
    await Promise.all(
      fileNames.map(async (fileName) => {
        const doc = await fs.promises.readFile(`src/posts/${fileName}`, 'utf8');

        const { data, content } = matter(doc);

        data.slug = path.basename(fileName, '.md');
        data.content = await mdToHtml(content.toString());
        return data;
      }),
    )
  )
    .filter((p) => p.publishDate)
    .toSorted((a, b) => {
      return a.publishDate > b.publishDate ? -1 : 1;
    });

  const headers = {
    'Cache-Control': 'max-age=0, s-maxage=3600',
    'Content-Type': 'application/xml',
  };

  const body = xml(posts);

  return new Response(body, { headers });
}
