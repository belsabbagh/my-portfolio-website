<script lang="ts">
    export let svg: string;
    export let size: string = "80px";
</script>
<div>
    <img src={svg} alt="icon" width={size} height={size}/>
</div>