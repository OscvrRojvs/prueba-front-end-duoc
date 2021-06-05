<template>
  <div>
    <h1>Monitor de Ordenes</h1>
    <div>
      <b-card class="text-left">
        <b-row>
          <b-col
            ><b-form-select
              v-model="selected1"
              :options="oficina"
            ></b-form-select
          ></b-col>
          <b-col
            ><b-form-select
              v-model="selected2"
              :options="estado"
            ></b-form-select
          ></b-col>
          <b-col
            ><b-form-datepicker v-model="fecha1"></b-form-datepicker
          ></b-col>
          <b-col
            ><b-form-datepicker v-model="fecha2"></b-form-datepicker
          ></b-col>
        </b-row>
      </b-card>
    </div>
    <br />
    <div>
      <b-table striped hover :items="monitor_ordenes" :fields="fields">
        <template #cell(detalle)="data">
          <b-button variant="primary" @click="verDetalle(data.item)"
            >Ver Detalle</b-button
          >
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Ordenes",
  data() {
    return {
      fields: [
        { key: "num_orden", label: "Nro Orden" },
        { key: "cliente", label: "Cliente" },
        { key: "monto", label: "Monto Orden" },
        { key: "cant_productos", label: "Cantidad de productos" },
        { key: "fecha_entrega", label: "Fecha de entrega" },
        { key: "avance_preparacion", label: "Avance de preparacion" },
        { key: "estado", label: "Estado" },
        { key: "detalle", label: "Detalle" },
      ],
      selected1: null,
      selected2: null,
      fecha1: null,
      fecha2: null,
      oficina: [
        { value: null, text: "Seleccione" },
        { value: "a", text: "Norte" },
        { value: "b", text: "Centro" },
        { value: "d", text: "Sur" },
      ],
      estado: [
        { value: null, text: "Seleccione..." },
        { value: "a", text: "Ingresado" },
        { value: "b", text: "Preparacion" },
        { value: "d", text: "Entregado" },
      ],
    };
  },
  computed: {
    ...mapState(["monitor_ordenes"]),
  },
  created() {
    this.$store.dispatch("actionGetMonitorOrdenes");
  },
  methods: {
    verDetalle(value) {
      this.$router.push({name: 'DetalleOrdenes'})
    },
  },
};
</script>
