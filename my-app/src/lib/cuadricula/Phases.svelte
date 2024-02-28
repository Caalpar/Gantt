<script>
    import Fase from "../../class/Fase";


    import {Phases} from "../../store/Phases"

    function agregarFase() {
      let filaNum=0
      for (let index = 0; index < $Phases.length; index++) {
        const fase = $Phases[index]; 

        filaNum+=7

        for (let index2 = 0; index2 < fase.tareas.length; index2++) {
          const tarea = fase.tareas[index2];
          
          filaNum+=7
          
        }
        
      }

      filaNum+=14
     let nuevaFase = {
        name:"Inicio",
        tareas:[{
        name:"NewTask",
        encargado:"Name",
        progreso: 0,
        inicio:new Date(),
        fin:new Date(),
        id:filaNum 
        }]
      }
      $Phases.push(nuevaFase)
      $Phases=$Phases
    }
  
    function agregarTareas(faseName) {
      let filaNum=0
      let indexFase=-1
      for (let index = 0; index < $Phases.length; index++) {
        const fase = $Phases[index]; 

        filaNum+=7

        for (let index2 = 0; index2 < fase.tareas.length; index2++) {
          const tarea = fase.tareas[index2];
          
          filaNum+=7
          
        }
        if (faseName==fase.name) {
          indexFase=index
          break
        }
      }

      filaNum+=7
      if (indexFase==-1) {
        return        
      }
      $Phases[indexFase].tareas.push(
        {
          name:"NewTask",
        encargado:"Name",
        progreso: 0,
        inicio:new Date(),
        fin:new Date(),
        id:filaNum 
      }
      )
      $Phases=$Phases
      
      
    }
    
    function eliminarFase(index) {
      $Phases.splice(index,1)
      $Phases=$Phases
      
    }
    
    function eliminarTarea(index2, fasename) {
      
      let indexFase2=-1
      
      // necesito saber en que fase esta la tarea que voy a eliminar
      for (let index = 0; index < $Phases.length; index++) {
        const fase = $Phases[index];
        
        if (fasename==fase.name) {
          indexFase2=index
          break
        }
        
      }
      
      // necesito saber que tarea voy a eliminar
      // una vez teniendo estos datos como elimino la tareae
      $Phases[indexFase2].tareas.splice(index2, 1)
      
      $Phases=$Phases
    }

    let indexTareaEdit=" "

    function editarTarea(indexFase , indexTarea , property, value) {
      indexTareaEdit=" "
      console.log(value)
      if (property == "inicio" ||property == "fin") {
        $Phases[indexFase].tareas[indexTarea][property]= new Date (value.target.value)
      } else {
        $Phases[indexFase].tareas[indexTarea][property]= value.target.value
      }

      
      $Phases = $Phases
    }

    function activarInputTarea(indexFase , indexTarea, indexInput) {
      indexTareaEdit= indexFase + "-" + indexTarea + "-" + indexInput

      $Phases=$Phases
    }

    let indexFaseEdit=-1
    
    function editarFase(index, value) {
      $Phases[index].name=value.target.value
      indexFaseEdit=-1
      // console.log(value)
      
      $Phases=$Phases
    }

    function activarInput(index) {
      indexFaseEdit=index
      $Phases=$Phases
    }


</script>
<div>
<div class="grid-container">
    <div class="">TAREA</div>
    <div class="">DELEGADO</div>
    <div class="">PROGRESO</div>
    <div class="">INICIO</div>
    <div class="">FIN</div>
    <div>‎ </div>
    <div>‎ </div>
    <div>‎ </div>
    <div>‎ </div>
    <div>‎ </div>
    <div>‎ </div>
    <div>‎ </div>
    <div>‎ </div>
    <div>‎ </div>
