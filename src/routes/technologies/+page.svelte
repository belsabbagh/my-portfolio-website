<script>
  import TextLink from '../../components/TextLink.svelte';

  const technologies = [
    {
      name: 'C++',
      logo: 'https://cdn.svgporn.com/logos/c-plusplus.svg',
      note: 'Working with classes in C++ automatically makes it extra complex.',
      categories: ['language'],
    },
    {
      name: 'Java',
      logo: 'https://cdn.svgporn.com/logos/java.svg',
      note: 'I first learnt OOP with Java. Not having to deal with pointers was an upgrade.',
      categories: ['language'],
    },
    {
      name: 'JavaScript',
      logo: 'https://cdn.svgporn.com/logos/javascript.svg',
      note: 'Only a skilled developer can write clean JavaScript code, assuming they understand its quirks.',
      categories: ['language'],
    },
    {
      name: 'Python',
      logo: 'https://cdn.svgporn.com/logos/python.svg',
      note: "We have our differences, but it's still my digital Swiss army knife.",
      categories: ['language'],
    },
    {
      name: 'PHP',
      logo: 'https://cdn.svgporn.com/logos/php.svg',
      note: 'Hate on it all you want, but it got better ever since PHP 7.',
      categories: ['language'],
    },
    {
      name: 'Dart',
      logo: 'https://cdn.svgporn.com/logos/dart.svg',
      note: 'Neither I nor anyone I know has ever used Dart outside of Flutter.',
      categories: ['language'],
    },
    {
      name: 'Rust',
      logo: 'https://cdn.svgporn.com/logos/rust.svg',
      note: "I've only played around with it, but I wish I could use it for real.",
      categories: ['language'],
    },
    {
      name: 'React',
      logo: 'https://cdn.svgporn.com/logos/react.svg',
      note: "It's not obsolete yet.",
      categories: ['framework', 'JavaScript'],
    },
    {
      name: 'Svelte',
      logo: 'https://cdn.svgporn.com/logos/svelte-icon.svg',
      note: 'Now this is my front-end Swiss army knife.',
      categories: ['framework', 'JavaScript'],
    },
  ];
</script>

<main>
  <h1>Technologies</h1>
  <p>
    Here are some of the technologies I've worked with. I've used some of them
    in personal projects, while others I've used in my studies or internships.
  </p>
  <p>
    I talk in depth about tech I work with on <TextLink href="/blog"
      >my blog</TextLink
    >.
  </p>
  <div class="center">
    <div class="technologies">
      {#each technologies as { name, logo, note }}
        <div class="technology hover-container">
          <img src={logo} alt={name} />
          <h3>{name}</h3>
          <p>{note}</p>
        </div>
      {/each}
    </div>
  </div>
</main>

<style>
  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .technologies {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 70%;
    justify-content: space-between;
    gap: 20px;
  }

  .technology {
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .technology:hover {
    /* spotlight */
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    transition: all 0.15s ease-in-out;
  }

  .technology img {
    width: 64px;
    height: 64px;
    margin-bottom: 10px;
  }

  .hover-container {
    position: relative;
    display: inline-block;
  }

  main {
    padding: 20px;
    display: flex;
    flex-direction: column;
    place-content: center;
  }

  .technology:nth-child(odd) {
    text-align: right;
  }

  .technology:nth-child(even) {
    text-align: left;
  }
</style>
