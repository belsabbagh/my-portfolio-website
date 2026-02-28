<script>
  import MdTagFaces from 'svelte-icons/md/MdTagFaces.svelte';
  import MdContentPaste from 'svelte-icons/md/MdContentPaste.svelte';
  import MdCode from 'svelte-icons/md/MdCode.svelte';
  import MainSection from '../layouts/MainSection.svelte';
  import TextLink from '../components/TextLink.svelte';
  import projects from '../config/projects';
  import contacts from '../config/contacts';
  import Project from '../components/Project.svelte';
  import Experience from '../components/Experience.svelte';

  let experience = [
    {
      company: 'VOYANCE Medical',
      href: 'https://voyancemedical.com/',
      position: 'Backend Development Intern',
      startDate: 'August 2022',
      endDate: 'October 2022',
      details:
        'I Worked on developing an e-commerce API to implement authentication, authorization, request validation, error handling, and database aggregations using Express.js running on Node.js and MongoDB.',
    },
    {
      company: 'Glasgow Caledonian University',
      position: 'Research Assistant',
      startDate: 'June 2023',
      endDate: 'August 2023',
      details:
        "I worked on my own research project to estimate the state of health of Lithium-ion batteries using deep learning and time-series analysis. I've also contributed to the the research of M.Sc. and Ph.D. students on computer vision and natural language processing research.",
    },
    {
      company: 'Elnady Engineering',
      position: 'Junior Full Stack Developer',
      startDate: 'Sep 2024',
      endDate: 'Feb 2025',
      details: `Worked on Octopi, an all-in-one solution for managing educational institutes. Implemented a QR code based attendance system aimed to be resistant to fraudulent entries by students. Containerized the back-end and front-end, which was not implemented before. Developed test containers for end-to-end testing and added unit testing to some core functionality.`,
    },
  ];
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


<HomePage>
  <section>
    <div class="intro">
      <span class="greeting">Nice to meet you. My name is</span>
      <span class="my-name">Belal Elsabbagh</span>
      <div class="description">
        <p>
          I'm a software developer who loves to build digital solutions for
          real-world problems. I'm currently studying for my bachelor's degree
          in computer science at
          <TextLink
            target="_blank"
            rel="noreferrer noopener"
            href="http://www.miuegypt.edu.eg/"
            aria-label="Misr International University"
          >
            MIU, Egypt
          </TextLink>.
        </p>
      </div>
    </div>
  </div>
</section>
<MainSection id="about" title="About Me">
  {#snippet icon()}
    <div class="section-icon"><MdTagFaces /></div>
  {/snippet}
  <div class="about-me">
    <div class="content">
      <p>
        Hello! My name is Belal and I love building software. Ever since I
        started studying for my bachelor's degree in computer science, I've
        found great beauty in A.I and software engineering.
      </p>
    </div>
  </div>
</MainSection>
<MainSection id="experience" title="My Experience">
  {#snippet icon()}
    <div class="section-icon"><MdContentPaste /></div>
  {/snippet}
  <div class="experience">
    {#each experience as i}
      <Experience {...i} />
    {/each}
  </div>
</MainSection>
<MainSection id="work" title="Things I've Built">
  {#snippet icon()}
    <div class="section-icon"><MdCode /></div>
  {/snippet}
  <div class="projects">
    {#each projects as project}
      <Project class="project" {project} />
    {/each}
  </div>
  <TextLink href="/technologies" aria-label="Technologies"
    >Check out all the technologies I've worked with!</TextLink
  >
</MainSection>
<section id="contact" class="contact">
  <strong>Want to get in touch?</strong>
  <p>Feel free to send me a message about anything.</p>
  <a class="button-link" href={contacts.email.link} aria-label="Email me"
    >Mail Me</a
  >
</section>

<style>
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
