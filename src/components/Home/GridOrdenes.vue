<template>
  <div>
      <div class="row">
          <div class="col-6"><b-table striped hover :items="ultimas_ordenes" :fields="fields"></b-table></div>
          <div class="col-6"><b-table striped hover :items="ultimas_devoluciones" :fields="fields"></b-table></div>
      </div>
    
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "GridOrdenes",
  data() {
    return {
       fields: [
           {key: 'num_orden', label: 'N° Orden'},
           {key: 'cliente', label: 'Cliente'},
           {key: 'fecha_entrega', label: 'Fecha de Entrga'},
           {key: 'estado', label: 'Estado'}
       ] 
    };
  },
  computed: {
      ...mapState(['ultimas_ordenes', 'ultimas_devoluciones'])
  }
};
</script>
