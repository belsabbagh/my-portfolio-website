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
	{
		company: "Elnady Engineering",
		position: "Junior Full Stack Developer",
		startDate: "Sep 2024",
		endDate: "Feb 2025",
		details: `Worked on Octopi, an all-in-one solution for managing educational institutes. Implemented a QR code based attendance system aimed to be resistant to fraudulent entries by students. Containerized the back-end and front-end, which was not implemented before. Developed test containers for end-to-end testing and added unit testing to some core functionality.`,
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
      </div>
    </div>
  </section>
  <MainSection id="about" title="About Me">
    {#snippet icon()}
        <div class="section-icon" ><MdTagFaces /></div>
      {/snippet}
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
    {#snippet icon()}
        <div class="section-icon" ><MdContentPaste /></div>
      {/snippet}
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
    {#snippet icon()}
        <div class="section-icon" ><MdCode /></div>
      {/snippet}
    <div class="projects">
      {#each projects as project}
        <Project class="project" {project} />
      {/each}
    </div>
  </MainSection>
  <section id="contact" class="contact">
    <strong>Want to get in touch?</strong>
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
