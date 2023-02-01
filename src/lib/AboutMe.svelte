<script lang="ts">
  import SkillSet from '@/lib/Skills/Skills.svelte';
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
  <div class="pfp">
    <img width={pfpSize.width} height={pfpSize.height} src={pfp} alt="pfp" />
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
  .content {
    margin: 0 2rem 0 0rem;
  }

  img {
    border-radius: 2.5%;
  }
  p {
    margin-top: 0;
    line-height: 140%;
  }
</style>
