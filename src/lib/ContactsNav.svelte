<script lang="ts">
  import contacts from '@/config/contacts';
  import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
  import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
  import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
  import IconLink from '@/components/IconLink.svelte';
</script>

<div class="contacts">
  <IconLink class="icon" href={contacts.github.link}><FaGithub /></IconLink>
  <IconLink class="icon" href={contacts.linkedin.link}><FaLinkedin /></IconLink>
  <IconLink class="icon" href={contacts.email.link}><FaEnvelope /></IconLink>
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
  .contacts :global(.icon) {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.5rem;
  }
</style>
