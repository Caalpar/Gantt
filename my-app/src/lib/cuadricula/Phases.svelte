<script>
    
    let Fases=[{
        name:"Inicio",
        tareas:[{
            name:"Ideas",
            encargado:"Darwin",
            progreso: 0,
            inicio:0,
            fin:0      
        },

        {
            name:"Ideas2",
            encargado:"Darwin2",
            progreso: 0,
            inicio:0,
            fin:0      
        },

        {
            name:"Ideas3",
            encargado:"Darwin3",
            progreso: 0,
            inicio:0,
            fin:0      
        }]
    },
    
    {
        name:"Fin",
        tareas:[{
            name:"Ideas",
            encargado:"Darwin",
            progreso: 0,
            inicio:0,
            fin:0      
        },

        {
            name:"Ideas2",
            encargado:"Darwin2",
            progreso: 0,
            inicio:0,
            fin:0      
        },

        {
            name:"Ideas3",
            encargado:"Darwin3",
            progreso: 0,
            inicio:0,
            fin:0      
        }]
    }]
</script>
<div>
<div class="grid-container">
    <div class="">TAREA</div>
    <div class="">ENCARGADO</div>
    <div class="">PROGRESO</div>
    <div class="">INICIO</div>
    <div class="">FIN</div>
</div>
<div class="grid-container">
    {#each Fases as fase}
         <div class="title-phase">{fase.name}</div>
         {#each fase.tareas as tarea}
         <div class="task">{tarea.name}</div>
         <div>{tarea.encargado}</div>
         <div>{tarea.progreso}</div>
         <div>{tarea.inicio}</div>
         <div>{tarea.fin}</div>
         {/each}
    {/each}
</div>
</div>

<style>
  .grid-container{
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    color: rgb(91, 88, 88);
    font-size: 16px;
    font-family: Barlow;
    font-weight: 400;
    line-height:35px;
     word-wrap: break-word
  }

 
  .title-phase{
    grid-column: 1/6;
    color: black;
    font-size: 16px;
    font-family: Barlow;
    font-weight: 400;
    word-wrap: break-word
  }

  .task{
    color: rgba(0, 69.91, 249.69, 0.80);
    font-size: 14px;
    font-family: "barlow-regular";
    font-weight: 400;
    word-wrap: break-word
  }


</style>

<!-- markup (zero or more items) goes here -->