import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see the
			// head of your adapter's README for details
			pages: "build",
			assets: "build",
			fallback: null,
			precompress: false,
			strict: true,
		}),
		// other kit options...
	},
	// ...
};

export default config;
