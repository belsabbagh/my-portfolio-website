<script lang="ts">
  /**
   * @param {string} title - The page title for SEO.
   * @param {string} description - The meta description.
   * @param {string} ogImage - The Open Graph image URL.
   * @param {string} [appleTitle] - Optional title for Apple devices.
   * @param {string} [twitterTitle] - Optional Twitter title.
   * @param {string} [twitterDescription] - Optional Twitter description.
   * @param {string} [twitterImage] - Optional Twitter image URL.
   */
  export let title: string = 'Belal Elsabbagh';
  export let description: string = 'Portfolio of Belal Sabbagh.';
  export let ogImage: string = '/20240712_145317.jpg';
  export let appleTitle: string = title;
  export let twitterTitle: string = title;
  export let twitterDescription: string = description;
  export let twitterImage: string = ogImage;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={ogImage} />
  <meta name="apple-title" content={appleTitle} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://belsabbagh.me/" />
  <meta property="og:logo" content="your value" />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://belsabbagh.me/" />
  <meta property="twitter:title" content={twitterTitle} />
  <meta property="twitter:description" content={twitterDescription} />
  <meta property="twitter:image" content={twitterImage} />
</svelte:head>
