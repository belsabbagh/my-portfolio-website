<script>
  const { ...props } = $props();

  /** @type {boolean} Tracks the hover state. */
  let isHovered = $state(false);

  /** @type {boolean} Controls whether the element is in the DOM (removed after animation). */
  let isVisible = $state(false);

  let timeout;
  const ANIMATION_DURATION = 500; // 0.5 seconds in milliseconds

  function handleMouseEnter() {
    clearTimeout(timeout); // Clear any pending hide operation
    isHovered = true;
    isVisible = true; // Make sure it's in the DOM to start the 'in' animation
  }

  function handleMouseLeave() {
    isHovered = false;
    // Start the timer to remove the bubble *after* the animation finishes.
    // We leave isVisible = true for now so the 'out' animation runs.
    timeout = setTimeout(() => {
      isVisible = false;
    }, ANIMATION_DURATION);
  }
</script>

<li
  class="list-item"
  onmouseenter={handleMouseEnter}
  onmouseleave={handleMouseLeave}
>
  {@render props.children?.()}

  {#if isVisible}
    <div class="thinking-bubble" aria-hidden="true" class:out={!isHovered}>
      <span class="thought">{props.content}</span>
    </div>
  {/if}
</li>

<style>
  /* * Base List Item Styling 
     */
  .list-item {
    position: relative; /* Crucial for positioning the absolute bubble */
    list-style: none;
    padding: 0.5rem 1rem;
    margin-bottom: 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1rem; /* Space between text and bubble position */
  }

  .list-item:hover {
    color: var(--accent);
  }

  /* * Thinking Bubble Styling 
     */
  /* * Thinking Bubble Styling * */
  .thinking-bubble {
    position: absolute;
    bottom: 100%;
    left: 0%;
    line-height: 0.75rem;
    background-color: var(--accent);
    color: var(--primary-dark);
    padding: 1rem;
    border-radius: 12px;
    min-width: 200px;
    box-shadow: -4px 6px 2px var(--shadow-dark);

    /* Default: FLOAT IN */
    animation: floatInFade 0.2s ease-out forwards;
  }

  /* --- FLOAT OUT Animation (When Svelte adds the 'out' class) --- */
  .thinking-bubble.out {
    /* Override the initial 'in' animation with the 'out' animation */
    animation: floatOutFade 0.2s ease-in forwards;
  }

  /* --- Keyframes for Float IN --- */
  @keyframes floatInFade {
    from {
      opacity: 0;
      transform: translate(-10px, 10px);
    }
    to {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  /* --- Keyframes for Float OUT --- */
  @keyframes floatOutFade {
    from {
      opacity: 1;
      transform: translate(0, 0);
    }
    to {
      opacity: 0;
      transform: translate(-10px, 10px);
    }
  }
  .thought {
    font-family: 'Inter', sans-serif;
    line-height: 1rem;
    font-size: 12px;
  }

  /* * Keyframe Animations 
     */

  /* Animation for the bubble to appear */
  @keyframes pop-in {
    to {
      opacity: 1;
      transform: translateY(-50%) scale(1);
    }
  }

  /* Animation for the dots inside the bubble */
  @keyframes pulse-dots {
    0%,
    100% {
      opacity: 1;
      text-shadow: 0 0 0 rgba(255, 255, 255, 0.8);
    }
    50% {
      opacity: 0.7;
      text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
    }
  }

  @media only screen and (max-width: 720px) {
    .thinking-bubble {
      left: -75%;

      min-width: 150px;
    }
  }
</style>
