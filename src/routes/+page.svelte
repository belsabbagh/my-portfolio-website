<script>
  import MainSection from '../components/MainSection.svelte';
  import TextLink from '../components/TextLink.svelte';
  import * as contacts from '../config/contacts';
  import Project from '../components/Project.svelte';
  import Experience from '../components/Experience.svelte';

  let { data } = $props();
</script>

<svelte:head>
  <title>Belal Elsabbagh</title>
  <meta
    name="description"
    content="Hi! I'm Belal, and I love building software of any shape or form."
  />
  <meta name="robots" content="index, follow" />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://belsabbagh.me/" />
  <meta property="og:title" content="Belal Elsabbagh" />
  <meta
    property="og:description"
    content="Hi! I'm Belal, and I love building software of any shape or form."
  />
  <meta property="og:image" content="/20240712_145317.jpg" />
  <meta property="og:logo" content="your value" />

  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://belsabbagh.me/" />
  <meta property="twitter:title" content="Belal Elsabbagh" />
  <meta
    property="twitter:description"
    content="Hi! I'm Belal, and I love building software of any shape or form."
  />
  <meta property="twitter:image" content="/20240712_145317.jpg" />
</svelte:head>

<main>
  <section class="intro">
    <div>
      <span class="greeting">Nice to meet you. My name is</span>
      <span class="my-name">Belal Elsabbagh</span>
    </div>
  </section>
  <MainSection id="about" title="About Me">
    {#snippet icon()}
      <span class="section-icon mdi--face-outline"></span>
    {/snippet}
    <div class="about-me">
      <div class="content">
        <div class="me">
          <img src="/20240712_145317.jpg" alt="Me" />
          <div>
            <p>
              Hello! I'm Belal, and I've recently completed my bachelor's degree
              in computer science. It is not just a career for me, it's a
              lifestyle. I love building software that solves my problems. Real,
              human problems. I've gained a lot of experience early on while
              trying many different, yet overlapping, specializations. I've done
              academic research on Artificial Intelligence, built
              production-ready software for thousands of users, and even
              programmed competitively. I also self-host services for my
              family's personal use.
            </p>
            <TextLink href="/technologies" aria-label="Technologies"
              >Check out my tools.</TextLink
            >
          </div>
        </div>
        <!-- <p> -->
        <!--   I'm a software developer who loves to build digital solutions for -->
        <!--   real-world problems. I'm currently studying for my bachelor's degree in -->
        <!--   computer science at -->
        <!--   <TextLink -->
        <!--     target="_blank" -->
        <!--     rel="noreferrer noopener" -->
        <!--     href="http://www.miuegypt.edu.eg/" -->
        <!--     aria-label="Misr International University" -->
        <!--   > -->
        <!--     MIU, Egypt -->
        <!--   </TextLink>. -->
        <!-- </p> -->
      </div>
    </div>
  </MainSection>
  <MainSection id="experience" title="My Experience">
    {#snippet icon()}
      <span class="section-icon mdi--clipboard-outline"></span>
    {/snippet}
    <div class="experience">
      {#each data.experience as i}
        <Experience {...i} />
      {/each}
    </div>
  </MainSection>
  <MainSection id="work" title="Things I've Built">
    {#snippet icon()}
      <span class="section-icon material-symbols--code-rounded"></span>
    {/snippet}
    <div class="projects">
      {#each data.projects as project}
        <Project class="project" {project} />
      {/each}
    </div>
  </MainSection>
  <section id="contact" class="contact">
    <strong>Want to get in touch?</strong>
    <p>Feel free to send me a message about anything.</p>
    <a class="button-link" href={contacts.email.link} aria-label="Email me"
      >Mail Me</a
    >
  </section>
</main>

<style>
  main {
    max-width: 720px;
  }

  section {
    width: 100%;
    margin-bottom: 4rem;
  }

  .intro {
    width: 100%;
  }
  .me {
    display: flex;
    gap: 1rem;
  }
  .me img {
    border-radius: 12px;
    min-width: 280px;
    width: 70%;
    height: 70%;
    object-fit: contain;
  }
  .greeting {
    color: var(--accent);
    font-family: var(--code-font);
  }
  .section-icon {
    width: 32px;
    height: 32px;
    margin-right: 0.8rem;
    color: var(--accent);
  }
  .my-name {
    display: block;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    max-width: fit-content;
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.25;
    color: var(--primary);
  }

  .projects {
    width: 100%;
  }
  .projects :global(.project) {
    margin-bottom: 3rem;
  }

  .contact {
    text-align: center;
  }
  .about-me {
    color: var(--primary-text);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }

  @media only screen and (max-width: 720px) {
    .about-me {
      flex-direction: column;
      place-items: center;
    }
    .me {
      flex-direction: column;
    }
  }

  .content {
    margin: 0 2rem 0 0rem;
  }

  .experience {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
</style>
