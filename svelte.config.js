import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    csp: {
      mode: 'nonce',
      directives: {
        'script-src': [
          'self',
          'nonce-%sveltekit.nonce%',
          'https://analytics.belsabbagh.me',
        ],
        'object-src': ['none'],
        'base-uri': ['self'],
        'style-src': ['self', 'unsafe-inline'],
        // 'require-trusted-types-for': ['script'],
      },
      // must be specified with either the `report-uri` or `report-to` directives, or both
      reportOnly: {
        'script-src': ['self'],
        'report-uri': ['/'],
      },
    },
  },
};

export default config;
