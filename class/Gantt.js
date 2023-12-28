class Gantt{
    constructor(pNombreProyecto,pNombreCompania,pFechaInicio,pProgreso){
        this.nombreProyecto = pNombreProyecto
        this.nombreCompania = pNombreCompania
        this.fechaInicio = pFechaInicio
        this.progreso = pProgreso
        this.fases = []
    }

    ActualizrProyecto(progreso){
        this.progreso = progreso
    }

    CantidadFases(){
       let count = 0
       for (let index = 0; index < this.fases.length; index++) {
        const fase = this.fases[index];
        count += fase.CantidadTareas()
       }
       return count
    }

    // CURD Fases

    AgregarFase(nombreFase){
       let nuevaFase = new Fase(nombreFase)
       this.fases.push(nuevaFase)
       return nuevaFase 
    }

    ObtenerFase(Id){
        let index = this.fases.findIndex(t => t.Id == Id )
        if(index == -1) return -1
        return this.fases[index]
    }

    ActualizarFase(Id,nombreFase){
        let index = this.fases.findIndex(t => t.Id == Id )
        if(index == -1) return -1
        return this.fases[index].ActualizarFase(nombreFase)
    }

    EliminarTarea(Id){
        let index = this.fases.findIndex(t => t.Id == Id )
        if(index == -1) return -1
        this.fases.splice(index,1)
        return 1
    }

}