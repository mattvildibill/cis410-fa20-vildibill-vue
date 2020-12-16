import Vue from 'vue'
import App from './App.vue'
import router from './routes.js'
import Axios from 'axios'
import store from './store'
Axios.defaults.baseURL = "https://cis410-fa20vildibill.azurewebsites.net";

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
