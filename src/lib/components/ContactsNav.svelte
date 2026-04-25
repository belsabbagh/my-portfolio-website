<script>
  import * as contacts from '$lib/config/contacts';
</script>

<div>
  <a
    class="contact-icon"
    href={contacts.github.link}
    aria-label={contacts.github.name}
    ><span class="mdi--github icon"></span>
  </a>
  <a
    class="contact-icon"
    href={contacts.linkedin.link}
    aria-label={contacts.linkedin.name}
  >
    <span class="mdi--linkedin icon"></span>
  </a>
</div>

<style>
  .icon {
    width: 36px;
    height: 36px;
  }

  .contact-icon {
    position: relative;
    top: 0;
    transition:
      top 0.1s ease-in-out,
      color 0.1s ease-in-out;
    color: var(--primary);
  }
  .contact-icon:hover {
    top: -6px;
    color: var(--accent);
  }

  div {
    position: sticky;
    display: flex;
    flex-direction: column;
    place-items: center;
    margin: 3px;
    width: 100%;
    height: 100%;
    max-height: fit-content;
  }
  div :global(.contact-icon) {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.5rem;
  }

  @media only screen and (max-width: 720px) {
    div {
      display: none;
    }
  }
</style>
