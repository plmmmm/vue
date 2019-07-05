import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './plugins/axios'

import router from './plugins/router'

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)
// import '@vant/touch-emulator';


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


import store from './plugins/store'

let user = localStorage.getItem('vue_user');
user && store.commit('USER',JSON.parse(user))

new Vue({

  router,
  render: h => h(App),
  store
}).$mount('#app')





