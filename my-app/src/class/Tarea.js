class Tarea{

    constructor(pNombre,pPrpietario,pPorcentaje,pFechaInicio,pFechaFin){
        this.Id = new Date().getTime()
        this.nombre = pNombre
        this.propietario = pPrpietario
        this.porcentaje = pPorcentaje
        this.fechaInicio = pFechaInicio
        this.fechaFin = pFechaFin
    }

    ActualizarTarea(options){

       let keys =  Object.keys(options)

       let result = -1

       for (let index = 0; index < keys.length; index++) {
        const key = keys[index];
        
        switch (key) {
            case 'nombre':
                this.nombre = options[key]
                result = 1
                break;
            case 'propietario':
                this.propietario = options[key]
                result = 1
                break;
            case 'porcentaje':
                this.porcentaje = options[key]
                result = 1
                break;
            case 'fechaInicio':
                this.fechaInicio = options[key]
                result = 1
                break;
            case 'fechaFin':
                this.fechaFin = options[key]
                result = 1
                break;
        }

       }
       return result;
    }
} 
export default Tarea