let gantt = new Gantt("proyecto1","compania",new Date().getTime(),0)

let fase1 = gantt.AgregarFase("fase1")
let fase2 = gantt.AgregarFase("fase2")
let fase3 = gantt.AgregarFase("fase3")
let fase4 = gantt.AgregarFase("fase4")

let tarea1Fase1 = fase1.AgregarTarea("tarea1-fase1","Carlos",0,new Date().getTime()+1000,new Date().getTime()+2000)
fase2.AgregarTarea("tarea1-fase2","Matias",0,new Date().getTime()+2000,new Date().getTime()+4000)

console.log(gantt)

setTimeout(() => {
    
    fase1.ActualizarTarea(tarea1Fase1.Id,{nombre:"tarea1Fase1"})
    console.log(gantt)

}, 6000);


console.log(gantt.CantidadFases())
