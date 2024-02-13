import { writable } from "svelte/store";

let currentDate = new Date()
let nextDate = new Date()
let currentDate2 = new Date()
let nextDate2 = new Date()
let currentDate3 = new Date()
let nextDate3 = new Date()

nextDate.setDate(nextDate.getDate()+3)
nextDate2.setDate(nextDate2.getDate()+6)
nextDate3.setDate(nextDate3.getDate()+9)
let idRow =0
const createId =() =>{ return idRow += 7 }

export const Phases = writable([{
    name:"Inicio",
    tareas:[{
        name:"Ideas",
        encargado:"Darwin",
        progreso: 80,
        inicio:currentDate,
        fin:nextDate,
        id:7 
    },

    {
        name:"Ideas2",
        encargado:"Darwin2",
        progreso: 30,
        inicio:currentDate2,
        fin:nextDate2,
        id:14
    },

    {
        name:"Ideas3",
        encargado:"Darwin3",
        progreso: 60,
        inicio:currentDate3,
        fin:nextDate3,
        id:21   
    }]
},

{
    name:"Fin",
    tareas:[{
        name:"Ideas",
        encargado:"Darwin",
        progreso: 0,
        inicio:currentDate,
        fin:nextDate,
        id:35     
    },

    {
        name:"Ideas2",
        encargado:"Darwin2",
        progreso: 0,
        inicio:currentDate2,
        fin:nextDate2,
        id:42
    },

    {
        name:"Ideas3",
        encargado:"Darwin3",
        progreso: 0,
        inicio:currentDate3,
        fin:nextDate3,
        id:49   
    }]
}])