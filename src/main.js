import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from './plugins/routes'

Vue.config.productionTip = false

new Vue({
  router: VueRouter,
  vuetify,
  render: h => h(App)
}).$mount('#app')
