<script lang="ts">
    export let href: string;
    export let target: string = '_self';
    export let rel: string = '';
</script>

<a target={target} rel={rel} class="text-link" href={href}><slot/></a>.

<style>
a {
  display: inline-block;
  position: relative;
}

a::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--accent);
  transform-origin: bottom right;
  transition: transform 0.2s ease-out;
}

a:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>

