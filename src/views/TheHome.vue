<template>
  <div class="home">
    <b-container>
      <home />
      <grid-ordenes />
    </b-container>
  </div>
</template>

<script>
import Home from "../components/Home/Home.vue";
import GridOrdenes from "../components/Home/GridOrdenes.vue";
export default {
  name: "TheHome",
  components: { Home, GridOrdenes },
};
</script>
