<template>
  <div>
    <h1>Orden #123456</h1>
    <div>
      <b-tabs content-class="mt-3">
        <b-tab title="General" active
          ><div class="row">
            <div class="col-6">
              <p>N° orden</p>
              <p>Monto Orden</p>
              <p>Cant.Productos</p>
              <p>Fecha Entrega</p>
              <p>Vendedor</p>
              <p>Estado</p>
              <p>Avance Preparacion</p>
            </div>
            <div class="col-6">
              <p>{{ orden.num_orden }}</p>
              <p>{{ orden.monto }}</p>
              <p>{{ orden.cant_productos }}</p>
              <p>{{ orden.fecha_entrega }}</p>
              <p>{{ orden.vendedor }}</p>
              <p>{{ orden.estado }}</p>
              <p>{{ orden.avance_preparacion }}</p>
            </div>
          </div></b-tab
        >
        <b-tab title="Datos Cliente"
          ><div class="row">
            <div class="col-6">
              <p>Nombre</p>
              <p>Rut</p>
              <p>Direccion Entrega</p>
              <p>Contacto</p>
              <p>Fono</p>
              <p>Email</p>
            </div>
            <div class="col-6">
              <p>{{cliente.nombre}}</p>
              <p>{{cliente.rut_n+'-'+cliente.rut_dv}}</p>
              <p>{{cliente.direccion_entrega}}</p>
              <p>{{cliente.contacto}}</p>
              <p>{{cliente.fono}}</p>
              <p>{{cliente.email}}</p>
            </div></div
        ></b-tab>
        <b-tab title="Productos"><b-table striped hover :items="productos" :fields="fields"></b-table></b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "DetalleOrden",
  data() {
      return {
          fields:[
              {key: 'cod_prod', label:'Codigo del producto'},
              {key: 'descripcion', label:'Descripcion'},
              {key: 'precio_unit', label:'Precio Unitario'},
              {key: 'cant_pedido', label:'Cantidad de pedido'},
              {key: 'cant_pickeado', label:'Cantidad Pickeado'}
          ]
      }
  },
  computed: {
    ...mapState(["cliente", "orden", "productos"]),
  },
  created() {
    this.$store.dispatch("actionGetDetalleOrden");
  },
};
</script>
