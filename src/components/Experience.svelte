<script>
	let { 
		position = "Position Title", 
		company = "Company Name", 
		startDate, 
		endDate, 
		details 
	} = $props();
</script>
<div class="experience-item">
            <div class="experience-item-title">
            <h3 class="experience-position">{position}</h3>
            @<span>{company}</span>
          </div>
            <p>{startDate} - {endDate}</p>
          </div>
        <p>
            {details}
          </p>
 
<style>
 .experience-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
  }

  .experience-item-title {
    margin-right: 1rem;
  }

  .experience-position {
    display: inline;
  }
</style>

