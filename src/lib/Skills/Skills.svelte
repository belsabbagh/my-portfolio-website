<script lang="ts">
  import SkillSetCard from './SkillsCard.svelte';
  import technologies from '@/config/technologies';
</script>

<div class="skillset">
  {#each technologies as tech}
    <SkillSetCard title={tech.title} items={tech.technologies} />
  {/each}
</div>

<style>
  .skillset {
    font-family: 'Fira Code', monospace;
    font-size: 0.75rem;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    flex-direction: row;
  }
</style>
