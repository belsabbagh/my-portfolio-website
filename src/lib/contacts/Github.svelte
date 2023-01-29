<script lang="ts">
  import GithubDetails from './GithubDetails.svelte';

  import Contact from '@/lib/Contact.svelte';
  import contacts from '@/config/contacts';
  import Icon from '@/lib/Icon.svelte';
  import ContactHeader from '@/lib/ContactHeader.svelte';

  export let detailed: Boolean = false;

  const detailsStyle = detailed ? 'padding: 1rem;' : '';
</script>

<Contact href={contacts.github.link}>
  <ContactHeader slot="header">
    <Icon svg={contacts.github.svg} size={'64px'} slot="icon" />
    <h2 slot="name">{contacts.github.name}</h2>
  </ContactHeader>
  <GithubDetails slot="content" {detailed} repositoryCount={contacts.github.repositoryCount}/>
</Contact>

<style>
</style>
