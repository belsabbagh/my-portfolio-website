<script>
  import { secondsToTime } from '$lib/cryptogram/text';
  import { time } from '$lib/cryptogram/time';
</script>

<div id="stopwatch">{secondsToTime($time)}</div>

<style>
  div {
    display: inline-block;
    vertical-align: top;
    color: rgba(255, 255, 255, 0.35);
    padding: 0;
    font-size: x-large;
  }
</style>
