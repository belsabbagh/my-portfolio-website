<script lang="ts">
  let experience: Array<{
    company: string;
    position: string;
    href: string;
    startDate: string;
    endDate: string;
  }> = [
    {
      company: 'VOYANCE Medical',
      href: 'https://voyancemedical.com/',
      position: 'Backend Intern',
      startDate: 'August 2022',
      endDate: 'October 2022'
    }
  ];
</script>

<div class="experience">
  {#each experience as { company, position, startDate, endDate }}
    <div class="experience-item">
      <div class="experience-item-title">
        <h3>{company}</h3>
        <p>{position}</p>
      </div>
      <p>{startDate} - {endDate}</p>
    </div>
  {/each}
</div>

<style>
  .experience {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .experience-item {
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
  }

  .experience-item-title {
    margin-right: 1rem;
  }
</style>
