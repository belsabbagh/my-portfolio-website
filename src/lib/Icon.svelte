<script lang="ts">
    export let svg: string;
    export let size: string = "80px";
    export let color: string = "white";
</script>
<img class={$$props.class} src={svg} alt="icon" width={size} height={size}/>
