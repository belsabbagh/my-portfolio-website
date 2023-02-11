import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $assets: './src/assets',
      '$lib/*': './src/lib/*',
      $routes: './src/routes',
      $stores: './src/stores',
      $config: './src/config',
      $components: './src/components',
      '#types/*': './src/types/*',
    }
  },
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
};

export default config;
