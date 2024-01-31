<script>
    import Semana from "./Semana.svelte";

    let array=[    ]
    for (let index = 0; index < 56; index++) {
        array.push(index)
        
    }
    
    let array2=[]
    for (let index = 0; index < 9; index++) {
        array2.push(index)}
 
</script>
<div>
    
        <Semana/>
   
    <!-- <div class="grid-cuadricula">
        {#each array2 as item}
        {#each array as item}
             <div class="border-right ancho-progreso"></div>
        {/each}
         {/each}
    </div> -->
</div>

<style>
    /* .grid-container{
    display: grid;
    grid-template-columns: 20% 20% 20% 20%;
    color: black;
    font-size: 16px;
    font-family: Barlow;
    font-weight: 400;
    word-wrap: break-word
  } */

  .grid-cuadricula{
    display: grid;
    grid-template-columns: repeat(56, auto);
  }

  .border-right{
    border-right:1px rgba(0, 0, 0, 0.10) solid;
    
}

.ancho-progreso{
    width: 10px;
    
}
</style>

<!-- markup (zero or more items) goes here -->