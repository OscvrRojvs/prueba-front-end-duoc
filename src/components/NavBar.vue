<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item disabled>Company</b-nav-item>
          <b-nav-item to="/home">Home</b-nav-item>
          <b-nav-item to="/ordenes">Ordenes</b-nav-item>
          <b-nav-item disabled>Inventario</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item disabled>Profile</b-nav-item>
          <b-nav-item href="/">Log Out</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>
