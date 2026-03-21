<script>
  // Destructure the properties you expect from $props()
  let { href, children } = $props();
</script>

<a {href}>
  {@render children()}
</a>

<style>
  a {
    transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  a:after,
  a:before {
    content: '';
    position: absolute;
    display: block;
    border: 0px solid transparent;
    width: 0%;
    height: 0%;
    transition: all 0.3s ease;
  }

  a:after {
    width: 0%;
    height: 0%;
    top: 0;
    left: 0;
    border-top: 2px solid transparent;
    border-left: 2px solid transparent;
  }

  a:before {
    width: 0%;
    height: 0%;
    right: 0;
    bottom: 0;
    border-bottom: 2px solid transparent;
    border-right: 2px solid transparent;
  }

  a:hover::before,
  a:hover::after {
    width: 10px;
    height: 10px;
    border-color: var(--accent);
  }
</style>
