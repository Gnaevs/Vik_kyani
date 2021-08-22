<template>
  <v-app id="app">
    <v-app-bar app color="#286bb2" dark>
      <router-link class="par" to="/home">
        <v-btn>Inicio</v-btn>
      </router-link>

      <router-link class="par" to="/productos">
        <v-btn>Productos</v-btn>
      </router-link>

      <router-link class="par" to="/contacto">
        <v-btn class="nav-btn">Contacto</v-btn>
      </router-link>

      <router-link class="par" to="/testimonio">
        <v-btn class="nav-btn">Testimonio</v-btn>
      </router-link>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest">
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-card>
      <transition name="fade" mode="out-in">
      <router-view />    
      </transition>
    </v-card>
    
  </v-app>
  
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  margin: 45px;
}

.par {
  text-decoration: none;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.nav-btn{
  height: 100%;
  width: 100%;
  color:white;
}
.test{
  background-color: red;
}
</style>
