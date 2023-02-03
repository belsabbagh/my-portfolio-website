<script lang="ts">
  import SkillSet from '@/lib/Skills/Skills.svelte';
  import FaUser from 'svelte-icons/fa/FaUser.svelte'
  import pfp from '@/assets/pfp.png';
  const pfpSize = { width: 300, height: 300 };
</script>

<div class="about-me">
  <div class="content">
    <p>
      I am a computer science student with a passion for building scalable and
      maintainable software. Ever since I started programming, I have found
      great pleasure in designing and building high quality software. I've
      learnt that no matter what type of technology one may come across, there
      will always be amazing ways to get the most out of them.
    </p>
    <SkillSet />
  </div>
  <div class="my-photo">
    <div class="me">
      <FaUser/>
    </div>
    <div class="overlay">
      <img class="pfp" width={pfpSize.width} height={pfpSize.height} src={pfp} alt="pfp" />
    </div>
  </div>

</div>

<style>
  .about-me {
    color: var(--primary-text);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
  .my-photo {
    position: relative;
    width: 100%;
  }
  .content {
    margin: 0 2rem 0 0rem;
  }

  img {
    border-radius: 2.5%;
    position: relative;
  }
  p {
    margin-top: 0;
    line-height: 140%;
  }
  .me {
    display: flex;
    place-items: center;
    padding: 1rem;
    width: 250px;
    height: 250px;
    color: var(--primary-text);
    font-size: 5rem;
  }

  .overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  border-radius: 2.5%;
  max-width: fit-content;
  max-height: fit-content;
  opacity: 0;
  transition: all .3s ease;
  background-color: transparent;
}

.my-photo:hover .overlay {
  opacity: 1;
}

/* The icon inside the overlay is positioned in the middle vertically and horizontally */
</style>
