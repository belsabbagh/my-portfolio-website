import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$assets: './src/assets',
			$lib: './src/lib',
			$routes: './src/routes',
			$stores: './src/stores',
			$utils: './src/utils',
			$config: './src/config',
			$types: './src/types',
		}
	}
};

export default config;
