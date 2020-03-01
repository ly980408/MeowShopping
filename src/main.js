import Vue from 'vue'
import App from './App.vue'
import store from './store'

import Vant from 'vant'
import 'vant/lib/index.css'
import router from './router'

Vue.use(Vant)

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
