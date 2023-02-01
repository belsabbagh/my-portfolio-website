<script lang="ts">
  export let href: string;

  const scroll = () => {
    const element = document.getElementById(href.slice(1));
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
</script>

<a {href} class="item" on:click={scroll}><slot /></a>

<style>
  a {
    transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
    padding: 0.75rem;
  }
  /* Style 2: */
  /* On Hover: Top and left border of after element and right, bottom borders of before element is */
  /* incresed from 0 to 10px */

  .item:after,
  .item:before {
    content: '';
    position: absolute;
    display: block;
    border: 0px solid transparent;
    width: 0%;
    height: 0%;
    transition: all 0.3s ease;
  }

  .item:after {
    width: 0%;
    height: 0%;
    top: 0;
    left: 0;
    border-top: 2px solid transparent;
    border-left: 2px solid transparent;
  }

  .item:before {
    width: 0%;
    height: 0%;
    right: 0;
    bottom: 0;
    border-bottom: 2px solid transparent;
    border-right: 2px solid transparent;
  }

  .item:hover::before,
  .item:hover::after {
    width: 10px;
    height: 10px;
    border-color: var(--accent);
  }
</style>
