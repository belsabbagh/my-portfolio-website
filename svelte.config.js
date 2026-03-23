import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
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
