<script lang="ts">
  import contacts from '@/config/contacts';
  import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
  import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
  import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
</script>

<div class="contacts">
  <a class={'icon'} href={contacts.github.link}><FaGithub /></a>
  <a class={'icon'} href={contacts.linkedin.link}><FaLinkedin /></a>
  <a class={'icon'} href={contacts.email.link}><FaEnvelope /></a>
</div>

<style>
  .contacts {
    display: flex;
    flex-direction: column;
    place-items: center;
    margin: 3px;
    width: 100%;
    height: 100%;
    max-height: fit-content;
  }
  .contacts > * {
    margin: 0.5rem;
  }
  .icon {
    position: relative;
    width: 2rem;
    height: 2rem;
    top: 0;
    transition: top 0.1s ease-in-out, color 0.1s ease-in-out;
  }
  .icon:hover {
    top: -6px;
    color: #a0acf2;
  }
</style>
