import Vue from 'vue'
import App from './App.vue'

import router from './router' //import router.js into main.js
new Vue({
  render: h => h(App),
  
  router //added router instance
}).$mount('#app')

