// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import GifSearch from '@/components/GifSearch'
import router from './router'
import VueRequests from 'vue-requests'

Vue.use(VueRequests, {
  root: 'https://api.giphy.com/v1/gifs/search'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App, GifSearch }
})
