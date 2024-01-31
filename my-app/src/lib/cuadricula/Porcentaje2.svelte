<script>
    import { onMount } from "svelte";
    export let borderLeft=false
    let borderLeftStyle=""
    if (borderLeft) {
        borderLeftStyle="border-left"  
    } 

    let numColumn
    let numRow  
    export let setIDS

    onMount(() => {
    let ID=setID()
    numRow=ID.row
    numColumn=ID.column
  })
</script>
<div class="border-right {borderLeftStyle}">{numRow+":"+numColumn}</div>
<!-- <div class="border-right {borderLeftStyle}">‎</div> -->

<style>
      .border-right{
    border-right:1px rgba(0, 0, 0, 0.10) solid;   
}
  .border-left{
    border-left: 1px rgba(0, 0, 0, 0.10) solid;
  }
</style>