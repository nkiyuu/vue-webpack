
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import config from './config'
import * as VueGoogleMaps from 'vue2-google-maps'
//
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import BootstrapVue from 'bootstrap-vue'
// Vue.use(BootstrapVue)

import Vuetify from 'vuetify'
Vue.use(Vuetify)
import('/Users/yayawatanabe/node_modules/vuetify/dist/vuetify.min.css')

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: config.GOOGLEMAP_API,
    libraries: 'places' // This is required if you use the Autocomplete plugin
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
