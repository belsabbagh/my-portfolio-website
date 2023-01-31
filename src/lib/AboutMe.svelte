<script lang="ts">
  import SkillSet from '@/lib/Skills/Skills.svelte';
  import pfp from '@/assets/pfp.png';
  const pfpSize = { width: 300, height: 300 };
</script>

<div class="about-me">
  <div>
    <p>
      I am a computer science student with a passion for building scalable and
      maintainable software.
    </p>
    <SkillSet />
  </div>
  <div class="pfp">
    <img width={pfpSize.width} height={pfpSize.height} src={pfp} alt="pfp" />
  </div>
</div>

<style>
  .about-me {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    margin-right: 1rem;
  }
  p {
    margin-top: 0;
  }
</style>
