import Vue from 'vue'
import Router from 'vue-router'
// import GifSearch from '@/components/GifSearch'
// import About from '@/components/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'GifSearch',
    //   component: GifSearch
    // },
    {
      path: '/about',
      name: 'About',
      component (resolve) {
        require(['@/components/About'], resolve)
      }
    } // ,
    // {
    //  path: '/about',
    //  name: 'About',
    //  component: About // if you don't use component resolve require, import above and do this
    // }
  ]
})
