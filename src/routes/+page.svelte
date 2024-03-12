<script>
  import MdTagFaces from "svelte-icons/md/MdTagFaces.svelte";
  import MdContentPaste from "svelte-icons/md/MdContentPaste.svelte";
  import MdCode from "svelte-icons/md/MdCode.svelte";
  import MainSection from "../layouts/MainSection.svelte";
  import TextLink from "../components/TextLink.svelte";
  import projects from "../config/projects";
  import contacts from "../config/contacts";
  import Project from "../components/Project.svelte";
  import HomePage from "../layouts/HomePage.svelte";
  import { writable } from "svelte/store";

  const birthday = new Date(2002, 11, 26, 20, 0, 0, 0);
  function formatDurationSince(date) {
    const now = new Date();
    const duration = now - date;

    // Calculating years
    const years = Math.floor(duration / (1000 * 60 * 60 * 24 * 365.25));
    const remaining1 = duration % (1000 * 60 * 60 * 24 * 365.25);

    // Calculating months
    const months = Math.floor(remaining1 / (1000 * 60 * 60 * 24 * 30.4375));
    const remaining2 = remaining1 % (1000 * 60 * 60 * 24 * 30.4375);

    // Calculating days
    const days = Math.floor(remaining2 / (1000 * 60 * 60 * 24));
    const remaining3 = remaining2 % (1000 * 60 * 60 * 24);

    // Calculating hours
    const hours = Math.floor(remaining3 / (1000 * 60 * 60));
    const remaining4 = remaining3 % (1000 * 60 * 60);

    // Calculating minutes
    const minutes = Math.floor(remaining4 / (1000 * 60));
    const remaining5 = remaining4 % (1000 * 60);

    // Calculating seconds
    const seconds = Math.floor(remaining5 / 1000);

    // Building the string
    let result = "";
    if (years > 0) result += years + (years === 1 ? " year" : " years");
    if (months > 0)
      result +=
        (result ? ", " : "") + months + (months === 1 ? " month" : " months");
    if (days > 0)
      result += (result ? ", " : "") + days + (days === 1 ? " day" : " days");
    if (hours > 0)
      result +=
        (result ? ", " : "") + hours + (hours === 1 ? " hour" : " hours");
    if (minutes > 0)
      result +=
        (result ? ", " : "") +
        minutes +
        (minutes === 1 ? " minute" : " minutes");
    if (seconds > 0)
      result +=
        (result ? ", " : "") +
        seconds +
        (seconds === 1 ? " second" : " seconds");

    return result;
  }
  let age = writable(formatDurationSince(birthday));
  setInterval(() => {
    age.set(formatDurationSince(birthday));
  }, 1000);
  let experience = [
    {
      company: "VOYANCE Medical",
      href: "https://voyancemedical.com/",
      position: "Backend Development Intern",
      startDate: "August 2022",
      endDate: "October 2022",
      details:
        "I Worked on developing an e-commerce API to implement authentication, authorization, request validation, error handling, and database aggregations using Express.js running on Node.js and MongoDB.",
    },
    {
      company: "Glasgow Caledonian University",
      position: "Research Assistant",
      startDate: "June 2023",
      endDate: "August 2023",
      details:
        "I worked on my own research project to estimate the state of health of Lithium-ion batteries using deep learning and time-series analysis. I've also contributed to the the research of M.Sc. and Ph.D. students on computer vision and natural language processing research.",
    },
  ];
</script>

<HomePage>
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
        <p>I'm exactly <strong id="age">{$age}</strong> old.</p>
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
      {#each experience as { company, position, startDate, endDate, details }}
        <div class="experience-item">
          <div class="experience-item-title">
            <h3 class="experience-position">{position}</h3>
            @<span>{company}</span>
          </div>
          <p>{startDate} - {endDate}</p>
        </div>
        <p>
          {details}
        </p>
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
</HomePage>

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
    gap: 1rem;
    width: 100%;
  }

  .experience-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
  }

  .experience-item-title {
    margin-right: 1rem;
  }

  .experience-position {
    /* make it so that other things can be in the same line */
    display: inline;
  }

</style>
