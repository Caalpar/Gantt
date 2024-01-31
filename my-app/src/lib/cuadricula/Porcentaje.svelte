<script>
  // import Gantt from '../../../class/Gantt'

  let porcentajeIn = 0 ;
  
  const maximo =100;
  
  function aumentarPorcentaje() {
    if (porcentajeIn < maximo ) {
     porcentajeIn += 1; 
    }
  }
  
  function disminuirPorcentaje() {
    if (porcentajeIn > 0 ) {
     porcentajeIn -= 1; 
    }
  }

  function setPorcentaje(event) {
    // Puedes ajustar el valor de multiplicación según tus necesidades
    porcentajeIn = Math.round((event.clientX / event.currentTarget.offsetWidth) * maximo);
  }

</script>

<div class="lot" on:click={setPorcentaje}>
  <div class="mac" style="width: {porcentajeIn}%;"></div>
</div>

<button on:click={aumentarPorcentaje}>Aumentar</button>
<button on:click={disminuirPorcentaje}>Disminuir</button>

<style>

.lot{
  display: block;
  height: 20px;
  width: 500px;
  border: 1px solid;
  border-color: rgb(0, 0, 0);

}

.mac{
    background-color: black;
    height: 100%;
}

</style>
