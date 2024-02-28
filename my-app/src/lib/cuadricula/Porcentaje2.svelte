<script>
    import { onMount } from "svelte";
    import {ubicacionWeek} from "../../store/Calendari"
    import {Phases} from "../../store/Phases"
    import Tarea from "../../class/Tarea";
    export let borderLeft=false
    let borderLeftStyle=""
    if (borderLeft) {
        borderLeftStyle="border-left"  
    } 

    let fechaInicio = 0
    let fechaFin = 0
    let cantidadDias = 0 
    let porcentajeUnidad = 0
    let fechaActual = 0
    let borderToday= " "

    let numColumn
    let numRow  
    export let setIDS
    export let indexDay = 0
    let dayText = "L"
    export let indexNum = 0
    let indexDay2 = 0
    let dateShow = " "
    let indexDay3 = 0

    if (indexDay==0 || indexDay%7==0 ){ 
      dayText="Lu"
      indexDay2 = 0
    }
    if (indexDay==1 || (indexDay -1)%7==0) {
      dayText="Ma"
      indexDay2 = 1
    }
    if (indexDay==2 || (indexDay -2)%7==0) {
      dayText="Mi"
      indexDay2 = 2
    }
    if (indexDay==3 || (indexDay -3)%7==0) {
      dayText="Ju"
      indexDay2 = 3
    }
    if (indexDay==4 || (indexDay -4)%7==0) {
      dayText="Vi"
      indexDay2 = 4
    }
    if (indexDay==5 || (indexDay -5)%7==0) {
      dayText="Sa"
      indexDay2 = 5
    }
    if (indexDay==6 || (indexDay -6)%7==0) {
      dayText="Do"
      indexDay2 = 6
    }

    indexDay3 = indexDay - indexDay2

    let isTask = " "

  onMount(() => {
    updateTarea()
  })
  function updateTarea() {
    let ID=setIDS()
    numRow=ID.row
    numColumn=ID.column
    let date = new Date()
    date.setDate(date.getDate() - date.getDay() + 1);
    date.setDate(date.getDate() + ($ubicacionWeek*7) ) 
    date.setDate(date.getDate() + indexDay2+($ubicacionWeek*7)+indexNum*7)
    dateShow = date.getDate().toString()

    let date2  = new Date()
    if (date2.getDate() ==  date.getDate()) {
      borderToday= "borderToday"
    }
    
    for (let index = 0; index < $Phases.length; index++) {
      const {tareas} = $Phases[index];
      for (let index2 = 0; index2 < tareas.length; index2++) {
        const tarea = tareas[index2];
        if ( tarea.inicio.getTime() <= date.getTime() && tarea.fin.getTime() >= date.getTime() && tarea.id == indexDay3) {
          isTask = "noni"
          fechaInicio= tarea.inicio.getTime()
          fechaFin=  tarea.fin.getTime()
          fechaActual = Math.round((date.getTime() - fechaInicio)/1000/60/60/24)+1
          cantidadDias =Math.round((fechaFin - fechaInicio)/1000/60/60/24)
          porcentajeUnidad = Math.round((100 / cantidadDias))*fechaActual
          if (tarea.progreso>= porcentajeUnidad) {
            isTask = "ready"
          }
          console.log(tarea.id)
          break
        }
      }
    } 
  }
  $:{
    let ID=setIDS()
    numRow=ID.row
    numColumn=ID.column
    let date = new Date()
    date.setDate(date.getDate() - date.getDay() + 1);
    date.setDate(date.getDate() + ($ubicacionWeek*7) ) 
    date.setDate(date.getDate() + indexDay2+($ubicacionWeek*7)+indexNum*7)
    dateShow = date.getDate().toString()

    let date2  = new Date()
    if (date2.getDate() ==  date.getDate()) {
      borderToday= "borderToday"
    }
    
    for (let index = 0; index < $Phases.length; index++) {
      const {tareas} = $Phases[index];
      for (let index2 = 0; index2 < tareas.length; index2++) {
        const tarea = tareas[index2];
        if ( tarea.inicio.getTime() <= date.getTime() && tarea.fin.getTime() >= date.getTime() && tarea.id == indexDay3) {
          isTask = "noni"
          fechaInicio= tarea.inicio.getTime()
          fechaFin=  tarea.fin.getTime()
          fechaActual = Math.round((date.getTime() - fechaInicio)/1000/60/60/24)+1
          cantidadDias =Math.round((fechaFin - fechaInicio)/1000/60/60/24)+1
          porcentajeUnidad = Math.round((100 / cantidadDias))*fechaActual
          if (tarea.progreso>= porcentajeUnidad) {
            isTask = "ready"
          }
          console.log(tarea.id)
          break
        }
      }
    } 
  }
</script>
<div class="border-right {borderLeftStyle} {isTask} {borderToday}">‎</div>
<!-- <div class="border-right {borderLeftStyle}">‎</div> -->

<style>
      .border-right{
    border-right:1px rgba(0, 0, 0, 0.10) solid;   
}
.border-left{
  border-left: 1px rgba(0, 0, 0, 0.10) solid;
}
.noni{
  background-color: rgb(0, 251, 255);
}
.ready{
  background-color: blue;
}
.borderToday{
  border-left:1px solid red ;
  border-right:1px solid red ;
}
</style>