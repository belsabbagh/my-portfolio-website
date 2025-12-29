<script>
import contacts from "../config/contacts";
import FaGithub from "svelte-icons/fa/FaGithub.svelte";
import FaLinkedin from "svelte-icons/fa/FaLinkedin.svelte";
import IconLink from "../components/IconLink.svelte";
</script>

<div>
  <IconLink class="icon" href={contacts.github.link} aria-label={contacts.github.name}><FaGithub /></IconLink>
    <IconLink class="icon" href={contacts.linkedin.link} aria-label={contacts.github.name}><FaLinkedin /></IconLink>
</div>

<style>
  div {
    position:sticky;
    display: flex;
    flex-direction: column;
    place-items: center;
    margin: 3px;
    width: 100%;
    height: 100%;
    max-height: fit-content;
  }
  div :global(.icon) {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.5rem;
  }

  @media only screen and (max-width: 720px) {
    div {
      display:none;
    }
  }
</style>
