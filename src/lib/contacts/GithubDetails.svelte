<script lang="ts">
  import contacts from '@/config/contacts';

  export let detailed: Boolean = false;
  export let repositoryCount: Number;
  const detailsStyle = detailed ? 'padding: 1rem;' : '';
</script>

<div style={detailsStyle}>
  {#if detailed}
    <div style="font-size: 64px; padding: 1rem">
      {repositoryCount}
    </div>
    <strong>repositories</strong>
  {/if}
</div>

<style>
</style>
