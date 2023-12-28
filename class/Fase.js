class Fase{
    constructor(pNombre){
        this.Id = new Date().getTime()
        this.name = pNombre
        this.tareas = []
    }


    ActualizarFase(pName){
        this.name = pNombre
    }


    CantidadTareas(){
        return this.tareas.length + 1 
    }

    // CRUD Tareas

    AgregarTarea(nombre,propietario,porcentaje,fechaInicio,fechaFin){
        let nuevaTarea = new Tarea(nombre,propietario,porcentaje,fechaInicio,fechaFin)
        this.tareas.push(nuevaTarea)
        return nuevaTarea
    }

    ObtenerTarea(Id){
        let index = this.tareas.findIndex(t => t.Id == Id )
        if(index == -1) return -1
        return this.tareas[index]
    }

    ActualizarTarea(Id,opciones){
        let index = this.tareas.findIndex(t => t.Id == Id )
        if(index == -1) return -1
        return this.tareas[index].ActualizarTarea(opciones)
    }

    EliminarTarea(Id){
        let index = this.tareas.findIndex(t => t.Id == Id )
        if(index == -1) return -1
        this.tareas.splice(index,1)
        return 1
    }


}

