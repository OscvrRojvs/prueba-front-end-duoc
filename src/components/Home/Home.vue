<template>
  <div>
    <div class="text-left"><h1>Home</h1></div>

    <b-jumbotron
      bg-variant="default"
      text-variant="black"
      border-variant="dark"
    >
      <template #header>Vitrina</template>
      <hr class="my-4" />
      <h2 class="text-left">Bienvenido</h2>
      <p class="text-left">
        Bienvenido al sistema de Ordenes e inventario de ClassicModels
      </p>
    </b-jumbotron>
    <div class="row">
      <div class="col-6">
        <b-card class="text-center"
          ><div>
            <h3>{{ kpis[0].nombre }}</h3>
            <div class="row">
              <div class="col-4">
                <h4></h4>
                <p></p>
              </div>
              <div class="col-4">
                <h4>{{ kpis[0].entregadas }}</h4>
                <p>Ordenes entregadas</p>
              </div>
              <div class="col-4">
                <h4>{{ kpis[0].pendientes }}</h4>
                <p>Ordenes Pendientes</p>
              </div>
            </div>
          </div></b-card
        >
      </div>
      <div class="col-6">
        <b-card class="text-center"
          ><div>
            <h3>{{ kpis[1].nombre }}</h3>
            <div class="row">
              <div class="col-4">
                <h4></h4>
                <p></p>
              </div>
              <div class="col-4">
                <h4>{{ kpis[1].totales }}</h4>
                <p>Ordenes Totales</p>
              </div>
              <div class="col-4">
                <h4>{{ kpis[1].atrasadas }}</h4>
                <p>Ordenes Atrasadas</p>
              </div>
            </div>
          </div></b-card
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapState(["kpis", "ultimas_devoluciones", "ultimas_ordenes"]),
  },
  created() {
    this.$store.dispatch("actionGetDashboard");
  },
};
</script>
