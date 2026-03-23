import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md', '.svx'],
    }),
  ],
  extensions: ['.svelte', '.md', '.svx'],
  kit: {
    adapter: adapter(),
    csp: {
      directives: {
        'script-src': [
          'self',
          'sha256-ieoeWczDHkReVBsRBqaal5AFMlBtNjMzgwKvLqi/tSU=',
        ],
        'object-src': ['none'],
        'base-uri': ['self'],
        'style-src': ['self', 'unsafe-inline'],
      },
    },
  },
};

export default config;