</div>
<div class="grid-container">
    {#each $Phases as fase, index}
          {#if index!=indexFaseEdit}
              <div on:click={()=>{activarInput(index)}} class="title-phase" >{fase.name}</div>
          {:else} 
           <input on:change={(e)=>{editarFase(index, e)}} class="title-phase" value={fase.name}/>
         {/if}
         {#if index==0}
         <button on:click={()=>{agregarFase()}}>Agregar F</button>
         <button on:click={()=>{eliminarFase(index)}}>Eliminar F</button>
         
         {:else}
         <div>‎ </div>
         <button on:click={()=>{eliminarFase(index)}}>Eliminar F</button>
         {/if}
         {#each fase.tareas as tarea, index2}
          {#if index +"-" + index2 + "-0" != indexTareaEdit }
              <div class="task" on:click={()=> {activarInputTarea(index , index2 , "0")}}>{tarea.name}</div>
          {:else}
              <input on:change={(e)=>{editarTarea(index, index2 , "name", e)}} class="task" value={tarea.name}>
          {/if}
          {#if index +"-" + index2 + "-1" != indexTareaEdit }
              <div on:click={()=> {activarInputTarea(index , index2 , "1")}}>{tarea.encargado}</div>
          {:else}
              <input on:change={(e)=>{editarTarea(index, index2 , "encargado", e)}} value={tarea.encargado}>
          {/if}
          {#if index +"-" + index2 + "-2" != indexTareaEdit }
              <div on:click={()=> {activarInputTarea(index , index2 , "2")}}>{tarea.progreso}</div>
          {:else}
              <input on:change={(e)=>{editarTarea(index, index2 , "progreso", e)}}  value={tarea.progreso}>
          {/if}
          {#if index +"-" + index2 + "-3" != indexTareaEdit }
              <div on:click={()=> {activarInputTarea(index , index2 , "3")}}>{tarea.inicio.toLocaleDateString()}</div>
          {:else}
              <input type="datetime-local" on:change={(e)=>{editarTarea(index, index2 , "inicio", e)}} value={tarea.inicio}>
          {/if}
          {#if index +"-" + index2 + "-4" != indexTareaEdit }
              <div on:click={()=> {activarInputTarea(index , index2 , "4")}}>{tarea.fin.toLocaleDateString()}</div>
          {:else}
              <input type="datetime-local" on:change={(e)=>{editarTarea(index, index2 , "fin", e)}} value={tarea.fin}>
          {/if}
         {#if fase.tareas.length-1==index2}
         <button on:click={()=>{agregarTareas(fase.name)}} >Agregar</button>
         <button on:click={()=>{eliminarTarea(index2, fase.name)}} >Eliminar</button>
         {:else}           
          <div>‎ </div>
           <button on:click={()=>{eliminarTarea(index2, fase.name)}} >Eliminar</button>
         {/if}
         {/each}
    {/each}
</div>
</div>

<style>
  .grid-container{
    display: grid;
    grid-template-columns: repeat(7,14.2%);
    color: rgb(91, 88, 88);
    font-size: 15px;
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

  [class*="porcentaje-"]{
    color:blue;
    text-align: center;
    background-color: var(--color-porcentaje);
    background-image: linear-gradient(90deg, gray 80%, white 20%);
  }
   
  .porcentaje-0{background-image: linear-gradient(90deg, var(--color-porcentaje) 0%, white 0%);}
  .porcentaje-1{background-image: linear-gradient(90deg, var(--color-porcentaje) 1%, white 0%);}
  .porcentaje-2{background-image: linear-gradient(90deg, var(--color-porcentaje) 2%, white 0%);}
  .porcentaje-3{background-image: linear-gradient(90deg, var(--color-porcentaje) 3%, white 0%);}
  .porcentaje-4{background-image: linear-gradient(90deg, var(--color-porcentaje) 4%, white 0%);}
  .porcentaje-5{background-image: linear-gradient(90deg, var(--color-porcentaje) 5%, white 0%);}
  .porcentaje-6{background-image: linear-gradient(90deg, var(--color-porcentaje) 6%, white 0%);}
  .porcentaje-7{background-image: linear-gradient(90deg, var(--color-porcentaje) 7%, white 0%);}
  .porcentaje-8{background-image: linear-gradient(90deg, var(--color-porcentaje) 8%, white 0%);}
  .porcentaje-9{background-image: linear-gradient(90deg, var(--color-porcentaje) 9%, white 0%);}
  .porcentaje-10{background-image: linear-gradient(90deg, var(--color-porcentaje) 10%, white 0%);}
  .porcentaje-11{background-image: linear-gradient(90deg, var(--color-porcentaje) 11%, white 0%);}
  .porcentaje-12{background-image: linear-gradient(90deg, var(--color-porcentaje) 12%, white 0%);}
  .porcentaje-13{background-image: linear-gradient(90deg, var(--color-porcentaje) 13%, white 0%);}
  .porcentaje-14{background-image: linear-gradient(90deg, var(--color-porcentaje) 14%, white 0%);}
  .porcentaje-15{background-image: linear-gradient(90deg, var(--color-porcentaje) 15%, white 0%);}
  .porcentaje-16{background-image: linear-gradient(90deg, var(--color-porcentaje) 16%, white 0%);}
  .porcentaje-17{background-image: linear-gradient(90deg, var(--color-porcentaje) 17%, white 0%);}
  .porcentaje-18{background-image: linear-gradient(90deg, var(--color-porcentaje) 18%, white 0%);}
  .porcentaje-19{background-image: linear-gradient(90deg, var(--color-porcentaje) 19%, white 0%);}
  .porcentaje-20{background-image: linear-gradient(90deg, var(--color-porcentaje) 20%, white 0%);}
  .porcentaje-21{background-image: linear-gradient(90deg, var(--color-porcentaje) 21%, white 0%);}
  .porcentaje-22{background-image: linear-gradient(90deg, var(--color-porcentaje) 22%, white 0%);}
  .porcentaje-23{background-image: linear-gradient(90deg, var(--color-porcentaje) 23%, white 0%);}
  .porcentaje-24{background-image: linear-gradient(90deg, var(--color-porcentaje) 24%, white 0%);}
  .porcentaje-25{background-image: linear-gradient(90deg, var(--color-porcentaje) 25%, white 0%);}
  .porcentaje-26{background-image: linear-gradient(90deg, var(--color-porcentaje) 26%, white 0%);}
  .porcentaje-27{background-image: linear-gradient(90deg, var(--color-porcentaje) 27%, white 0%);}
  .porcentaje-28{background-image: linear-gradient(90deg, var(--color-porcentaje) 28%, white 0%);}
  .porcentaje-29{background-image: linear-gradient(90deg, var(--color-porcentaje) 29%, white 0%);}
  .porcentaje-30{background-image: linear-gradient(90deg, var(--color-porcentaje) 30%, white 0%);}
  .porcentaje-31{background-image: linear-gradient(90deg, var(--color-porcentaje) 31%, white 0%);}
  .porcentaje-32{background-image: linear-gradient(90deg, var(--color-porcentaje) 32%, white 0%);}
  .porcentaje-33{background-image: linear-gradient(90deg, var(--color-porcentaje) 33%, white 0%);}
  .porcentaje-34{background-image: linear-gradient(90deg, var(--color-porcentaje) 34%, white 0%);}
  .porcentaje-35{background-image: linear-gradient(90deg, var(--color-porcentaje) 35%, white 0%);}
  .porcentaje-36{background-image: linear-gradient(90deg, var(--color-porcentaje) 36%, white 0%);}
  .porcentaje-37{background-image: linear-gradient(90deg, var(--color-porcentaje) 37%, white 0%);}
  .porcentaje-38{background-image: linear-gradient(90deg, var(--color-porcentaje) 38%, white 0%);}
  .porcentaje-39{background-image: linear-gradient(90deg, var(--color-porcentaje) 39%, white 0%);}
  .porcentaje-40{background-image: linear-gradient(90deg, var(--color-porcentaje) 40%, white 0%);}
  .porcentaje-41{background-image: linear-gradient(90deg, var(--color-porcentaje) 41%, white 0%);}
  .porcentaje-42{background-image: linear-gradient(90deg, var(--color-porcentaje) 42%, white 0%);}
  .porcentaje-43{background-image: linear-gradient(90deg, var(--color-porcentaje) 43%, white 0%);}
  .porcentaje-44{background-image: linear-gradient(90deg, var(--color-porcentaje) 44%, white 0%);}
  .porcentaje-45{background-image: linear-gradient(90deg, var(--color-porcentaje) 45%, white 0%);}
  .porcentaje-46{background-image: linear-gradient(90deg, var(--color-porcentaje) 46%, white 0%);}
  .porcentaje-47{background-image: linear-gradient(90deg, var(--color-porcentaje) 47%, white 0%);}
  .porcentaje-48{background-image: linear-gradient(90deg, var(--color-porcentaje) 48%, white 0%);}
  .porcentaje-49{background-image: linear-gradient(90deg, var(--color-porcentaje) 49%, white 0%);}
  .porcentaje-50{background-image: linear-gradient(90deg, var(--color-porcentaje) 50%, white 0%);}
  .porcentaje-51{background-image: linear-gradient(90deg, var(--color-porcentaje) 51%, white 0%);}
  .porcentaje-52{background-image: linear-gradient(90deg, var(--color-porcentaje) 52%, white 0%);}
  .porcentaje-53{background-image: linear-gradient(90deg, var(--color-porcentaje) 53%, white 0%);}
  .porcentaje-54{background-image: linear-gradient(90deg, var(--color-porcentaje) 54%, white 0%);}
  .porcentaje-55{background-image: linear-gradient(90deg, var(--color-porcentaje) 55%, white 0%);}
  .porcentaje-56{background-image: linear-gradient(90deg, var(--color-porcentaje) 56%, white 0%);}
  .porcentaje-57{background-image: linear-gradient(90deg, var(--color-porcentaje) 57%, white 0%);}
  .porcentaje-58{background-image: linear-gradient(90deg, var(--color-porcentaje) 58%, white 0%);}
  .porcentaje-59{background-image: linear-gradient(90deg, var(--color-porcentaje) 59%, white 0%);}
  .porcentaje-60{background-image: linear-gradient(90deg, var(--color-porcentaje) 60%, white 0%);}
  .porcentaje-61{background-image: linear-gradient(90deg, var(--color-porcentaje) 61%, white 0%);}
  .porcentaje-62{background-image: linear-gradient(90deg, var(--color-porcentaje) 62%, white 0%);}
  .porcentaje-63{background-image: linear-gradient(90deg, var(--color-porcentaje) 63%, white 0%);}
  .porcentaje-64{background-image: linear-gradient(90deg, var(--color-porcentaje) 64%, white 0%);}
  .porcentaje-65{background-image: linear-gradient(90deg, var(--color-porcentaje) 65%, white 0%);}
  .porcentaje-66{background-image: linear-gradient(90deg, var(--color-porcentaje) 66%, white 0%);}
  .porcentaje-67{background-image: linear-gradient(90deg, var(--color-porcentaje) 67%, white 0%);}
  .porcentaje-68{background-image: linear-gradient(90deg, var(--color-porcentaje) 68%, white 0%);}
  .porcentaje-69{background-image: linear-gradient(90deg, var(--color-porcentaje) 69%, white 0%);}
  .porcentaje-70{background-image: linear-gradient(90deg, var(--color-porcentaje) 70%, white 0%);}
  .porcentaje-71{background-image: linear-gradient(90deg, var(--color-porcentaje) 71%, white 0%);}
  .porcentaje-72{background-image: linear-gradient(90deg, var(--color-porcentaje) 72%, white 0%);}
  .porcentaje-73{background-image: linear-gradient(90deg, var(--color-porcentaje) 73%, white 0%);}
  .porcentaje-74{background-image: linear-gradient(90deg, var(--color-porcentaje) 74%, white 0%);}
  .porcentaje-75{background-image: linear-gradient(90deg, var(--color-porcentaje) 75%, white 0%);}
  .porcentaje-76{background-image: linear-gradient(90deg, var(--color-porcentaje) 76%, white 0%);}
  .porcentaje-77{background-image: linear-gradient(90deg, var(--color-porcentaje) 77%, white 0%);}
  .porcentaje-78{background-image: linear-gradient(90deg, var(--color-porcentaje) 78%, white 0%);}
  .porcentaje-79{background-image: linear-gradient(90deg, var(--color-porcentaje) 79%, white 0%);}
  .porcentaje-80{background-image: linear-gradient(90deg, var(--color-porcentaje) 80%, white 0%);}
  .porcentaje-81{background-image: linear-gradient(90deg, var(--color-porcentaje) 81%, white 0%);}
  .porcentaje-82{background-image: linear-gradient(90deg, var(--color-porcentaje) 82%, white 0%);}
  .porcentaje-83{background-image: linear-gradient(90deg, var(--color-porcentaje) 83%, white 0%);}
  .porcentaje-84{background-image: linear-gradient(90deg, var(--color-porcentaje) 84%, white 0%);}
  .porcentaje-85{background-image: linear-gradient(90deg, var(--color-porcentaje) 85%, white 0%);}
  .porcentaje-86{background-image: linear-gradient(90deg, var(--color-porcentaje) 86%, white 0%);}
  .porcentaje-87{background-image: linear-gradient(90deg, var(--color-porcentaje) 87%, white 0%);}
  .porcentaje-88{background-image: linear-gradient(90deg, var(--color-porcentaje) 88%, white 0%);}
  .porcentaje-89{background-image: linear-gradient(90deg, var(--color-porcentaje) 89%, white 0%);}
  .porcentaje-90{background-image: linear-gradient(90deg, var(--color-porcentaje) 90%, white 0%);}
  .porcentaje-91{background-image: linear-gradient(90deg, var(--color-porcentaje) 91%, white 0%);}
  .porcentaje-92{background-image: linear-gradient(90deg, var(--color-porcentaje) 92%, white 0%);}
  .porcentaje-93{background-image: linear-gradient(90deg, var(--color-porcentaje) 93%, white 0%);}
  .porcentaje-94{background-image: linear-gradient(90deg, var(--color-porcentaje) 94%, white 0%);}
  .porcentaje-95{background-image: linear-gradient(90deg, var(--color-porcentaje) 95%, white 0%);}
  .porcentaje-96{background-image: linear-gradient(90deg, var(--color-porcentaje) 96%, white 0%);}
  .porcentaje-97{background-image: linear-gradient(90deg, var(--color-porcentaje) 97%, white 0%);}
  .porcentaje-98{background-image: linear-gradient(90deg, var(--color-porcentaje) 98%, white 0%);}
  .porcentaje-99{background-image: linear-gradient(90deg, var(--color-porcentaje) 99%, white 0%);}
  .porcentaje-100{background-image: linear-gradient(90deg, var(--color-porcentaje) 100%, white 0%);}

  


</style>

<!-- markup (zero or more items) goes here -->