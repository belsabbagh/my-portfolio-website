<script>
  import MdTagFaces from "svelte-icons/md/MdTagFaces.svelte";
  import MdContentPaste from "svelte-icons/md/MdContentPaste.svelte";
  import MdCode from "svelte-icons/md/MdCode.svelte";
  import Main from "../layouts/Main.svelte";
  import MainSection from "../layouts/MainSection.svelte";
  import TextLink from "../components/TextLink.svelte";
  import projects from "../config/projects";
  import contacts from "../config/contacts";
  import Project from "../components/Project.svelte";
  let experience = [
    {
      company: "VOYANCE Medical",
      href: "https://voyancemedical.com/",
      position: "Backend Intern",
      startDate: "August 2022",
      endDate: "October 2022",
    },
  ];
</script>

<Main>
  <section>
    <div class="intro">
      <code class="greeting">Nice to meet you. My name is</code>
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
          >
            MIU, Egypt
          </TextLink>.
        </p>
      </div>
    </div>
  </section>
  <MainSection id="about" title="About Me">
    <div class="section-icon" slot="icon"><MdTagFaces /></div>
    <div class="about-me">
      <div class="content">
        <p>
          Hello! My name is Belal and I love building software. Ever since I
          started studying for my bachelor's degree in computer science, I've
          found great beauty in A.I and software engineering.
        </p>
        <TextLink href="/technologies"
          >Check out all the technologies I've worked with!</TextLink
        >
      </div>
    </div>
  </MainSection>
  <MainSection id="experience" title="My Experience">
    <div class="section-icon" slot="icon"><MdContentPaste /></div>
    <div class="experience">
      {#each experience as { company, position, startDate, endDate }}
        <div class="experience-item">
          <div class="experience-item-title">
            <h3>{company}</h3>
            <p>{position}</p>
          </div>
          <p>{startDate} - {endDate}</p>
        </div>
      {/each}
    </div>
  </MainSection>
  <MainSection id="work" title="Things I've Built">
    <div class="section-icon" slot="icon"><MdCode /></div>
    <div class="projects">
      {#each projects as project}
        <Project class="project" {project} />
      {/each}
    </div>
  </MainSection>
  <section id="contact" class="contact">
    <h1>Want to get in touch?</h1>
    <p>Feel free to send me a message about anything.</p>
    <a class="button-link" href={contacts.email.link}>Mail Me</a>
  </section>
</Main>

<style>
  .section-icon {
    width: 32px;
    height: 32px;
    margin-right: 0.8rem;
    color: var(--accent);
  }
  .my-name {
    display: block;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    max-width: fit-content;
    font-size: 5rem;
    font-weight: 700;
    line-height: 1.5;
    color: var(--primary);
  }

  @media only screen and (max-width: 720px) {
    .my-name {
      font-size: 4rem;
    }
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
    width: 100%;
  }

  .experience-item {
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
  }

  .experience-item-title {
    margin-right: 1rem;
  }

</style>
