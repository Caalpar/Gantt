<script>
  import { onMount } from "svelte";
  import Procentaje2 from "./Porcentaje2.svelte";
  import {ubicacionWeek} from "../../store/Calendari"

  let startDate;
  let daysOfWeek = ["LU", "MA", "MI", "JU", "VI", "SA", "DO"];
  let weeks = [];
  let displayWeek = 1

  let column=0
  let row=0

  function setID() {
    column++
    row++
    
    return{column, row}
  }

  onMount(() => {
    // Asegúrate de que startDate sea un lunes
    startDate = new Date();
    startDate.setDate(startDate.getDate() - startDate.getDay() + 1);
    startDate.setDate(startDate.getDate() + $ubicacionWeek * 7)
    generateWeeks();
  });

  function generateWeeks() {
    weeks = [];
    for (let i = 0; i < 4; i++) {
      const weekStartDate = new Date(startDate);
      weekStartDate.setDate(startDate.getDate() + ( i + displayWeek - 1  )  * 7);
      const week = {
        startDate: weekStartDate,
        days: []
      };

      for (let j = 0; j < 7; j++) {
        const day = new Date(weekStartDate);
        day.setDate(weekStartDate.getDate() + j);
        week.days.push(day);
      }

      weeks.push(week);
    }
  }

  let array=[]
    for (let index = 0; index < 56; index++) {
        array.push(index)
        
    }
    
    let array2=[]
    for (let index = 0; index < 9; index++) {
        array2.push(index)}
</script>

<div class="grid-weekend">
  {#each weeks as { days, startDate }, indexWeek}
    {#if indexWeek==0}
      <div class="grid-day ">
      {#each daysOfWeek as day, indexDay (day)}
    {#if indexDay==0}
    <div class="border-right border-left">{day}</div>
    {:else}
    <div class="border-right">{day}</div>
    {/if}

    {/each}
    {#each days as day, indexDay2 (day)}
      {#if indexDay2==0}
          <div class="border-right border-left">{day.getDate()}</div>
      {:else}
          <div class="border-right">{day.getDate()}</div>
      {/if}
    {/each}
  
      {#each array2 as item, index}
        {#each array as item, index2}
          {#if index2==0||index2%7==0}
            <Procentaje2 setIDS={setID} indexDay={index2} indexNum={ indexWeek} borderLeft={true}/>
          {:else}
            <Procentaje2 setIDS={setID} indexDay={index2} indexNum={ indexWeek}/>
          {/if}
        {/each}
      {/each}
  
  </div>

  {:else}
  <div class="grid-day ">
    {#each daysOfWeek as day, indexDay (day)}

            <div class="border-right">{day}</div>
    {/each}
    {#each days as day (day)}
          <div class="border-right">{day.getDate()}</div>
    {/each}
  
      {#each array2 as item, index}
      {#each array as item, index2}
      <Procentaje2 setIDS={setID} indexDay={index2} indexNum={ indexWeek}/>
      {/each}
       {/each}
  
  </div>
  {/if}
  
  {/each}
</div>

<style>
  /* Estilos para el contenedor de la tabla */
  /* div {
    display: grid;
    grid-template-columns: repeat(4, 12.5vw); Puedes ajustar el número de columnas según tus necesidades
    gap: 2px; Espacio entre las semanas
  } */

  /* Estilos para la tabla */
  /* table {
    width: 100%;
  }

  th, td {
    border: 1px solid #000000;
    text-align: center;
  } */
  .grid-day{
    display: grid;
    grid-template-columns: repeat(7, 14.28%);
    line-height: 35px;
    text-align: center;
  }

  .grid-day:nth-child(6n){
    border-left: solid black 1px;
    
 }

  .grid-weekend{
    display: grid;
    grid-template-columns: repeat(4,25%);
  }
  .border-right{
    border-right:1px rgba(0, 0, 0, 0.10) solid;   
}
  .border-left{
    border-left: 1px rgba(0, 0, 0, 0.10) solid;
  }
</style> 