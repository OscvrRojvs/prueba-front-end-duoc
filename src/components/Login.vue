<template>
  <div>
    <b-row class="mt-5" align-v="center">
      <b-col
        ><p><strong>username:</strong> usuario@classicmodels.com
          <strong>password:</strong> 123 
        </p></b-col
      >
      <b-col
        ><div>
          <b-card class="text-center">
            <h1>Login Usuarios</h1>
            <div class="m-4">
              <label for="input-email">Ingrese su Email</label><br />
              <input id="input-email" type="email" v-model="form.email" />
            </div>
            <div class="m-4">
              <label for="input-password">Ingrese su Contraseña</label><br />
              <input
                id="input-passwrod"
                type="password"
                v-model="form.password"
              />
            </div>
            <div class="my-3">
              <b-card-text>
                Ingrese sus crendeciales de usuario
              </b-card-text>
            </div>
            <b-button block variant="primary" @click="logIn(form)"
              >Iniciar Sesion</b-button
            ></b-card
          >
        </div></b-col
      >
      <b-col></b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Auth",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    logIn(value) {
      let payload = value;
      this.$store.dispatch('actionPostLogIn', payload)

    },
  },
};
</script>
