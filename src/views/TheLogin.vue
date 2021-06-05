<template>
  <div class="login">
    <b-container>
      <login />
    </b-container>
  </div>
</template>

<script>
import Login from "../components/Login.vue";

export default {
  components: { Login },
  name: "Home",
};
</script>
