<script lang="ts">
    import type { PageData,ActionData } from './$types';
    
    export let data: PageData;

    export let form: ActionData;
</script>
<div>data:{JSON.stringify(data)}</div>
<div>form:{JSON.stringify(form)}</div>