<script>
  import * as contacts from '../config/contacts';
</script>

<div>
  <a class="icon" href={contacts.github.link} aria-label={contacts.github.name}
    ><span class="mdi--github"></span>
  </a>
  <a
    class="icon"
    href={contacts.linkedin.link}
    aria-label={contacts.linkedin.name}
  >
    <span class="mdi--linkedin"></span>
  </a>
</div>

<style>
  a {
    position: relative;
    top: 0;
    transition:
      top 0.1s ease-in-out,
      color 0.1s ease-in-out;
    color: var(--primary);
  }
  a:hover {
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
  div :global(.icon) {
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
