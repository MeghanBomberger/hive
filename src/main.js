import Vue from 'vue'
import VueLogger from 'vuejs-logger'
import App from './App.vue'
import router from "./router"

Vue.config.productionTip = false

const isProduction = false //placeholder

const options = { 
  isEnabled: true,
  logLevel: isProduction ? 'error' : 'debug',
  stringifyArguments: false,
  showLogLevel: false,
  showMethodName: true,
  separator: '|',
  showConsoleColors: true
}

Vue.use(VueLogger, options);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
