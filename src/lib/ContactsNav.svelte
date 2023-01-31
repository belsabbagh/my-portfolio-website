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
</style>
