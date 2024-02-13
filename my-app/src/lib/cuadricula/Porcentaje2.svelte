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
    let ID=setIDS()
    numRow=ID.row
    numColumn=ID.column
    let date = new Date()
    date.setDate(date.getDate() - date.getDay() + 1);
    date.setDate(date.getDate() + ($ubicacionWeek*7) ) 
    date.setDate(date.getDate() + indexDay2+($ubicacionWeek*7)+indexNum*7)
    dateShow = date.getDate().toString()
    
    

    for (let index = 0; index < $Phases.length; index++) {
      const {tareas} = $Phases[index];
      const [tarea1 , tarea2 , tarea3] = tareas
      if ( tarea1.inicio.getTime() <= date.getTime() && tarea1.fin.getTime() >= date.getTime() && tarea1.id == indexDay3) {
        isTask = "noni"
        console.log(tarea1.id)
        break
      }
      if ( tarea2.inicio.getTime() <= date.getTime() && tarea2.fin.getTime() >= date.getTime() && tarea2.id == indexDay3) {
        isTask = "noni"
        console.log(tarea1.id)
        break
      }
      if ( tarea3.inicio.getTime() <= date.getTime() && tarea3.fin.getTime() >= date.getTime() && tarea3.id == indexDay3) {
        isTask = "noni"
        console.log(tarea1.id)
        break
      }
     
    }
   
  })
</script>
<div class="border-right {borderLeftStyle} {isTask}">{indexDay3}</div>
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
</style>