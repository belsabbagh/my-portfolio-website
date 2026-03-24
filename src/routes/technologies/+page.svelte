<script>
  import TextLink from '../../components/TextLink.svelte';

  const { data } = $props();
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
      {#each data.technologies as { name, logo, note }}
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
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }

  .technology {
    padding: 20px;
    max-width: 225px;
    width: 225px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: left;
  }

  .technology:hover {
    /* spotlight */
    background: linear-gradient(var(--background) 0%, 90%, var(--accent) 100%);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    transition: background 2s ease-in-out;
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

  /* .technology:nth-child(odd) { */
  /*   text-align: right; */
  /* } */
  /**/
  /* .technology:nth-child(even) { */
  /*   text-align: left; */
  /* } */
</style>
